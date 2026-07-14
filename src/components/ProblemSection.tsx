import { motion } from "framer-motion";
import { SalesLink } from "./ui";

const cards = [
  {
    eyebrow: "//the worry",
    text: "Manual work is killing your growth, draining time on repetitive tasks and broken systems. Fix the foundation to unlock real scale.",
    title: "2–5 days of manual work",
    subtitle: "Sifting through your buyer list to find who fits takes days every time a new listing drops.",
  },
  {
    eyebrow: "//cost of uncertainty",
    text: "Without a clear fit signal, you're guessing who the best buyer is, leading to wasted outreach and missed deals.",
    title: "No clear fit signal",
    subtitle: "Guessing who the best buyer is leads to wasted outreach and missed conversations with the right people.",
  },
  {
    eyebrow: "//missed timing",
    text: "Generic, delayed emails miss the mark. AI automation sends personalized messages instantly, ensuring timely, targeted outreach that drives better engagement.",
    title: "Generic, delayed outreach",
    subtitle: "By the time your email goes out, it's a template blast — not a targeted message that lands.",
  },
];

export function ProblemSection() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm text-gray-500">//the problem</p>
          <h2 className="text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#1a1a1a] md:text-[3.5rem]">
            Most teams lose the deal <br className="hidden md:block" />
            before outreach even starts.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Your buyer list may be valuable, but if your team needs days to sort it, rank it, and write
            outreach, the best conversations are already happening somewhere else.
          </p>
        </div>

        {/* Features List */}
        <div className="mt-24 space-y-28 md:mt-32">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid items-center gap-12 md:grid-cols-2 md:gap-24"
            >
              {/* Left Column: Text */}
              <div className="space-y-3 md:pr-10">
                <p className="text-sm text-gray-500">{card.eyebrow}</p>
                <p className="text-[22px] font-light leading-relaxed text-[#333333]">
                  {card.text}
                </p>
              </div>

              {/* Right Column: Dark Card with Specific Glow */}
              <div className="relative">
                {/* 
                  UPDATED: Colors ko thora dark aur saturated kar diya hai.
                  Opacity bhi thori barha di hai (0.95 tak) taake solid feel aaye.
                */}
                <div 
                  className="absolute -bottom-6 -left-6 z-0 h-[90%] w-[100%] rounded-[24px] blur-[50px] opacity-100"
                  style={{
                    background: "linear-gradient(90deg, rgba(90,210,210,0.95) 0%, rgba(225,135,215,0.95) 50%, rgba(235,185,110,0.85) 80%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />
                
                <div className="relative z-10 rounded-[20px] border border-white/10 bg-[#2d2d2d] p-8 md:p-10">
                  <h3 className="text-3xl font-bold text-white md:text-[34px] md:leading-[1.2]">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-gray-300">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 text-center md:mt-40">
          <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-5xl md:leading-[1.15]">
            By the time you reach out... <br className="hidden md:block" /> 
            someone else already has.
          </h2>
          
          <div className="relative mt-12 inline-block">
            {/* 
              UPDATED Button Glow: Iske colors ko bhi dark aur punchy kar diya h for consistency.
            */}
            <div 
              className="absolute -inset-4 z-0 rounded-full opacity-80 blur-[40px]"
              style={{
                background: "linear-gradient(90deg, rgba(96,165,250,0.9), rgba(244,114,182,0.9), rgba(192,132,252,0.9))"
              }}
              aria-hidden="true"
            />
            {/* Override styles with !important utility prefix if your base Button component has conflicting defaults */}
            <SalesLink className="relative z-10 !rounded-xl px-8 py-4 text-base font-medium shadow-lg">
              Connect with Sales
            </SalesLink>
          </div>
        </div>

      </div>
    </section>
  );
}