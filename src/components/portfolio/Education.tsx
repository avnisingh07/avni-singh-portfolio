import { CERTIFICATIONS } from "./content";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="05" label="Education & Recognition" aside="2022 — 2026" />

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <Reveal>
            <h3 className="display text-[clamp(1.9rem,4.5vw,3.5rem)] font-medium">
              B.Tech, Artificial Intelligence &amp; Machine Learning
            </h3>
            <p className="mt-4 text-sm text-accent">Symbiosis Institute of Technology</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Aug 2022 — May 2026 · CGPA 7.8
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 border-t border-rule pt-8">
              <p className="eyebrow">Publication</p>
              <p className="display mt-4 text-xl italic leading-snug md:text-2xl">
                “LLM-based Abstractive Legal Document Summarization using Transformer
                Architectures”
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                ICIRD 2024, Shinawatra University
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <Reveal delay={0.15}>
            <p className="eyebrow">Certifications</p>
            <ul className="mt-6 space-y-4">
              {CERTIFICATIONS.map((c) => (
                <li key={c.label} className="border-b border-rule pb-4">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-accent"
                  >
                    <span>{c.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
