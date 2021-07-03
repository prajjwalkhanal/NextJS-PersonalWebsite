const mail = require('@sendgrid/mail');

    mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.Name}\r\n
    Email: ${body.Email}\r\n
    Phone: ${body.Phone}\r\n
    Message: ${body.Message}
  `;

  await mail.send({
    to: 'prajjwalkhanal@gmail.com',
    from: 'prajjwalkhanal@gmail.com',
    subject: 'New Message from Website',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}