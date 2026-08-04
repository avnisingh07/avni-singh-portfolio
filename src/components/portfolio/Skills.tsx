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
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee group relative overflow-hidden">
      <div
        className="marquee-track flex w-max gap-6 whitespace-nowrap will-change-transform"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display text-[clamp(1.5rem,7vw,3.25rem)] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            {item} <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading num="04" label="Skills" aside="Toolkit" />
      </div>

      <div className="mt-12 space-y-8 md:mt-14">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.name} y={18}>
            <p className="eyebrow mx-auto max-w-[1400px] px-5 pb-2 sm:px-8">{g.name}</p>
            <Marquee items={g.items} reverse={i % 2 === 1} duration={26 + g.items.length * 2} />
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-[1400px] px-5 sm:px-8 md:mt-16">
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
