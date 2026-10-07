import type { ReactNode } from "react";

export function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
}: {
  index: string;
  kicker: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="border-t border-ink-900/10 pt-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,12rem)_1fr] lg:gap-16">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
          {index} / {kicker}
        </div>
        <div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <div className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-500">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
