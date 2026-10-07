import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigate, useParams } from "react-router";
import { useTranslations } from "use-intl";
import { AparatEmbed } from "@/components/AparatEmbed";
import { FeatureItem, Reveal } from "@/components/ProductDetailAnimations";
import { getProductBySlug, products } from "@/data/products";
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
  const next = products[(products.findIndex((p) => p.slug === slug) + 1) % products.length];

  return (
    <article>
      <title>{`${name} - NetflowAI`}</title>
      <meta name="description" content={desc} />

      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm text-ink-500 underline-offset-4 hover:text-ink-900 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t("back")}
          </Link>
        </Reveal>

        <header className="mt-12 border-b border-ink-900/10 pb-12">
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
              {name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-500">
              {desc}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <dl className="mt-10 flex flex-col gap-6 sm:flex-row sm:divide-x sm:divide-ink-900/10">
              <div className="sm:pe-8">
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  {t("client")}
                </dt>
                <dd className="mt-2 text-sm text-ink-900">{product.client[locale]}</dd>
              </div>
              <div className="sm:ps-8">
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  {t("demo")}
                </dt>
                <dd className="mt-2 text-sm">
                  {product.demo ? (
                    <a
                      href={product.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-900 underline underline-offset-4 hover:text-brand-600"
                    >
                      {t("demo")}
                    </a>
                  ) : (
                    <span className="text-ink-500">{t("noDemo")}</span>
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>
        </header>

        {product.video ? (
          <Reveal delay={0.3}>
            <section className="mt-12">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                {t("video")}
              </h2>
              <div className="mt-4">
                <AparatEmbed
                  url={product.video}
                  title={`${name} - ${t("video")}`}
                  playLabel={t("playVideo")}
                />
              </div>
            </section>
          </Reveal>
        ) : null}

        <Reveal delay={0.35}>
          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              {t("purpose")}
            </h2>
            <p className="mt-4 text-pretty text-xl leading-relaxed text-ink-700 sm:text-2xl">
              {product.purpose[locale]}
            </p>
          </section>
        </Reveal>

        <section className="mt-14">
          <Reveal delay={0.4}>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              {t("features")}
            </h2>
          </Reveal>
          <ol className="mt-6 border-t border-ink-900/10">
            {product.features[locale].map((feature, i) => (
              <FeatureItem
                key={i}
                index={i}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink-900/10 py-4"
              >
                <span className="text-sm tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-ink-700 sm:text-base">
                  {feature}
                </span>
              </FeatureItem>
            ))}
          </ol>
        </section>

        <Reveal delay={0.45}>
          <Link
            href={`/products/${next.slug}`}
            className="group mt-16 flex items-end justify-between gap-6 border-t border-ink-900/10 pt-10"
          >
            <span>
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                {t("next")}
              </span>
              <span className="mt-3 block text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {next.name[locale]}
              </span>
            </span>
            <ArrowRight className="mb-1 h-6 w-6 shrink-0 text-ink-900 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
