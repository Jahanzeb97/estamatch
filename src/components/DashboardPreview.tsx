import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mt-14 w-full max-w-6xl px-4 md:mt-16 md:px-6"
    >
      <img
        src="/dashboard-preview.png"
        alt="EstaMatch dashboard preview"
        className="block h-auto w-full"
        loading="lazy"
        draggable={false}
      />
    </motion.div>
  );
}
