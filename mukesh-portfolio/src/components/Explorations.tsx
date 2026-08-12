import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Lightbox, { LightboxItem } from "./Lightbox";

gsap.registerPlugin(ScrollTrigger);

const CARDS: (LightboxItem & { rotate: number; column: 0 | 1 })[] = [
  {
    title: "Video Editing",
    rotate: -6,
    column: 0,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    description: "Cutting, pacing and sequencing footage into a coherent story.",
  },
  {
    title: "Motion Graphics",
    rotate: 4,
    column: 1,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    description: "Animated type and graphic elements built frame by frame.",
  },
  {
    title: "Poster Design",
    rotate: 3,
    column: 0,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    description: "Layout, contrast and typography experiments for print-style posters.",
  },
  {
    title: "Typography",
    rotate: -3,
    column: 1,
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=800&auto=format&fit=crop",
    description: "Exploring type as a visual and expressive design element.",
  },
  {
    title: "Digital Design",
    rotate: 5,
    column: 0,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    description: "Interface and graphic explorations across digital formats.",
  },
  {
    title: "Creative Experiments",
    rotate: -4,
    column: 1,
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    description: "Small self-directed experiments across editing, motion and design.",
  },
];

function Explorations() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const colARef = useRef<HTMLDivElement | null>(null);
  const colBRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<LightboxItem | null>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      const intensity = isMobile ? 0.35 : 1;

      if (colARef.current) {
        gsap.to(colARef.current, {
          y: -120 * intensity,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
      if (colBRef.current) {
        gsap.to(colBRef.current, {
          y: 140 * intensity,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [isMobile]);

  const colA = CARDS.filter((c) => c.column === 0);
  const colB = CARDS.filter((c) => c.column === 1);

  return (
    <section className="relative min-h-[300vh] bg-bg">
      <div ref={wrapperRef} className="relative h-full">
        <div ref={contentRef} className="relative h-screen overflow-hidden flex items-center justify-center">
          {/* Center pinned copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-6 max-w-md pointer-events-none"
          >
            <div className="flex items-center justify-center gap-3 mb-4 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-px w-8 bg-stroke" />
              Explorations
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-medium tracking-tight text-text-primary mb-4">
              Visual <span className="font-display italic">playground</span>
            </h2>
            <p className="text-sm md:text-base text-muted mb-8">
              A collection of visual experiments across editing, motion, design and
              digital creativity.
            </p>
            <button
              onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-text-primary text-bg text-sm px-6 py-3 hover-gradient transition-colors"
            >
              Explore Creative Work ↗
            </button>
          </motion.div>

          {/* Parallax card layer */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="grid grid-cols-2 gap-8 md:gap-40 max-w-[1400px] w-full px-6">
              <div ref={colARef} className="flex flex-col gap-8 md:gap-16 items-end">
                {colA.map((card) => (
                  <button
                    key={card.title}
                    onClick={() => setActiveItem(card)}
                    style={{ transform: `rotate(${card.rotate}deg)` }}
                    className="pointer-events-auto aspect-square w-full max-w-[220px] md:max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface group"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-bg/40 flex items-end p-4">
                        <span className="font-display italic text-lg text-text-primary">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div ref={colBRef} className="flex flex-col gap-8 md:gap-16 items-start">
                {colB.map((card) => (
                  <button
                    key={card.title}
                    onClick={() => setActiveItem(card)}
                    style={{ transform: `rotate(${card.rotate}deg)` }}
                    className="pointer-events-auto aspect-square w-full max-w-[220px] md:max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface group"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-bg/40 flex items-end p-4">
                        <span className="font-display italic text-lg text-text-primary">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}

export default Explorations;
