# CaseStudies Specification

## Overview
- **Target file:** `src/components/clay/CaseStudies.tsx`
- **Screenshot:** none saved to disk; copy verified via page text extraction.
- **Interaction model:** static. Video thumbnails show a play affordance but do not need real in-page playback for this clone — treat as a styled thumbnail + external link.

## DOM Structure
Continues directly below the GTM INFRASTRUCTURE feature panel, same background color (`#f4f3f0`), no visible seam/gap — only this component's bottom corners are rounded (`rounded-b-[40px]`), top is square so it nests flush under FeatureShowcase's INFRASTRUCTURE panel.
1. Centered heading: "Hear from the teams that grow with Clay" (~48px, weight 500, font-heading, black)
2. Two-column card row (stacks to 1 column on mobile):
   - Card 1: video thumbnail (dark, with play control), caption "How Hex increased inbound win-rate 50% using Clay", link "Read case study →"
   - Card 2: video thumbnail, caption "How Verkada GTM team expanded in 28 European countries using Clay", link "Learn more about GTM engineering →" (Verkada card's link label differs from Hex's per the real copy — keep as-is)
3. Below the cards, small text link: "Learn more about GTM engineering" (if not already used as Card 2's CTA, this is a general link — use once, don't duplicate)

## Assets
- Hex thumbnail: `public/images/clay.com/resources/hex-thumb.avif`
- Verkada thumbnail: `public/images/clay.com/resources/verkada-thumb.avif`
- Use `PlayIcon` from `src/components/icons.tsx` as a circular overlay button centered on each thumbnail.

## Computed Styles
- Card: rounded-3xl overflow-hidden, aspect-video, dark overlay gradient at the bottom for caption legibility (white text over the image bottom edge)
- Caption text: white, ~18px, weight 500, positioned bottom-left of the card with padding ~24px
- "Read case study" / link label: white, ~14px, underline on hover, trailing arrow

## Text Content (verbatim)
- Heading: "Hear from the teams that grow with Clay"
- Card 1 caption: "How Hex increased inbound win-rate 50% using Clay" — CTA "Read case study"
- Card 2 caption: "How Verkada GTM team expanded in 28 European countries using Clay" — CTA "Learn more about GTM engineering"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, gap ~24px.
- **Mobile (390px):** stacks to 1 column, cards full width, maintain aspect-video ratio.
