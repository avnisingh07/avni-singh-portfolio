import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import avniPhoto from "@/assets/avni.jpeg.asset.json";
import { LINKS } from "./content";
import { Magnetic, StaggerWords } from "./motion-primitives";

const TICKER = [
  "LLM Applications",
  "RAG Pipelines",
  "Multi-Agent Systems",
  "FastAPI",
  "Distributed Systems",
  "Computer Vision",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative mx-auto max-w-[1400px] overflow-hidden px-5 pb-12 pt-28 sm:px-8 md:pb-24 md:pt-40"
    >
      {/* ambient accent wash */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative grid items-start gap-10 md:grid-cols-12 md:gap-6">
        <motion.div className="md:col-span-7" style={reduce ? {} : { y: titleY }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow"
          >
            Portfolio — Issue 01
          </motion.p>

          <h1 className="display mt-6 text-[clamp(3.4rem,13vw,10.5rem)] font-semibold">
            <StaggerWords text="Avni" delay={0.25} />
            <br />
            <span className="italic text-accent">
              <StaggerWords text="Singh" delay={0.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-8 md:text-base"
          >
            <span className="text-foreground">Applied AI Engineer</span> — building AI-powered
            software &amp; production-grade backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
          >
            <Magnetic>
              <a
                href="/Avni-Singh-Resume.pdf"
                download
                data-cursor="Resume"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-background"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <span className="relative flex items-center gap-2 transition-colors group-hover:text-accent-foreground">
                  Download résumé
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Magnetic>
            <div className="flex items-center gap-2">
              {[
                { href: LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: LINKS.github, Icon: Github, label: "GitHub" },
                { href: `mailto:${LINKS.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <Magnetic key={label} strength={0.4}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    data-cursor={label}
                    className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-border transition-colors hover:border-accent"
                  >
                    <span className="absolute inset-0 scale-0 rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100" />
                    <Icon
                      size={16}
                      className="relative transition-colors group-hover:text-accent-foreground"
                    />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="group relative md:col-span-5 md:-mt-10"
        >
          <div className="pointer-events-none absolute -inset-3 -z-10 border border-rule opacity-60 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          <motion.div
            className="relative overflow-hidden bg-secondary"
            style={reduce ? {} : { y: imgY }}
          >
            {/* mask wipe on load */}
            <motion.span
              aria-hidden
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ delay: 0.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-10 origin-top bg-background"
            />
            <img
              src={avniPhoto.url}
              alt="Portrait of Avni Singh, Applied AI Engineer"
              decoding="async"
              fetchPriority="high"
              className="w-full object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </motion.div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              B.Tech AI/ML — Symbiosis Institute of Technology, ’26
            </p>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-accent sm:block">
              Pune, IN
            </span>
          </div>
        </motion.div>
      </div>

      {/* editorial ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="marquee relative mt-12 overflow-hidden border-y border-rule py-3 md:mt-16"
      >
        <div className="marquee-track flex w-max gap-10" style={{ animationDuration: "38s" }}>
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {t}
              <span className="text-accent">✳</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={reduce ? {} : { opacity: fade }}
        className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}
