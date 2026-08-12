import { motion } from "framer-motion";

// Every figure here is drawn directly from the information provided —
// nothing invented (no fake years of experience, clients or awards).
const STATS = [
  { value: "11", label: "Skills & tools in progress" },
  { value: "04", label: "Creative projects featured" },
  { value: "01", label: "Internship completed" },
  { value: "2024", label: "Started B.Sc. Computer Science" },
];

function Stats() {
  return (
    <section className="bg-bg border-y border-stroke py-14 md:py-16">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="text-center md:text-left"
            >
              <div className="font-display italic text-4xl md:text-5xl text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
