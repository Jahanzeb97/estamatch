import { Router } from "express";
import { sendContactEmail, type ContactPayload } from "../services/email.js";

export const contactRouter = Router();

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactRouter.post("/", async (req, res) => {
  try {
    const { fullName, companyName, email, phone, message } = req.body ?? {};

    if (
      !isNonEmptyString(fullName) ||
      !isNonEmptyString(companyName) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(message)
    ) {
      return res.status(400).json({
        error: "fullName, companyName, email, and message are required.",
      });
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
    const message =
      error instanceof Error ? error.message : "Failed to send message. Please try again.";
    return res.status(500).json({ error: message });
  }
});
