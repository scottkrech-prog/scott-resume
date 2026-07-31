import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

type ApiResponse = {error?: string; success?: true};

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

const isString = (value: unknown): value is string => typeof value === 'string';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({error: 'Method not allowed.'});
  }

  const {email, message, name} = (req.body || {}) as ContactPayload;
  if (!isString(name) || !isString(email) || !isString(message)) {
    return res.status(400).json({error: 'Please complete your name, email, and message.'});
  }

  const cleanName = name.trim().slice(0, 100);
  const cleanEmail = email.trim().slice(0, 254);
  const cleanMessage = message.trim().slice(0, 250);
  if (!cleanName || !/^\S+@\S+\.\S+$/.test(cleanEmail) || !cleanMessage) {
    return res.status(400).json({error: 'Please provide a valid name, email, and message.'});
  }

  const {CONTACT_TO, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER} = process.env;
  if (!CONTACT_TO || !SMTP_HOST || !SMTP_PASS || !SMTP_USER) {
    console.error('Contact email is not configured.');
    return res.status(503).json({error: 'The contact form is temporarily unavailable. Please try again shortly.'});
  }

  try {
    const transporter = nodemailer.createTransport({
      auth: {pass: SMTP_PASS, user: SMTP_USER},
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: Number(SMTP_PORT || 465) === 465,
    });

    await transporter.sendMail({
      from: `"Scott Krech Portfolio" <${SMTP_USER}>`,
      html: `<h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>`,
      replyTo: cleanEmail,
      subject: `Portfolio contact from ${cleanName}`,
      text: `New portfolio contact\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      to: CONTACT_TO,
    });

    return res.status(200).json({success: true});
  } catch (error) {
    console.error('Contact email failed:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(502).json({error: 'Message could not be sent. Please try again shortly.'});
  }
}
