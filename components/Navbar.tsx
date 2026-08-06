"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
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

export function Navbar({ showTeam }: { showTeam: boolean }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const isHome = pathname === "/";
=======
  const visibleLinks = showTeam
    ? links
    : links.filter((l) => l.key !== "team");
>>>>>>> backup-weknd-main

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
<<<<<<< HEAD
          {links.map((l) => {
            const className =
              "relative rounded-full px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700";

            // On the home page, native hash anchors scroll smoothly.
            // Off home, go to /#section so the target section exists.
            if (isHome) {
              return (
                <li key={l.key}>
                  <a href={`#${l.hash}`} className={className}>
                    {t(l.key)}
                  </a>
                </li>
              );
            }

            return (
              <li key={l.key}>
                <Link href={`/#${l.hash}`} className={className}>
                  {t(l.key)}
                </Link>
              </li>
            );
          })}
=======
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
>>>>>>> backup-weknd-main
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
