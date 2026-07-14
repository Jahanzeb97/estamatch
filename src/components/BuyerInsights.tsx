import { motion } from "framer-motion";

const callouts = [
  {
    title: "Strategic fit",
    subtitle: "Long-term investment alignment",
    // Overlaps the top-left edge
    className: "absolute -top-12 -left-4 md:-top-6 md:-left-12 lg:-top-8 lg:-left-16",
    glow: false,
  },
  {
    title: "Deal size",
    subtitle: "Budget alignment with buyer capacity",
    // Overlaps the right edge, slightly down from top
    className: "absolute top-10 -right-4 md:top-12 md:-right-12 lg:top-16 lg:-right-16",
    glow: true,
    glowColor:
      "radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)",
  },
  {
    title: "Asset class",
    subtitle: "Property type preferences",
    // Overlaps the right edge, lower down
    className: "absolute bottom-16 -right-4 md:bottom-20 md:-right-12 lg:bottom-24 lg:-right-16",
    glow: true,
    glowColor:
      "radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)",
  },
  {
    title: "Built on real buyer data",
    subtitle: "Geographic proximity and market fit",
    // Overlaps the bottom-left edge
    className: "absolute -bottom-12 -left-4 md:-bottom-6 md:-left-12 lg:-bottom-8 lg:-left-16",
    glow: true,
    glowColor:
      "radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, rgba(251, 207, 232, 0.2) 50%, transparent 70%)",
  },
];

function CalloutCard({
  title,
  subtitle,
  className,
  glow,
  glowColor,
}: (typeof callouts)[number]) {
  return (
    <div className={`z-20 w-max max-w-[180px] md:max-w-[240px] ${className}`}>
      {glow && glowColor && (
        <div
          className="pointer-events-none absolute -inset-6 rounded-2xl blur-2xl"
          style={{ background: glowColor }}
          aria-hidden
        />
      )}
      <div className="glow-card relative rounded-xl bg-[#222222] px-4 py-3 md:px-5 md:py-4 shadow-xl border border-white/5">
        <p className="text-sm font-semibold text-white md:text-[15px]">{title}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-gray-400 md:text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function BuyerInsights() {
  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-[42px] md:leading-tight">
            Know exactly why each<br className="hidden md:block" /> buyer is selected.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-[17px]">
            Every buyer is scored based on factors like location, budget, asset class, and intent.
            Instead of guessing, you get clear visibility into why a buyer is the right fit for your listing.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-20 w-full max-w-5xl"
        >
          {/* Ambient center glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] md:h-[400px] md:w-[500px]"
            style={{
              background:
                "radial-gradient(circle, rgba(251, 207, 232, 0.4) 0%, rgba(196, 181, 253, 0.3) 40%, rgba(147, 197, 253, 0.2) 70%, transparent 100%)",
            }}
            aria-hidden
          />

          {/* Main Image & Overlapping Cards Container */}
          <div className="relative z-10 mx-auto w-full">
            {/* Desktop Floating Cards */}
            <div className="hidden md:block">
              {callouts.map((callout) => (
                <CalloutCard key={callout.title} {...callout} />
              ))}
            </div>

            {/* Dashboard Image */}
            <img
              src="/secondary-dashboard-preview.png"
              alt="Buyer scoring dashboard with AI match scores and buyer profiles"
              className="relative z-10 block h-auto w-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-900/5"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Mobile Layout (Cards stack neatly below the image instead of floating off-screen) */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
            {callouts.map((callout) => (
              <div key={callout.title} className="relative z-20 w-full">
                <div className="h-full rounded-xl bg-[#222222] px-4 py-4 shadow-lg border border-white/5">
                  <p className="text-sm font-semibold text-white">{callout.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                    {callout.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}