import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { MaskWords } from "./motion-primitives";

export function SectionHeading({
  num,
  label,
  aside,
}: {
  num: string;
  label: string;
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 pb-4">
        <h2 className="eyebrow flex min-w-0 items-baseline gap-2 !text-foreground">
          <motion.span
            className="text-accent"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {num}
          </motion.span>
          <span className="text-rule">—</span>
          <MaskWords text={label} delay={0.08} className="truncate" />
        </h2>
        {aside ? (
          <motion.span
            className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            initial={reduce ? false : { opacity: 0 }}
            animate={inView || reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {aside}
          </motion.span>
        ) : null}
      </div>
      <div className="h-px w-full overflow-hidden">
        <motion.div
          className="h-px w-full origin-left bg-rule"
          initial={reduce ? false : { scaleX: 0 }}
          animate={inView || reduce ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
