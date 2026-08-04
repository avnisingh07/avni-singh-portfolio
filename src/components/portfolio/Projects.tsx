import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "./content";
import { Magnetic, Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-32">
      <SectionHeading num="03" label="Selected Work" aside={`${PROJECTS.length} projects`} />

      <div className="mt-14">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} y={48}>
            <Magnetic strength={0.05}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="GitHub"
                className="group relative block overflow-hidden border-t border-rule transition-colors duration-500 last:border-b hover:border-accent"
              >
                {/* accent sweep */}
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[color-mix(in_oklab,var(--accent)_9%,transparent)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <div className="relative grid gap-6 px-1 py-8 transition-[padding] duration-500 group-hover:md:px-4 md:grid-cols-12 md:gap-8 md:py-14">
                  <div className="md:col-span-1">
                    <span className="eyebrow transition-colors group-hover:!text-accent">
                      {p.index}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="display flex items-start gap-3 text-[clamp(2rem,5.5vw,4.25rem)] font-medium transition-colors group-hover:text-accent">
                      <span>{p.title}</span>
                      <ArrowUpRight
                        className="mt-2 shrink-0 -translate-x-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                        size={28}
                      />
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
                          className="border-b border-rule pb-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-500 group-hover:border-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-accent">
                      View repository
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
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
