"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "en" ? "fa" : "en";

  const onToggle = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={onToggle}
      disabled={isPending}
      aria-label={t("switchAria")}
      className="group relative inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-medium text-brand-700 backdrop-blur transition hover:border-brand-400 hover:bg-white hover:shadow-[0_8px_20px_-8px_rgba(124,58,237,0.4)] disabled:opacity-50"
    >
      <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
      <span className="tracking-wide">{t("switchLang")}</span>
      <span className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-400/0 via-brand-400/20 to-brand-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
