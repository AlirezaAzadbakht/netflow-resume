import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Organizations } from "@/components/Organizations";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Organizations />
      <ProductsGrid />
      <Team />
      <Contact />
    </>
  );
}
