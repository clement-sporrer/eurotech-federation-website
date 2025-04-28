// Index file for API routes
import { google } from 'googleapis';

// Initialize Google Sheets API
const initGoogleSheetsAPI = async () => {
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

// Main API handler for Vercel
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

  // Simple test endpoint to check if API is working
  if (req.url === '/api' || req.url === '/api/') {
    return res.status(200).json({ 
      status: 'ok', 
      message: 'API is working', 
      endpoints: [
        '/api/fellows',
        '/api/sheets?sheet=SheetName'
      ]
    });
  }

  return res.status(404).json({ error: 'API endpoint not found' });
} 