import { MaskWords, Parallax, Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";
import { CountUp } from "./CountUp";

const STATS = [
  { value: 1, suffix: "+", label: "Years in industry" },
  { value: 8, suffix: "", label: "Shipped AI & backend systems" },
  { value: 7800, suffix: "+", label: "Applicants beaten at the Kalyani hackathon" },
  { value: 1, suffix: "", label: "Peer-reviewed publication" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="01" label="About" aside="Applied AI Engineer" />

      <blockquote className="display mt-14 max-w-4xl text-[clamp(1.9rem,5.2vw,4rem)] font-medium">
        <MaskWords text="I build systems where" stagger={0.05} />{" "}
        <span className="italic text-accent">
          <MaskWords text="language models" delay={0.15} stagger={0.05} />
        </span>{" "}
        <MaskWords text="stop being demos and start being infrastructure." delay={0.25} stagger={0.04} />
      </blockquote>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 md:col-start-6">
          <Parallax amount={18}>
            <Reveal delay={0.05}>
              <p className="text-sm leading-loose text-muted-foreground">
                Applied AI Engineer with 1+ year of industry experience building AI-powered software
                and production-grade backend systems — LLM applications, RAG pipelines, AI agents,
                scalable REST APIs and full-stack systems.
              </p>
            </Reveal>
          </Parallax>
        </div>
        <div className="md:col-span-4">
          <Parallax amount={-14}>
            <Reveal delay={0.15}>
              <p className="text-sm leading-loose text-muted-foreground">
                Strong in Python, FastAPI and distributed systems, with a bias toward evaluation,
                guardrails and things that hold up under real traffic. Recently completed B.Tech
                in AI/ML at Symbiosis Institute of Technology, Pune (May 2026).
              </p>
            </Reveal>
          </Parallax>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-t border-rule bg-rule md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={0.05 * i} y={20}>
            <div className="group h-full bg-background px-4 py-8 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--accent)_7%,transparent)] md:px-6 md:py-10">
              <p className="display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold transition-colors duration-500 group-hover:text-accent">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
