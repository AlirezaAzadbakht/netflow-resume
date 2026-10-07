import { motion } from "framer-motion";
import { useTranslations } from "use-intl";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500"
          >
            {t("badge")}
          </motion.p>
          <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-ink-900 sm:text-7xl lg:text-8xl lg:leading-[1.05]">
            <motion.span variants={item} className="block">
              {t("titleLead")}
            </motion.span>
            <motion.span variants={item} className="mt-1 block text-brand-600">
              {t("titleHighlight")}
            </motion.span>
          </h1>
          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-500 sm:text-xl"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#products"
              className="inline-flex items-center bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-ink-900 underline underline-offset-4 hover:text-brand-600"
            >
              {t("ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
