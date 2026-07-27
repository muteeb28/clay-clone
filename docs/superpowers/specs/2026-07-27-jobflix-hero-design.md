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
- **CTA buttons** (two, replacing Clay's single "Start free trial"):
  - Primary (solid, filled): `Optimize My Resume`
  - Secondary (outline/ghost, sits beside primary): `Find My Next Job`

  Both are first-person and action-specific rather than generic, acting as
  two separate hooks into the product's two most concrete utilities (resume
  optimization vs. job discovery) — the other three pillars (referrals,
  learning, mentorship) stay as page content further down, not hero CTAs.

This replaces Clay's eyebrow/headline/subhead/CTA in `Hero.tsx`.

## Visual

Replace the `<video>` background with a self-contained **product mockup**
built in code (JSX + Tailwind, no image/video asset) — a resume
bullet-point "diff" card, the same pattern as the reference screenshot the
user provided: a dark app-chrome card containing a white inner card that
shows a resume experience entry with before/after bullet pairs (old bullet
struck through on a red row, optimized bullet on a green row with a `+`
marker), plus a footer bar with a change count and action buttons. This is a
concrete product screenshot rather than an abstract icon scene — it directly
demonstrates the ATS-optimization pillar (the strongest, most differentiated
claim) instead of symbolizing it.

**Layout change**: this card is a focal object, not a full-bleed background,
so the hero composition changes from "video behind centered text" to a
two-zone layout: headline/subhead/CTAs on one side (left on desktop, stacked
above on mobile), the mockup card on the other side (right on desktop,
below the text on mobile), both sitting on a simplified green background
(solid/gradient `clay-hero-green`, no sky/hills/clouds needed since the card
is now the visual centerpiece). The card sits at a slight tilt with a soft
shadow, like it's floating above the background.

**Card contents** (mirroring the screenshot's structure):
- Small header row inside the dark chrome: eyebrow-style label, e.g.
  `AI RESUME OPTIMIZATION`
- Inner white card:
  - Role/duration line, e.g. `Senior Frontend Engineer · 2022 – present`
  - 2 bullet-diff pairs: a red strikethrough "before" row (`−`) directly
    above a green "after" row (`+`) with a stronger, metric-backed rewrite —
    reuse wording in the same spirit as the reference screenshot (vague duty
    → quantified impact)
  - Footer: left side shows a small `N changes` label, right side shows two
    small buttons (`Edit` outline, `Approve & send` filled) purely as UI
    chrome to sell realism — non-functional, decorative only
- **Motion**: the bullet-diff rows reveal in sequence (staggered fade/slide-in
  on mount, or a slow looping cycle) so the card feels alive rather than
  static, replacing the video's ambient motion. Pure CSS (`@keyframes` +
  animation-delay per row); no JS animation library.

## Implementation notes

- Delete the `<video>` element and its `poster`/`source` in `Hero.tsx`; the
  underlying `hero.mp4` / `hero-poster.avif` files can stay on disk (unused)
  or be removed — implementer's call, not load-bearing either way.
- Build the mockup as a new component, e.g.
  `src/components/clay/HeroResumeCard.tsx`, imported into `Hero.tsx` in place
  of the video block. `Hero.tsx`'s inner layout div changes from a single
  centered column to a two-column flex/grid (text | card) on `md:`+, stacked
  on mobile.
- Rework the responsive padding/positioning values in `Hero.tsx`
  (`pt-[52vw] md:pt-[36vw] lg:pt-[420px]`, etc.) since those existed to
  reserve empty space above centered text for the full-bleed video — the new
  two-zone layout doesn't need that reserved space in the same way. Check
  mobile/tablet/desktop.
- No new dependencies; existing Tailwind v4 setup, consistent with the rest
  of `src/components/clay/`.

## Out of scope

- Any section other than the hero (SocialProofMarquee, GtmBuilder, etc. keep
  their current Clay content for now).
- Sourcing/generating real photographic or 3D-rendered assets.
- Removing the now-unused `hero.mp4` / `hero-poster.avif` files from the repo
  (left as a cleanup decision for later, not required here).
