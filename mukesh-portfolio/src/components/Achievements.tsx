import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ADDITIONAL = [
  "Participated in College Cultural Events",
  "Participated in Technical Events",
  "Full Stack Java Internship Training",
  "Beginner DJ",
];

function Achievements() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading eyebrow="Recognition" heading="Achievements" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-7 rounded-3xl border border-stroke bg-surface p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
              Primary Achievement
            </div>
            <div>
              <div className="font-display italic text-3xl md:text-4xl text-text-primary mb-4">
                Student President
              </div>
              <p className="text-sm md:text-base text-muted max-w-md">
                Represented students, coordinated college activities, and served as a
                bridge between students and faculty.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-4">
            {ADDITIONAL.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                className="rounded-2xl border border-stroke bg-surface/40 px-6 py-4 text-sm text-text-primary flex items-center gap-3"
              >
                <span className="h-1.5 w-1.5 rounded-full accent-gradient shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
