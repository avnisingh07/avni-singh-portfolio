import { motion, useReducedMotion } from "motion/react";
import { SKILL_GROUPS } from "./content";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

function Marquee({
  items,
  reverse,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: number;
}) {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const row = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex w-max gap-6 whitespace-nowrap will-change-transform"
        animate={{ x: reduce ? "0%" : reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
        style={{ animationPlayState: paused ? "paused" : "running" }}
        {...(paused && !reduce ? { animate: { x: undefined } } : {})}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display text-[clamp(1.6rem,4vw,3.25rem)] font-medium text-muted-foreground"
          >
            {item} <span className="text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading num="04" label="Skills" aside="Toolkit" />
      </div>

      <div className="mt-14 space-y-8">
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.name}>
            <p className="eyebrow mx-auto max-w-[1400px] px-5 pb-2 sm:px-8">{g.name}</p>
            <Marquee items={g.items} reverse={i % 2 === 1} duration={28 + g.items.length * 2} />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="max-w-md text-sm leading-loose text-muted-foreground">
            Depth where it matters: agentic architectures, retrieval quality, evaluation harnesses,
            and the backend plumbing that keeps them online.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
