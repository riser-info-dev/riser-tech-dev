import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validation';
import { sendEnquiryEmail } from '@/lib/email';
import { logEnquiry } from '@/lib/logger';
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limit';

// Maximum request body size: 10KB
const MAX_BODY_SIZE = 10 * 1024;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(
      request,
      RATE_LIMITS.ENQUIRY.maxRequests,
      RATE_LIMITS.ENQUIRY.windowMs
    );

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': RATE_LIMITS.ENQUIRY.maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          },
        }
      );
    }

    // Check content length
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false, message: 'Request body too large' },
        { status: 413 }
      );
    }

    // Parse and validate body size
    const text = await request.text();
    if (text.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false, message: 'Request body too large' },
        { status: 413 }
      );
    }

    const body = JSON.parse(text);
    
    const validationResult = enquirySchema.safeParse(body);
    
    if (!validationResult.success) {
      // Sanitize error messages in production
      const errors = process.env.NODE_ENV === 'production'
        ? ['Invalid form data. Please check all fields and try again.']
        : validationResult.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);

      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: process.env.NODE_ENV === 'production' ? undefined : errors,
        },
        {
          status: 400,
          headers: {
            'X-RateLimit-Limit': RATE_LIMITS.ENQUIRY.maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          },
        }
      );
    }

    const enquiryData = validationResult.data;

    const emailResult = await sendEnquiryEmail(enquiryData);
    const status = emailResult.success ? 'Email Sent' : 'Logged Only (SMTP Disabled)';
    
    logEnquiry(enquiryData, status);

    return NextResponse.json(
      {
        success: true,
        message: emailResult.message || 'Enquiry submitted successfully',
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMITS.ENQUIRY.maxRequests.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        },
      }
    );
  } catch (error) {
    // Log error (in production, send to error tracking service)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending enquiry:', error);
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}

