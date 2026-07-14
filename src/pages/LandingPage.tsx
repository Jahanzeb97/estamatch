import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { ProcessSection } from "../components/ProcessSection";
import { BuyerInsights } from "../components/BuyerInsights";
import { BenefitsSection } from "../components/BenefitsSection";
import { OutreachSection } from "../components/OutreachSection";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <BuyerInsights />
        <BenefitsSection />
        <OutreachSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
