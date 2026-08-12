import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Options {
  y?: number;
  opacityFrom?: number;
  duration?: number;
  start?: string;
}

/**
 * Generic GSAP ScrollTrigger reveal hook — fades + slides an element
 * in once it enters the viewport. Cleans up its ScrollTrigger instance
 * on unmount.
 */
export function useScrollAnimation<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
