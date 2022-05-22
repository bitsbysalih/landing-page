/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req,res){
try{
 await mail.send({
  from:"noreply@beyin.me",
  to: "mgurshi73@gmail.com",
  subject:`Have new message:${req.body.name}`,
  html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
  <head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>
    <meta name="description" content="The HTML5 Herald">
    <meta name="author" content="SitePoint">
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

    <link rel="stylesheet" href="css/styles.css?v=1.0">

  </head>
<body>
<div style={{display:'flex',justifyContent: 'center';alignItems:'center';borderRadius:'5px';overFlow:'hidden';font-family: 'helvetica', 'ui-sans';}}>
<h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
<div style="font-size: 16px;">
<h3>Phone :${req.body.phone}</h3>
<p>Message:</p>
<p>${req.body.message}</p>
<br>
</div>
</div>
</body>
  `
 })
} catch(error){
  return res.status(error.statusCode || 500).json({error:error.message});
}
return res.status(200).json({error:"ok"})
}
export default sendEmail;

