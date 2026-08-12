export interface JournalEntry {
  id: string;
  title: string;
  readTime: string;
  year: string;
  tag: "Creative Note";
}

// Creative notes / topics Mukesh is exploring — not published articles.
export const journalEntries: JournalEntry[] = [
  {
    id: "learning-motion-through-editing",
    title: "Learning Motion Through Editing",
    readTime: "3 min",
    year: "2026",
    tag: "Creative Note",
  },
  {
    id: "building-with-technology",
    title: "Building With Technology",
    readTime: "4 min",
    year: "2026",
    tag: "Creative Note",
  },
  {
    id: "exploring-visual-storytelling",
    title: "Exploring Visual Storytelling",
    readTime: "3 min",
    year: "2025",
    tag: "Creative Note",
  },
  {
    id: "from-student-to-creative-professional",
    title: "From Student To Creative Professional",
    readTime: "5 min",
    year: "2025",
    tag: "Creative Note",
  },
];
