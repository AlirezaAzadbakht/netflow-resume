"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

/** Scroll to #hash after client navigations (Next.js often skips native hash scroll). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;

      const tryScroll = (attemptsLeft: number) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (attemptsLeft > 0) {
          window.setTimeout(() => tryScroll(attemptsLeft - 1), 50);
        }
      };

      // After route change, home sections may not be mounted yet.
      window.setTimeout(() => tryScroll(20), 0);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
