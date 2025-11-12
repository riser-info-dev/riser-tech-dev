import { NextRequest, NextResponse } from 'next/server';
import { logVisitor } from '@/lib/logger';
import { collectVisitorData, getLocationFromIP } from '@/lib/visitor-info';

function isValidIP(ip: string): boolean {
  if (!ip || ip === 'Unknown' || ip === '::1' || ip === '127.0.0.1') {
    return false;
  }
  
  // IPv4 validation
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.').map(Number);
    return parts.every(part => part >= 0 && part <= 255);
  }
  
  // IPv6 validation (basic)
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/;
  if (ipv6Regex.test(ip)) {
    return ip !== '::1' && ip !== '::';
  }
  
  return false;
}

function getClientIP(request: NextRequest): string {
  // Try various headers in order of preference
  const headersToCheck = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip', // Cloudflare
    'x-client-ip',
    'x-forwarded',
    'forwarded-for',
    'forwarded',
  ];
  
  for (const headerName of headersToCheck) {
    const headerValue = request.headers.get(headerName);
    if (headerValue) {
      // Handle comma-separated list (take first valid IP)
      const ips = headerValue.split(',').map(ip => ip.trim());
      for (const ip of ips) {
        if (isValidIP(ip)) {
          return ip;
        }
      }
    }
  }
  
  // Try to get IP from request URL or connection (for development)
  try {
    // In development, we might get localhost - handle that
    const url = new URL(request.url);
    const hostname = url.hostname;
    
    // If hostname is localhost or 127.0.0.1, return a development indicator
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') {
      return '127.0.0.1 (Local)';
    }
    
    // Try to extract from headers in a different way
    const allHeaders = Object.fromEntries(request.headers.entries());
    for (const [key, value] of Object.entries(allHeaders)) {
      if (key.toLowerCase().includes('ip') || key.toLowerCase().includes('forward')) {
        if (value && isValidIP(value)) {
          return value;
        }
      }
    }
  } catch (error) {
    // Fall through to default
  }
  
  // Final fallback
  return 'Unable to determine';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, referrer, userAgent, language } = body;

    const ip = getClientIP(request);
    const location = await getLocationFromIP(ip);

    const visitorData = collectVisitorData(
      ip,
      page || '/',
      referrer || 'Direct',
      userAgent || 'Unknown',
      language || 'en',
      location
    );

    logVisitor(visitorData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

