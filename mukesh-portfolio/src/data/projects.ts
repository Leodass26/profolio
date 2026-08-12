export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  image: string;
  span: string; // tailwind col-span classes for the bento grid
}

// These are personal / self-directed creative projects and portfolio
// experiments — not client or agency work.
export const projects: Project[] = [
  {
    id: "cinematic-video-edit",
    index: "01",
    title: "Cinematic Video Edit",
    category: "Creative Project",
    description:
      "A narrative-driven edit exploring pacing, color and sound design in Premiere Pro.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-7",
  },
  {
    id: "motion-graphics",
    index: "02",
    title: "Motion Graphics",
    category: "Personal Project",
    description:
      "Kinetic type and animated graphics built with After Effects for short-form content.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    id: "social-media-edit",
    index: "03",
    title: "Social Media Edit",
    category: "Portfolio Experiment",
    description:
      "Fast-cut vertical edit designed and finished entirely in CapCut for social platforms.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    id: "creative-poster-design",
    index: "04",
    title: "Creative Poster Design",
    category: "Personal Project",
    description:
      "A typography-led poster series designed in Photoshop exploring layout and contrast.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-7",
  },
];
