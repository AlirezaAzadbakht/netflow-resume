import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div className="reveal-on-mount" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function FeatureItem({
  index,
  className = "",
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <li
      className={`reveal-on-mount ${className}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {children}
    </li>
  );
}
