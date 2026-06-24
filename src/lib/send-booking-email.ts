import nodemailer from "nodemailer";
import type { BookingFormData } from "@/lib/booking-schema";

const BRAND = {
  gold: "#6f4428",
  goldLight: "#a67b52",
  goldBright: "#edd9b8",
  charcoal: "#1a1814",
  warmGray: "#6b6560",
  ivory: "#faf8f5",
  border: "#e8e4df",
} as const;

function getMailConfig() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const inbox = process.env.BOOKING_INBOX ?? user;

  if (!user || !pass || !inbox) {
    throw new Error("Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
  }

  return { user, pass, inbox };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildEmailHtml(data: BookingFormData) {
  const rows = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.serviceType],
    ["Event date", data.eventDate],
    ["Location", data.location],
    ["Message", data.message],
  ] as const;

  const bodyRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};width:128px;vertical-align:top;">
            <span style="display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.gold};">
              ${label}
            </span>
          </td>
          <td style="padding:14px 0 14px 20px;border-bottom:1px solid ${BRAND.border};font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.65;color:${BRAND.charcoal};white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="margin:0;padding:40px 16px;background:${BRAND.ivory};">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid ${BRAND.border};border-radius:2px;overflow:hidden;">
        <div style="height:4px;background:linear-gradient(90deg,${BRAND.gold},${BRAND.goldLight},${BRAND.goldBright});"></div>
        <div style="padding:32px 28px 24px;">
          <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:${BRAND.gold};">
            Innocent Photos
          </p>
          <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:500;line-height:1.2;color:${BRAND.charcoal};">
            New booking inquiry
          </h1>
          <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${BRAND.warmGray};">
            A new session request arrived from the website booking form.
          </p>
        </div>
        <div style="padding:0 28px 8px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            ${bodyRows}
          </table>
        </div>
        <div style="margin-top:8px;padding:20px 28px 28px;background:${BRAND.ivory};border-top:1px solid ${BRAND.border};">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${BRAND.warmGray};">
            Reply directly to this email to reach <strong style="color:${BRAND.charcoal};">${escapeHtml(data.fullName)}</strong>.
          </p>
        </div>
      </div>
    </div>
  `;
}

function buildEmailText(data: BookingFormData) {
  return [
    "New booking inquiry — Innocent Photos",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.serviceType}`,
    `Event date: ${data.eventDate}`,
    `Location: ${data.location}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export async function sendBookingEmail(data: BookingFormData) {
  const { user, pass, inbox } = getMailConfig();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Innocent Photos" <${user}>`,
    to: inbox,
    replyTo: `"${data.fullName}" <${data.email}>`,
    subject: `Booking inquiry: ${data.serviceType} — ${data.fullName}`,
    text: buildEmailText(data),
    html: buildEmailHtml(data),
  });
}
