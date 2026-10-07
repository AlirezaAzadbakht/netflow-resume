import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { Navigate, useParams } from "react-router";
import { useTranslations } from "use-intl";
import { AparatEmbed } from "@/components/AparatEmbed";
import { FeatureItem, Reveal } from "@/components/ProductDetailAnimations";
import { getProductBySlug } from "@/data/products";
import { Link } from "@/i18n/navigation";
import { isLocale } from "@/i18n/routing";

export function ProductPage() {
  const { locale, slug } = useParams();
  const t = useTranslations("products");

  if (!isLocale(locale) || !slug) {
    return <Navigate to="/en" replace />;
  }

  const product = getProductBySlug(slug);
  if (!product) {
    return <Navigate to={`/${locale}`} replace />;
  }

  const name = product.name[locale];
  const desc = product.short[locale];
  const Icon = product.icon;

  return (
    <article className="relative">
      <title>{`${name} — NetflowAI`}</title>
      <meta name="description" content={desc} />
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-100/60 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <Link
            href="/#products"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-medium text-brand-700 backdrop-blur transition hover:border-brand-400 hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
            {t("back")}
          </Link>
        </Reveal>

        <header className="mt-10">
          <Reveal delay={0.05}>
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-white shadow-glow`}
            >
              <Icon className="h-6 w-6" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              {name}
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-500">
              {desc}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {product.demo ? (
                <a
                  href={product.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700 hover:shadow-glow-strong"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("demo")}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-ink-500">
                  <Sparkles className="h-4 w-4 text-brand-500" />
                  {t("noDemo")}
                </span>
              )}
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2.5 text-sm text-ink-500">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {t("client")}
                </span>
                <span className="font-medium text-ink-900">
                  {product.client[locale]}
                </span>
              </span>
            </div>
          </Reveal>
        </header>

        {product.video ? (
          <Reveal delay={0.38}>
            <section className="mt-12">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
                {t("video")}
              </h2>
              <div className="mt-4">
                <AparatEmbed
                  url={product.video}
                  title={`${name} — ${t("video")}`}
                  playLabel={t("playVideo")}
                />
              </div>
            </section>
          </Reveal>
        ) : null}

        <Reveal delay={0.4}>
          <section className="mt-12 card-surface shine-border p-7">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
              {t("purpose")}
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-ink-700">
              {product.purpose[locale]}
            </p>
          </section>
        </Reveal>

        <section className="mt-10">
          <Reveal delay={0.45}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
              {t("features")}
            </h2>
          </Reveal>

          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.features[locale].map((feature, i) => (
              <FeatureItem
                key={i}
                index={i}
                className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white/80 p-4 backdrop-blur transition hover:border-brand-300 hover:bg-white"
              >
                <span
                  className={`mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br ${product.accent}`}
                />
                <span className="text-sm leading-relaxed text-ink-700">
                  {feature}
                </span>
              </FeatureItem>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
