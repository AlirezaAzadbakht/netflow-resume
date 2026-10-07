import { motion } from "framer-motion";
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
    <section id="stack" className="scroll-mt-nav px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeader
            index="02"
            kicker={t("kicker")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </SectionReveal>

        <ul className="mt-14 grid grid-cols-2 border-s border-t border-ink-900/10 lg:grid-cols-4">
          {organizations.map((org, i) => {
            const label = isFa ? org.nameFa : org.nameEn;
            return (
              <motion.li
                key={org.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 8) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center justify-center gap-4 border-b border-e border-ink-900/10 px-4 py-10"
              >
                <img
                  src={org.src}
                  alt={label}
                  width={160}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
                <div className="text-center text-xs text-ink-500">{label}</div>
              </motion.li>
            );
          })}
          <li aria-hidden className="border-b border-e border-ink-900/10" />
        </ul>
      </div>
    </section>
  );
}
