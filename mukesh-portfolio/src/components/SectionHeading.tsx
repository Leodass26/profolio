import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  heading: ReactNode;
  subtext?: string;
  align?: "left" | "center";
}

function SectionHeading({ eyebrow, heading, subtext, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <div
        className={
          "flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.3em] text-muted " +
          (align === "center" ? "justify-center" : "")
        }
      >
        <span className="h-px w-8 bg-stroke" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight text-text-primary">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-sm md:text-base text-muted max-w-md">{subtext}</p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
