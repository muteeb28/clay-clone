# Hero Specification

## Overview
- **Target file:** `src/components/clay/Hero.tsx`
- **Screenshot:** `docs/design-references/clay.com/hero-desktop-full.jpg`, `docs/design-references/clay.com/hero-mobile.jpg`
- **Interaction model:** static (background is an autoplaying looping muted video, no user interaction)

## DOM Structure
Full-bleed section, rounded bottom corners, containing:
1. A looping `<video>` background (sky/clouds + 3D playground illustration: funnel, slide, seesaw, magnifying glass, mailbox) that plays over a light sky-blue top area blending into green hills.
2. Below/overlapping the video's green ground area: eyebrow badge link "LATEST LAUNCH: ACCOUNT RESEARCH AGENTS →" (lime-green text `text-lime-300`-ish, on transparent/dark bg)
3. H1: "Build systems to grow revenue" — white text, serif display font (Fraunces, `font-heading`)
4. Two-column-on-desktop content area: H1 + "Start free trial" button on the left, subheading paragraph on the right (at mobile, these stack: heading → paragraph → button, in that reading order)
5. Bottom edge curves (large border-radius, e.g. `rounded-b-[48px]`) into the next section (off-white)

## Computed Styles
- H1: `font-size: 88px; line-height: 88px; font-weight: 575; letter-spacing: -3.52px; color: rgb(254,253,251)` (near-white) — at mobile this must scale down significantly (use `text-5xl md:text-7xl lg:text-[88px]` type scaling, matching the mobile screenshot where the heading wraps at a much smaller size, roughly 40px)
- Subhead paragraph: white/near-white, ~18–20px, weight 400, max-width ~320px on desktop (short line-wrapped column)
- "Start free trial" button: white background, black text, rounded-full pill, padding `12px 24px`, arrow icon (`ArrowRightIcon`) trailing
- Eyebrow badge text: uppercase, ~13px, weight 600, letter-spacing wide, lime/yellow-green color, trailing arrow icon
- Section background: dark green (`bg-clay-hero-green` custom token, hex `#0d3d2f`, approximate — the video itself provides most of the visible color, this is the fallback/edge color)

## Assets
- Video: `public/videos/clay.com/hero.mp4` — `<video autoPlay loop muted playsInline poster="/images/clay.com/hero/hero-poster.avif">`
- Poster fallback image: `public/images/clay.com/hero/hero-poster.avif`

## Text Content (verbatim)
- Eyebrow: "LATEST LAUNCH: ACCOUNT RESEARCH AGENTS" (with trailing arrow)
- H1: "Build systems to grow revenue"
- Subhead: "Infrastructure to get any data, run agentic workflows, and launch GTM plays."
- CTA: "Start free trial"

## Responsive Behavior
- **Desktop (1440px):** two-column layout for heading/CTA (left) vs subhead (right), video spans full width above.
- **Mobile (390px):** everything stacks in a single column, video/illustration scales down and crops to fit width, heading drops to roughly 40px, generous vertical spacing preserved between eyebrow → heading → paragraph → button.
- **Breakpoint:** stack at `md` (768px) based on standard project convention.
