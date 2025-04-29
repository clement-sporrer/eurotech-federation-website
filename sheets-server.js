// Development server for fetching Google Sheets data
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Display environment variables for debugging (without sensitive values)
console.log('Environment variables loaded:');
console.log('GOOGLE_SHEETS_API_KEY:', process.env.GOOGLE_SHEETS_API_KEY ? '(defined)' : '(not defined)');
console.log('GOOGLE_SHEETS_ID:', process.env.GOOGLE_SHEETS_ID || '(not defined)');
console.log('GOOGLE_SERVICE_ACCOUNT_FILE:', process.env.GOOGLE_SERVICE_ACCOUNT_FILE || '(not defined)');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware 
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5173'], // Allow development origins
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// Increase JSON request size limit
app.use(bodyParser.json({ limit: '1mb' }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Initialize Google Sheets API
const initGoogleSheetsAPI = async () => {
  try {
    let auth;
    
    // Check if we have a service account key file
    if (process.env.GOOGLE_SERVICE_ACCOUNT_FILE) {
      const keyFile = path.resolve(__dirname, process.env.GOOGLE_SERVICE_ACCOUNT_FILE);
      
      if (fs.existsSync(keyFile)) {
        const credentials = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
        auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });
        console.log('Authenticated with service account');
      } else {
        console.error(`Service account key file not found: ${keyFile}`);
        throw new Error('Service account key file not found');
      }
    } 
    // If no service account file, try using API key
    else if (process.env.GOOGLE_SHEETS_API_KEY) {
      auth = process.env.GOOGLE_SHEETS_API_KEY;
      console.log('Using API key authentication');
    } else {
      throw new Error('No Google Sheets authentication method provided');
    }
    
    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets API:', error);
    throw error;
  }
};

// Route to get sheet data
app.get('/api/sheets/:sheetName', async (req, res) => {
  const { sheetName } = req.params;
  const { range } = req.query;
  
  try {
    const sheets = await initGoogleSheetsAPI();
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!sheetId) {
      return res.status(400).json({ 
        error: 'Configuration error', 
        message: 'Google Sheets ID not defined in environment variables' 
      });
    }
    
    // Format the range if provided, otherwise just use the sheet name
    const rangeDef = range ? `${sheetName}!${range}` : sheetName;
    
    console.log(`Fetching data from sheet: ${sheetId}, range: ${rangeDef}`);
    
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
      
      // For the Fellows sheet, return only specific fields
      if (sheetName === 'Fellows') {
        const simplifiedData = data.map(fellow => {
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
            photo: photoUrl,
            fullName: fellow['Full Name'] || '',
            country: fellow['Country'] || '',
            linkedin: linkedin
          };
        });
        
        console.log('Simplified Fellows data:', JSON.stringify(simplifiedData, null, 2));
        return res.json(simplifiedData);
      }
      
      res.json({ 
        sheet: sheetName, 
        range: rangeDef,
        headers, 
        data, 
        rowCount: data.length 
      });
    } else {
      // For the Fellows sheet with no data, return empty array directly
      if (sheetName === 'Fellows') {
        return res.json([]);
      }
      
      res.json({ 
        sheet: sheetName, 
        range: rangeDef,
        data: [], 
        rowCount: 0,
        message: 'No data found in sheet' 
      });
    }
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error);
    res.status(500).json({ 
      error: 'Failed to fetch sheet data', 
      message: error.message, 
      details: error.toString() 
    });
  }
});

// Route to get available sheets
app.get('/api/sheets', async (req, res) => {
  try {
    const sheets = await initGoogleSheetsAPI();
    const sheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!sheetId) {
      return res.status(400).json({ 
        error: 'Configuration error', 
        message: 'Google Sheets ID not defined in environment variables' 
      });
    }
    
    const response = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });
    
    const sheetsList = response.data.sheets.map(sheet => ({
      id: sheet.properties.sheetId,
      title: sheet.properties.title,
      index: sheet.properties.index
    }));
    
    res.json({ 
      spreadsheetId: sheetId,
      spreadsheetTitle: response.data.properties.title,
      sheets: sheetsList
    });
  } catch (error) {
    console.error('Error fetching sheets list:', error);
    res.status(500).json({ 
      error: 'Failed to fetch sheets list', 
      message: error.message, 
      details: error.toString() 
    });
  }
});

// Test route to check server is working
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', message: 'Google Sheets API is working' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Google Sheets server started on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`- Get all sheets: http://localhost:${PORT}/api/sheets`);
  console.log(`- Get sheet data: http://localhost:${PORT}/api/sheets/[SHEET_NAME]`);
  console.log(`- With range: http://localhost:${PORT}/api/sheets/[SHEET_NAME]?range=A1:D10`);
  console.log(`- Test endpoint: http://localhost:${PORT}/api/test`);
}); 