import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 22,
  startDelay = 200,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }

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
    <span className="relative block">
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden>
        {out}
        <span
          className="typewriter-caret inline-block w-[2px] translate-y-[3px] bg-brand-500 ms-1"
          style={{ height: "0.95em" }}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
