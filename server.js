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

// Route for email sending function
app.post('/api/send-email', async (req, res) => {
  console.log('Request received on /api/send-email');
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  
  // Log form type for debugging purposes
  if (req.body && req.body.formType) {
    console.log(`Form type: ${req.body.formType}`);
  } else {
    console.log('Form type: Contact form (default)');
  }
  
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

// For testing different form types
app.get('/api/test-forms', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Form Test</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          form { margin-bottom: 30px; padding: 20px; border: 1px solid #ccc; }
          label { display: block; margin-bottom: 5px; }
          input, textarea, select { width: 100%; padding: 8px; margin-bottom: 15px; }
          button { padding: 10px 15px; background: #4a7bff; color: white; border: none; cursor: pointer; }
          h2 { margin-top: 30px; }
        </style>
      </head>
      <body>
        <h1>Form Test Page</h1>
        <p>This page allows you to test the different form types that send emails.</p>
        
        <h2>Contact Form</h2>
        <form id="contactForm">
          <label for="contact-name">Name:</label>
          <input type="text" id="contact-name" required>
          
          <label for="contact-email">Email:</label>
          <input type="email" id="contact-email" required>
          
          <label for="contact-subject">Subject:</label>
          <input type="text" id="contact-subject" required>
          
          <label for="contact-message">Message:</label>
          <textarea id="contact-message" rows="4" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
        
        <h2>Student Form</h2>
        <form id="studentForm">
          <label for="student-name">Name:</label>
          <input type="text" id="student-name" required>
          
          <label for="student-email">Email:</label>
          <input type="email" id="student-email" required>
          
          <label for="student-university">University:</label>
          <input type="text" id="student-university" required>
          
          <label for="student-field">Field of Study:</label>
          <input type="text" id="student-field" required>
          
          <label for="student-motivation">Motivation:</label>
          <textarea id="student-motivation" rows="4" required></textarea>
          
          <button type="submit">Submit Application</button>
        </form>
        
        <div id="result"></div>
        
        <script>
          document.getElementById('contactForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const resultDiv = document.getElementById('result');
            
            try {
              resultDiv.textContent = 'Sending...';
              
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: document.getElementById('contact-name').value,
                  email: document.getElementById('contact-email').value,
                  subject: document.getElementById('contact-subject').value,
                  message: document.getElementById('contact-message').value
                }),
              });
              
              const data = await response.json();
              
              if (response.ok) {
                resultDiv.textContent = 'Success: ' + data.message;
                resultDiv.style.color = 'green';
              } else {
                resultDiv.textContent = 'Error: ' + data.error;
                resultDiv.style.color = 'red';
              }
            } catch (error) {
              resultDiv.textContent = 'Error: ' + error.message;
              resultDiv.style.color = 'red';
            }
          });
          
          document.getElementById('studentForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const resultDiv = document.getElementById('result');
            
            try {
              resultDiv.textContent = 'Sending...';
              
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: document.getElementById('student-name').value,
                  email: document.getElementById('student-email').value,
                  subject: 'Student Application',
                  message: 'University: ' + document.getElementById('student-university').value + '\\n' +
                          'Field of Study: ' + document.getElementById('student-field').value + '\\n' +
                          'Motivation: ' + document.getElementById('student-motivation').value,
                  formType: 'student'
                }),
              });
              
              const data = await response.json();
              
              if (response.ok) {
                resultDiv.textContent = 'Success: ' + data.message;
                resultDiv.style.color = 'green';
              } else {
                resultDiv.textContent = 'Error: ' + data.error;
                resultDiv.style.color = 'red';
              }
            } catch (error) {
              resultDiv.textContent = 'Error: ' + error.message;
              resultDiv.style.color = 'red';
            }
          });
        </script>
      </body>
    </html>
  `);
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
  console.log(`Test form page: http://localhost:${PORT}/api/test-forms`);
  console.log(`API test endpoint: http://localhost:${PORT}/api/test`);
}); 