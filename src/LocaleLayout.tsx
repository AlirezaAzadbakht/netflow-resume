import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Navigate, Outlet, useLocation, useParams } from "react-router";
import { IntlProvider } from "use-intl";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/HashScroll";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "@/i18n/navigation";
import { isLocale } from "@/i18n/routing";
import { scrollToTarget } from "@/src/smoothScroll";
import en from "@/messages/en.json";
import fa from "@/messages/fa.json";

const messages = { en, fa };

export function LocaleLayout() {
  const { locale } = useParams();
  const location = useLocation();
  const pathname = usePathname();
  const valid = isLocale(locale);

  useEffect(() => {
    if (!valid) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale, valid]);

  useEffect(() => {
    if (location.hash) return;
    scrollToTarget(0, { immediate: true });
  }, [pathname, location.hash]);

  if (!valid) {
    return <Navigate to="/en" replace />;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <MotionConfig reducedMotion="user">
        <HashScroll />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </IntlProvider>
  );
}
