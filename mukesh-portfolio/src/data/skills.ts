export type SkillLevel = "Basic" | "Basic / Intermediate" | "Intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// Skill bar widths are intentionally modest and honest — no inflated
// 90%+ figures for tools still being learned.
export const levelWidth: Record<SkillLevel, number> = {
  Basic: 35,
  "Basic / Intermediate": 50,
  Intermediate: 65,
};

export const skillCategories: SkillCategory[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    skills: [
      { name: "Adobe Premiere Pro", level: "Intermediate" },
      { name: "Adobe After Effects", level: "Intermediate" },
      { name: "CapCut", level: "Basic / Intermediate" },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    skills: [{ name: "Adobe Photoshop", level: "Basic" }],
  },
  {
    id: "office",
    title: "Office",
    skills: [
      { name: "Microsoft Word", level: "Intermediate" },
      { name: "Microsoft Excel", level: "Intermediate" },
      { name: "Microsoft PowerPoint", level: "Intermediate" },
    ],
  },
  {
    id: "web-programming",
    title: "Web & Programming",
    skills: [
      { name: "HTML", level: "Basic" },
      { name: "CSS", level: "Basic" },
      { name: "JavaScript", level: "Basic" },
      { name: "Programming Fundamentals", level: "Basic" },
    ],
  },
];
