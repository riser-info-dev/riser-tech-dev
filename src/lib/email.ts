import nodemailer from 'nodemailer';
import { EnquiryData } from '@/types';

const isSMTPEnabled = process.env.ENABLE_SMTP === 'true';

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
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New Enquiry from ${data.name} - ${data.service || 'General Inquiry'}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Service Interest:</strong> ${data.service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No message provided'}</p>
        <hr>
        <p><small>Sent from RiserTech Contact Form</small></p>
      `,
      text: `
New Enquiry Received

Name: ${data.name}
Email: ${data.email}
Contact: ${data.contact}
Service Interest: ${data.service || 'Not specified'}

Message:
${data.message || 'No message provided'}

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

