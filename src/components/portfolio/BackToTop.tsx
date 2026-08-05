import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating scroll-to-top control. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow((current) => {
      const next = window.scrollY > window.innerHeight;
      return current === next ? current : next;
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-accent hover:text-accent sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={16} className="relative" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
