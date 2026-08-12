import { motion } from "framer-motion";

const INFO = [
  { label: "Education", value: "B.Sc. Computer Science, 2024 — Present" },
  { label: "Current Status", value: "Fresher" },
  { label: "Focus", value: "Video Editing + Creative Design + Technology" },
  { label: "Location", value: "Chennai, Tamil Nadu" },
];

function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-10 text-xs uppercase tracking-[0.3em] text-muted">
          <span className="h-px w-8 bg-stroke" />
          About me
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-display italic leading-tight text-text-primary mb-8">
              I create through the intersection of technology and visual storytelling.
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-lg">
              I am a B.Sc. Computer Science student with a passion for technology and
              creative media. I have knowledge of video editing, graphic design, and
              programming, and I am eager to learn new skills and build a successful
              career in the creative and IT industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            {INFO.map((item) => (
              <div key={item.label} className="border-t border-stroke pt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-1">
                  {item.label}
                </div>
                <div className="text-sm md:text-base text-text-primary font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
