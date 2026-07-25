# Clay.com — Behavior Bible

## Header
- **Model:** static. Not scroll-driven — verified: `getComputedStyle` on `.nav__container` at `scrollY=0` vs `scrollY=2000` returned identical `background-color`, `box-shadow`, `border-radius`. No change.
- **Responsive breakpoint:** below ~1350px viewport width, the full inline nav (Product/Use Cases/Solutions/Resources/Company/Pricing + search + Log in + Get a demo + Start free trial) collapses into a compact rounded pill containing only the logo, "Get a demo", and a hamburger icon. This was initially mistaken for a scroll effect during recon — it is a `window.innerWidth` breakpoint, confirmed by re-measuring `window.innerWidth` (1424px → full nav visible).
- Mega-menu dropdowns exist under Product/Use Cases/Solutions/Resources/Company (confirmed via footer/nav text dump showing nested categories like FEATURES/ADDITIONAL/CLAY MCP for Product). Treat as click-or-hover dropdown panels; not deep-dived pixel-by-pixel — build as a simple dropdown menu matching link text extracted from the page-text dump.

## Social proof marquee
- **Model:** time-driven infinite marquee. Content list (logos, quote cards, stat cards) appears 3× in the DOM text dump, confirming a duplicated-content CSS marquee (`translateX` loop) rather than a JS carousel with pagination.
- No click interaction observed on marquee items themselves (external link icons on quote cards suggest they may link out, but not required for the clone).

## GTM pill carousel + dashboard mockup
- **Model:** TIME-DRIVEN auto-advance, confirmed by direct observation:
  - t=0s: active pill "TAM Sourcing" (blue highlight), subheadline "Find every account in your TAM in one place.", dashboard mockup = lead-filtering table with blue glow blob.
  - t=3s: active pill "Automated Inbound" (olive/yellow highlight), subheadline "Enrich, score, and route every lead to the right rep in minutes.", dashboard mockup = demo-form-submissions table with yellow-green glow blob.
  - Pills also visually shift horizontally as the active one changes (row scrolls so the active pill stays roughly centered) — treat as a horizontally scrollable pill row where the "scroll position" is driven by the active index, easing transition ~0.4–0.6s.
  - **Implementation approach:** `setInterval` (~3000ms) advancing an index into a content array `{ label, subheadline, mockupImage, accentColor }[]`; clicking a pill jumps directly to that index and resets the timer.
- Each tab's dashboard mockup is a distinct screenshot-style image (not a live component) — download each as a static asset.

## AI builder input
- **Model:** time-driven typewriter effect in the placeholder/value of the "What do you want to build?" input. Text was observed mid-type ("Find companies with 30+ sales rep" → "...sales |" → "...sales reps, $1|"), i.e. character-by-character typing animation cycling through example prompts, then presumably deletes and moves to the next example (standard typewriter loop). Exact per-char timing not measured — use a reasonable ~40–60ms/char with a pause at full string and on empty.
- Submit is a circular black arrow button (non-functional in the clone — decorative/mock).
- 3 quick-select pills below (Find people data / Find company data / Find jobs data) — static, hover-only state expected (not deep tested; give them a subtle border/bg hover per standard pill button treatment).

## Feature showcase panels (DATA/AGENTS/ORCHESTRATION/EXECUTION/INFRASTRUCTURE)
- **Model:** mostly static reveal-on-scroll (standard fade/slide-up entrance expected from Webflow interactions — not confirmed frame-by-frame, apply a conservative `opacity 0→1, translateY 16px→0` on viewport-enter, duration ~0.5s, since this is Clay's house style across the page and safe to assume given the polish level).
- ORCHESTRATION panel illustration has a visible **pause/play control** plus two small icon buttons beneath the heading — indicates the illustration is a looping video or Lottie animation rather than a static PNG like the other 4 panels. Build this one specifically with a `<video autoplay loop muted>` (or looping GIF/APNG fallback) instead of `<img>`.
- CTA buttons: solid accent-color pill button ("Start free trial") + plain text link with trailing arrow ("Explore data marketplace" etc.) — standard hover: slight darken/opacity on solid button, underline or arrow-shift on text link.

## Case studies (Hex / Verkada)
- Video-thumbnail cards with a play affordance and "Read case study" / "Learn more" links. Treat as static thumbnail + external link; no in-page video playback required for the clone.

## Resource/community bento grid
- Static card grid. Expect hover: subtle scale or shadow lift on each card (standard card-hover treatment) — not individually confirmed, apply conservatively.

## Final CTA + Footer
- Static. No special behavior beyond standard link hovers (underline / color shift).

## Persistent floating widget
- A small square button (yellow flower/asterisk icon) is fixed to the right edge of the viewport, vertically centered, visible at every scroll position tested (top, mid-page, footer). Treat as `position: fixed`, low priority — a decorative/help launcher, not required for functional parity, but include as a static visual element for pixel-fidelity if time allows.

## Responsive
- Confirmed breakpoint: ~1350px for header nav collapse.
- Not individually verified per-section at 768px/390px during recon (page is extremely long); each builder agent must check its own section at 768px and 390px per the standard responsive checklist and stack columns to single-column below ~768px, consistent with the rest of the codebase's mobile-first conventions.
