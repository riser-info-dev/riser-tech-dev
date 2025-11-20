import nodemailer from 'nodemailer';
import { EnquiryData } from '@/types';

const isSMTPEnabled = process.env.ENABLE_SMTP === 'true';

/**
 * Escapes HTML entities to prevent XSS attacks
 */
function escapeHtml(text: string | undefined): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let transporter: nodemailer.Transporter | null = null;

if (isSMTPEnabled) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendEnquiryEmail(data: EnquiryData): Promise<{ success: boolean; message: string }> {
  if (!isSMTPEnabled || !transporter) {
    return {
      success: false,
      message: 'SMTP is not enabled. Enquiry has been logged to file.',
    };
  }

  try {
    // Sanitize all user inputs to prevent XSS
    const sanitizedName = escapeHtml(data.name);
    const sanitizedEmail = escapeHtml(data.email);
    const sanitizedContact = escapeHtml(data.contact);
    const sanitizedService = escapeHtml(data.service);
    const sanitizedMessage = escapeHtml(data.message);

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New Enquiry from ${sanitizedName} - ${sanitizedService || 'General Inquiry'}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Contact:</strong> ${sanitizedContact}</p>
        <p><strong>Service Interest:</strong> ${sanitizedService || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage || 'No message provided'}</p>
        <hr>
        <p><small>Sent from RiserTech Contact Form</small></p>
      `,
      text: `
New Enquiry Received

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Contact: ${sanitizedContact}
Service Interest: ${sanitizedService || 'Not specified'}

Message:
${sanitizedMessage || 'No message provided'}

Sent from RiserTech Contact Form
      `,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: 'Enquiry sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Enquiry has been logged to file.',
    };
  }
}

