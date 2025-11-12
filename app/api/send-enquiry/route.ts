import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validation';
import { sendEnquiryEmail } from '@/lib/email';
import { logEnquiry } from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validationResult = enquirySchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: validationResult.error.issues },
        { status: 400 }
      );
    }

    const enquiryData = validationResult.data;

    const emailResult = await sendEnquiryEmail(enquiryData);
    const status = emailResult.success ? 'Email Sent' : 'Logged Only (SMTP Disabled)';
    
    logEnquiry(enquiryData, status);

    return NextResponse.json({
      success: true,
      message: emailResult.message || 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Error sending enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}

