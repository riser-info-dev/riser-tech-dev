import { VisitorData } from '@/types';

export function getBrowserInfo(userAgent: string): { browser: string; os: string; device: string } {
  let browser = 'Unknown';
  let os = 'Unknown';
  let device = 'Desktop';

  // Detect OS first (important for mobile devices)
  if (userAgent.includes('Android')) {
    os = 'Android';
    device = 'Mobile';
  } else if (userAgent.includes('iPhone')) {
    os = 'iOS';
    device = 'Mobile';
  } else if (userAgent.includes('iPad')) {
    os = 'iOS';
    device = 'Tablet';
  } else if (userAgent.includes('iOS')) {
    os = 'iOS';
    device = 'Mobile';
  } else if (userAgent.includes('Windows')) {
    os = 'Windows';
  } else if (userAgent.includes('Mac')) {
    os = 'macOS';
  } else if (userAgent.includes('Linux')) {
    os = 'Linux';
  }

  // Detect browser
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    browser = 'Chrome';
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari';
  } else if (userAgent.includes('Edg')) {
    browser = 'Edge';
  }

  // Override device if mobile pattern detected
  if (/Mobile|Android|iPhone/.test(userAgent) && !userAgent.includes('iPad')) {
    device = 'Mobile';
  } else if (/iPad/.test(userAgent)) {
    device = 'Tablet';
  }

  return { browser, os, device };
}

export async function getLocationFromIP(ip: string): Promise<string> {
  // Skip geolocation for local/development IPs
  if (!ip || ip.includes('127.0.0.1') || ip.includes('Local') || ip.includes('Unable to determine')) {
    return 'Local/Development';
  }

  if (process.env.IP_GEOLOCATION_ENABLED !== 'true') {
    return 'Unknown';
  }

  try {
    // Clean IP address (remove any extra characters)
    const cleanIP = ip.trim().split(' ')[0];
    
    // Validate IP format before making API call
    if (!cleanIP || cleanIP === 'Unknown') {
      return 'Unknown';
    }
    
    const response = await fetch(`http://ip-api.com/json/${cleanIP}?fields=status,country,city`, {
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });
    
    if (!response.ok) {
      return 'Unknown';
    }
    
    const data = await response.json();
    
    if (data.status === 'success') {
      const city = data.city || '';
      const country = data.country || '';
      return `${city}${city && country ? ', ' : ''}${country}`.trim() || 'Unknown';
    }
    return 'Unknown';
  } catch (error) {
    // Silent fail - location is optional
    return 'Unknown';
  }
}

export function collectVisitorData(
  ip: string,
  page: string,
  referrer: string,
  userAgent: string,
  language: string,
  location?: string
): VisitorData {
  const { browser, os, device } = getBrowserInfo(userAgent);
  
  return {
    ip,
    location: location || 'Unknown',
    browser,
    os,
    device,
    page,
    referrer: referrer || 'Direct',
    userAgent,
    language: language || 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString(),
  };
}

