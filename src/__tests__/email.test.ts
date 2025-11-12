import { sendEnquiryEmail } from '@/lib/email';
import { EnquiryData } from '@/types';

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(),
  })),
}));

describe('Email Service', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('sendEnquiryEmail', () => {
    const enquiryData: EnquiryData = {
      name: 'John Doe',
      email: 'john@example.com',
      contact: '1234567890',
      service: 'Fire Alarm Installation',
      message: 'Test message',
    };

    it('should return error when SMTP is disabled', async () => {
      process.env.ENABLE_SMTP = 'false';

      const { sendEnquiryEmail } = require('@/lib/email');
      const result = await sendEnquiryEmail(enquiryData);

      expect(result.success).toBe(false);
      expect(result.message).toContain('SMTP is not enabled');
    });

    it('should send email when SMTP is enabled', async () => {
      process.env.ENABLE_SMTP = 'true';
      process.env.SMTP_HOST = 'smtp.gmail.com';
      process.env.SMTP_PORT = '587';
      process.env.SMTP_USER = 'test@gmail.com';
      process.env.SMTP_PASS = 'password';
      process.env.SMTP_FROM = 'noreply@test.com';
      process.env.SMTP_TO = 'info@test.com';

      const nodemailer = require('nodemailer');
      const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-id' });
      nodemailer.createTransport.mockReturnValue({
        sendMail: mockSendMail,
      });

      const { sendEnquiryEmail } = require('@/lib/email');
      const result = await sendEnquiryEmail(enquiryData);

      expect(result.success).toBe(true);
      expect(mockSendMail).toHaveBeenCalled();
    });

    it('should handle email send errors gracefully', async () => {
      process.env.ENABLE_SMTP = 'true';
      process.env.SMTP_HOST = 'smtp.gmail.com';
      process.env.SMTP_PORT = '587';
      process.env.SMTP_USER = 'test@gmail.com';
      process.env.SMTP_PASS = 'password';

      const nodemailer = require('nodemailer');
      const mockSendMail = jest.fn().mockRejectedValue(new Error('SMTP error'));
      nodemailer.createTransport.mockReturnValue({
        sendMail: mockSendMail,
      });

      const { sendEnquiryEmail } = require('@/lib/email');
      const result = await sendEnquiryEmail(enquiryData);

      expect(result.success).toBe(false);
      expect(result.message).toContain('Failed to send email');
    });
  });
});

