// Serverless API function for Fellows data
import { google } from 'googleapis';

// Simple in-memory cache implementation
const cache = {
  data: new Map(),
  
  // Get data from cache with key
  get: function(key) {
    if (!this.data.has(key)) {
      return null;
    }
    
    const cachedItem = this.data.get(key);
    
    // Check if the cached data has expired
    if (Date.now() > cachedItem.expiresAt) {
      this.data.delete(key);
      return null;
    }
    
    console.log(`Cache hit for key: ${key}`);
    return cachedItem.value;
  },
  
  // Set data in cache with key and TTL (time to live) in seconds
  set: function(key, value, ttlSeconds) {
    const expiresAt = Date.now() + (ttlSeconds * 1000);
    this.data.set(key, { value, expiresAt });
    console.log(`Cached data for key: ${key}, expires in ${ttlSeconds} seconds`);
  },
  
  // Clear the entire cache or a specific key
  clear: function(key) {
    if (key) {
      this.data.delete(key);
      console.log(`Cleared cache for key: ${key}`);
    } else {
      this.data.clear();
      console.log('Cleared entire cache');
    }
  }
};

// Initialize Google Sheets API
async function initGoogleSheetsAPI() {
  try {
    let auth;
    
    // If we have service account credentials as JSON string in env var
    if (process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) {
      try {
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
        auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });
        console.log('Authenticated with service account from environment variable');
      } catch (parseError) {
        console.error('Error parsing service account credentials:', parseError);
        throw new Error('Invalid service account credentials format');
      }
    } 
    // If no service account credentials, try using API key
    else if (process.env.GOOGLE_SHEETS_API_KEY) {
      auth = process.env.GOOGLE_SHEETS_API_KEY;
      console.log('Using API key authentication');
    } else {
      throw new Error('No Google Sheets authentication method provided in environment variables');
    }
    
    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets API:', error);
    throw error;
  }
};

// Handler function
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!sheetId) {
      return res.status(400).json({ 
        error: 'Configuration error', 
        message: 'Google Sheets ID not defined in environment variables' 
      });
    }
    
    // Always use the Fellows sheet
    const sheetName = 'Fellows';
    
    // Get range if specified in query params
    const range = req.query.range;
    const rangeDef = range ? `${sheetName}!${range}` : sheetName;
    
    // Set the cache key based on the sheet ID and range
    const cacheKey = `fellows-${sheetId}-${rangeDef}`;
    
    // Set cache TTL from environment variable or default to 10 minutes (600 seconds)
    const cacheTTL = parseInt(process.env.CACHE_TTL_SECONDS || '600', 10);
    
    // Check if force refresh is requested
    const forceRefresh = req.query.refresh === 'true';
    
    // If force refresh, clear the cache for this key
    if (forceRefresh) {
      cache.clear(cacheKey);
    }
    
    // Try to get data from cache first
    let simplifiedData = cache.get(cacheKey);
    
    // If not in cache or force refresh, fetch from Google Sheets
    if (!simplifiedData) {
      console.log(`Cache miss for ${cacheKey}, fetching from Google Sheets API`);
      
      const sheets = await initGoogleSheetsAPI();
      console.log(`Fetching Fellows data from sheet: ${sheetId}, range: ${rangeDef}`);
      
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: rangeDef,
      });
      
      const rows = response.data.values || [];
      
      // If we have a header row, convert to array of objects
      if (rows.length > 0) {
        const headers = rows[0];
        const data = rows.slice(1).map(row => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index] || '';
          });
          return obj;
        });
        
        // Process Fellows data
        simplifiedData = data.map(fellow => {
          // Handle photo field - it might be a URL or a formula with image
          let photoUrl = fellow['Photo'] || '';
          
          // If it's not a URL but contains an image in Google Sheets,
          // we might need to extract the URL from a formula like =IMAGE("url")
          if (photoUrl && photoUrl.startsWith('=IMAGE(')) {
            // Extract URL from formula =IMAGE("url")
            const urlMatch = photoUrl.match(/=IMAGE\("([^"]+)"/);
            if (urlMatch && urlMatch[1]) {
              photoUrl = urlMatch[1];
            }
          }
          
          // If no photo is available, generate an avatar based on the name
          if (!photoUrl || photoUrl === '') {
            const fullName = fellow['Full Name'] || '';
            // Use UI Avatars service to generate an avatar based on the name
            // Parameters: size=128, rounded=true, bold=true, background=random
            photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&size=128&rounded=true&bold=true&background=random`;
          }
          
          // Extract LinkedIn username if full URL is provided
          let linkedin = fellow['LinkedIn'] || '';
          if (linkedin && linkedin.includes('linkedin.com/in/')) {
            // Extract just the username part from the URL if it's a full URL
            const linkedinMatch = linkedin.match(/linkedin\.com\/in\/([^\/]+)/);
            if (linkedinMatch && linkedinMatch[1]) {
              // Just keep the username, but preserve the full URL in the database
              linkedin = linkedinMatch[1];
            }
          }
          
          return {
            fullName: fellow['Full Name'] || '',
            role: fellow['Role'] || '',
            country: fellow['Country'] || '',
            linkedin: linkedin,
            photo: photoUrl
          };
        });
        
        // Store the processed data in cache
        cache.set(cacheKey, simplifiedData, cacheTTL);
      } else {
        // Empty Fellows sheet
        simplifiedData = [];
        // Cache empty results too to avoid repeated calls for empty data
        cache.set(cacheKey, simplifiedData, cacheTTL);
      }
    }
    
    // Return data (either from cache or freshly fetched)
    return res.status(200).json(simplifiedData);
  } catch (error) {
    console.error(`Error fetching Fellows data:`, error);
    return res.status(500).json({ 
      error: 'Failed to fetch Fellows data', 
      message: error.message, 
      details: error.toString() 
    });
  }
} 
