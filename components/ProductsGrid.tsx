import { useTranslations } from "use-intl";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function ProductsGrid() {
  const t = useTranslations("products");

  return (
    <section id="products" className="scroll-mt-nav relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            kicker={t("kicker")}
            title={t("title")}
            subtitle={<p>{t("subtitle")}</p>}
          />
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
