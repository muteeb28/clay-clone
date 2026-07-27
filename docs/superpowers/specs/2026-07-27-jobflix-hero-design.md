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
  `NEW: AI RESUME OPTIMIZATION`
- **Headline**: `Everything it takes to get hired. Nothing else.`
- **Subhead**: `ATS-beating resumes, first-mover job alerts, real referrals,
  and mentors who won't let you fail.`
- **CTA button**: `Start free trial` (unchanged — generic enough to keep)

This replaces Clay's eyebrow/headline/subhead in `Hero.tsx`. Layout structure
(flex arrangement of heading + CTA on one side, subhead paragraph on the
other) stays as-is.

## Visual

Replace the `<video>` background with a self-contained illustration built in
code (inline SVG / styled divs + CSS), since no pre-rendered video/3D asset
exists for JobFlix and none can be generated as part of this work.

**Structure**, keeping Clay's diorama framing (sky backdrop behind a cluster
of floating foreground objects) because the section's existing layout
(`rounded-b-[48px]`, padding that reserves space above the headline) is built
around that composition:

- **Backdrop**: sky gradient (light blue → the existing `clay-hero-green`)
  with soft rolling-hill shapes and simple cloud blobs, static (no video
  needed — CSS gradients + SVG shapes).
- **Foreground objects** — 5 flat "sticker" icons (rounded shapes, soft
  gradient fills, subtle drop-shadow — not photoreal 3D renders), each
  mapped to one pillar:
  1. Resume document passing behind a shield/checkmark → ATS-beating resumes
  2. Radar arc sweeping over a small stack of job cards → real-time job
     discovery
  3. Chat bubble connected to two avatar dots → internal referrals
  4. Staircase with a star at the top (reused almost as-is from Clay's
     original staircase motif) → interactive learning / leveling up
  5. Compass/guide badge → accountability mentorship
- **Motion**: each object gets its own slow, independent CSS `@keyframes`
  float/rotate loop (staggered durations/delays), replacing the video's
  ambient motion. No JS animation library — pure CSS, so it's cheap and
  loops indefinitely without a media file.

## Implementation notes

- Delete the `<video>` element and its `poster`/`source` in `Hero.tsx`; the
  underlying `hero.mp4` / `hero-poster.avif` files can stay on disk (unused)
  or be removed — implementer's call, not load-bearing either way.
- Build the illustration as a new component, e.g.
  `src/components/clay/HeroIllustration.tsx` (icons as inline SVG, matching
  the existing `icons.tsx` pattern used elsewhere in `src/components/clay/`),
  imported into `Hero.tsx` in place of the video block.
- Preserve the existing responsive padding/positioning values in `Hero.tsx`
  (`pt-[52vw] md:pt-[36vw] lg:pt-[420px]`, etc.) unless the new illustration's
  natural proportions require adjusting them — if so, adjust deliberately and
  keep mobile/tablet/desktop all checked.
- No new dependencies; use existing Tailwind v4 setup and hand-written SVG,
  consistent with `src/components/icons.tsx`.

## Out of scope

- Any section other than the hero (SocialProofMarquee, GtmBuilder, etc. keep
  their current Clay content for now).
- Sourcing/generating real photographic or 3D-rendered assets.
- Removing the now-unused `hero.mp4` / `hero-poster.avif` files from the repo
  (left as a cleanup decision for later, not required here).
