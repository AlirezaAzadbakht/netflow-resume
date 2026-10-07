import { useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { animate, motion, useInView } from "framer-motion";
import { Cpu, Building2, Boxes } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";

const stats = [
  { icon: Boxes, to: 11, suffix: "+", key: "products" as const },
  { icon: Cpu, to: 40, suffix: "+", key: "models" as const },
  { icon: Building2, to: 6, suffix: "", key: "industries" as const },
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
    <div ref={ref} className="text-3xl font-bold tracking-tight text-ink-900">
      {value}
      {suffix}
    </div>
  );
}

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-nav relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            kicker={t("kicker")}
            title={t("title")}
            subtitle={<p>{t("body")}</p>}
          />
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <SectionReveal key={s.key} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="card-surface shine-border relative overflow-hidden p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-ink-500">
                    {t(`stats.${s.key}`)}
                  </div>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-200/40 blur-2xl" />
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
