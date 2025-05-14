const transporter = require('../config/mail');

exports.showForm = (req, res) => {
  res.render('form');
};

exports.sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"No-Reply" <${"f223327@cfd.nu.edu.pk"}>`,
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`
    });
    res.send('Email sent successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send email.');
  }
};
