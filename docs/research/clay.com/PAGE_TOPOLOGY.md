# Clay.com — Page Topology

Source: https://www.clay.com/ (homepage). Captured 2026-07-25. Built on Webflow.
Total scroll height at 1440px viewport: ~12,860px.

## Layout shell
- Single scrolling document, no smooth-scroll library detected (native scroll).
- Header is `position: relative` (NOT sticky/fixed) — it scrolls away with the page. Confirmed via computed style diff at scrollY 0 vs 2000 (no change).
- Max content width ~1280px centered, with full-bleed colored section backgrounds outside that.
- Sections have large rounded corners (24–40px) that overlap/bleed into each other (card-stack look), especially the 5 feature panels.

## Sections, top to bottom

1. **Header / Nav** (`Header.tsx`) — static in flow, not sticky.
   - Desktop (≥ ~1350px): logo, inline nav (Product, Use Cases, Solutions, Resources, Company — each with mega-menu dropdown, extracted separately below), Pricing link, ⌘K search, Log in, Get a demo, Start free trial (black pill button).
   - Below ~1350px: collapses to logo + "Get a demo" + hamburger icon in a rounded pill container.
   - Interaction model: static + responsive breakpoint (NOT scroll-driven — verified).

2. **Hero** (`Hero.tsx`) — dark green full-bleed section.
   - 3D isometric illustration (playground scene: funnel, slide, seesaw, magnifying glass, mailbox) as single image, full width, sits above the green area on a sky-blue/cloud background.
   - Eyebrow badge "LATEST LAUNCH: ACCOUNT RESEARCH AGENTS →" (lime green text).
   - H1 "Build systems to grow revenue" (white, serif — Canela).
   - Subhead paragraph + "Start free trial" white pill button.
   - Bottom edge curves into the off-white social-proof panel below.

3. **Social proof marquee** (`SocialProofMarquee.tsx`) — off-white panel overlapping hero bottom.
   - Static heading: "Trusted by more than 500,000+ leading GTM teams of all sizes. Inspired by our customers. Built with love."
   - Below it: an infinite auto-scrolling horizontal marquee (content repeats 3x in DOM = confirms loop) of mixed cards: logo-only chips (Stripe, Figma, Vanta, HubSpot, Canva, Okta, Verkada, ElevenLabs, Anthropic, Rippling, Workday, Uber…), quote cards, and stat cards (+140% Outbound Pipeline, 80%+ Enrichment Coverage, 2x Demos from Cold Email, 3x Reply Rate, +50% SQLs).
   - Interaction model: time-driven CSS/JS marquee, no click interaction, continuous loop, pauses on hover (typical Webflow pattern — verify during build if feasible, not blocking).

4. **Interactive builder** (`GtmBuilder.tsx`) — combines two tightly-coupled widgets:
   - a) Pill carousel: H2 "GTM engineers build on Clay", a subheadline that changes per active tab, and a row of 7 pills (TAM Sourcing, Automated Inbound, Lead Scoring, Automated Outbound, CRM Enrichment, Launch Ads, Rep Productivity). **Interaction model: TIME-DRIVEN auto-advance every ~3s** (confirmed by observation — active pill and dashboard mockup both changed after 3s and again after 6s), also click-selectable. Active pill gets a solid color pill (color varies — saw blue and olive/yellow across different active tabs) while inactive pills are grey/faded. A large dashboard-mockup screenshot below swaps to match the active tab, sitting on a colored rounded blob background (color also changes per tab: blue, pink, yellow-green seen).
   - b) AI input: "What do you want to build?" heading, a text input with an **animated typewriter placeholder** that cycles through example queries (e.g. "Find companies with 30+ sales reps, $10M+ in revenue and a free trial button on..."), a black circular submit arrow button, and 3 quick pills below (Find people data / Find company data / Find jobs data).

5. **Feature showcase ×5** (`FeatureShowcase.tsx`, one reusable component + a content array) — each is a large rounded two-column panel (text+badge+CTAs left, 3D illustration right), full-bleed pastel background, slightly overlapping the next panel:
   - DATA (blue: badge/accent `rgb(57,90,250)`, bg `rgb(240,248,255)`) — "Get data from the most **complete data marketplace**"
   - AGENTS (orange: badge/accent `rgb(181,61,10)`, bg `rgb(255,243,237)`) — "Create agents who **mimic your best reps**"
   - ORCHESTRATION (olive: badge/accent `rgb(128,128,0)`, bg `rgb(252,254,226)`) — "Orchestrate workflows **across tools in real time**" — illustration here has a play/pause control, likely a looping video/Lottie, not a static image.
   - EXECUTION (magenta: badge/accent `rgb(204,8,158)`, bg `rgb(255,240,250)`) — "Launch new plays as fast **as you have ideas**"
   - GTM INFRASTRUCTURE (teal eyebrow, bg `rgb(244,243,240)`) — "Build systems that make reps more productive" — different internal layout (text left includes the CTA + customer quote, illustration right is a 3-panel collage), plus a nested "Hear from the teams that grow with Clay" sub-block with 2 video case-study cards (Hex, Verkada) directly beneath it, sharing the same panel background.
   - Each panel: eyebrow pill badge, two-line heading (line 1 black, line 2 in accent color), paragraph copy, small row of 2–3 partner/vendor icon chips, a bolded customer-result quote line, two CTAs (solid accent-color button + plain text link with arrow).

6. **Resource & community bento grid** (`ResourceGrid.tsx`) — grid of 6 cards below the feature showcases:
   - Conference banner: "Sculpt: The go-to-market conference returns in 2026" + "Get tickets" (light lavender bg)
   - Livestream card: "How Clay Uses Clay: ABM campaigns to break into Tier 1 accounts" + Watch (dark video-thumbnail bg)
   - University callout: "Get started with Clay" + "Go to University" (photo bg, graduate image)
   - Community story: "Sandra has built the Clay community in Lagos" + Read story (photo card, green bg)
   - Careers: "Come and join us" + "See open roles" (team photo)
   - Community story: "Where girls often choose between career or marriage, she carved her own path" + Read story (photo card, blue bg)

7. **Final CTA** (`FinalCta.tsx`) — "Turn your growth ideas into reality today" + "Start for free today. No credit card required." + Start free trial / Get a demo buttons, sits on the same green hills illustration style as the hero (bottom half), bleeds into footer's colorful ball-pit background image.

8. **Footer** (`Footer.tsx`) — cream background with a colorful ball-pit photo bleeding in at the top edge.
   - 5 columns: Use Cases, Product, Blog, Resources, Company (with a "We are hiring!" pill next to Jobs)
   - 2nd row: Customers, Legal
   - Divider, bottom bar: Clay logo, "Born in Brooklyn / ©2026 Clay Labs Inc.", social icons (LinkedIn, YouTube, Slack)

## Z-index / overlay notes
- No fixed/sticky overlays detected on this page besides a small floating "help/feedback" button pinned to the right edge mid-viewport (yellow flower/asterisk icon button) that persists across all scroll positions — likely `position: fixed`. Treat as a small persistent widget, low priority.

## Responsive breakpoints observed
- ~1350px: header collapses to compact pill nav w/ hamburger.
- Standard Tailwind stack point expected ~768px for the two-column feature panels (text/illustration stacks vertically) — verify per-component during build at 768px and 390px.
