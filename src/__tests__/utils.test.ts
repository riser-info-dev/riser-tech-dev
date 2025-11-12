import { cn, formatPhoneNumber } from '@/lib/utils';

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('text-red-500', 'bg-blue-500');
      expect(result).toContain('text-red-500');
      expect(result).toContain('bg-blue-500');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const result = cn('base-class', isActive && 'active-class');
      expect(result).toContain('base-class');
      expect(result).toContain('active-class');
    });

    it('should handle undefined and null values', () => {
      const result = cn('base-class', undefined, null, 'valid-class');
      expect(result).toContain('base-class');
      expect(result).toContain('valid-class');
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format 10-digit phone number', () => {
      const result = formatPhoneNumber('1234567890');
      expect(result).toBe('(123) 456-7890');
    });

    it('should return original string if not 10 digits', () => {
      const result = formatPhoneNumber('12345');
      expect(result).toBe('12345');
    });

    it('should handle phone numbers with special characters', () => {
      const result = formatPhoneNumber('(123) 456-7890');
      expect(result).toBe('(123) 456-7890');
    });

    it('should handle empty string', () => {
      const result = formatPhoneNumber('');
      expect(result).toBe('');
    });
  });
});

