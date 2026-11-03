declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaLead(): void {
  try {
    window.fbq?.("track", "Lead");
  } catch {
    // The enquiry already succeeded. A blocked pixel must not change the form.
  }
}
