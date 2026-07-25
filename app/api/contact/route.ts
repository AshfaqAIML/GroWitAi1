import { NextResponse } from 'next/server';
import { z } from 'zod';

// Replace with actual Resend implementation when you have an API key
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
  honeypot: z.string().max(0),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Store in database or send email
    // For now, log and return success
    console.log('Contact form submission:', validated);

    // In production with Resend:
    // await resend.emails.send({
    //   from: 'GroWithAI <hello@growithai.com>',
    //   to: 'team@growithai.com',
    //   subject: `New Inquiry from ${validated.name} - ${validated.service}`,
    //   html: `<h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validated.name}</p>
    //     <p><strong>Email:</strong> ${validated.email}</p>
    //     <p><strong>Company:</strong> ${validated.company || 'N/A'}</p>
    //     <p><strong>Phone:</strong> ${validated.phone || 'N/A'}</p>
    //     <p><strong>Service:</strong> ${validated.service}</p>
    //     <p><strong>Message:</strong> ${validated.message}</p>`,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form' },
      { status: 500 }
    );
  }
}