// utils/email.js
import nodemailer from 'nodemailer';

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 587,
  secure: false, // For STARTTLS
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false, // Bypass SSL certificate validation
  },
  debug: true, // Enable debug output
  logger: true,
});

export const sendEmail = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to, // Recipient address
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
  };

  return transporter.sendMail(mailOptions);
};
