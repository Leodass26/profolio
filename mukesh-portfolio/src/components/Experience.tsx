import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ENTRIES = [
  {
    period: "2026 — Present",
    title: "Fresher",
    org: null as string | null,
    description:
      "Looking for an opportunity to apply my technical and creative skills while gaining professional experience.",
  },
  {
    period: "Completed",
    title: "Full Stack Java Intern",
    org: "Skill Across Institute",
    description:
      "Completed Full Stack Java Internship Training and built basic projects to strengthen programming and problem-solving skills.",
  },
];

function Experience() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading eyebrow="Journey" heading="Experience" />

        <div className="mt-14 relative pl-8 md:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stroke" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-px accent-gradient"
          />

          <div className="flex flex-col gap-14">
            {ENTRIES.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <span className="absolute -left-[41px] md:-left-[49px] top-1.5 h-2.5 w-2.5 rounded-full accent-gradient" />
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  {entry.period}
                </div>
                <div className="font-display italic text-2xl md:text-3xl text-text-primary mb-1">
                  {entry.title}
                </div>
                {entry.org && (
                  <div className="text-sm text-muted mb-3">{entry.org}</div>
                )}
                <p className="text-sm md:text-base text-muted max-w-lg">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
