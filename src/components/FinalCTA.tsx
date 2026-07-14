import { motion } from "framer-motion";
import { SalesLink } from "./ui";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-20 md:py-32">
      {/* Background Ambient Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Bottom Left Green/Cyan Glow */}
        <div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-teal-200/40 blur-[120px]" />
        {/* Bottom Right Orange/Pink Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-orange-200/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label */}
          <p className="mb-6 text-sm font-medium tracking-wider text-gray-500">
            //get started
          </p>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-[#2D3342] md:text-5xl md:leading-tight">
            Want to see who your best buyers are before your next listing goes
            live?
          </h2>

          {/* Horizontal Process Flow */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
            <span className="text-[17px] font-bold text-gray-800 md:text-[19px]">
              Property added
            </span>
            
            {/* Right Arrow (hidden on very small screens, visible on sm and up) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden text-gray-400 sm:block"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>

            {/* Down Arrow (visible only on mobile) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 sm:hidden"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>

            <span className="text-[17px] font-bold text-gray-800 md:text-[19px]">
              Buyers ranked
            </span>

            {/* Right Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden text-gray-400 sm:block"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>

            {/* Down Arrow (mobile) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 sm:hidden"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>

            <span className="text-[17px] font-bold text-gray-800 md:text-[19px]">
              Emails sent
            </span>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <SalesLink className="!rounded-xl px-8 py-3.5 text-[15px] font-semibold shadow-lg">
              Connect with Sales
            </SalesLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}