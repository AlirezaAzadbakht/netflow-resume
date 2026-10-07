import { motion } from "framer-motion";
import { useLocale, useTranslations } from "use-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const t = useTranslations("products");
  const locale = useLocale() as "en" | "fa";
  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-ink-900/10 transition-colors hover:bg-ink-900/[0.03]"
    >
      <div className="grid grid-cols-[3rem_1fr] items-start gap-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:px-2">
        <span className="pt-1 text-sm tabular-nums text-ink-500">{n}</span>
        <div className="min-w-0">
          <Link
            href={`/products/${product.slug}`}
            className="block text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl"
          >
            {product.name[locale]}
          </Link>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
            {product.short[locale]}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
            <span>{product.client[locale]}</span>
            {product.demo ? (
              <a
                href={product.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brand-600"
              >
                {t("demo")}
              </a>
            ) : null}
          </div>
        </div>
        <Link
          href={`/products/${product.slug}`}
          aria-label={t("viewDetails")}
          className="mt-2 hidden sm:block"
        >
          <ArrowUpRight className="h-5 w-5 text-ink-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
        </Link>
      </div>
    </motion.li>
  );
}
