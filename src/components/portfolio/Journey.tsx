import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useSpring } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { JOURNEY_BONUS, JOURNEY_PHASES } from "./journey-content";
import { DrawRule, MaskWords, Reveal, StaggerWords } from "./motion-primitives";

function Tag({ label }: { label: string }) {
  return (
    <span className="border border-rule px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}

function Phase({
  phase,
  i,
  total,
  onActive,
}: {
  phase: (typeof JOURNEY_PHASES)[number];
  i: number;
  total: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(i);
  }, [inView, i, onActive]);

  return (
    <article ref={ref} className="border-t border-rule pt-8">
      <Reveal y={34}>
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="display text-2xl md:text-3xl">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-rule"> / {String(total).padStart(2, "0")}</span>
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Phase {i + 1} of {total}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-accent">
              {phase.period}
            </p>
          </div>

          <div className="md:col-span-9">
            <h3 className="display text-[clamp(1.7rem,4vw,3rem)] font-medium leading-tight">
              {phase.title}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-loose text-muted-foreground">
              {phase.body}
            </p>
            <p className="mt-5 max-w-2xl border-l-2 border-accent/50 pl-4 text-sm leading-loose">
              <span className="eyebrow mr-2 !text-accent">Outcome</span>
              {phase.outcome}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {phase.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Journey() {
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const total = JOURNEY_PHASES.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-accent"
      />

      <div className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 md:pt-14">
        <Link
          to="/"
          data-cursor="Back"
          className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> Back to portfolio
        </Link>
      </div>

      <header className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
        <p className="eyebrow">Case Study — Internship</p>
        <h1 className="display mt-6 text-[clamp(2.4rem,8.5vw,7rem)] font-medium leading-[1.05]">
          <span className="block">
            <StaggerWords text="The Bharat" />
          </span>
          <span className="block italic text-accent">
            <StaggerWords text="Forge Journey" delay={0.35} />
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="display text-xl leading-snug md:text-3xl">
              <MaskWords text="From robotics foundations to production-grade multi-robot systems." />
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                July 2025 — Present · Pune, India
              </p>
              <p className="mt-5 text-sm leading-loose text-muted-foreground">
                Work progressed from robotics foundations and research exploration to designing and
                building production-grade systems in multi-robot coordination, warehouse automation
                and fleet management.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <DrawRule />
        </div>
      </header>

      <div className="pointer-events-none fixed bottom-6 left-5 z-40 hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:block">
        <span className="text-accent">Phase {active + 1}</span> of {total}
      </div>

      <main className="mx-auto max-w-[1400px] space-y-16 px-5 pb-20 sm:px-8 md:space-y-24 md:pb-32">
        {JOURNEY_PHASES.map((p, i) => (
          <Phase key={p.title} phase={p} i={i} total={total} onActive={setActive} />
        ))}

        <Reveal>
          <section className="border border-accent/40 bg-accent/5 p-8 md:p-12">
            <p className="eyebrow !text-accent">Bonus</p>
            <h3 className="display mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium">
              {JOURNEY_BONUS.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-loose text-muted-foreground">
              {JOURNEY_BONUS.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {JOURNEY_BONUS.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </section>
        </Reveal>
      </main>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 md:pb-40">
        <DrawRule />
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Key Learnings &amp; Impact</p>
          <div className="md:col-span-9">
            <blockquote className="display text-[clamp(1.5rem,3.6vw,3rem)] font-medium leading-[1.15]">
              <MaskWords text="Research tells you what is possible." />{" "}
              <span className="italic text-accent">
                <MaskWords text="Deployment tells you what actually holds up." delay={0.12} />
              </span>
            </blockquote>
            <Reveal delay={0.15}>
              <p className="mt-10 max-w-2xl text-sm leading-loose text-muted-foreground">
                The gap between a benchmark-winning model and a system a warehouse can rely on is
                mostly architecture. Modular, interpretable components beat monolithic models when
                real-time constraints, safety validation and debuggability matter more than raw
                capability. Owning the full stack — perception, planning, backend, transport layer
                and dashboard — taught me that robotics is a distributed systems problem wearing a
                robot costume: latency budgets, state synchronization and failure modes decide
                whether anything moves at all.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/"
                className="link-underline mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
              >
                <ArrowLeft size={14} /> Back to portfolio
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
