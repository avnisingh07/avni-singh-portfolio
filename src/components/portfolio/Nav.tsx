import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { SECTIONS } from "./content";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);

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
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-border bg-background/85 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 md:py-5">
        <a
          href="#top"
          data-cursor="Top"
          className="display min-w-0 truncate text-lg font-semibold md:text-xl"
        >
          Avni Singh
        </a>
        <div className="flex shrink-0 items-center gap-6">
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
            onClick={() => setDark((d) => !d)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
