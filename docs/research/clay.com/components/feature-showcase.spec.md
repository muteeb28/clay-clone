# FeatureShowcase Specification

## Overview
- **Target file:** `src/components/clay/FeatureShowcase.tsx` (one reusable component) + `src/components/clay/FeatureShowcaseSection.tsx` (wrapper that renders the 5-item data array in sequence)
- **Screenshot:** none saved to disk, but exact colors below were sampled live via `getComputedStyle`, and copy/media were confirmed via live DOM inspection — treat as verified, not guessed.
- **Interaction model:** static content; the ORCHESTRATION panel's media has a visible play/pause control (it's a looping video, not a static image) — all 5 panels actually use looping muted autoplay `<video>` backgrounds per the asset scan, not just Orchestration. Apply a subtle scroll-triggered fade/slide-up entrance (`opacity 0→1, translateY 16px→0`, ~0.5s, trigger on viewport enter via `IntersectionObserver` or a simple CSS `@starting-style`/`animation` — Clay's general polish level makes this a safe, low-risk assumption even though it wasn't frame-by-frame confirmed).

## DOM Structure (per panel)
Large full-bleed rounded card (`rounded-[40px]`), two-column on desktop (text left, media right), stacking to single column on mobile. Panels sit back-to-back with a slight negative-margin overlap so corners visually interleave (see screenshots from recon — panels DATA/AGENTS/ORCHESTRATION/EXECUTION were seen visually stacked with overlapping rounded corners in the 1404-wide screenshots).

Left column, top to bottom:
1. Eyebrow pill badge (rounded-full, solid accent color background, white uppercase text, ~12px, letter-spacing 3px, weight 600, padding `0 12px`)
2. Two-line heading: line 1 in black, line 2 in the panel's accent color (both ~48px desktop, weight 500, font-heading)
3. Body paragraph, ~16px, gray-black, max-width ~420px
4. Small row of 2-3 vendor/partner icon chips (see per-panel assets below), ~24-32px each
5. Bolded customer-result quote line (name/company bold, rest regular), ~15px
6. Two CTAs: solid accent-color pill button ("Start free trial" or similar) + plain text link with trailing arrow icon

Right column: looping video (`autoPlay loop muted playsInline`) with the corresponding poster image as `poster` attribute, contained in a rounded frame matching the panel's rounded corners.

## Panel data (`FeaturePanelData[]`)

### 1. DATA
- eyebrow: "DATA", accent: `#395afa`, bg: `#f0f8ff`
- heading: "Get data from the most" / "complete data marketplace"
- body: "One contract to buy data from 200+ data and AI vendors in Clay's marketplace. Create intent signals from anything on the internet. Bring 1st and 3rd party data together."
- vendor marks: `/images/clay.com/marks/openai-mark.svg` (labelled generically as data-partner icon; also usable: `mistralai-mark.svg`, `anthropic-mark.svg`)
- customer quote: "**Mistral AI** cut the time to map their TAM and score accounts from 2 months to 10 days."
- CTAs: "Start free trial" (solid blue) / "Explore data marketplace" (text link)
- media: video `/videos/clay.com/data.webm`, poster `/images/clay.com/features/data-poster.avif`

### 2. AGENTS
- eyebrow: "AGENTS", accent: `#b53d0a`, bg: `#fff3ed`
- heading: "Create agents who" / "mimic your best reps"
- body: "Mine the web for custom data points to research and qualify accounts. Constantly monitor accounts for reasons to engage. Prep reps with the detail they need to tailor every touchpoint."
- vendor marks: `/images/clay.com/marks/vanta-mark.svg`, `/images/clay.com/marks/pendo-mark.svg`
- customer quote: "**Vanta** cut post-call follow-up time from 3 days to <1 with agents tailoring messaging based on SOC 2 badges, compliance signals, and security job posts."
- CTAs: "Start free trial" (solid orange/brick) / "Explore agents" (text link)
- media: video `/videos/clay.com/agents.webm`, poster `/images/clay.com/features/agents-poster.avif`

