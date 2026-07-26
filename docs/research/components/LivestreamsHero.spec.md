# LivestreamsHero Specification

## Overview
- **Target file:** `src/components/livestreams/LivestreamsHero.tsx`
- **Interaction model:** static (no animation, no state)
- **Data:** takes the featured card as a prop — use `LIVESTREAM_ROWS[0].cards[0]` from `src/data/livestreams-data.ts` (the first "Upcoming live" card) for the promo image (`card.image`), its title (used as `alt` text), and its `slug` (link target `/livestreams/${slug}`). The heading/subtitle/badge text below are static, not data-driven.

## DOM Structure
```
<section> (page bg white, generous top padding to clear fixed header + bottom padding before pills)
  <div> two-column layout: flex-col on mobile, flex-row (or grid-cols-2) on desktop, items centered vertically, gap between columns
    <div> left column (text)
      <div> badge pill: "Streaming weekly"
      <h1>GTM livestreams</h1>
      <p> subtitle
    <a href={`/livestreams/${slug}`}> right column: promo image card (just the image, rounded corners, no extra chrome — the image itself already contains all its own text/graphics)
  <div> centered CTA row below both columns
    <a>Register for upcoming livestream →</a>
```

## Computed Styles (exact values from getComputedStyle, desktop/1440px)

### Badge ("Streaming weekly")
- display: inline-block
- fontSize: 12px, fontWeight: 400, textTransform: none
- color: rgb(0, 0, 0)
- backgroundColor: rgb(255, 255, 255)
- padding: 7.2px 14.4px (≈ `px-4 py-2` scaled down — use `px-3.5 py-[7px]`)
- borderRadius: 1584px (i.e. fully pill-shaped — use `rounded-full`)
- border: 1px solid rgb(133, 129, 122) → `border border-[#85817A]`
- margin-bottom: 24px

### H1 ("GTM livestreams")
- fontSize: 72px, fontWeight: 500, lineHeight: 72px (1:1, i.e. `leading-none`)
- letterSpacing: -2.16px (≈ `-0.03em`)
- color: rgb(0, 0, 0)
- font: use this repo's existing serif heading font (`font-heading` / Fraunces, same convention as other `clay/` components — check `FinalCta.tsx` for the pattern), since Roobert can't be redistributed
- Desktop: 72px. Mobile (390px): scale down to ~40px (observed visually stacking to roughly half), use responsive classes e.g. `text-[40px] md:text-[56px] lg:text-[72px]`

### Subtitle (paragraph under H1)
- fontSize: 16px, fontWeight: 400, lineHeight: 24px
- color: rgb(0, 0, 0) (visually reads as full black, not muted)
- width constrained to ~590px max on desktop (`max-w-[590px]`)
- Text: "Clay livestreams are live walkthroughs of real workflows, with space to ask questions as we go. All times are ET."

### CTA button ("Register for upcoming livestream")
- fontSize: 16px, fontWeight: 500, lineHeight: 24px, letterSpacing: -0.16px
- color: rgb(255, 255, 255) on backgroundColor: rgb(0, 0, 0)
- padding: 8px 16px
- borderRadius: 12px
- gap: 8px (between label and arrow icon)
- Contains an arrow-right icon after the label — use `ArrowRightIcon` from `src/components/icons.tsx`
- Links to the same featured card's detail route: `/livestreams/${slug}`
- Hover: consistent with other `clay/` buttons in this repo (check existing `.btn`-style hover convention, e.g. slight opacity/scale change)

### Hero promo image
- This is a single flat marketing image (not a composed layout) — just render it with `next/image`, `object-fit: cover`, rounded corners (`rounded-2xl` or similar — match the card radius convention of `30px`/`rounded-[30px]` used elsewhere in this data set for consistency, or a slightly smaller radius if it looks better against the image's own baked-in rounded corners — use judgment)
- Natural size 1424×801 (≈ 16:9 aspect, actually closer to 1.78:1)
- Desktop display size: ~590×332 (matches left column width)
- Image path comes from `card.image` (already downloaded locally)

## Assets
- Hero image: from data (`LIVESTREAM_ROWS[0].cards[0].image`)
- Icon: `ArrowRightIcon` from `icons.tsx`

## Text Content (verbatim)
- Badge: "Streaming weekly"
- H1: "GTM livestreams"
- Subtitle: "Clay livestreams are live walkthroughs of real workflows, with space to ask questions as we go. All times are ET."
- CTA: "Register for upcoming livestream"

## Responsive Behavior
- **Desktop (1440px):** two columns side by side, text left (~590px), image right (~590px), CTA button centered below both, full width of the content container.
- **Mobile (390px):** stacks vertically — badge, H1, subtitle, then full-width image card, then CTA button — all effectively centered/full-width within the page padding. H1 shrinks substantially (see above).
- **Breakpoint:** switch from stacked to two-column around `lg` (1024px), consistent with other components in this repo.
