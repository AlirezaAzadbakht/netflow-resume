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
    <span>
      {out}
      <span
        aria-hidden
        className="typewriter-caret inline-block w-[2px] translate-y-[3px] bg-brand-500 ms-1"
        style={{ height: "0.95em" }}
      />
    </span>
  );
}
