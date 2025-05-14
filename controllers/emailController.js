const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Send email function
const sendEmail = async (req, res) => {
    try {
        console.log('Received email request:', req.body);
        console.log('Using Gmail config:', {
            user: process.env.EMAIL_USER
        });

        const { to, subject, text } = req.body;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        };

        console.log('Attempting to send email with options:', mailOptions);

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Detailed error sending email:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        res.status(500).json({ error: 'Failed to send email: ' + error.message });
    }
};

module.exports = {
    sendEmail
}; 