import { useTranslations } from "use-intl";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Organizations } from "@/components/Organizations";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Team } from "@/components/Team";

export function HomePage() {
  const t = useTranslations("meta");

  return (
    <>
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
      <Hero />
      <About />
      <Organizations />
      <ProductsGrid />
      <Team />
      <Contact />
    </>
  );
}
