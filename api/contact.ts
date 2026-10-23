import { sendContactEmail, type ContactPayload } from "../server/services/email.js";

// Vercel serverless version of server/routes/contact.ts (same validation, same Resend email service).
function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
    const { fullName, companyName, email, phone, message } = body;

    if (
      !isNonEmptyString(fullName) ||
      !isNonEmptyString(companyName) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(message)
    ) {
      return res.status(400).json({ error: "fullName, companyName, email, and message are required." });
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const payload: ContactPayload = {
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      email: email.trim(),
      phone: isNonEmptyString(phone) ? phone.trim() : undefined,
      message: message.trim(),
    };

    await sendContactEmail(payload);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    const msg = error instanceof Error ? error.message : "Failed to send message. Please try again.";
    return res.status(500).json({ error: msg });
  }
}
