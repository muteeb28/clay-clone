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
    layout.tsx           # Fonts, metadata, root HTML shell
    page.tsx              # Assembles all homepage sections in order
    globals.css           # Design tokens, Tailwind theme config
    livestreams/
      page.tsx             # /livestreams route (client component)
  components/
    clay/                  # One component per homepage section
      Header.tsx
      Hero.tsx
      SocialProofMarquee.tsx
      GtmBuilder.tsx
      FeatureShowcaseSection.tsx / FeatureShowcase.tsx
      CaseStudies.tsx
      ResourceGrid.tsx
      FinalCta.tsx
      Footer.tsx
    livestreams/            # One component per /livestreams section
      LivestreamsHero.tsx
      FilterPills.tsx
      LivestreamRow.tsx
      LivestreamCard.tsx
      StatMarqueeCta.tsx
    ui/                     # shadcn/ui primitives (button, etc.)
    icons.tsx               # Extracted SVG icons as React components
  data/livestreams-data.ts  # Content for the /livestreams page
  lib/utils.ts              # cn() class-merge helper
  types/
    clay.ts                  # Shared content/prop types for the clay/ components
    livestreams.ts            # Shared content/prop types for the livestreams/ components
public/
  images/clay.com/
    livestreams/            # Downloaded /livestreams assets (59 files)
    ...                       # Downloaded homepage assets (logos, avatars, hero, features, etc.)
  videos/clay.com/          # Downloaded video assets
  seo/                      # Favicons, OG image
```

## Page Composition

`src/app/page.tsx` renders the homepage top to bottom:

`Header → Hero → SocialProofMarquee → GtmBuilder → FeatureShowcaseSection → CaseStudies → ResourceGrid → FinalCta → Footer`

Each section is a self-contained component under `src/components/clay/` — edit the corresponding file to change that section. Content strings (headings, copy, links) live inline in each component or in `src/types/clay.ts` where shared.

## `/livestreams` Page

A pixel-accurate rebuild of [clay.com/livestreams](https://clay.com/livestreams), routed at `src/app/livestreams/page.tsx` (client component).

**Sections, top to bottom:**

`Header → LivestreamsHero → FilterPills → LivestreamRow[] (or filtered grid) → StatMarqueeCta → Footer`

- `LivestreamsHero` — badge + heading + CTA, with the first row's featured card as the promo image.
- `FilterPills` — presentational row of category pills (`{ pills, active, onSelect }`); owns no state.
- `LivestreamRow` / `LivestreamCard` — in the default "All" pill, renders 11 titled horizontal-carousel rows; selecting any other pill collapses everything into a single untitled 3-column grid of matching cards (filtering logic lives in `page.tsx`, not in `FilterPills`).
- `StatMarqueeCta` — "Streamline data enrichment" CTA beside two columns of stat cards auto-scrolling in opposite directions.

**Data:** all copy lives in `src/data/livestreams-data.ts`, typed by `src/types/livestreams.ts`:
- `LIVESTREAM_ROWS: LivestreamRow[]` — the 11 rows and their cards.
- `STAT_MARQUEE_UP` / `STAT_MARQUEE_DOWN: StatMarqueeItem[]` — the two scrolling stat columns.
- `FILTER_PILLS` — the 13 pill labels ("All" + 12 categories), including two GTM-specific categories: `"The future of GTM"` and `"GTM Strategy & Best Practices"`.

GTM (go-to-market) isn't a separate stream or page — it's a recurring content topic within this page. Cards surface under a GTM pill either by living in a row whose title matches the pill (`"The future of GTM"`, `"GTM Strategy & Best Practices"`) or via their own `tags` array, so a GTM-tagged card from another row (e.g. an EMEA or Tactical Playbooks row) can also appear under a GTM filter. See `docs/research/PAGE_TOPOLOGY.md` and `docs/research/BEHAVIORS.md` for the full extraction notes this page was built from.

Images live under `public/images/clay.com/livestreams/` (59 files), referenced by path from the data file.

## Notes for Contributors

- Match the existing Tailwind utility-class style — no inline styles, no CSS-in-JS.
- Images/videos referenced by components live under `public/images/clay.com/` and `public/videos/clay.com/`; keep new assets organized the same way (one subfolder per section/purpose).
- Run `npm run check` before committing — it covers lint, type errors, and a production build.
