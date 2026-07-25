# SocialProofMarquee Specification

## Overview
- **Target file:** `src/components/clay/SocialProofMarquee.tsx`
- **Screenshot:** `docs/design-references/clay.com/hero-desktop.jpg` (top portion visible), section sits directly below Hero
- **Interaction model:** time-driven infinite marquee (CSS animation), no click interaction required

## DOM Structure
- Off-white rounded panel (`bg-clay-cream` or `bg-neutral-50`, large border-radius top corners, e.g. `rounded-t-[48px]`) overlapping the Hero's bottom edge (negative margin-top ~64px so it visually sits on top of the green hero curve)
- Centered heading paragraph (mixed weight): "Trusted by more than 500,000+ leading GTM teams of all sizes. Inspired by our **customers**. Built with **love**." — "customers" and "love" are bold, rest is regular weight, color muted-gray/black, ~20px
- Below: a full-width horizontally scrolling marquee track containing 3 duplicated copies of the same card sequence back-to-back (for seamless looping). Track scrolls continuously leftward.

## Marquee content (one cycle — repeat this array 3× back to back for the loop)
Mix of three card types laid out in a single row, in this order:
1. Logo chip: Stripe — `public/images/clay.com/logos/stripe.svg`
2. Quote card: Figma logo + "Clay has become the orchestration layer for everything GTM. Salesforce for record-keeping, Snowflake for product data, and Clay for turning it all into automated action." — `public/images/clay.com/logos/figma.svg`
3. Logo chip: Vanta — `public/images/clay.com/logos/vanta.svg`
4. Quote card: OpenAI — "Clay has one of the most practical and exciting applications of AI, in a decades-old practice that has long been stale." (link label "view open ai") — `public/images/clay.com/logos/openai.svg`
5. Stat card: "+140%" / "OUTBOUND PIPELINE"
6. Stat card: "80%+" / "ENRICHMENT COVERAGE"
7. Quote card: Google — "In our first AI Hackathon week, we unlocked data across YouTube, Ads, Cloud, and CapitalG into powerful AI workflows." — `public/images/clay.com/logos/google.svg`
8. Stat card: "All inbound" / "QUALIFIED AND SCORED WITH CLAY" (Anthropic) — `public/images/clay.com/logos/anthropic.svg`
9. Quote card: Anthropic — "Clay 3x'd our enrichment rate and unlocked AI-powered GTM workflows that were infeasible before" — reuse `anthropic.svg`
10. Stat card: "2x" / "DEMOS FROM COLD EMAIL"
11. Stat card: "3x" / "REPLY RATE"
12. Stat card: "+50%" / "SQLS"
13. Logo chip: HubSpot — `public/images/clay.com/logos/hubspot.svg`
14. Logo chip: Rippling — `public/images/clay.com/logos/rippling.svg`
15. Logo chip: Workday — `public/images/clay.com/logos/workday.svg`
16. Logo chip: Uber — `public/images/clay.com/logos/uber.svg`
17. Logo chip: Canva — `public/images/clay.com/logos/canva.svg`
18. Logo chip: Okta — `public/images/clay.com/logos/okta.svg`
19. Logo chip: Verkada — "3x REPLY RATE" stat variant reusing `verkada.svg`
20. Logo chip: ElevenLabs — `public/images/clay.com/logos/elevenlabs.svg`
21. Quote card (generic, no confirmed company attribution — present as a plain quote card without inventing a name): "I love using and working with Clay because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack."

Additional logos available if you want more variety in the loop (not required, extras): `cursor.svg`, `intercom.svg`, `perplexity.svg`, `notion.svg`, `ramp.svg`, `klaviyo.svg`.

Do not invent named-person attribution for quotes — none of these quotes were confirmed to belong to a specific named individual during extraction; attribute only to the company logo shown alongside each quote, exactly as listed above.

## Computed Styles
- Logo chips: white rounded-2xl card, ~140px × 72px, logo centered, grayscale-ish/muted until hover (optional)
- Quote cards: white rounded-2xl card, ~320px wide, padding ~20px, small logo top-left, quote text ~14px, external-link arrow icon top-right
- Stat cards: white rounded-2xl card, ~160px wide, big bold stat number (~28px) + small uppercase label (~11px, letter-spacing wide, gray)
- Card gap: ~16px
- Marquee animation: use the existing `.animate-marquee` utility class + `@keyframes marquee-scroll` already defined in `src/app/globals.css` (translateX 0 → -33.333%, 40s linear infinite) since content is tripled. Pause on hover via `hover:[animation-play-state:paused]`.

## Assets
All logo SVGs are in `public/images/clay.com/logos/`.

## Text Content (verbatim)
Heading: "Trusted by more than 500,000+ leading GTM teams of all sizes. Inspired by our customers. Built with love."

## Responsive Behavior
- **Desktop (1440px):** full marquee row as described, panel padding ~64px horizontal.
- **Mobile (390px):** heading text wraps to 3–4 lines, smaller font (~16px); marquee cards shrink proportionally but keep scrolling — do not stack marquee content vertically, horizontal scroll/marquee behavior is preserved at all breakpoints.
