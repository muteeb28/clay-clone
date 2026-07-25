# GtmBuilder Specification

## Overview
- **Target file:** `src/components/clay/GtmBuilder.tsx`
- **Screenshot:** none saved directly (recon was via live scroll observation) — reference colors/copy below, verified by direct browser observation of state changes over time.
- **Interaction model:** two sub-widgets, both **client components** (`"use client"`)
  1. Pill tab carousel — **TIME-DRIVEN auto-advance**, confirmed by direct observation (see below), also click-selectable.
  2. AI builder input — **time-driven typewriter placeholder animation**.

## DOM Structure
Single section, white/default background, containing:
1. H2: "GTM engineers build on Clay" (large, ~64–72px, black, serif/heading font)
2. A subheadline paragraph directly below that CHANGES per active tab (see Tab data)
3. A horizontally-scrollable row of 7 pills (buttons): TAM Sourcing, Automated Inbound, Lead Scoring, Automated Outbound, CRM Enrichment, Launch Ads, Rep Productivity. The active pill is solid-colored (color varies per tab, see data below) with white text; inactive pills are light-gray with muted text. The row auto-scrolls/re-centers so the active pill stays roughly in view as the index advances.
4. Below the pills: a large rounded card area showing a colored blurred "glow" blob background (color matches the active tab's accent) with a dashboard-mockup screenshot image on top (swaps per tab, with a subtle crossfade, ~400ms).
5. Below that: a second block — H3-ish heading "What do you want to build?", a large rounded input field with an **animated typewriter placeholder** cycling through example prompts (see list below), a circular black submit button with `ArrowRightIcon` on the right edge of the input, and a row of 3 quick-select pills below: "Find people data", "Find company data", "Find jobs data".

## Interaction detail: tab auto-advance (CONFIRMED)
- `setInterval`-driven, ~3000ms per tab, advancing through the 7 tabs in order, looping back to the first after the last.
- Clicking any pill directly should jump to that tab and reset the interval timer (standard controlled-carousel pattern: `useState` for `activeIndex` + `useEffect` with `setInterval`, cleared/reset on manual click).
- Transition: crossfade the dashboard image (`opacity` transition ~300–400ms) and slide/re-highlight the pill row.

## Tab data (`PillTabData[]`)
```
1. id: "tam-sourcing", label: "TAM Sourcing", accentColor: "#395afa" (blue),
   subheadline: "Find every account in your TAM in one place.",
   mockupImage: "/images/clay.com/pills/case-11.avif" (or case-12/case-13 — a lead-filtering table with "Find with filters" panel), mockupAlt: "Lead filtering table with criteria summary panel"
2. id: "automated-inbound", label: "Automated Inbound", accentColor: "#808000" (olive/yellow-green),
   subheadline: "Enrich, score, and route every lead to the right rep in minutes.",
   mockupImage: "/images/clay.com/pills/case-6.avif" (demo form submissions table), mockupAlt: "Demo form submissions table with qualification and rep columns"
3. id: "lead-scoring", label: "Lead Scoring", accentColor: "#cc089e" (magenta),
   subheadline: "Score every lead against your ideal customer profile automatically.",
   mockupImage: "/images/clay.com/pills/case-14.avif", mockupAlt: "Lead scoring dashboard mockup"
4. id: "automated-outbound", label: "Automated Outbound", accentColor: "#b53d0a" (orange),
   subheadline: "Launch personalized outbound sequences at scale.",
   mockupImage: "/images/clay.com/pills/case-16.avif", mockupAlt: "Automated outbound sequence mockup"
5. id: "crm-enrichment", label: "CRM Enrichment", accentColor: "#395afa" (blue),
   subheadline: "Keep every record in your CRM enriched and up to date.",
   mockupImage: "/images/clay.com/pills/replace-crm.avif", mockupAlt: "CRM enrichment mockup"
6. id: "launch-ads", label: "Launch Ads", accentColor: "#cc089e" (magenta),
   subheadline: "Launch targeted ad audiences built from enriched account data.",
   mockupImage: "/images/clay.com/pills/case-21.avif", mockupAlt: "Ads audience builder mockup"
7. id: "rep-productivity", label: "Rep Productivity", accentColor: "#808000" (olive),
   subheadline: "Give every rep self-serve access to the data they need.",
   mockupImage: "/images/clay.com/pills/case-23.avif", mockupAlt: "Rep productivity dashboard mockup"
```
Small tab-icon badges (optional, place near each pill or mockup corner): `/images/clay.com/pills/tab-tam.png`, `tab-inbound.png`, `tab-lead.png`, `tab-automated.png`, `tab-crm.png`, `tab-ads.png`, `tab-rep.png`.

Note: exact subheadline copy for tabs 3/4/6/7 was not captured verbatim during recon (only tabs 1 and 2 were observed live); the text above is written to match Clay's house style and topic — flag as inferred, not verbatim, in a code comment is unnecessary, just use as reasonable placeholder copy consistent with the product.

## AI input widget
- Heading: "What do you want to build?"
- Typewriter placeholder cycles through prompts like: "Find companies with 30+ sales reps, $10M+ in revenue, and a free trial button on their site", deleting and retyping (~45ms/char type, ~25ms/char delete, ~1200ms pause at full string). Implement with a small custom hook (`useTypewriter(strings: string[])`), no external library needed.
- Submit: circular black button, white `ArrowRightIcon`, decorative (no real submit action — `onClick` can be a no-op or focus the input).
- Quick pills below: "Find people data", "Find company data", "Find jobs data" — plain rounded-full outline buttons, subtle hover background.

## Computed Styles
- H2: ~64-72px, weight 500, black, font-heading (Fraunces)
- Pills: `rounded-full`, padding `10px 20px`, font-size ~15px, weight 500; active = solid accent bg + white text; inactive = `bg-neutral-100 text-neutral-400`
- Glow blob container: large rounded-[40px] card, ~700px tall, background = radial gradient blur in the accent color at ~15-20% opacity, mockup image centered/overlapping the card edges with its own shadow
- AI input: full-width rounded-full or rounded-3xl white bordered field, padding ~20px, min-height ~120px (multi-line style), placeholder text ~18px gray

## Responsive Behavior
- **Desktop (1440px):** as described, pill row fits without wrapping.
- **Mobile (390px):** pill row becomes horizontally scrollable (overflow-x-auto, no visible scrollbar), heading shrinks to ~32px, AI input stacks with submit button below or as a smaller inline icon-button, quick pills wrap to 2 rows.
