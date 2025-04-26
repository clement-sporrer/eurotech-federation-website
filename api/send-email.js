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
    const { name, email, subject, message, formType } = req.body;

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
    
    // Prepare the email content based on form type
    let emailSubject = subject;
    let htmlContent = '';
    let textContent = '';
    
    // Format email content based on form type
    switch (formType) {
      case 'student':
        emailSubject = `EuroTech Student Application: ${name}`;
        htmlContent = `
          <h2>Student Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Details:</strong></p>
          <div>${message.replace(/\n/g, '<br>')}</div>
        `;
        textContent = `
          Student Application
          -------------------
          Name: ${name}
          Email: ${email}
          
          Details:
          ${message}
        `;
        break;
        
      case 'association':
        emailSubject = `EuroTech Association Application: ${name}`;
        htmlContent = `
          <h2>Association Application</h2>
          <p><strong>Contact Person:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Details:</strong></p>
          <div>${message.replace(/\n/g, '<br>')}</div>
        `;
        textContent = `
          Association Application
          ----------------------
          Contact Person: ${name}
          Email: ${email}
          
          Details:
          ${message}
        `;
        break;
        
      case 'organization':
        emailSubject = `EuroTech Partnership Inquiry: ${name}`;
        htmlContent = `
          <h2>Organization Partnership Inquiry</h2>
          <p><strong>Contact Person:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Details:</strong></p>
          <div>${message.replace(/\n/g, '<br>')}</div>
        `;
        textContent = `
          Organization Partnership Inquiry
          -------------------------------
          Contact Person: ${name}
          Email: ${email}
          
          Details:
          ${message}
        `;
        break;
        
      default:
        // Default case for the original contact form
        emailSubject = `EuroTech Contact: ${subject}`;
        htmlContent = `
          <h2>Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div>${message.replace(/\n/g, '<br>')}</div>
        `;
        textContent = `
          Contact Message
          --------------
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
        `;
    }

    // Create message
    const msg = {
      to: process.env.SENDGRID_RECIPIENT || 'contact@eurotech-federation.org', // Default recipient
      from: process.env.SENDGRID_SENDER, // Sender configured in SendGrid
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
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