import { useTranslations } from "use-intl";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function ProductsGrid() {
  const t = useTranslations("products");

  return (
    <section id="products" className="scroll-mt-nav px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeader
            index="03"
            kicker={t("kicker")}
            title={t("title")}
            subtitle={<p>{t("subtitle")}</p>}
          />
        </SectionReveal>

        <ul className="mt-10 border-t border-ink-900/10">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
