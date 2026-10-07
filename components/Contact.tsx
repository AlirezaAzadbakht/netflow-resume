import { motion } from "framer-motion";
import { useTranslations } from "use-intl";
import { ArrowRight, Mail } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-nav relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="card-surface shine-border relative overflow-hidden p-10 sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  <span className="h-px w-8 bg-brand-300" />
                  {t("kicker")}
                </div>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  {t("title")}
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-500">
                  {t("subtitle")}
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-3">
                <motion.a
                  href={`mailto:${t("email")}`}
                  whileHover={{ y: -2 }}
                  className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-brand-200 bg-white/90 px-5 py-4 text-left shadow-sm transition hover:border-brand-400 hover:bg-white hover:shadow-glow"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs font-medium text-ink-500">Email</span>
                      <span className="text-sm font-semibold text-ink-900">{t("email")}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand-700 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </motion.a>
                <motion.a
                  href="https://netflowai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-ink-900 px-5 py-4 text-white shadow-glow transition hover:bg-brand-700 hover:shadow-glow-strong"
                >
                  <span className="text-sm font-semibold">{t("cta")}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </motion.a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
