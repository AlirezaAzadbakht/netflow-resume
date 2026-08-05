"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { href: "#about", key: "about" as const },
  { href: "#stack", key: "stack" as const },
  { href: "#products", key: "products" as const },
  { href: "#team", key: "team" as const },
  { href: "#contact", key: "contact" as const },
];

export function Navbar({ showTeam }: { showTeam: boolean }) {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const visibleLinks = showTeam
    ? links
    : links.filter((l) => l.key !== "team");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100/70 bg-white/80 backdrop-blur-xl shadow-[0_2px_24px_-12px_rgba(124,58,237,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          dir="ltr"
          className="flex items-center gap-2.5 group"
        >
          <Logo />
          <span className="text-base font-semibold tracking-tight text-ink-900">
            Netflow<span className="text-brand-600">AI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {visibleLinks.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
