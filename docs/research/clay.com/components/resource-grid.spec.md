# ResourceGrid Specification

## Overview
- **Target file:** `src/components/clay/ResourceGrid.tsx`
- **Screenshot:** live-observed via scroll sweep (see conversation recon), copy verified via page text extraction.
- **Interaction model:** static bento-style card grid. Apply a conservative hover treatment (subtle `scale-[1.02]` or shadow lift, ~0.2s) — not individually confirmed per card, but consistent with Clay's overall polish and safe to assume.

## DOM Structure
A 3-column bento grid (2 rows of 3 on desktop, stacking to 1 column on mobile) of `ResourceCard`s, each a rounded-3xl card with a background image/photo, gradient overlay for text legibility, and a CTA link:

1. **Conference banner** — lavender/light-purple bg, "Sculpt" logo mark image, heading "Sculpt: The go-to-market conference returns in 2026", CTA "Get tickets →". Asset: `/images/clay.com/resources/sculpt-card.svg` and/or `/images/clay.com/resources/sculpt-logo-container.svg` as a decorative logo element on a solid lavender (`bg-violet-100` approx) card background.
2. **Livestream card** — dark video-thumbnail background, heading "How Clay Uses Clay: ABM campaigns to break into Tier 1 accounts", CTA "Watch →". Asset: `/images/clay.com/resources/hcuc-livestream.avif` (or `livestream-poster.avif`) as full-bleed background image with dark gradient overlay, white text.
3. **University callout** — photo background (graduate in cap and gown), heading "Get started with Clay", body "Find the content that helps you level up your GTM skills and build confidently with Clay.", CTA "Go to University →". Asset: `/images/clay.com/resources/university-card.avif`.
4. **Community story — Sandra** — green-tinted photo card, eyebrow "COMMUNITY STORY", heading "Sandra has built the Clay community in Lagos", CTA "Read story →". Asset: `/images/clay.com/resources/community-sandra.avif`.
5. **Careers callout** — team photo background, eyebrow "COME AND JOIN US", heading/CTA "See open roles →" (no separate body copy, just the eyebrow + CTA over the photo). Asset: reuse `/images/clay.com/resources/hex-thumb.avif`-style treatment — actual asset not separately downloaded; use `/images/clay.com/resources/university-card.avif` as a placeholder photo background if no dedicated team-photo asset exists, OR check `public/images/clay.com/resources/` for any remaining unused download and use that. (This is the one card where the source asset wasn't individually captured — use best available photo asset and note the substitution.)
6. **Community story — career/marriage** — blue-tinted photo card, eyebrow "COMMUNITY STORY", heading "Where girls often choose between career or marriage, she carved her own path", CTA "Read story →". Asset: `/images/clay.com/resources/community-story-2.avif`.

## Computed Styles
- Card: `rounded-3xl overflow-hidden relative`, aspect ratio roughly 4:3 to 1:1 depending on grid position (conference banner spans wider — treat as a 2-column-span card in the grid, the rest are 1-column)
- Text overlay: white, positioned bottom-left with padding ~24px, dark gradient scrim (`bg-gradient-to-t from-black/60 to-transparent`) for legibility over photos
- Eyebrow labels ("COMMUNITY STORY", "COME AND JOIN US", "LIVESTREAM", "CONFERENCE"): uppercase, ~11px, weight 600, letter-spacing wide, white or muted depending on card

## Text Content (verbatim)
1. "Sculpt: The go-to-market conference returns in 2026" — "Get tickets"
2. "How Clay Uses Clay: ABM campaigns to break into Tier 1 accounts" — "Watch"
3. "Get started with Clay" / "Find the content that helps you level up your GTM skills and build confidently with Clay." — "Go to University"
4. "Sandra has built the Clay community in Lagos" — "Read story"
5. "Come and join us" — "See open roles"
6. "Where girls often choose between career or marriage, she carved her own path" — "Read story"

## Responsive Behavior
- **Desktop (1440px):** 3-column grid, conference banner card spans 2 columns in the top row.
- **Tablet (768px):** 2-column grid.
- **Mobile (390px):** single column, all cards full width, maintain generous aspect ratio (~4:3) per card.
