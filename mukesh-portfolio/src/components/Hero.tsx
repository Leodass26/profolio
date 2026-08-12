import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import HLSVideo from "./HLSVideo";

const ROLES = ["Video Editor", "Creative Designer", "Developer", "Computer Science Student"];
const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        0
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen h-[100svh] overflow-hidden flex items-center justify-center"
    >
      <HLSVideo src={HLS_SRC} />
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(var(--bg)), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="blur-in mb-8 text-xs text-muted uppercase tracking-[0.3em]">
          Creative Portfolio &apos;26
        </div>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary">
          Mukesh.A
        </h1>

        <p className="blur-in mt-6 text-base md:text-lg text-text-primary">
          A{" "}
          <span key={roleIndex} className="font-display italic animate-role-fade-in inline-block">
            {ROLES[roleIndex]}
          </span>{" "}
          creating visual experiences.
        </p>

        <p className="blur-in mt-6 text-sm md:text-base text-muted max-w-md mb-12">
          Creating engaging visual experiences through video editing, design and technology.
        </p>

        <div className="blur-in flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg transition-colors hover:bg-bg hover:text-text-primary border border-transparent hover:border-stroke"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg/60 text-text-primary transition-colors hover:border-transparent hover-gradient"
          >
            Let&apos;s Connect ↗
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute left-0 top-0 h-3 w-px bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
