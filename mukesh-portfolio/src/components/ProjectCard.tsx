import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-3xl border border-stroke bg-surface aspect-[4/5] md:aspect-[4/3] " +
        project.span
      }
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="halftone absolute inset-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-bg/70 backdrop-blur-lg flex items-center justify-center"
      >
        <div className="relative rounded-full p-[1px]">
          <span className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift" />
          <span className="relative flex items-center gap-2 rounded-full bg-bg px-5 py-2 text-xs uppercase tracking-[0.15em] text-text-primary">
            View — <span className="font-display italic normal-case text-sm">{project.title}</span>
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between">
        <div>
          <div className="text-xs text-muted mb-1">
            {project.index} — {project.category}
          </div>
          <div className="font-display italic text-xl md:text-2xl text-text-primary">
            {project.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
