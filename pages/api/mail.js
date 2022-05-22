const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default (req,res) => {
  const body = JSON.stringify(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phonel}\r\n
  Message: ${body.message}
`;

mail.send({
  to: "mgrushi73@gmail.com",
  from: "noreply@beyin.me",
  subject: 'New Message!',
  text: message,
  html: message.replace(/\r\n/g, '<br>'),
}).then(() => {
 return res.status(200).json({ status: 'Ok' });
});

}

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: "mgrushi73@gmail.com",
//   from: "noreply@beyin.me", // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();