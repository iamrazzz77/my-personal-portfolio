import nodemailer from 'nodemailer';
import { ContactMessage } from '../models/ContactMessage.js';

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All contact fields are required.' });
    }

    const ipAddress = req.ip || req.connection?.remoteAddress;

    // Save message to MongoDB if connection is active
    let savedMsg = null;
    try {
      savedMsg = await ContactMessage.create({ name, email, subject, message, ipAddress });
    } catch (dbErr) {
      console.warn('[Contact DB Log] Could not write to MongoDB, sending email directly:', dbErr.message);
    }

    // Optional Nodemailer notification dispatch
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Faishal Saif Portfolio" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || 'faishalsaif.dev@gmail.com',
          subject: `[Portfolio Inquiry] ${subject} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nIP: ${ipAddress}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background: #0a0e17; color: #f8fafc; border-radius: 10px;">
              <h2 style="color: #38bdf8;">New Contact Message Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border-color: #1e293b;" />
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `
        });
      } catch (mailErr) {
        console.error('[Nodemailer Error] Could not send email notification:', mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for getting in touch! Your message has been transmitted successfully.'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error processing contact message.' });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, messages });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Could not fetch contact messages' });
  }
};
