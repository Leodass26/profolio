import { motion } from "framer-motion";
import { skillCategories, levelWidth } from "../data/skills";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section id="skills" className="bg-bg py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Capabilities"
          heading={
            <>
              Skills &amp; <span className="font-display italic">Tools</span>
            </>
          }
          subtext="Tools and technologies I use across editing, design and development."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIndex * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl border border-stroke bg-surface p-6 md:p-8"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
                {category.title}
              </div>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-primary">{skill.name}</span>
                      <span className="text-xs text-muted">{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-stroke overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelWidth[skill.level]}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full accent-gradient rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
