import { NextResponse } from "next/server";
// Sends email through Resend ONLY if RESEND_API_KEY and CONTACT_TO_EMAIL are set in .env.local / Vercel.
// Otherwise it honestly reports that email sending isn't configured. Secrets stay on the server.
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b || typeof b.name !== "string" || typeof b.email !== "string" || typeof b.details !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email))
    return NextResponse.json({ message: "Invalid form data." }, { status: 400 });
  if (b.website) return NextResponse.json({ message: "Thanks!" }); // honeypot: bots fill this hidden field
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ message: "The contact form isn't connected to an email service yet, so your message was not sent. Please reach out by another method." }, { status: 501 });
  const esc = (s: unknown) => String(s ?? "").slice(0, 3000).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev", to, reply_to: b.email, subject: `New SANVEX enquiry: ${esc(b.service)}`,
      html: `<p><b>${esc(b.name)}</b> (${esc(b.email)})<br>Company: ${esc(b.company)}<br>Budget: ${esc(b.budget)}</p><p>${esc(b.details)}</p>` }),
  });
  return res.ok ? NextResponse.json({ message: "Thank you! We'll be in touch soon." }) : NextResponse.json({ message: "We couldn't send your message. Please try again later." }, { status: 502 });
}