### 3. ORCHESTRATION
- eyebrow: "ORCHESTRATION", accent: `#808000`, bg: `#fcfee2`
- heading: "Orchestrate workflows" / "across tools in real time"
- body: "Connect every GTM or AI tool to a common data layer. Update data across millions of records in your CRM and data warehouse. Define GTM logic once to re-use in every play."
- vendor marks: `/images/clay.com/marks/verkada-mark.svg`, `/images/clay.com/marks/legora-mark.svg`
- customer quote: "**ElevenLabs'** increased SQLs by +50% by reducing speed-to-lead to <5 mins."
- CTAs: "Start free trial" (solid olive) / "Explore orchestration" (text link)
- media: video `/videos/clay.com/orchestration.webm`, poster `/images/clay.com/features/orch-poster.avif` — **this panel additionally shows a visible play/pause control overlay** (bottom-left of the media area, small pill with a `PauseIcon`/`PlayIcon` toggle plus 2 small decorative icon buttons beside it) — implement a simple `useState` play/pause toggle wired to the `<video>` element's `.play()`/`.pause()`.

### 4. EXECUTION
- eyebrow: "EXECUTION", accent: `#cc089e`, bg: `#fff0fa`
- heading: "Launch new plays as fast" / "as you have ideas" (second phrase in accent color)
- body: "Trigger emails, ads, and more with integrations to your existing GTM tools. Write 1:1 messaging for every prospect programmatically. Launch new tests in days."
- vendor marks: `/images/clay.com/marks/figma-mark.svg`, `/images/clay.com/marks/hex-mark.svg`
- customer quote: "**Rippling** 2x'd cold email performance by automatically tailoring email copy based on persona and enriched account data."
- CTAs: "Start free trial" (solid magenta) / "Learn more about building plays" (text link)
- media: video `/videos/clay.com/execution.webm`, poster `/images/clay.com/features/execution-poster.avif`

### 5. GTM INFRASTRUCTURE (layout variant — see below)
- eyebrow: "GTM INFRASTRUCTURE" (teal/dark text, no colored pill — plain uppercase label), bg: `#f4f3f0`
- heading: "Build systems that make reps more productive" (single line, not split two-tone)
- body/right-column text (this panel's copy sits to the RIGHT of the heading, not below it — mirrored layout from the other 4): "Reps can self-serve the best prospecting data. Chat to get full account context in natural language. Build centralized workflows for any rep to run."
- customer quote: "**Terrapinn** generates +19% more revenue per rep and reduced acquisition cost by 90% using Claygent to find and qualify leads."
- CTA: "Start free trial" (solid black) placed near the top, before the body text
- media: video `/videos/clay.com/reps.webm`, poster `/images/clay.com/features/reps-poster.avif`, plus a secondary caption block "Hear from the teams that grow with Clay" — **do not build this sub-block here**; it belongs to the separate `CaseStudies` component (see `case-studies.spec.md`). This panel (INFRASTRUCTURE) ends at the media/quote; CaseStudies renders immediately after it with the same `#f4f3f0` background so they appear as one continuous panel visually (no gap/radius between them — CaseStudies should NOT have its own top rounding, only bottom rounding).

## Computed Styles (verified)
- Eyebrow pill: `font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; border-radius: 1600px (i.e. fully round); padding: 0 12px; color: white` (ORCHESTRATION's pill is olive `rgb(128,128,0)` background, confirmed directly via computed style)
- Heading: ~48px, weight 500, line-height ~1.05
- Panel corner radius: large, ~40px, panels overlap slightly (use `-mt-6` or similar between consecutive panels so the rounded corners nest)

## Responsive Behavior
- **Desktop (1440px):** two-column (text/media 50-50), as described; INFRASTRUCTURE panel is the mirrored variant.
- **Tablet (768px):** columns stack, media below text, full width.
- **Mobile (390px):** same stacked order, reduce heading to ~32px, padding to ~24px, videos remain full-width with `aspect-video` or similar fixed ratio to avoid layout shift.
