import { AnimatePresence, motion } from "framer-motion";

export interface LightboxItem {
  title: string;
  image: string;
  description: string;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] bg-bg/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full rounded-3xl overflow-hidden border border-stroke bg-surface"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-bg/70 backdrop-blur flex items-center justify-center text-text-primary hover-gradient transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <img src={item.image} alt={item.title} className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="font-display italic text-2xl text-text-primary mb-2">
                {item.title}
              </div>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;
