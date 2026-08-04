import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="01" label="About" aside="Applied AI Engineer" />

      <Reveal>
        <blockquote className="display mt-14 max-w-4xl text-[clamp(1.9rem,5.2vw,4rem)] font-medium">
          I build systems where <span className="italic text-accent">language models</span> stop
          being demos and start being infrastructure.
        </blockquote>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 md:col-start-6">
          <Reveal delay={0.05}>
            <p className="text-sm leading-loose text-muted-foreground">
              Applied AI Engineer with 1+ year of industry experience building AI-powered software
              and production-grade backend systems — LLM applications, RAG pipelines, AI agents,
              scalable REST APIs and full-stack systems.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-4">
          <Reveal delay={0.15}>
            <p className="text-sm leading-loose text-muted-foreground">
              Strong in Python, FastAPI and distributed systems, with a bias toward evaluation,
              guardrails and things that hold up under real traffic. Currently completing a B.Tech
              in AI/ML at Symbiosis Institute of Technology, graduating May 2026.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
