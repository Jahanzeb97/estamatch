export type ContactFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  message: string;
};

function apiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
  return configured || "";
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(`${apiBaseUrl()}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const payload = (await response.json().catch(() => ({}))) as { error?: string };

  if (!response.ok) {
    throw new Error(payload.error || "Failed to send your message. Please try again.");
  }
}
