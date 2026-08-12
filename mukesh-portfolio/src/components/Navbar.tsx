import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={
          "inline-flex items-center gap-1 rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 " +
          (scrolled ? "shadow-md shadow-black/10" : "")
        }
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigate("home")}
          className="group relative h-9 w-9 shrink-0 rounded-full p-[1px] mr-1"
          aria-label="Back to top"
        >
          <span className="absolute inset-0 rounded-full accent-gradient transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-bg">
            <span className="font-display italic text-[13px] text-text-primary">MA</span>
          </span>
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="relative px-4 py-2 text-sm rounded-full transition-colors"
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-stroke/50"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={
                  "relative z-10 " +
                  (active === link.id ? "text-text-primary" : "text-muted hover:text-text-primary")
                }
              >
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden px-3 py-2 text-xs rounded-full text-muted hover:text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-xs animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="rounded-3xl border border-white/10 bg-surface backdrop-blur-md p-2 flex flex-col">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={
                  "text-left px-4 py-3 text-xs rounded-2xl transition-colors " +
                  (active === link.id
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary")
                }
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
