# StatMarqueeCta Specification

## Overview
- **Target file:** `src/components/livestreams/StatMarqueeCta.tsx`
- **Interaction model:** time-driven (continuous auto-scroll, see BEHAVIORS.md §3) — NOT click or scroll-driven. No user interaction changes anything (hover-pause is optional polish only).
- **Data:** `STAT_MARQUEE_UP`, `STAT_MARQUEE_DOWN` from `src/data/livestreams-data.ts`, each an array of `{ stat: string, label: string, color: string }` where `color` is already a Tailwind class string (e.g. `"bg-[#f8d7dd]"`, `"bg-[#6c4bd8] text-white"`) — apply it directly via `className={cn(baseCardClasses, item.color)}`.

## DOM Structure
```
<section> full-width, two-column layout: text/CTA left, marquee right
  <div> left column
    <div> pill: "Talk to sales"
    <h2>Streamline <u>data</u> <u>enrichment</u></h2>   — note: "data enrichment" is underlined in the original
    <p>Leverage 100+ data sources and an AI agent with 140M monthly runs.</p>
    <a className="btn">Schedule a demo →</a>
  <div> right column: two marquee columns side by side, both with overflow-hidden + a fade/mask at top and bottom edges (so cards appear to scroll in/out smoothly rather than clipping abruptly — a `mask-image: linear-gradient(...)` or edge-fade overlay div is the standard technique)
    <MarqueeColumn items={STAT_MARQUEE_UP} direction="up" />
    <MarqueeColumn items={STAT_MARQUEE_DOWN} direction="down" />
```

## MarqueeColumn implementation
- Render the item list TWICE back-to-back inside a flex-col wrapper (`[...items, ...items].map(...)`), so the loop point is invisible.
- Animate the wrapper with a CSS `@keyframes` that translates `translateY(0)` → `translateY(-50%)` (exactly half, since content is duplicated), `animation: marquee-up 25s linear infinite` (or `marquee-down` with reversed direction/timing).
- `direction="down"` column: either reverse the keyframe direction or use `animation-direction: reverse` on the same keyframe — net effect must be visually opposite of the "up" column.
- Add these keyframes to `src/app/globals.css` (not inline) since animations belong in the global stylesheet per this repo's existing convention — check how other animated components in `clay/` register keyframes.

## Stat card (individual item inside a marquee column)
- Each card: rounded corners (`rounded-2xl` or similar, match this repo's card radius convention), padding (~24px), the background color comes from `item.color` data field, text color also may come from `item.color` (some entries include `text-white`).
- Content: large bold `stat` value (e.g. "6mo", "600+", "+2x", "$34K+") at top, smaller `label` description text below.
- Example from data: `{ stat: "6mo", label: "Enriched lost deals re-enter the pipeline", color: "bg-[#f8d7dd]" }` — stat is large/bold (~28-32px bold), label is smaller regular text (~14-16px) below it.
- Cards stack vertically within their column with a consistent gap (~16px).
- Column width: roughly 260-300px per column on desktop; the two columns sit side by side with a gap.

## Left column content (verbatim text)
- Pill: "Talk to sales"
- Heading: "Streamline data enrichment" — render as `Streamline <u>data</u> <u>enrichment</u>` (the words "data" and "enrichment" are underlined, matching the visual — use `<span className="underline decoration-2 underline-offset-4">`)
- Body: "Leverage 100+ data sources and an AI agent with 140M monthly runs."
- CTA: "Schedule a demo" with a trailing arrow icon (`ArrowRightIcon`)
- Heading styling: use this repo's heading font/weight convention (large, bold, ~40-56px responsive — match the pattern used in `FinalCta.tsx` or similar existing `clay/` heading treatments for consistency, since exact px wasn't captured for this specific heading)

## Responsive Behavior
- **Desktop (1440px):** two-column layout, text left (~40% width), marquee columns right (~60% width, two sub-columns).
- **Mobile (390px):** stack vertically — text/CTA on top, marquee columns below (still two side-by-side sub-columns, just narrower, OR stack to a single column if two are too cramped — use judgment based on available width, minimum ~140px per column before switching to single).
- **Breakpoint:** around `lg` (1024px) for the main two-column switch, consistent with rest of repo.

## Notes
- This section is visually distinct from the page's otherwise-white background — it has its own light gray/off-white section background (visible in the screenshot as a subtle warm gray, similar to the card background `#F4F3F0` used elsewhere on this page — reuse that token for consistency unless closer inspection suggests otherwise).
- Do not confuse this with `FinalCta.tsx` (the existing green "Turn your growth ideas into reality today" section) — that is a different, already-built component used elsewhere on the site. This is a new, separate component specific to pages that need the stat-marquee treatment.
