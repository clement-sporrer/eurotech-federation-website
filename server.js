// Development server for testing serverless functions locally
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sendEmailHandler from './api/send-email.js';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Display environment variables for debugging (without sensitive values)
console.log('Environment variables loaded:');
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '(defined)' : '(not defined)');
console.log('SENDGRID_SENDER:', process.env.SENDGRID_SENDER || '(not defined)');
console.log('SENDGRID_RECIPIENT:', process.env.SENDGRID_RECIPIENT || '(not defined)');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware 
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000'], // Allow development origins
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

// Route for email sending function
app.post('/api/send-email', async (req, res) => {
  console.log('Request received on /api/send-email');
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  
  try {
    // Simulate Vercel environment by adding necessary methods
    const vercelReq = {
      ...req,
      method: 'POST',
      body: req.body,
      headers: req.headers,
      query: req.query
    };
    
    // Create an interceptor to capture the response
    const oldJson = res.json;
    res.json = function(data) {
      console.log('JSON response:', JSON.stringify(data, null, 2));
      return oldJson.apply(this, arguments);
    };
    
    await sendEmailHandler(vercelReq, res);
  } catch (error) {
    console.error('Error in route handler:', error);
    
    // Ensure a response is sent even in case of error
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Internal server error', 
        message: error.message || 'An unknown error occurred', 
        details: error.toString() 
      });
    }
  }
});

// Test route to check server is working
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', message: 'API is working' });
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
  console.log(`Development server started on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/send-email`);
  console.log(`API test endpoint: http://localhost:${PORT}/api/test`);
}); 