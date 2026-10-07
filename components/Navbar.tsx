import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { hash: "about", key: "about" as const },
  { hash: "stack", key: "stack" as const },
  { hash: "products", key: "products" as const },
  { hash: "team", key: "team" as const },
  { hash: "contact", key: "contact" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLink = (hash: string, className: string, label: string) =>
    isHome ? (
      <a href={`#${hash}`} className={className} onClick={() => setOpen(false)}>
        {label}
      </a>
    ) : (
      <Link href={`/#${hash}`} className={className} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-brand-100/70 bg-white/80 backdrop-blur-xl shadow-[0_2px_24px_-12px_rgba(124,58,237,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          dir="ltr"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="text-base font-semibold tracking-tight text-ink-900">
            Netflow<span className="text-brand-600">AI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.key}>
              {navLink(
                l.hash,
                "relative rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700",
                t(l.key),
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            aria-label={t("menuAria")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white/70 text-brand-700 backdrop-blur transition hover:border-brand-400 hover:bg-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="flex flex-col gap-1 px-4 pb-4 md:hidden sm:px-6">
          {links.map((l) => (
            <li key={l.key}>
              {navLink(
                l.hash,
                "block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700",
                t(l.key),
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
