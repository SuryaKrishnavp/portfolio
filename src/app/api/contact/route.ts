import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

async function trySendEmail(payload: ContactPayload) {
  // Only attempt to send if SMTP env vars are configured
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) return { sent: false, reason: 'SMTP not configured' };

  // Dynamically import nodemailer to avoid SSR bundling issues when not used
  const nodemailer = await import('nodemailer');

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `${payload.name} <${payload.email}>`,
    to: CONTACT_TO,
    subject: payload.subject || `New message from portfolio contact form`,
    text: payload.message,
    html: `<p><strong>Name:</strong> ${payload.name}</p>
           <p><strong>Email:</strong> ${payload.email}</p>
           <p><strong>Subject:</strong> ${payload.subject || ''}</p>
           <p><strong>Message:</strong></p>
           <p>${payload.message.replace(/\n/g, '<br/>')}</p>`,
  });

  return { sent: true, info };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload: ContactPayload = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      subject: body.subject ? String(body.subject).trim() : undefined,
      message: String(body.message || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Try to send email if configured
    const emailResult = await trySendEmail(payload);

    // Persist submissions to a local JSON file as fallback
    try {
      const dataDir = path.join(process.cwd(), 'public', 'submissions');
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      const filePath = path.join(dataDir, `${Date.now()}.json`);
      fs.writeFileSync(filePath, JSON.stringify({ payload, emailResult, receivedAt: new Date().toISOString() }, null, 2));
    } catch (err) {
      // swallow file errors but report in response
      console.error('Failed to write submission file', err);
    }

    return NextResponse.json({ ok: true, emailResult });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
