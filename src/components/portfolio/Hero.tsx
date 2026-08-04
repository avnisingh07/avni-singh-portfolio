import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { LINKS } from "./content";
import { Magnetic, StaggerWords } from "./motion-primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative mx-auto max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-44"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-7">
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
              <StaggerWords text="Singh" delay={0.35} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            <span className="text-foreground">Applied AI Engineer</span> — building AI-powered
            software &amp; production-grade backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="/Avni-Singh-Resume.pdf"
                download
                data-cursor="Resume"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-background transition-opacity hover:opacity-90"
              >
                Download résumé <ArrowUpRight size={14} />
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
                    className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 md:-mt-16"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={portrait}
              alt="Portrait of Avni Singh"
              width={612}
              height={1140}
              style={{ y: imgY }}
              className="h-[380px] w-full scale-110 object-cover object-top md:h-[560px]"
            />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            B.Tech AI/ML — Symbiosis Institute of Technology, ’26
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-16 flex items-center gap-3 border-t border-rule pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
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
