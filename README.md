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
    pricing/
      page.tsx             # /pricing route
    clay-for-startups/
      page.tsx             # /clay-for-startups route
    use-cases/abm/
      page.tsx             # /use-cases/abm route
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
    pricing/                 # One component per /pricing section
      PricingHero.tsx
      PricingPlans.tsx / PricingCard.tsx
      ComparisonTable.tsx
      UsageBasedPricing.tsx
      CustomerCarousel.tsx
      SecurityBadges.tsx
      PricingFaq.tsx
    startups/                # One component per /clay-for-startups section
      StartupsHero.tsx
      StartupsLogoCloud.tsx
      GtmGrid.tsx
      ProgramCard.tsx          # shared shell for the Wedge + Campus Ambassador sections
      TalentJobs.tsx
      ResourcesGallery.tsx
      ResourceLinks.tsx
      StartupsFaq.tsx
      StartupsTestimonials.tsx  # also reused on /use-cases/abm
      StartupsClosingCta.tsx
    abm/                     # One component per /use-cases/abm section
      AbmHero.tsx
      AbmDataCards.tsx
      AbmCaseStudies.tsx
      AbmFeatureRow.tsx / OrbitDiagram.tsx
      AbmMultiThread.tsx
      AbmDemoCta.tsx
    ui/                     # shadcn/ui primitives (button, etc.)
    icons.tsx               # Extracted SVG icons as React components
  data/
    livestreams-data.ts    # Content for the /livestreams page
    pricing-data.ts        # Content for the /pricing page
    startups-data.ts       # Content for the /clay-for-startups page
    abm-data.ts             # Content for the /use-cases/abm page
  lib/utils.ts              # cn() class-merge helper
  types/
    clay.ts                  # Shared content/prop types for the clay/ components
    livestreams.ts            # Shared content/prop types for the livestreams/ components
    pricing.ts                 # Shared content/prop types for the pricing/ components
    startups.ts                 # Shared content/prop types for the startups/ components
    abm.ts                       # Shared content/prop types for the abm/ components
public/
  images/clay.com/
    livestreams/            # Downloaded /livestreams assets (59 files)
    pricing/                 # Downloaded /pricing assets
    startups/                # Downloaded /clay-for-startups assets
    abm/                     # Downloaded /use-cases/abm assets
    ...                       # Downloaded homepage assets (logos, avatars, hero, features, etc.)
  videos/clay.com/          # Downloaded video assets
  seo/                      # Favicons, OG image
scripts/
  download-pricing-assets.mjs   # Fetches /pricing images into public/images/clay.com/pricing/
  download-startups-assets.mjs  # Fetches /clay-for-startups images into public/images/clay.com/startups/
  download-abm-assets.mjs        # Fetches /use-cases/abm images into public/images/clay.com/abm/
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

## `/pricing` Page

A pixel-accurate rebuild of [clay.com/pricing](https://clay.com/pricing), routed at `src/app/pricing/page.tsx`.

**Sections, top to bottom:**

`Header → PricingHero → PricingPlans → ComparisonTable → UsageBasedPricing → CustomerCarousel → SecurityBadges → PricingFaq → Footer`

- `PricingPlans` renders one `PricingCard` per tier. Cards come in two variants: `static` (Free/Enterprise — fixed price and feature list) and `calculator` (Launch/Growth — interactive action/credit selectors that recompute the monthly total client-side).
- `ComparisonTable` — full feature-by-plan grid.
- `UsageBasedPricing` — explains the action/credit metering model referenced by the calculator cards.

**Data:** `src/data/pricing-data.ts`, typed by `src/types/pricing.ts`.

## `/clay-for-startups` Page

A pixel-accurate rebuild of [clay.com/clay-for-startups](https://clay.com/clay-for-startups), routed at `src/app/clay-for-startups/page.tsx`.

**Sections, top to bottom:**

`Header → StartupsHero → StartupsLogoCloud → GtmGrid → ProgramCard (Wedge) → TalentJobs → ProgramCard (Campus Ambassadors) → ResourcesGallery → ResourceLinks → StartupsFaq → StartupsTestimonials → StartupsClosingCta → Footer`

- `ProgramCard` is a shared shell (icon, eyebrow, heading, description, CTAs, benefits list) reused for both the Wedge accelerator and Campus Ambassador program sections — pass different content props rather than duplicating the component.
- `StartupsTestimonials` is also reused on `/use-cases/abm`.

**Data:** `src/data/startups-data.ts` (`WEDGE_BENEFITS`, `CAMPUS_BENEFITS`, etc.), typed by `src/types/startups.ts`.

## `/use-cases/abm` Page

A pixel-accurate rebuild of [clay.com/use-cases/abm](https://clay.com/use-cases/abm), routed at `src/app/use-cases/abm/page.tsx`.

**Sections, top to bottom:**

`Header → AbmHero → AbmDataCards → AbmCaseStudies → AbmFeatureRow[] → AbmMultiThread → AbmDemoCta → StartupsTestimonials → Footer`

- `AbmFeatureRow` is rendered once per entry in `ABM_FEATURE_ROWS`, alternating image/text sides via the `reverse` prop (odd-indexed rows flip). `OrbitDiagram` is the animated illustration used inside one of these rows.

**Data:** `src/data/abm-data.ts` (`ABM_FEATURE_ROWS`), typed by `src/types/abm.ts`.

## Asset Download Scripts

`scripts/download-*.mjs` (livestreams, pricing, startups, abm) fetch each page's images from the live Clay.com site into the matching `public/images/clay.com/<page>/` folder. Run with `node scripts/download-<page>-assets.mjs` if assets need to be re-pulled; they aren't part of the normal `npm run dev`/`build` flow.

## Notes for Contributors

- Match the existing Tailwind utility-class style — no inline styles, no CSS-in-JS.
- Images/videos referenced by components live under `public/images/clay.com/` and `public/videos/clay.com/`; keep new assets organized the same way (one subfolder per section/purpose).
- Run `npm run check` before committing — it covers lint, type errors, and a production build.
