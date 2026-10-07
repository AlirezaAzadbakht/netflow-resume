import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
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

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }

    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target.id, e.intersectionRatio);
        let best = "";
        let bestR = 0;
        for (const [id, r] of ratios) {
          if (r > bestR) {
            bestR = r;
            best = id;
          }
        }
        if (bestR > 0) setActive(best);
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: [0, 0.15, 0.3, 0.5, 1] },
    );

    for (const l of links) {
      const el = document.getElementById(l.hash);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [isHome]);

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

  const desktopClass = (hash: string) =>
    `nav-underline text-sm hover:text-ink-900 ${
      active === hash ? "is-active text-ink-900" : "text-ink-500"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-colors ${
        scrolled || open ? "border-b border-ink-900/10" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          dir="ltr"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="text-base font-semibold tracking-tight text-ink-900">
            Netflow<span className="text-brand-600">AI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.key}>{navLink(l.hash, desktopClass(l.hash), t(l.key))}</li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <LanguageToggle />
          <button
            type="button"
            aria-label={t("menuAria")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink-900 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-ink-900/10 bg-paper md:hidden"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04, ease }}
                className="border-b border-ink-900/10"
              >
                {navLink(
                  l.hash,
                  `block px-4 py-3 text-sm sm:px-6 ${
                    active === l.hash ? "text-ink-900" : "text-ink-700"
                  }`,
                  t(l.key),
                )}
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
