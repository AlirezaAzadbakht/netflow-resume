"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
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
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {organizations.map((org) => {
              const label = isFa ? org.nameFa : org.nameEn;
              return (
                <li key={org.key} className="group">
                  <div
                    className="card-surface shine-border flex h-full flex-col items-center justify-center gap-4 px-4 py-7 transition-transform duration-300 hover:-translate-y-1"
                    title={label}
                  >
                    <div className="relative flex h-20 w-full items-center justify-center">
                      <Image
                        src={org.src}
                        alt={label}
                        width={160}
                        height={80}
                        className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized
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
