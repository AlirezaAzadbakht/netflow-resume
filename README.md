# NetflowAI — Team & Product Resume Site

A bilingual (English / Persian) React website that showcases the **NetflowAI** team and its eleven flagship products to investors, enterprise leaders, and partners.

The site is styled to match the NetflowAI app interface — soft white background, glowing purple accent gradients, and an animated multi-agent workflow visual that reflects the team's identity.

---

## Tech Stack

| Layer        | Choice                                                                        |
| ------------ | ----------------------------------------------------------------------------- |
| Framework    | **Vite** + React 19 + TypeScript                                              |
| Routing      | **React Router** with locale-prefixed routes (`/en`, `/fa`)                   |
| Styling      | **Tailwind CSS 3** with a custom NetflowAI palette                            |
| Animation    | **framer-motion** + custom SVG node-network                                   |
| i18n         | **use-intl** with full RTL support                                            |
| Icons        | **lucide-react**                                                              |
| Fonts        | Inter (EN) + Vazirmatn / Iranian Sans (FA), served from `public/fonts/`       |

---

## Getting Started

### Prerequisites

- **Node.js 18.18+** (Node 20+ recommended)
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at **http://localhost:3000** and redirects `/` to `/en` (or `/fa` when the browser language starts with `fa`).

### Production Build

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Preview serves that folder with SPA fallback so deep links like `/en/products/<slug>` work on reload.

---

## Site Structure

```
index.html                  # Vite entry (fonts, favicon)
src/
  main.tsx                  # Router: /, /:locale, /:locale/products/:slug
  LocaleLayout.tsx          # IntlProvider, lang/dir, Navbar, Footer
  HomePage.tsx              # Landing (Hero → About → Clients → Products → Team → Contact)
  ProductPage.tsx           # Detail page for each product
  index.css                 # Tailwind layers + NetflowAI design tokens

components/
  Hero.tsx                  # Hero with animated workflow nodes + typewriter tagline
  WorkflowNodes.tsx         # SVG multi-agent network animation
  About.tsx
  Organizations.tsx         # Client logos
  ProductsGrid.tsx          # Card grid linking to product detail pages
  ProductCard.tsx
  Team.tsx
  TeamCard.tsx
  Contact.tsx
  Navbar.tsx
  LanguageToggle.tsx        # FA/EN switcher
  Footer.tsx
  SectionReveal.tsx         # Scroll-triggered fade/slide-up wrapper
  ProductDetailAnimations.tsx
  Logo.tsx
  Typewriter.tsx

data/
  products.ts               # All 11 products, bilingual (EN + FA)
  team.ts                   # Team members, bilingual

i18n/
  routing.ts                # Locale config (en, fa)
  navigation.tsx            # Locale-aware Link and usePathname

messages/
  en.json
  fa.json
```

---

## Bilingual Behavior

- **URL-based locale**: every page is served under `/en/...` or `/fa/...`.
- **Direction**: `<html dir="rtl">` is set automatically when `locale === "fa"`.
- **Font swap**: Vazirmatn / Iranian Sans is applied automatically when the document is RTL.
- **FA/EN button**: top-right of the navbar; preserves the current path and hash.

---

## Adding or Editing Products

All product content lives in **[data/products.ts](data/products.ts)** as a typed array. Each entry contains bilingual strings for `name`, `short`, `purpose`, `features`, and `client`, plus an optional `demo` URL, an `icon` (from lucide-react), and an `accent` Tailwind gradient class.

```ts
{
  slug: "my-new-product",
  icon: Sparkles,
  accent: "from-violet-500 to-fuchsia-500",
  name: { en: "My Product", fa: "محصول من" },
  // ...
}
```

The slug becomes the URL segment for the detail page (`/[locale]/products/<slug>`).

---

## Deploy (Arvan Cloud Object Storage)

On push to `main`, [`.github/workflows/deploy-website.yml`](.github/workflows/deploy-website.yml) builds `dist/` and syncs it to an Arvan Cloud bucket with rclone.

Configure these GitHub secrets and variables:

| Kind    | Name              | Notes                                                                 |
| ------- | ----------------- | --------------------------------------------------------------------- |
| Secret  | `ARVAN_ACCESS_KEY` | Access key ID                                                         |
| Secret  | `ARVAN_SECRET_KEY` | Secret access key                                                     |
| Secret  | `ARVAN_BUCKET`     | Bucket name                                                           |
| Variable | `ARVAN_ENDPOINT`  | Optional. Default `s3.ir-thr-at1.arvanstorage.ir`                     |

Enable static website hosting on the bucket (**index document:** `index.html`).

Arvan returns **403** for missing keys (not 404), so an error document cannot cover `/en` on refresh. The build writes `en/index.html` (and each product path), and the deploy also uploads `index.html` at the no-slash keys `/en`, `/fa`, and `/…/products/<slug>`.

---

## Scripts

| Script            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Vite dev server (`localhost:3000`)      |
| `npm run build`   | Typecheck and write `dist/`             |
| `npm run preview` | Serve the production build              |
| `npm run lint`    | Lint with ESLint                        |

---

## License

© NetflowAI. All rights reserved.
