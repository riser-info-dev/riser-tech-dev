import fs from 'fs';
import path from 'path';
import { VisitorData, EnquiryData } from '@/types';

const LOGS_DIR = path.join(process.cwd(), 'logs');

/**
 * Sanitizes input to prevent log injection attacks
 * Removes newlines and other control characters that could be used to manipulate log files
 */
function sanitizeLogInput(input: string | undefined): string {
  if (!input) return '';
  return input
    .replace(/\r/g, '')
    .replace(/\n/g, ' ')
    .replace(/\t/g, ' ')
    .trim();
}

function ensureLogsDirectory(): void {
  if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
  }
}

function getLogFileName(prefix: string): string {
  const date = new Date().toISOString().split('T')[0];
  return `${prefix}-${date}.log`;
}

function formatTimestamp(): string {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

export function logVisitor(data: VisitorData): void {
  try {
    ensureLogsDirectory();
    const filename = getLogFileName('visitors');
    const filepath = path.join(LOGS_DIR, filename);
    
    const logEntry = `
[${formatTimestamp()}]
IP: ${sanitizeLogInput(data.ip)}
Location: ${sanitizeLogInput(data.location)}
Browser: ${sanitizeLogInput(data.browser)}
OS: ${sanitizeLogInput(data.os)}
Device: ${sanitizeLogInput(data.device)}
Page: ${sanitizeLogInput(data.page)}
Referrer: ${sanitizeLogInput(data.referrer)}
User Agent: ${sanitizeLogInput(data.userAgent)}
Language: ${sanitizeLogInput(data.language)}
Timezone: ${sanitizeLogInput(data.timezone)}
---
`;

    fs.appendFileSync(filepath, logEntry, 'utf8');
  } catch (error) {
    console.error('Error logging visitor:', error);
  }
}

export function logEnquiry(data: EnquiryData, status: string): void {
  try {
    ensureLogsDirectory();
    const filename = getLogFileName('enquiries');
    const filepath = path.join(LOGS_DIR, filename);
    
    const logEntry = `
[${formatTimestamp()}]
Name: ${sanitizeLogInput(data.name)}
Email: ${sanitizeLogInput(data.email)}
Contact: ${sanitizeLogInput(data.contact)}
Service: ${sanitizeLogInput(data.service) || 'Not specified'}
Message: ${sanitizeLogInput(data.message) || 'No message'}
Status: ${sanitizeLogInput(status)}
---
`;

    fs.appendFileSync(filepath, logEntry, 'utf8');
  } catch (error) {
    console.error('Error logging enquiry:', error);
  }
}

