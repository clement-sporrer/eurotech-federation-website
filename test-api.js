import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// API URL (depending on environment)
const API_URL = process.env.API_URL || 'http://localhost:3001/api/send-email';

// Test data
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test API',
  message: 'This is a test message to verify the email sending API functionality.'
};

// Function to test the API
async function testEmailApi() {
  console.log('Testing email sending API...');
  console.log('URL:', API_URL);
  console.log('Data:', testData);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    // Display response headers
    console.log('\nResponse headers:');
    response.headers.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });
    
    // Read response text
    const textResponse = await response.text();
    console.log('\nRaw response:');
    console.log(textResponse);
    
    // Try to parse response as JSON
    try {
      const jsonResponse = textResponse ? JSON.parse(textResponse) : {};
      console.log('\nJSON response:');
      console.log(JSON.stringify(jsonResponse, null, 2));
    } catch (parseError) {
      console.error('\nError parsing JSON:', parseError.message);
      console.log('Response is not valid JSON.');
    }
    
    console.log('\nStatus:', response.status, response.statusText);
    
    if (response.ok) {
      console.log('✅ Test successful!');
    } else {
      console.log('❌ Test failed!');
    }
  } catch (error) {
    console.error('\nError during request:', error);
    console.log('❌ Test failed!');
  }
}

// Run the test
testEmailApi().catch(console.error); 