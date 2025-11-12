import { logVisitor, logEnquiry } from '@/lib/logger';
import { VisitorData, EnquiryData } from '@/types';
import fs from 'fs';
import path from 'path';

jest.mock('fs');

describe('Logger', () => {
  const logsDir = path.join(process.cwd(), 'logs');

  beforeEach(() => {
    jest.clearAllMocks();
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.mkdirSync as jest.Mock).mockImplementation(() => {});
    (fs.appendFileSync as jest.Mock).mockImplementation(() => {});
  });

  describe('logVisitor', () => {
    it('should log visitor data to file', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test City',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timezone: 'UTC',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      expect(fs.appendFileSync).toHaveBeenCalled();
      const callArgs = (fs.appendFileSync as jest.Mock).mock.calls[0];
      expect(callArgs[0]).toContain('visitors-');
      expect(callArgs[1]).toContain('192.168.1.1');
      expect(callArgs[1]).toContain('Chrome');
    });

    it('should create logs directory if it does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test City',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      expect(fs.mkdirSync).toHaveBeenCalledWith(logsDir, { recursive: true });
    });

    it('should handle errors gracefully', () => {
      (fs.appendFileSync as jest.Mock).mockImplementation(() => {
        throw new Error('File write error');
      });

      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        location: 'Test City',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      expect(() => logVisitor(visitorData)).not.toThrow();
      consoleSpy.mockRestore();
    });

    it('should handle missing optional fields', () => {
      const visitorData: VisitorData = {
        ip: '192.168.1.1',
        browser: 'Chrome',
        os: 'Windows',
        device: 'Desktop',
        page: '/home',
        referrer: '',
        userAgent: 'Mozilla/5.0',
        language: 'en',
        timestamp: '2025-01-15T10:00:00Z',
      };

      logVisitor(visitorData);

      expect(fs.appendFileSync).toHaveBeenCalled();
    });
  });

  describe('logEnquiry', () => {
    it('should log enquiry data to file', () => {
      const enquiryData: EnquiryData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        service: 'Fire Alarm Installation',
        message: 'Test message',
      };

      logEnquiry(enquiryData, 'Email Sent');

      expect(fs.appendFileSync).toHaveBeenCalled();
      const callArgs = (fs.appendFileSync as jest.Mock).mock.calls[0];
      expect(callArgs[0]).toContain('enquiries-');
      expect(callArgs[1]).toContain('John Doe');
      expect(callArgs[1]).toContain('john@example.com');
      expect(callArgs[1]).toContain('Email Sent');
    });

    it('should handle optional fields in enquiry', () => {
      const enquiryData: EnquiryData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        contact: '0987654321',
      };

      logEnquiry(enquiryData, 'Logged Only');

      expect(fs.appendFileSync).toHaveBeenCalled();
      const callArgs = (fs.appendFileSync as jest.Mock).mock.calls[0];
      expect(callArgs[1]).toContain('Not specified');
      expect(callArgs[1]).toContain('No message');
    });

    it('should handle errors gracefully', () => {
      (fs.appendFileSync as jest.Mock).mockImplementation(() => {
        throw new Error('File write error');
      });

      const enquiryData: EnquiryData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
      };

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      expect(() => logEnquiry(enquiryData, 'Logged')).not.toThrow();
      consoleSpy.mockRestore();
    });

    it('should create logs directory if it does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      
      const enquiryData: EnquiryData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
      };

      logEnquiry(enquiryData, 'Logged');

      expect(fs.mkdirSync).toHaveBeenCalledWith(logsDir, { recursive: true });
    });
  });
});
