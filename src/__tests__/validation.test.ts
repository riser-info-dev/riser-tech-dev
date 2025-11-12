import { enquirySchema } from '@/lib/validation';

describe('Enquiry Schema Validation', () => {
  describe('Valid data', () => {
    it('should validate correct enquiry data with all fields', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        service: 'Fire Alarm Installation',
        message: 'Test message',
      };

      const result = enquirySchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
        expect(result.data.email).toBe('john@example.com');
      }
    });

    it('should validate data with only required fields', () => {
      const validData = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
      };

      const result = enquirySchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should accept valid email formats', () => {
      const validEmails = [
        'test@example.com',
        'user.name@example.co.uk',
        'user+tag@example.com',
      ];

      validEmails.forEach((email) => {
        const data = {
          name: 'Test User',
          email,
          contact: '1234567890',
        };
        const result = enquirySchema.safeParse(data);
        expect(result.success).toBe(true);
      });
    });

    it('should accept name with minimum length', () => {
      const data = {
        name: 'Ab',
        email: 'test@example.com',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should accept contact with minimum length', () => {
      const data = {
        name: 'John Doe',
        email: 'test@example.com',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });
  });

  describe('Invalid data', () => {
    it('should reject invalid email', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain('email');
      }
    });

    it('should reject name that is too short', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject name that is too long', () => {
      const invalidData = {
        name: 'A'.repeat(101),
        email: 'john@example.com',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject contact that is too short', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '123',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject contact that is too long', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1'.repeat(21),
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject message that is too long', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        message: 'A'.repeat(1001),
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject missing required fields', () => {
      const invalidData = {
        name: 'John Doe',
        // email missing
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        email: 'john@example.com',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject empty email', () => {
      const invalidData = {
        name: 'John Doe',
        email: '',
        contact: '1234567890',
      };

      const result = enquirySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('Optional fields', () => {
    it('should accept undefined service', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        service: undefined,
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should accept empty string service', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        service: '',
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should accept undefined message', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        message: undefined,
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it('should accept empty string message', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        message: '',
      };

      const result = enquirySchema.safeParse(data);
      expect(result.success).toBe(true);
    });
  });
});
