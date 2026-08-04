import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function useIsDesktop() {
  const [is, setIs] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setIs(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return is;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.05,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const desktop = useIsDesktop();

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.4 }}
      onPointerMove={(e) => {
        if (!desktop || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * strength,
          y: (e.clientY - (r.top + r.height / 2)) * strength,
        });
      }}
      onPointerLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}
