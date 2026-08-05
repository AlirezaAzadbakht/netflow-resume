"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { WorkflowNodes } from "./WorkflowNodes";
import { Typewriter } from "./Typewriter";

export function Hero({ showTeam }: { showTeam: boolean }) {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dotted-grid opacity-30" />
        <WorkflowNodes />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel relative mx-auto max-w-4xl px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-4 py-1.5 text-xs font-medium text-brand-700 shadow-sm"
          >
            <span className="pulse-dot">
              <span className="relative inline-block h-2 w-2 rounded-full bg-brand-600" />
            </span>
            {t("badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-6xl lg:text-[64px] lg:leading-[1.1]"
          >
            <span className="block">{t("titleLead")}</span>
            <span className="gradient-text mt-2 block pb-1">
              {t("titleHighlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-700 sm:text-lg"
          >
            <Typewriter text={t("subtitle")} startDelay={800} speed={14} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 hover:shadow-glow-strong"
            >
              <Sparkles className="h-4 w-4" />
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            {showTeam && (
              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-white"
              >
                <Users className="h-4 w-4" />
                {t("ctaSecondary")}
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
