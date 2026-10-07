import { useTranslations } from "use-intl";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-brand-100/70 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <div>
            <div
              dir="ltr"
              className="text-start text-sm font-semibold text-ink-900"
            >
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
