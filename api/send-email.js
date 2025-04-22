import sgMail from '@sendgrid/mail';

// Vercel serverless function format
export default async function handler(req, res) {
  // Configure CORS to allow requests from your domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  // Set content type as JSON
  res.setHeader('Content-Type', 'application/json');

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Check if method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Check if request body exists
    if (!req.body) {
      return res.status(400).json({ error: 'Missing request body' });
    }

    // Get form data
    const { name, email, subject, message } = req.body;

    // Check that all required data is present
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check that SendGrid API key is defined
    if (!process.env.SENDGRID_API_KEY) {
      console.error('Error: SENDGRID_API_KEY is not defined');
      return res.status(500).json({ error: 'Missing SendGrid configuration' });
    }

    // Check that sender is defined
    if (!process.env.SENDGRID_SENDER) {
      console.error('Error: SENDGRID_SENDER is not defined');
      return res.status(500).json({ error: 'Missing sender address' });
    }

    // Configure SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Create message
    const msg = {
      to: process.env.SENDGRID_RECIPIENT || 'contact@eurotech-federation.org', // Default recipient
      from: process.env.SENDGRID_SENDER, // Sender configured in SendGrid
      subject: `EuroTech Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <br>
        <strong>Message:</strong><br>
        ${message.replace(/\n/g, '<br>')}
      `,
    };

    try {
      // Send email
      await sgMail.send(msg);
      
      // Respond with success
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (sendError) {
      console.error('SendGrid error during sending:', sendError);
      
      // Additional details for debugging
      let errorDetails = sendError.toString();
      if (sendError.response && sendError.response.body && sendError.response.body.errors) {
        errorDetails = JSON.stringify(sendError.response.body.errors);
      }
      
      return res.status(500).json({ 
        error: 'Error sending email', 
        details: errorDetails 
      });
    }
  } catch (error) {
    console.error('General error:', error);
    
    // Always ensure we return valid JSON
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message || 'An unknown error occurred',
      details: error.toString()
    });
  }
} 