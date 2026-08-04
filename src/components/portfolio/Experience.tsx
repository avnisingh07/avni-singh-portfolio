import { ArrowUpRight, Trophy } from "lucide-react";
import { EXPERIENCE } from "./content";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="02" label="Experience" aside="2024 — 2026" />

      <div className="mt-14 space-y-16 md:space-y-24">
        {EXPERIENCE.map((role) => (
          <Reveal key={role.org}>
            <article className="grid gap-6 border-t border-rule pt-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="display text-2xl md:text-3xl">{role.year}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {role.period}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="display text-[clamp(1.8rem,4vw,3rem)] font-medium">{role.role}</h3>
                <p className="mt-2 text-sm text-accent">{role.org}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {role.items.map((item) => (
                    <div key={item.title}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="GitHub"
                          className="link-underline inline-flex items-center gap-1 text-base font-medium"
                        >
                          {item.title} <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="text-base font-medium">{item.title}</span>
                      )}
                      <p className="mt-3 text-sm leading-loose text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-col gap-4 border border-accent/40 bg-accent/5 p-8 sm:flex-row sm:items-center md:p-12">
          <Trophy className="shrink-0 text-accent" size={28} />
          <p className="display text-xl leading-snug md:text-3xl">
            1 of 7 winners from 7,800+ applicants —{" "}
            <span className="italic text-accent">
              Kalyani Group &amp; WeCP Data, AI &amp; Robotics Hackathon 2025.
            </span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
