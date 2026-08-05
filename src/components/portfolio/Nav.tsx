import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { SECTIONS } from "./content";
import { useTheme } from "./useTheme";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [solid, setSolid] = useState(false);
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid || open ? "border-b border-border bg-background" : ""
        }`}
      >
        <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 md:py-5">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            data-cursor="Top"
            className="display min-w-0 truncate text-lg font-semibold md:text-xl"
          >
            Avni Singh
          </a>
          <div className="flex shrink-0 items-center gap-3 md:gap-6">
            <ul className="hidden items-center gap-6 md:flex">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    data-active={active === s.id}
                    className="link-underline text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
                  >
                    <span className="text-accent">{s.num}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Toggle dark mode"
              data-cursor={dark ? "Light" : "Dark"}
              onClick={toggle}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-accent md:hidden"
            >
              <span className="relative block h-[9px] w-4">
                <motion.span
                  className="absolute left-0 top-0 block h-px w-full bg-current"
                  animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 block h-px w-full bg-current"
                  animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-5 pt-20 md:hidden"
          >
            <ul className="space-y-2">
              {SECTIONS.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 py-2 text-[13vw] font-medium leading-none"
                  >
                    <span className="text-[11px] tracking-[0.2em] text-accent">{s.num}</span>
                    <span className={active === s.id ? "italic text-accent" : ""}>{s.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="eyebrow mt-12"
            >
              Applied AI Engineer — 2026
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
