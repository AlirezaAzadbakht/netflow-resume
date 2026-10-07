import type { ComponentProps } from "react";
import { Link as RouterLink, useLocation } from "react-router";
import { useLocale } from "use-intl";

type LinkProps = Omit<ComponentProps<typeof RouterLink>, "to"> & {
  href: string;
};

function prefixHref(href: string, locale: string): string {
  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const normalized = path === "" ? "/" : path;
  const prefixed =
    normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
  return `${prefixed}${hash}`;
}

export function Link({ href, viewTransition = true, ...props }: LinkProps) {
  const locale = useLocale();
  return (
    <RouterLink
      to={prefixHref(href, locale)}
      viewTransition={viewTransition}
      {...props}
    />
  );
}

/** Pathname without the locale prefix. */
export function usePathname() {
  const { pathname } = useLocation();
  const stripped = pathname.replace(/^\/(en|fa)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}
