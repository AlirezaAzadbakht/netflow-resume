import { useTranslations, useLocale } from "use-intl";
import { SectionHeader } from "./SectionHeader";
import { SectionReveal } from "./SectionReveal";

type Org = {
  key: string;
  src: string;
  nameEn: string;
  nameFa: string;
};

const organizations: Org[] = [
  {
    key: "maroon",
    src: "/logos/maroon-petrochemical.png",
    nameEn: "Maroon Petrochemical",
    nameFa: "پتروشیمی مارون",
  },
  {
    key: "nouri",
    src: "/logos/nouri-petrochemical.png",
    nameEn: "Nouri Petrochemical (NPC)",
    nameFa: "پتروشیمی نوری",
  },
  {
    key: "tavanir",
    src: "/logos/tavanir.png",
    nameEn: "Tavanir",
    nameFa: "شرکت توانیر",
  },
  {
    key: "bakhtar",
    src: "/logos/bakhtar-holding.png",
    nameEn: "Bakhtar Group",
    nameFa: "گروه باختر",
  },
  {
    key: "apadana",
    src: "/logos/apadana-petrochemical.png",
    nameEn: "Apadana Petrochemical",
    nameFa: "پتروشیمی آپادانا",
  },
  {
    key: "afa-chemi",
    src: "/logos/Afa-chemi-pharmaceutical-co.webp",
    nameEn: "Afa chemi pharmaceutical co",
    nameFa: "شرکت دارو سازی آفاشیمی",
  },
  {
    key: "gisp",
    src: "/logos/GISP.webp",
    nameEn: "GISP Group",
    nameFa: "گروه جی‌ آی‌ اس‌ پی (GISP)",
  },
];

export function Organizations() {
  const t = useTranslations("organizations");
  const locale = useLocale();
  const isFa = locale === "fa";

  return (
    <section id="stack" className="scroll-mt-nav relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            kicker={t("kicker")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ul className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-5">
            {organizations.map((org) => {
              const label = isFa ? org.nameFa : org.nameEn;
              return (
                <li
                  key={org.key}
                  className="group w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.875rem)]"
                >
                  <div
                    className="card-surface shine-border flex h-full flex-col items-center justify-center gap-4 px-4 py-7 transition-transform duration-300 hover:-translate-y-1"
                    title={label}
                  >
                    <div className="relative flex h-20 w-full items-center justify-center">
                      <img
                        src={org.src}
                        alt={label}
                        width={160}
                        height={80}
                        loading="lazy"
                        decoding="async"
                        className="max-h-20 w-auto object-contain grayscale-[50%] transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="text-center text-xs font-semibold tracking-wide text-ink-700 sm:text-sm">
                      {label}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
