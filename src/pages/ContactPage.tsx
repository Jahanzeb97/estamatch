import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteNav, SiteFooter } from "../components/SiteChrome";
import { ContactFormSection } from "../components/ContactForm";

export function ContactPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <SiteNav />
      <main>
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}
