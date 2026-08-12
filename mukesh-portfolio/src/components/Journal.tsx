import { motion } from "framer-motion";
import { journalEntries } from "../data/journal";

function Journal() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            <span className="h-px w-8 bg-stroke" />
            Recent thoughts
          </div>
          <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight text-text-primary">
            Creative <span className="font-display italic">notes</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md">
            Personal notes on what I&apos;m learning and exploring — not published articles.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group rounded-[40px] sm:rounded-full p-4 bg-surface/30 border border-stroke hover:bg-surface transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="h-16 w-full sm:w-24 shrink-0 rounded-3xl sm:rounded-full accent-gradient animate-gradient-shift opacity-30 group-hover:opacity-60 transition-opacity" />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pr-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                      {entry.tag}
                    </div>
                    <div className="font-display italic text-lg md:text-xl text-text-primary">
                      {entry.title}
                    </div>
                  </div>
                  <div className="text-xs text-muted whitespace-nowrap">
                    {entry.readTime} read · {entry.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journal;
