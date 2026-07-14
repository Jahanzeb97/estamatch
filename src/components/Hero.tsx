import { motion } from "framer-motion";
import { SalesLink } from "./ui";
import { DashboardPreview } from "./DashboardPreview";
import { AgencyLogos } from "./AgencyLogos";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f9f9] pb-16 pt-14 md:pb-24 md:pt-16">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Pre-headline - Darkened for better contrast */}
          <p className="mb-8 text-sm font-medium text-[#666666]">
            AI buyer matching for real estate teams
          </p>

          <div className="relative mx-auto max-w-4xl">
            {/* 
              Background Glow
              Changed from -z-10 to z-0 to prevent it from hiding behind the section background.
              Swapped complex gradients for simpler Tailwind background colors + heavy blur.
            */}
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible"
              aria-hidden
            >
              {/* Cyan / Blue Glow */}
              <div className="absolute left-[10%] top-1/2 h-[220px] w-[250px] -translate-y-1/2 rounded-full bg-[#38bdf8] opacity-40 blur-[80px]" />
              {/* Magenta / Pink Glow */}
              <div className="absolute left-[40%] top-1/2 h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec4899] opacity-40 blur-[90px]" />
              {/* Soft Purple Glow */}
              <div className="absolute left-[70%] top-1/2 h-[220px] w-[250px] -translate-y-1/2 rounded-full bg-[#d8b4fe] opacity-40 blur-[80px]" />
            </div>

            {/* Headline - Added relative z-10 to sit above the glow, added manual break for md screens */}
            <h1 className="relative z-10 text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#1a1a1a] md:text-[4rem] md:leading-[1.1]">
              Find the right buyers for your <br className="hidden md:block" />
              property in minutes, not days.
            </h1>
          </div>

          {/* Subheadline - Darkened to #333333 and increased max-width */}
          <p className="mx-auto mt-6 max-w-[800px] text-base leading-relaxed text-[#333333] md:text-[18px] md:leading-8">
            We built an AI system that scores your buyer database against every
            new listing, ranks the best-fit buyers, and prepares targeted
            outreach before your team loses days manually sorting contacts.
          </p>

          <div className="mt-10">
            {/* Button - Added !rounded-xl to override pill shape, increased padding */}
            <SalesLink className="!rounded-xl px-10 py-4 text-base font-medium">
              Connect with Sales
            </SalesLink>
          </div>

          {/* Footer Text - Darkened and increased font size slightly to match design */}
          <p className="mt-8 text-base text-[#333333]">
            Test it on one real listing before committing to a full setup.
          </p>
        </motion.div>
      </div>

      <DashboardPreview />
      <AgencyLogos />
    </section>
  );
}