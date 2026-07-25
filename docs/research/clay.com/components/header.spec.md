# Header Specification

## Overview
- **Target file:** `src/components/clay/Header.tsx`
- **Screenshot:** `docs/design-references/clay.com/hero-desktop-full.jpg` (top strip), `docs/design-references/clay.com/hero-mobile.jpg` (mobile pill nav)
- **Interaction model:** static in document flow (NOT sticky, NOT scroll-driven — verified: `getComputedStyle` on the nav container returned identical background/shadow/radius at scrollY 0 and scrollY 2000). Purely a responsive breakpoint switch.

## DOM Structure
`<header>` (in normal flow, sits above Hero) containing:
- Left: Clay logo image, links to `/`
- Center/left-of-right: inline nav links (desktop only): Product, Use Cases, Solutions, Resources, Company (each opens a dropdown panel — build as simple click-to-open dropdown, see Dropdown Content below), then a plain link "Pricing" (no dropdown)
- Right: ⌘K search affordance (small button showing "⌘ K" + search icon), "Log in" text link, "Get a demo" secondary button, "Start free trial" primary black button
- Mobile/tablet (< ~1350px viewport width): collapses to a rounded pill container holding only: logo, "Get a demo" button, hamburger icon button (opens a slide-out/full-screen menu — implement a simple Sheet/drawer with the same links stacked)

## Computed Styles

### Desktop nav bar (≥ 1350px)
- Full width, white background, sits flush at top, no border/shadow (`box-shadow: none`, `border-bottom: 0px`)
- Horizontal padding roughly 24px, vertical ~16px
- Logo image: use `public/images/clay.com/logo/clay-logo.avif`, render at height ~28px (source is 509×163, maintain aspect ratio ~3.12:1)
- Nav link text: font-sans, ~15px, weight 500, color black, hover: subtle opacity/gray shift
- "Start free trial" button: background black `#000`, text white, border-radius 12px, padding `8px 16px`, font-size ~14px, font-weight 500
- "Get a demo" button: background light gray (`bg-muted` equivalent), text black, same radius/padding as above, no border
- ⌘K search chip: light gray rounded chip showing kbd-style "⌘ K" plus a search icon, ~13px text

### Mobile/tablet pill header (< 1350px)
- White rounded-full pill container (large radius, e.g. `rounded-3xl`), padding ~12px 16px, sits with margin from viewport edges (not full bleed)
- Contains: logo (smaller, ~24px height), "Get a demo" button (compact), hamburger icon button (square, dark/black rounded-lg background per screenshot)

## Dropdown content (Product / Use Cases / Solutions / Resources / Company)
Real link text extracted from the page (build simple 2–4 column dropdown panels, no need to pixel-match internal dropdown layout — just group under sub-headings as shown):

**Product** — FEATURES: Claygents, Waterfall, Signals and Intent, Data marketplace, Ads, Audiences, Sequencer, Agent plugin — ADDITIONAL: Sculptor, Functions, AI formatting, Clay MCP, Clay for Salesforce, Changelog, Security at Clay

**Use Cases** — CRM enrichment, Rep prospecting, Automated inbound, ABM, Reverse ETL, Outbound, PLG assist, TAM sourcing, Account research, Rep assist, Territory planning

**Solutions** — BY TEAM: GTM Ops, Marketing, Sales — BY STAGE: Enterprise, Startup — BY CUSTOMERS: Customers, Figma, Recharge, Anthropic, Saviynt, A-LIGN

**Resources** — START GROWING: Livestreams, Cohort live classes, Find Clay experts, GTME Job board — DISCOVER: University, Templates, GTME Blog, Support docs, Guides — COMMUNITY: Live events, Clay cup, Clay community, Slack — PARTNER WITH US: Become a partner, Solution partners, Integration partners, Startup program, Private Equity

**Company** — OUR COMPANY: About, Careers, Open roles — GET IN TOUCH: Contact, Press — SOCIALS: LinkedIn, YouTube, X

All dropdown links can point to `#` (this is a homepage clone; no real sub-pages exist). Use `ChevronDownIcon` from `src/components/icons.tsx` next to each dropdown trigger, rotating 180° when open (transition ~0.2s).

## Assets
- Logo: `public/images/clay.com/logo/clay-logo.avif`
- Icons: `SearchIcon`, `MenuIcon`, `CloseIcon`, `ChevronDownIcon` from `src/components/icons.tsx`

## Responsive Behavior
- **Desktop (≥1350px):** full inline nav as described.
- **Below ~1350px:** compact pill header (logo + Get a demo + hamburger). Use Tailwind `min-[1350px]:` or a custom breakpoint; if the project's Tailwind config doesn't have one this wide, just use `xl:` (1280px) as the closest built-in breakpoint and verify visually against the screenshot.
- **Mobile (390px):** same compact pill, hamburger opens a full-screen or slide-in menu listing: Product, Use Cases, Solutions, Resources, Company, Pricing, Log in, Get a demo, Start free trial — stacked vertically.
