import { Resend } from "resend";

export type ContactPayload = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  message: string;
};

function cleanEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  return trimmed.replace(/^["']|["']$/g, "");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(payload: ContactPayload): string {
  const rows = [
    ["Full name", payload.fullName],
    ["Company", payload.companyName],
    ["Email", payload.email],
    ["Phone", payload.phone || "—"],
    ["Message", payload.message],
  ];

  const body = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#334155;vertical-align:top;white-space:nowrap;">
          ${escapeHtml(label)}
        </td>
        <td style="padding:8px 12px;color:#0f172a;white-space:pre-wrap;">
          ${escapeHtml(value)}
        </td>
      </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="margin:0 0 16px;color:#0f172a;">New EstaMatch contact inquiry</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;">
        ${body}
      </table>
    </div>
  `;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const apiKey = cleanEnv(process.env.RESEND_API_KEY);
  const to = cleanEnv(process.env.CONTACT_TO_EMAIL);
  const from =
    cleanEnv(process.env.CONTACT_FROM_EMAIL) || "EstaMatch <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `EstaMatch inquiry from ${payload.fullName} (${payload.companyName})`,
    html: buildEmailHtml(payload),
  });

  if (error) {
    throw new Error(error.message || "Email provider rejected the request.");
  }
}
