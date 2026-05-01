"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <Link
        href={`/products/${product.slug}`}
        className="card-surface shine-border relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow-strong"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition group-hover:opacity-40 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, var(--color-brand-400), var(--color-brand-700))` }}
        />

        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-white shadow-glow`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="pulse-dot opacity-0 transition-opacity group-hover:opacity-100">
            <span className="relative inline-block h-2 w-2 rounded-full bg-brand-600" />
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">
          {product.name[locale]}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-500">
          {product.short[locale]}
        </p>

        <div className="mt-5 flex items-center justify-between gap-2 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {product.client[locale]}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition group-hover:gap-2">
            {t("viewDetails")}
            <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </span>
        </div>
      </Link>

      {product.demo ? (
        <a
          href={product.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute end-4 top-4 z-10 hidden rounded-full bg-white/90 p-1.5 text-brand-700 shadow-sm transition hover:bg-white hover:text-brand-900 group-hover:block"
          aria-label={t("demo")}
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </motion.div>
  );
}
