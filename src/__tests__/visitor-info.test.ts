import { getBrowserInfo, collectVisitorData } from '@/lib/visitor-info';

// Mock fetch for getLocationFromIP
global.fetch = jest.fn();

describe('Visitor Info', () => {
  describe('getBrowserInfo', () => {
    it('should detect Chrome browser', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      const info = getBrowserInfo(userAgent);
      expect(info.browser).toBe('Chrome');
      expect(info.os).toBe('Windows');
      expect(info.device).toBe('Desktop');
    });

    it('should detect Firefox browser', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0';
      const info = getBrowserInfo(userAgent);
      expect(info.browser).toBe('Firefox');
      expect(info.os).toBe('Windows');
    });

    it('should detect Safari browser', () => {
      const userAgent =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';
      const info = getBrowserInfo(userAgent);
      expect(info.browser).toBe('Safari');
      expect(info.os).toBe('macOS');
    });

    it('should detect Edge browser', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Edg/120.0.0.0';
      const info = getBrowserInfo(userAgent);
      expect(info.browser).toBe('Edge');
    });

    it('should detect mobile device', () => {
      const userAgent =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1';
      const info = getBrowserInfo(userAgent);
      expect(info.device).toBe('Mobile');
      expect(info.os).toBe('iOS');
    });

    it('should detect Android device', () => {
      const userAgent =
        'Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';
      const info = getBrowserInfo(userAgent);
      expect(info.device).toBe('Mobile');
      expect(info.os).toBe('Android');
    });

    it('should detect tablet device', () => {
      const userAgent =
        'Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1';
      const info = getBrowserInfo(userAgent);
      expect(info.device).toBe('Tablet');
      expect(info.os).toBe('iOS');
    });

    it('should detect macOS', () => {
      const userAgent =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/120.0.0.0';
      const info = getBrowserInfo(userAgent);
      expect(info.os).toBe('macOS');
      expect(info.device).toBe('Desktop');
    });

    it('should detect Linux', () => {
      const userAgent =
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
      const info = getBrowserInfo(userAgent);
      expect(info.os).toBe('Linux');
      expect(info.device).toBe('Desktop');
    });

    it('should handle unknown user agent', () => {
      const userAgent = 'Unknown User Agent';
      const info = getBrowserInfo(userAgent);
      expect(info.browser).toBe('Unknown');
      expect(info.os).toBe('Unknown');
    });
  });

  describe('collectVisitorData', () => {
    it('should collect visitor data correctly', () => {
      const data = collectVisitorData(
        '192.168.1.1',
        '/home',
        'https://google.com',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
        'en-US',
        'New York, USA'
      );

      expect(data.ip).toBe('192.168.1.1');
      expect(data.page).toBe('/home');
      expect(data.referrer).toBe('https://google.com');
      expect(data.location).toBe('New York, USA');
      expect(data.language).toBe('en-US');
      expect(data.browser).toBe('Chrome');
      expect(data.os).toBe('Windows');
      expect(data.device).toBe('Desktop');
      expect(data.timestamp).toBeDefined();
    });

    it('should handle missing location', () => {
      const data = collectVisitorData(
        '192.168.1.1',
        '/about',
        '',
        'Mozilla/5.0',
        'en',
        undefined
      );

      expect(data.location).toBe('Unknown');
      expect(data.referrer).toBe('Direct');
    });

    it('should set timezone from browser', () => {
      const data = collectVisitorData(
        '192.168.1.1',
        '/services',
        'https://example.com',
        'Mozilla/5.0',
        'en-US',
        'Test Location'
      );

      expect(data.timezone).toBeDefined();
    });
  });
});
