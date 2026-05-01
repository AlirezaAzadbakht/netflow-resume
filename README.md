# NetflowAI — Team & Product Resume Site

A bilingual (English / Persian) Next.js website that showcases the **NetflowAI** team and its eleven flagship products to investors, enterprise leaders, and partners.

The site is styled to match the NetflowAI app interface — soft white background, glowing purple accent gradients, and an animated multi-agent workflow visual that reflects the team's identity.

---

## Tech Stack

| Layer        | Choice                                                                        |
| ------------ | ----------------------------------------------------------------------------- |
| Framework    | **Next.js 15** (App Router) + TypeScript + React 19                          |
| Styling      | **Tailwind CSS 3** with a custom NetflowAI palette                            |
| Animation    | **framer-motion** + custom SVG node-network                                   |
| i18n         | **next-intl** with locale-prefixed routes (`/en`, `/fa`) and full RTL support |
| Icons        | **lucide-react**                                                              |
| Fonts        | Inter (EN) + Vazirmatn (FA), loaded from Google Fonts                         |

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

The dev server starts at **http://localhost:3000** and automatically redirects to `/en` (default locale).

### Production Build

```bash
npm run build
npm start
```

The build statically pre-renders **27 pages** (home + 11 product detail pages × 2 locales).

---

## Site Structure

```
app/
  [locale]/
    layout.tsx              # Locale provider, fonts, RTL/LTR direction
    page.tsx                # Single-page landing (Hero → About → Stack → Products → Team → Contact)
    products/
      [slug]/page.tsx       # Detail page for each product
  globals.css               # Tailwind layers + NetflowAI design tokens
  layout.tsx                # Root pass-through

components/
  Hero.tsx                  # Hero with animated workflow nodes + typewriter tagline
  WorkflowNodes.tsx         # SVG multi-agent network animation
  About.tsx
  TechStack.tsx
  ProductsGrid.tsx          # Card grid linking to product detail pages
  ProductCard.tsx
  Team.tsx
  TeamCard.tsx              # Avatar placeholder; swap for real photos (see below)
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
  team.ts                   # 4 team members, bilingual
  stack.ts                  # Tech stack badges

i18n/
  routing.ts                # Locale config (en, fa)
  navigation.ts             # Locale-aware Link, useRouter, usePathname
  request.ts                # Server-side message loader

messages/
  en.json
  fa.json

middleware.ts               # next-intl locale routing
```

---

## Bilingual Behavior

- **URL-based locale**: every page is served under `/en/...` or `/fa/...`.
- **Direction**: `<html dir="rtl">` is set automatically when `locale === "fa"`.
- **Font swap**: Vazirmatn is applied automatically when the document is RTL.
- **FA/EN button**: top-right of the navbar; preserves the current path and scroll position.

---

## Adding Real Team Photos

The team section currently uses gradient avatars with member initials. To replace them with real photos:

1. Drop square images (recommended **400×400 px**) into `public/team/` using each member's `id`:
   - `public/team/arian-banaie.jpg`
   - `public/team/alireza-azadbakht.jpg`
   - `public/team/ali-afzalpoor.jpg`
   - `public/team/shayesteh-momahhed.jpg`
2. Update [components/TeamCard.tsx](components/TeamCard.tsx) to use `next/image`:

```tsx
import Image from "next/image";

<div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white shadow-glow">
  <Image
    src={`/team/${member.id}.jpg`}
    alt={member.name.en}
    fill
    sizes="128px"
    className="object-cover"
  />
</div>
```

(Look for the `// TODO: replace this gradient avatar` comment in `TeamCard.tsx`.)

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

The slug becomes the URL segment for the detail page (`/[locale]/products/<slug>`), automatically picked up by `generateStaticParams`.

---

## Signature Animations

- **Workflow node background** in the hero — floating SVG nodes connected by curved bezier paths with traveling pulses, mirroring the NetflowAI canvas UI.
- **Typewriter** subtitle types in on first paint.
- **Scroll-reveal** stagger across sections (`SectionReveal`).
- **Magnetic hover** on product cards: lift, gradient border glow, and a pulsing dot in the corner.
- **Animated stack badges** scale-in with stagger when the section enters view.
- **Smooth lang switch** keeps the user in place, flips direction, and swaps fonts.

---

## Scripts

| Script          | Purpose                                |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start the dev server (`localhost:3000`) |
| `npm run build` | Production build with static generation |
| `npm start`     | Serve the production build              |
| `npm run lint`  | Lint with eslint-config-next            |

---

## License

© NetflowAI. All rights reserved.
