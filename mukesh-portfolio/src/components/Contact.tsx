import { motion } from "framer-motion";

const CONTACT = [
  { label: "Email", value: "mukesh2086567@gmail.com", href: "mailto:mukesh2086567@gmail.com" },
  { label: "Phone", value: "+91 9342284416", href: "tel:+919342284416" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mukesh-a-840b59374",
    href: "https://linkedin.com/in/mukesh-a-840b59374",
  },
  {
    label: "Address",
    value: "No 16, Reddy Street, West Tambaram, CH-45",
    href: null,
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            <span className="h-px w-8 bg-stroke" />
            Get in touch
          </div>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-6">
            Let&apos;s create something together.
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto">
            To obtain an opportunity where I can apply my knowledge of video editing,
            creative design, and computer science while continuously developing my
            technical and professional skills.
          </p>
          <motion.a
            href="mailto:mukesh2086567@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-text-primary text-bg text-sm px-8 py-4 hover:bg-bg hover:text-text-primary border border-transparent hover:border-stroke transition-colors"
          >
            Say Hello ↗
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CONTACT.map((item, i) => {
            const cardClass =
              "block rounded-2xl border border-stroke bg-surface/40 p-5 hover:bg-surface transition-colors";
            const inner = (
              <>
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  {item.label}
                </div>
                <div className="text-sm text-text-primary break-words">{item.value}</div>
              </>
            );

            return item.href ? (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                className={cardClass}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                className={cardClass}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
