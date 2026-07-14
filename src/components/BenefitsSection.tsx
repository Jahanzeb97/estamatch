import { motion } from "framer-motion";

const benefits = [
  {
    title: "Real buyer data",
    description:
      "This is a working system, not a prototype or pitch deck. It's been built and deployed for real estate clients today.",
  },
  {
    title: "Real listing workflow",
    description:
      "The scoring system is calibrated against actual buyer behavior and acquisition patterns — not generic filters.",
  },
  {
    title: "Real outreach output",
    description:
      "Built for acquisition teams and brokerage owners who close deals — not for people who just want to demo software.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-extrabold tracking-tight text-gray-900 md:text-[52px] md:leading-[1.1]">
          A real system. Not another<br className="hidden md:block" /> AI demo.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-16 w-full max-w-[1000px] md:mt-24"
        >
          {/* Multi-color Glow Effect Behind the Card */}
          <div
            className="pointer-events-none absolute -inset-6 z-0 rounded-[2rem] blur-[60px] md:-inset-8 md:blur-[80px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(216, 251, 133, 0.75) 0%, rgba(249, 168, 212, 0.6) 50%, rgba(147, 197, 253, 0.8) 100%)",
            }}
            aria-hidden
          />

          {/* Dark Card Container */}
          <div className="relative z-10 rounded-xl bg-[#2D2D2D] px-8 py-10 shadow-2xl md:rounded-2xl md:px-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-left">
                  <h3 className="text-lg font-semibold text-white md:text-[19px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-[#D1D5DB]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}