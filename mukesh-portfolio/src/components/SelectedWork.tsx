import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function SelectedWork() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-px w-8 bg-stroke" />
              Selected Work
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight text-text-primary">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted max-w-md">
              A selection of creative work, experiments and visual projects.
            </p>
          </div>

          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors"
          >
            View all work →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
