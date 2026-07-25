# Footer Specification

## Overview
- **Target file:** `src/components/clay/Footer.tsx`
- **Screenshot:** live-observed via scroll sweep (footer link columns + ball-pit background confirmed directly)
- **Interaction model:** static. Background is actually a looping video (`public/videos/clay.com/footer.mp4`, colorful ball-pit), not a static image — bleeds in at the top edge of the footer, fades to solid cream (`bg-clay-cream`, `#fffdf9`) by the time the link columns start.

## DOM Structure
1. Top: video background (ball pit), rounded top corners, height ~250px, fading via a gradient mask into the solid cream footer background below it (`mask-image: linear-gradient(to bottom, black 0%, transparent 100%)` on the video, or simpler: place the video in a fixed-height container with a `bg-gradient-to-b from-transparent to-[#fffdf9]` overlay div on top of it).
2. Link grid, 5 columns on desktop:
   - **USE CASES:** Automated inbound, Account research, ABM, PLG assist, Rep assist, Reverse ETL, Outbound, CRM Enrichment, TAM Sourcing
   - **PRODUCT:** Claygent AI, Sculptor, Ads, Sequencer, Multi-provider data enrichment, Audiences, Signals, Functions, Integrations, Pricing, Changelog
   - **BLOG:** The rise of the GTM engineer, Finding GTM alpha, Clay reaches 100M ARR, Series C: The GTM engineering era begins now
   - **RESOURCES:** Get started lesson, University, Use case templates, Partner programs, Community, FAQ
   - **COMPANY:** Contact us, About, Careers, Jobs (with a small orange "We are hiring!" pill badge next to it), Integrate with Clay, Status
3. Second row, 2 columns:
   - **CUSTOMERS:** OpenAI, Vanta, Verkada, Sendoso, Anthropic, Coverflex, Rippling, Case studies
   - **LEGAL:** Privacy policy, Terms of service, Do not sell my data
4. Horizontal divider
5. Bottom bar: Clay logo (small, ~28px) + wordmark, centered text "Born in Brooklyn" / "©2026 Clay Labs Inc." (two lines, muted gray, centered), right-aligned social icon buttons: LinkedIn, YouTube, Slack (`LinkedInIcon`, `YouTubeIcon`, `SlackIcon` from `src/components/icons.tsx`), each in a small rounded-lg dark/black square button, ~36px.

## Computed Styles
- Column headings: uppercase, ~11px, weight 600, letter-spacing wide, muted gray
- Links: ~14px, black/dark-gray, hover: slightly darker or underline
- "We are hiring!" badge: small rounded-full orange/amber background, dark text, ~10px, weight 600, padding `2px 8px`
- Social icon buttons: `bg-black text-white rounded-lg`, size ~36×36px, icon ~16px centered

## Text Content (verbatim)
All link labels listed above are verbatim from the live site. Bottom bar: "Born in Brooklyn", "©2026 Clay Labs Inc."

## Assets
- Video: `public/videos/clay.com/footer.mp4`
- Poster fallback: `public/images/clay.com/footer/footer-poster.avif`
- Logo: `public/images/clay.com/logo/clay-logo.avif`

## Responsive Behavior
- **Desktop (1440px):** 5-column grid as described.
- **Tablet (768px):** 2-3 column wrap.
- **Mobile (390px):** single column, columns stack in the order listed, bottom bar stacks (logo/copyright centered, social icons row below).
