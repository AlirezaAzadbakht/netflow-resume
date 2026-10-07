import { useTranslations } from "use-intl";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-nav px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-ink-900/10 pt-10">
        <SectionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
            05 / {t("kicker")}
          </p>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-500">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href={`mailto:${t("email")}`}
              className="text-2xl font-semibold text-ink-900 underline underline-offset-4 hover:text-brand-600 sm:text-3xl"
            >
              {t("email")}
            </a>
            <a
              href="https://netflowai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-900 underline underline-offset-4 hover:text-brand-600"
            >
              {t("cta")}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
