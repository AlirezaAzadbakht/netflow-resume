import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ORIGIN = "https://netflowai.ir";
const LOCALES = ["en", "fa"];

const src = readFileSync("data/products.ts", "utf8");
const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const products = [
  ...src.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?name:\s*\{\s*en:\s*"([^"]+)",\s*fa:\s*"([^"]+)"[\s\S]*?short:\s*\{\s*en:\s*"([^"]+)",\s*fa:\s*"([^"]+)"/g,
  ),
].map(([, slug, nameEn, nameFa, shortEn, shortFa]) => ({
  slug,
  name: { en: nameEn, fa: nameFa },
  short: { en: shortEn, fa: shortFa },
}));

if (products.length !== slugs.length) {
  throw new Error(
    `product parse mismatch: ${products.length} records vs ${slugs.length} slugs`,
  );
}

const messages = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    JSON.parse(readFileSync(`messages/${locale}.json`, "utf8")),
  ]),
);

const keys = [];
for (const locale of LOCALES) {
  keys.push(locale);
  for (const product of products) {
    keys.push(`${locale}/products/${product.slug}`);
  }
}

if (process.argv[2] === "--keys") {
  process.stdout.write(`${keys.join("\n")}\n`);
  process.exit(0);
}

function esc(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function altKey(key, locale) {
  return [locale, ...key.split("/").slice(1)].join("/");
}

function pageFor(key) {
  const [locale, section, slug] = key.split("/");
  const product = section === "products" ? products.find((p) => p.slug === slug) : undefined;
  return {
    locale,
    title: product ? `${product.name[locale]} - NetflowAI` : messages[locale].meta.title,
    description: product ? product.short[locale] : messages[locale].meta.description,
    isHome: !product,
  };
}

function injectHead(template, key) {
  const { locale, title, description, isHome } = pageFor(key);
  const dir = locale === "fa" ? "rtl" : "ltr";
  const url = `${ORIGIN}/${key}`;
  const enUrl = `${ORIGIN}/${altKey(key, "en")}`;
  const faUrl = `${ORIGIN}/${altKey(key, "fa")}`;
  const extras = [
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="fa" href="${faUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${isHome ? "website" : "article"}" />`,
    `<meta property="og:locale" content="${locale === "fa" ? "fa_IR" : "en_US"}" />`,
    `<meta property="og:image" content="${ORIGIN}/og.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    isHome
      ? `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NetflowAI",
          url: ORIGIN,
          logo: `${ORIGIN}/favicon.svg`,
        })}</script>`
      : "",
  ]
    .filter(Boolean)
    .map((line) => `    ${line}`)
    .join("\n");

  return template
    .replace('<html lang="en">', `<html lang="${locale}" dir="${dir}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${esc(description)}" />`,
    )
    .replace("</head>", `${extras}\n  </head>`);
}

function sitemapXml() {
  const urls = keys
    .map((key) => {
      const loc = `${ORIGIN}/${key}`;
      const en = `${ORIGIN}/${altKey(key, "en")}`;
      const fa = `${ORIGIN}/${altKey(key, "fa")}`;
      return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="fa" href="${fa}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

const dist = "dist";
const template = readFileSync(join(dist, "index.html"), "utf8");

writeFileSync(join(dist, "index.html"), injectHead(template, "en"));
writeFileSync(join(dist, "404.html"), injectHead(template, "en"));
for (const key of keys) {
  const dest = join(dist, key, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, injectHead(template, key));
}
writeFileSync(join(dist, "sitemap.xml"), sitemapXml());

const faHome = readFileSync(join(dist, "fa/index.html"), "utf8");
if (
  !faHome.includes('lang="fa"') ||
  !faHome.includes('dir="rtl"') ||
  !faHome.includes(esc(messages.fa.meta.title))
) {
  throw new Error("fa homepage is missing injected SEO tags");
}
