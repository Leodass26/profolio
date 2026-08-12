# Mukesh.A — Portfolio

A cinematic, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS,
GSAP (+ ScrollTrigger), Framer Motion and hls.js.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     # LoadingScreen, Navbar, Hero, About, SelectedWork,
│                    # Explorations, Journal, Skills, Experience,
│                    # Achievements, Stats, Contact, Footer, HLSVideo,
│                    # ProjectCard, SectionHeading, Lightbox
├── hooks/          # useHLSVideo, useScrollAnimation, useMediaQuery
├── data/           # projects.ts, skills.ts, journal.ts
├── pages/          # Index.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Notes

- The theme is forced dark — there is no light-mode toggle, per the design brief.
- Skill levels and stats reflect only what was provided (Basic / Intermediate,
  no client names, no invented years of experience or awards).
- The hero background is a live HLS (.m3u8) stream played through `hls.js`,
  with native fallback for Safari/iOS.
- Sample project/exploration thumbnails use royalty-free Unsplash images as
  honest placeholders — swap the URLs in `src/data/projects.ts` and
  `src/components/Explorations.tsx` for real work whenever it's ready.
