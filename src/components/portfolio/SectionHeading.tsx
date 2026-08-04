import type { ReactNode } from "react";
import { Reveal } from "./motion-primitives";

export function SectionHeading({
  num,
  label,
  aside,
}: {
  num: string;
  label: string;
  aside?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-rule pb-4">
        <h2 className="eyebrow min-w-0 truncate !text-foreground">
          <span className="text-accent">{num}</span> — {label}
        </h2>
        {aside ? (
          <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {aside}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}
