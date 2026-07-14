import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ContactFormSection } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export function ContactPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      <main>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
