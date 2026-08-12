function Footer() {
  return (
    <footer className="bg-bg border-t border-stroke py-8">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display italic text-lg text-text-primary">Mukesh.A</div>
        <div className="flex items-center gap-6 text-xs text-muted uppercase tracking-[0.15em]">
          <a
            href="https://linkedin.com/in/mukesh-a-840b59374"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:mukesh2086567@gmail.com" className="hover:text-text-primary transition-colors">
            Email
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-text-primary transition-colors"
          >
            Back to top
          </button>
        </div>
        <div className="text-xs text-muted">© 2026 Mukesh.A</div>
      </div>
    </footer>
  );
}

export default Footer;
