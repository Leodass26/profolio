import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 2700;

function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

  // Counter driven by requestAnimationFrame, not setInterval.
  useEffect(() => {
    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const next = Math.round(progress * 100);

      setCount((prev) => (next !== prev ? next : prev));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onComplete, 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotating center words.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between overflow-hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-6 pl-6 md:pt-8 md:pl-10 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-end justify-between px-6 pb-6 md:px-10 md:pb-8">
        <div className="text-[11px] text-muted uppercase tracking-[0.3em]">
          Mukesh.A
        </div>
        <div className="text-6xl md:text-8xl lg:text-9xl font-display tabular-nums text-text-primary leading-none">
          {String(count).padStart(3, "0")}
        </div>
      </div>

      <div className="h-[3px] w-full bg-stroke/50 relative">
        <div
          className="h-full accent-gradient origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137,170,204,0.35)",
          }}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
