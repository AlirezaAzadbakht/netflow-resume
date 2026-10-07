import { useLocale, useTranslations } from "use-intl";
import { useNavigate } from "react-router";
import { usePathname } from "@/i18n/navigation";

export function LanguageToggle() {
  const t = useTranslations("nav");
  const navigate = useNavigate();
  const pathname = usePathname();
  const locale = useLocale();

  const nextLocale = locale === "en" ? "fa" : "en";

  const onToggle = () => {
    const suffix = pathname === "/" ? "" : pathname;
    navigate(`/${nextLocale}${suffix}${window.location.hash}`, {
      replace: true,
      viewTransition: true,
    });
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={t("switchAria")}
      className="nav-underline text-sm font-medium tracking-wide text-ink-500 hover:text-ink-900"
    >
      {t("switchLang")}
    </button>
  );
}
