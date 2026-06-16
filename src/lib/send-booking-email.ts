import nodemailer from "nodemailer";
import type { BookingFormData } from "@/lib/booking-schema";

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
          <td style="padding:12px 16px;border-bottom:1px solid #e8e4df;color:#6b6560;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;width:140px;vertical-align:top;">
            ${label}
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #e8e4df;color:#1a1814;font-size:15px;line-height:1.6;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="margin:0;padding:32px 16px;background:#faf8f5;font-family:Georgia,'Times New Roman',serif;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e8e4df;">
        <div style="padding:28px 24px 20px;border-bottom:1px solid #e8e4df;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#6f4428;">
            Innocent Photos
          </p>
          <h1 style="margin:0;font-size:28px;font-weight:500;color:#1a1814;">
            New booking inquiry
          </h1>
        </div>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
          ${bodyRows}
        </table>
        <div style="padding:18px 24px 24px;background:#faf8f5;color:#6b6560;font-size:12px;line-height:1.6;">
          Sent from the Innocent Photos booking form.
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
