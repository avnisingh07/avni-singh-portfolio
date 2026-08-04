import { useCallback, useEffect, useState } from "react";

const KEY = "avni-theme";

/** Persisted dark-mode with system-preference fallback. */
export function useTheme() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefers);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem(KEY, dark ? "dark" : "light");
  }, [dark, ready]);

  const toggle = useCallback(() => setDark((d) => !d), []);
  return { dark, toggle };
}
