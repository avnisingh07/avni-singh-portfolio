import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
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

/** Line-by-line mask reveal on scroll: each word slides up from behind a clip. */
export function MaskWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em]">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "115%", opacity: 0 }}
            animate={inView || reduce ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0 }}
            transition={{ duration: 1, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Character-level hero reveal with slight rotation for editorial feel. */
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
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.22em] -mb-[0.22em]"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "115%", rotate: 6, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: delay + i * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch === " " ? "\u00A0" : ch}
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
  const desktop = useIsDesktop();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.25 });
  const y = useSpring(my, { stiffness: 220, damping: 22, mass: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (!desktop || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - (r.left + r.width / 2)) * strength);
        my.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Vertical parallax driven by element position in viewport. */
export function Parallax({
  children,
  amount = 40,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce || !desktop ? {} : { y, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself in when scrolled into view. */
export function DrawRule({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={`h-px w-full overflow-hidden bg-transparent ${className}`}>
      <motion.div
        className="h-px w-full origin-left bg-rule"
        initial={reduce ? false : { scaleX: 0 }}
        animate={inView || reduce ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
