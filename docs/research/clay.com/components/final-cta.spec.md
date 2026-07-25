# FinalCta Specification

## Overview
- **Target file:** `src/components/clay/FinalCta.tsx`
- **Interaction model:** static

## DOM Structure
Full-bleed section with the same green-hills illustration style as the Hero (rolling green hills with small trees, no funnel/playground objects this time — simpler), rounded top corners overlapping the ResourceGrid above.
1. Centered heading: "Turn your growth ideas into reality today" (white, serif/heading font, ~56px)
2. Centered subhead: "Start for free today. No credit card required." (white, ~18px)
3. Two buttons side by side: "Start free trial" (solid white bg, black text, pill) and "Get a demo" (outline/ghost, white border, white text, pill, trailing arrow icon)
4. Bottom edge blends into Footer's colorful ball-pit background (no hard seam — coordinate background colors with Footer so the transition looks continuous, e.g. this section's green hills fade into Footer's cream/ball-pit at the boundary)

## Assets
- Reuse the hero-style green hills look — either reuse `/images/clay.com/hero/hero-poster.avif` cropped, or a solid green gradient background (`bg-clay-hero-green` token, `#0d3d2f`) with simple CSS hill shapes (radial gradients) is an acceptable simplification since no separate video asset was captured specifically for this section.

## Text Content (verbatim)
- Heading: "Turn your growth ideas into reality today"
- Subhead: "Start for free today. No credit card required."
- Buttons: "Start free trial", "Get a demo"

## Computed Styles
- Heading: ~56px desktop, weight 500, white, centered, font-heading
- Buttons: pill shape, padding `12px 24px`, gap between them ~12px

## Responsive Behavior
- **Desktop (1440px):** as described, generous vertical padding (~120px top/bottom).
- **Mobile (390px):** heading ~32px, buttons stack vertically full-width with ~12px gap, padding reduces to ~48px top/bottom.
