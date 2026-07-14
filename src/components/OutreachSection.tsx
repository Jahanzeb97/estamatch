import { motion } from "framer-motion";

export function OutreachSection() {
  return (
    <section id="outreach" className="scroll-mt-24 overflow-hidden bg-[#F8F9FA] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-medium tracking-wider text-gray-500">
            //outreach
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-[46px] md:leading-tight">
            Your outreach happens<br className="hidden md:block" /> instantly.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-[17px]">
            From ranked buyer to opened email, without lifting a finger. You see who was
            contacted, when they opened, and who replied - all in one place.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-16 w-full max-w-5xl md:mt-20"
        >
          {/* Ambient glow behind dashboard image */}
          <div
            className="pointer-events-none absolute left-1/2 top-[30%] z-0 h-[200px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] md:h-[250px] md:w-[90%] md:blur-[100px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(216, 251, 133, 0.45) 0%, rgba(249, 168, 212, 0.45) 50%, rgba(147, 197, 253, 0.45) 100%)",
            }}
            aria-hidden
          />

          {/* Dashboard Image (Removed border and shadow classes) */}
          <div className="relative z-10 mx-auto w-full">
            <img
              src="/Frame2.png"
              alt="Outreach Activity Feed Dashboard"
              className="block h-auto w-full"
              loading="lazy"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}