import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // For now, log to console. Replace with Resend/Nodemailer when API key is configured.
    // To enable email sending:
    // 1. npm install resend
    // 2. Add RESEND_API_KEY to .env.local
    // 3. Uncomment the Resend block below

    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'jeanfrankynkot@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    */

    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
