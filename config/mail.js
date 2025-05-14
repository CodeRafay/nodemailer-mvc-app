const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',    // e.g. 2525
  auth: {
    user: "f223327@cfd.nu.edu.pk",  // from .env
    pass: "nibe cmem qecg xvuk "
  }
});

module.exports = transporter;
