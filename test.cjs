  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const msg = {
  to: 'boujaddi.salim@protonmail.com',
  from: process.env.SENDGRID_SENDER,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

console.log(process.env.SENDGRID_SENDER)
console.log(process.env.SENDGRID_API_KEY)

 sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error('Erreur SendGrid:')
      console.error(error.toString())
      
      // Afficher les détails complets de l'erreur
      if (error.response && error.response.body && error.response.body.errors) {
        console.error('Détails de l\'erreur:')
        console.error(JSON.stringify(error.response.body.errors, null, 2))
      }
    })