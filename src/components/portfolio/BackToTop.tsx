import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating scroll-to-top control with a progress ring. */
export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setShow(v > 0.12));

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          key="to-top"
          type="button"
          aria-label="Back to top"
          data-cursor="Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent sm:bottom-8 sm:right-8"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
            <motion.circle
              cx="24"
              cy="24"
              r="23"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              pathLength={1}
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp size={16} className="relative" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
