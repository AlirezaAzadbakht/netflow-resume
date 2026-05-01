"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 22,
  startDelay = 200,
  className,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    let i = 0;
    let cancelled = false;

    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setOut(text.slice(0, i));
        if (i < text.length) {
          setTimeout(tick, speed);
        }
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {out}
      <span
        aria-hidden
        className="inline-block w-[2px] translate-y-[3px] bg-brand-500 ms-1"
        style={{ height: "0.95em", animation: "blink 1s steps(1) infinite" }}
      />
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
