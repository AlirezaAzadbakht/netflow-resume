import { useTranslations } from "use-intl";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <div>
            <div dir="ltr" className="text-start text-sm font-semibold text-ink-900">
              Netflow<span className="text-brand-600">AI</span>
            </div>
            <div className="text-xs text-ink-500">{t("tagline")}</div>
          </div>
        </div>
        <div className="text-xs text-ink-500">
          <span dir="ltr">© {year} NetflowAI.</span> {t("rights")}
        </div>
      </div>
    </footer>
  );
}
