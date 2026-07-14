import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Add Property",
    description:
      "Easily upload your property details, including name, location, price, and description. Once submitted, our AI instantly analyzes your listing and matches it with top buyers.",
  },
  {
    num: "02",
    title: "Buyers are scored",
    description:
      "Each buyer receives a dynamic match score based on portfolio gaps, recent activity, fund status, and intent signals — so your team knows exactly who to contact first.",
  },
  {
    num: "03",
    title: "Review ranked shortlist",
    description:
      "AI-generated buyer briefs explain why each contact was selected, with tailored talking points that resonate with their specific investment thesis.",
  },
  {
    num: "04",
    title: "Outreach starts automatically",
    description:
      "Launch personalized outreach sequences in one click — emails, follow-ups, and response tracking all automated and ready in under an hour.",
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;
const COLLAPSED_H = 96;
const EXPANDED_H = 260;

function ProcessStep({
  step,
  isActive,
}: {
  step: (typeof steps)[number];
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isActive ? EXPANDED_H : COLLAPSED_H }}
      transition={{ duration: 0.38, ease: EASE }}
      className="relative w-full overflow-hidden border-b border-white/20"
    >
      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.28 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[110px] font-normal leading-none tracking-tighter text-white md:text-[240px]"
        >
          {step.num}
        </motion.span>

        <div className="relative z-10 w-full pl-[42%] md:pl-[40%]">
          <motion.h3
            animate={{ opacity: isActive ? 1 : 0.55 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="text-lg font-bold text-white md:text-[22px]"
          >
            {step.title}
          </motion.h3>

          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 8,
            }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mt-4 max-w-[600px]"
            style={{ pointerEvents: isActive ? "auto" : "none" }}
          >
            <p className="text-base leading-relaxed text-gray-300 md:text-[18px] md:leading-8">
              {step.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="absolute right-6 top-1/2 -translate-y-1/2"
        >
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gray-400 text-gray-300">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 0.2", "end 0.8"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const segmentSize = 1 / steps.length;
    const next = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor((progress + segmentSize * 0.15) / segmentSize)),
    );

    if (next !== activeRef.current) {
      activeRef.current = next;
      setActive(next);
    }
  });

  return (
    <section id="how-it-works" className="relative scroll-mt-24 bg-[#2d2d2d]">
      <div
        ref={scrollRef}
        style={{ height: `${steps.length * 50}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-10 md:py-14">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
            <p className="mb-4 text-sm text-gray-300 md:mb-5">//how it works</p>
            <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white md:text-[3.5rem] md:leading-[1.1]">
              From listing to outreach in <br className="hidden md:block" />
              one simple flow.
            </h2>
          </div>

          <div className="relative z-10 mx-auto mt-8 w-full max-w-6xl border-t border-white/20 md:mt-10">
            {steps.map((step, i) => (
              <ProcessStep key={step.num} step={step} isActive={active === i} />
            ))}
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 z-0 h-40 w-full opacity-60 blur-[90px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(56,189,248,0.7) 0%, rgba(139,92,246,0.7) 50%, rgba(234,179,8,0.6) 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
