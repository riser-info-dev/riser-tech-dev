import { VisitorData, EnquiryData } from '@/types';

function sanitizeLogInput(input: string | undefined): string {
  if (!input) return '';
  return input
    .replace(/\r/g, '')
    .replace(/\n/g, ' ')
    .replace(/\t/g, ' ')
    .trim();
}

export function logVisitor(data: VisitorData): void {
  console.log(JSON.stringify({
    type: 'visitor',
    timestamp: new Date().toISOString(),
    ip: sanitizeLogInput(data.ip),
    location: sanitizeLogInput(data.location),
    browser: sanitizeLogInput(data.browser),
    os: sanitizeLogInput(data.os),
    device: sanitizeLogInput(data.device),
    page: sanitizeLogInput(data.page),
    referrer: sanitizeLogInput(data.referrer),
    language: sanitizeLogInput(data.language),
    timezone: sanitizeLogInput(data.timezone),
  }));
}

export function logEnquiry(data: EnquiryData, status: string): void {
  console.log(JSON.stringify({
    type: 'enquiry',
    timestamp: new Date().toISOString(),
    name: sanitizeLogInput(data.name),
    email: sanitizeLogInput(data.email),
    contact: sanitizeLogInput(data.contact),
    service: sanitizeLogInput(data.service) || 'Not specified',
    message: sanitizeLogInput(data.message) || 'No message',
    status: sanitizeLogInput(status),
  }));
}

