import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({ kicker, title, subtitle, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
        <span className="h-px w-8 bg-brand-300" />
        {kicker}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <div className="mt-3 text-pretty text-base leading-relaxed text-ink-500">
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}
