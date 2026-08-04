import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "./content";
import { Magnetic, Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="03" label="Selected Work" aside={`${PROJECTS.length} projects`} />

      <div className="mt-14 space-y-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} y={48}>
            <Magnetic strength={0.06}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="GitHub"
                className="group block border-t border-rule py-8 transition-colors duration-500 hover:border-accent md:py-14"
              >
                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="eyebrow">{p.index}</span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="display text-[clamp(2rem,5.5vw,4.25rem)] font-medium transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-loose text-muted-foreground md:mt-4">
                      {p.body}
                    </p>
                  </div>
                  <div
                    className={`md:col-span-4 ${i % 2 === 0 ? "" : "md:col-start-9"} flex flex-col gap-4`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.period}
                    </span>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border-b border-rule pb-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-accent">
                      View repository <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </a>
            </Magnetic>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
