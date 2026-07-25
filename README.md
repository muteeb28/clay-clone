# Clay Landing Page

A pixel-accurate rebuild of the [Clay.com](https://clay.com) marketing homepage, built with Next.js 16 + Tailwind CSS v4 + shadcn/ui.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript (strict)
- **Tailwind CSS v4** — utility classes, oklch design tokens (see `src/app/globals.css`)
- **shadcn/ui** — Radix/Base UI primitives, `cn()` helper in `src/lib/utils.ts`
- **Lucide React** — used alongside hand-extracted SVGs in `src/components/icons.tsx`
- **Fonts** — Geist (sans/mono) + Fraunces (serif), loaded via `next/font/google` in `src/app/layout.tsx`. These stand in for Clay's commercial fonts (Roobert/Canela), which can't be redistributed.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck + build
```

## Project Structure

```
src/
  app/
    layout.tsx        # Fonts, metadata, root HTML shell
    page.tsx           # Assembles all sections in order
    globals.css        # Design tokens, Tailwind theme config
  components/
    clay/               # One component per homepage section
      Header.tsx
      Hero.tsx
      SocialProofMarquee.tsx
      GtmBuilder.tsx
      FeatureShowcaseSection.tsx / FeatureShowcase.tsx
      CaseStudies.tsx
      ResourceGrid.tsx
      FinalCta.tsx
      Footer.tsx
    ui/                 # shadcn/ui primitives (button, etc.)
    icons.tsx           # Extracted SVG icons as React components
  lib/utils.ts          # cn() class-merge helper
  types/clay.ts         # Shared content/prop types for the clay/ components
public/
  images/clay.com/      # Downloaded site assets (logos, avatars, hero, features, etc.)
  videos/clay.com/      # Downloaded video assets
  seo/                  # Favicons, OG image
```

## Page Composition

`src/app/page.tsx` renders the homepage top to bottom:

`Header → Hero → SocialProofMarquee → GtmBuilder → FeatureShowcaseSection → CaseStudies → ResourceGrid → FinalCta → Footer`

Each section is a self-contained component under `src/components/clay/` — edit the corresponding file to change that section. Content strings (headings, copy, links) live inline in each component or in `src/types/clay.ts` where shared.

## Notes for Contributors

- Match the existing Tailwind utility-class style — no inline styles, no CSS-in-JS.
- Images/videos referenced by components live under `public/images/clay.com/` and `public/videos/clay.com/`; keep new assets organized the same way (one subfolder per section/purpose).
- Run `npm run check` before committing — it covers lint, type errors, and a production build.
