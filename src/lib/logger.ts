import fs from 'fs';
import path from 'path';
import { VisitorData, EnquiryData } from '@/types';

const LOGS_DIR = path.join(process.cwd(), 'logs');

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
IP: ${data.ip}
Location: ${data.location || 'Unknown'}
Browser: ${data.browser}
OS: ${data.os}
Device: ${data.device}
Page: ${data.page}
Referrer: ${data.referrer || 'Direct'}
User Agent: ${data.userAgent}
Language: ${data.language}
Timezone: ${data.timezone || 'Unknown'}
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
Name: ${data.name}
Email: ${data.email}
Contact: ${data.contact}
Service: ${data.service || 'Not specified'}
Message: ${data.message || 'No message'}
Status: ${status}
---
`;

    fs.appendFileSync(filepath, logEntry, 'utf8');
  } catch (error) {
    console.error('Error logging enquiry:', error);
  }
}

