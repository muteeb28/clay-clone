# JobFlix Hero Section Redesign

## Context

`src/components/clay/Hero.tsx` currently renders Clay.com's original hero: a
looping background video (`public/videos/clay.com/hero.mp4`, a 3D toy diorama
of a funnel/pencil/mailbox/magnifying-glass/staircase) behind Clay's original
copy ("Build systems to grow revenue"). This project is being adapted into the
marketing site for **JobFlix**, a job-search product. This spec covers
replacing the hero's visual and copy only — no other sections are in scope.

JobFlix's product pillars (from the user's feature copy):

1. **ATS-beating resumes** — a resume optimization model, not another
   AI-resume-template generator.
2. **Real-time job discovery** — monitors 50,000+ company career pages/hiring
   platforms so users see openings before other job-board users do.
3. **Internal referrals** — direct chat with employees/HRs (2,000+) at
   startups and global companies, replacing cold LinkedIn outreach.
4. **Interactive learning** — hands-on, game-like lessons instead of long
   video tutorials, for interview prep.
5. **Accountability mentorship** — mentors matched for genuine investment in
   the user's outcome, not just a bookable FAANG-engineer session.

## Copy

- **Eyebrow badge** (top-left, small caps link, matches existing style):
  `The job search isn't broken. It's rigged.`
- **Headline**: `Everything it takes to get hired. Nothing else.`
- **Subhead**: `Not a resume builder. Not a job board. A system with no weak
  links between you and an offer.`
- **CTA buttons** (two, replacing Clay's single "Start free trial"):
  - Primary (solid, filled): `Optimize My Resume`
  - Secondary (outline/ghost, sits beside primary): `Find My Next Job`

  Both are first-person and action-specific rather than generic, acting as
  two separate hooks into the product's two most concrete utilities (resume
  optimization vs. job discovery) — the other three pillars (referrals,
  learning, mentorship) stay as page content further down, not hero CTAs.

This replaces Clay's eyebrow/headline/subhead/CTA in `Hero.tsx`.

## Visual

**Decision history:** an early version of this spec replaced Clay's hero
video with a resume bullet-diff card mockup; the user rejected that (wanted
Clay's original video kept). A later version kept the video and only changed
copy. The user then asked to replace the video/animation after all, on the
condition that the visual represent the whole product, not just the resume
pillar — a single resume-diff card would contradict the subhead's "Not a
resume builder. Not a job board." **Current, final decision: replace the
`<video>` background with an abstract floating-icon diorama**, in the same
visual language as Clay's original (a sky/hills backdrop with small "toy"
objects floating in the foreground), one icon per product pillar:

1. Resume document + shield/checkmark → ATS-beating resumes
2. Radar sweep over stacked job cards → real-time job discovery
3. Chat bubble + avatar → internal referrals
4. Ascending staircase with a star on top (near-direct reuse of Clay's
   original staircase motif) → interactive learning / leveling up
5. Compass badge → accountability mentorship

Built as flat/soft "sticker" SVG icons (rounded shapes, flat fills, drop
shadow) rather than photoreal 3D renders, since no 3D asset can be sourced
or generated for this work. Backdrop is an SVG gradient (sky blue → the
existing `clay-hero-green`) with simple cloud and hill shapes. Each icon
floats independently via a staggered CSS `@keyframes` bob animation — no JS
animation library, no media file.

## Implementation notes

- `Hero.tsx` keeps its original text layout: content positioned via the
  original responsive padding-top values (`pt-[52vw] md:pt-[36vw]
  lg:pt-[420px]`, etc.), `md:flex-row md:items-end md:justify-between` split
  between the left column (eyebrow + headline + CTAs) and the subhead
  paragraph on the right. Eyebrow-to-headline gap tightened from
  `mt-4 md:mt-6` to `mt-2 md:mt-3` per user feedback ("too much gap").
- The `<video>` block is replaced by `<HeroIllustration />`
  (`src/components/clay/HeroIllustration.tsx`), an `absolute inset-0`
  component containing the SVG backdrop and the 5 floating icons.
- The single CTA link becomes a `flex flex-wrap` row of two CTA links
  (primary filled + secondary outline), both using the same pill-button
  styling language Clay used for its one button.
- Header logo (`src/components/clay/Header.tsx`, all 3 usages: desktop nav,
  mobile pill, mobile fullscreen menu) replaced Clay's raster logo with a
  new `Logo` component (`src/components/clay/Logo.tsx`): a small green
  rounded mark with an upward-trend icon + a "Job**Flix**" wordmark, "Flix"
  colored with the same `clay-hero-green` accent.
- No new dependencies; existing Tailwind v4 setup, consistent with the rest
  of `src/components/clay/`.

## Out of scope

- Any section other than the hero and the header logo (SocialProofMarquee,
  GtmBuilder, etc. keep their current Clay content for now).
- Sourcing/generating real photographic or 3D-rendered assets.
- Removing the now-unused `hero.mp4` / `hero-poster.avif` files from the
  repo (left as a cleanup decision for later, not required here).
