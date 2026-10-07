import { useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { animate, motion, useInView } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";

const stats = [
  { to: 11, suffix: "+", key: "products" as const },
  { to: 40, suffix: "+", key: "models" as const },
  { to: 6, suffix: "", key: "industries" as const },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div ref={ref} className="text-5xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
      {value}
      {suffix}
    </div>
  );
}

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-nav px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeader index="01" kicker={t("kicker")} title={t("title")} />
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <p className="mt-12 max-w-4xl text-pretty text-2xl leading-snug text-ink-700 sm:text-3xl sm:leading-snug">
            {t("body")}
          </p>
        </SectionReveal>
        <div className="mt-16 grid grid-cols-1 divide-y divide-ink-900/10 border-y border-ink-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="px-0 py-8 sm:px-8 sm:first:ps-0 sm:last:pe-0"
            >
              <CountUp to={s.to} suffix={s.suffix} />
              <div className="mt-3 text-sm text-ink-500">{t(`stats.${s.key}`)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
