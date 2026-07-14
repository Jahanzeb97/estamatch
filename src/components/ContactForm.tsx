import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass =
  "h-12 w-full rounded-lg border border-white/40 bg-white/5 px-4 text-sm text-white placeholder-white/60 outline-none transition-all focus:border-white focus:bg-white/10 focus:ring-1 focus:ring-white/50";

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f6f9] py-20 md:py-28">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(216,251,133,0.35) 0%, rgba(249,168,212,0.25) 45%, rgba(147,197,253,0.35) 100%)",
        }}
        aria-hidden
      />

      {/* Success toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed left-1/2 top-8 z-50 w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]"
          >
            <div className="relative flex items-start gap-3 pl-10">
              <div
                className="absolute left-2 top-1.5 h-8 w-8 rounded-full blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(236,72,153,0.8) 0%, rgba(168,85,247,0.8) 100%)",
                }}
                aria-hidden
              />
              <div className="flex-1">
                <h4 className="text-[15px] font-bold text-gray-900">Message Sent!</h4>
                <p className="mt-1 text-[12px] leading-snug text-gray-500">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium tracking-widest text-gray-500">
          // GET STARTED
        </p>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#2d3342] md:text-[52px] md:leading-tight">
          Let&apos;s find the right buyers for your listings.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500 md:text-lg">
          Our team will walk you through a personalized demo of the AI matching
          system using your own data samples.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/20 p-8 text-left shadow-2xl backdrop-blur-xl md:p-12"
          style={{ background: "rgba(152, 159, 174, 0.65)" }}
        >
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Full Name</label>
                <input type="text" required placeholder="Jane Cooper" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Company Name</label>
                <input type="text" required placeholder="Acme Real Estate" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Email Address</label>
                <input type="email" required placeholder="jane@example.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Phone Number</label>
                <input type="tel" placeholder="(555) 000-0000" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Role / Title</label>
                <input type="text" placeholder="Managing Broker" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Monthly Listings</label>
                <input type="text" placeholder="e.g. 15-20" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Message / Project Notes</label>
              <textarea
                required
                placeholder="Tell us about your team and specific automation goals..."
                className="h-32 w-full resize-none rounded-lg border border-white/40 bg-white/5 p-4 text-sm text-white placeholder-white/60 outline-none transition-all focus:border-white focus:bg-white/10 focus:ring-1 focus:ring-white/50"
              />
            </div>

            <div className="mt-2 flex flex-col items-center gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-[#2d2d2d] px-10 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-black"
              >
                Send
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Average response time: under 2 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
