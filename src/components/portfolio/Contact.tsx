import { Check, Copy, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { LINKS } from "./content";
import { Magnetic, Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <footer id="contact" className="mx-auto max-w-[1400px] px-5 pb-12 pt-20 sm:px-8 md:pt-32">
      <SectionHeading num="06" label="Contact" aside="Open to 2026 roles" />

      <Reveal>
        <h2 className="display mt-14 text-[clamp(3rem,12vw,9rem)] font-semibold">
          Let’s build <span className="italic text-accent">something.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 border-t border-rule pt-8">
          <a
            href={`mailto:${LINKS.email}`}
            data-cursor="Email"
            className="link-underline display inline-block text-[clamp(1.3rem,4.5vw,3rem)] font-medium break-all transition-colors hover:text-accent"
          >
            {LINKS.email}
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(LINKS.email);
                setCopied(true);
                toast.success("Email copied to clipboard");
                window.setTimeout(() => setCopied(false), 2000);
              }}
              data-cursor={copied ? "Copied" : "Copy"}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <a href={`tel:${LINKS.phone}`} className="link-underline">
              {LINKS.phone}
            </a>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          {[
            { href: LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: LINKS.github, Icon: Github, label: "GitHub" },
          ].map(({ href, Icon, label }) => (
            <Magnetic key={label} strength={0.4}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor={label}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={15} /> {label}
              </a>
            </Magnetic>
          ))}
        </div>
      </Reveal>

      <div className="mt-20 grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-rule pt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="min-w-0 truncate">© {new Date().getFullYear()} Avni Singh</span>
        <a href="#top" data-cursor="Top" className="link-underline shrink-0">
          Back to top
        </a>
      </div>
    </footer>
  );
}
