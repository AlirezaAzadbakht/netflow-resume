import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const style: CSSProperties = { animationDelay: `${delay}s` };
  return (
    <Tag className={`reveal-on-mount ${className}`} style={style}>
      {children}
    </Tag>
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
  const style: CSSProperties = { animationDelay: `${index * 0.05}s` };
  return (
    <li className={`reveal-on-mount ${className}`} style={style}>
      {children}
    </li>
  );
}
