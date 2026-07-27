# JobFlix Hero Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Clay-branded hero video/copy in `src/components/clay/Hero.tsx` with a JobFlix-themed resume bullet-diff card mockup, new headline/subhead copy, and two CTA buttons.

**Architecture:** One new presentational component (`HeroResumeCard.tsx`) renders a static (CSS-animated) mockup of a resume-optimization diff card. `Hero.tsx` is restructured from a single centered column over a full-bleed video to a two-column layout (copy | card) on a solid/gradient green background, and its copy/CTAs are updated.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4 utility classes, lucide-react icons (via `src/components/icons.tsx`). No test runner is configured in this repo — verification is `npm run check` (lint + typecheck + build) plus a manual visual check via the dev server.

## Global Constraints

- No inline styles, no CSS-in-JS — Tailwind utility classes only (per `README.md` "Notes for Contributors").
- No new npm dependencies — use the existing lucide-react/Tailwind stack.
- Icons follow the existing pattern in `src/components/icons.tsx` (re-export from `lucide-react`, or hand-written inline SVG for anything lucide doesn't cover).
- Copy (verbatim, from the approved spec `docs/superpowers/specs/2026-07-27-jobflix-hero-design.md`):
  - Eyebrow: `NEW: AI RESUME OPTIMIZATION`
  - Headline: `Everything it takes to get hired. Nothing else.`
  - Subhead: `The system built to make sure you get hired — and make sure you don't fail.`
  - Primary CTA: `Optimize My Resume`
  - Secondary CTA: `Find My Next Job`
- Card mockup copy: role line `Senior Frontend Engineer · 2022 – present`; two before/after bullet pairs (vague duty → quantified impact, same spirit as the reference screenshot); footer `N changes` label + decorative `Edit` / `Approve & send` buttons (non-functional).
- Run `npm run check` before considering any task done.

---

### Task 1: `HeroResumeCard` component

**Files:**
- Create: `src/components/icons.tsx` — add `CheckIcon` (lucide `Check`) and `MinusIcon` (lucide `Minus`) exports, following the existing re-export pattern (e.g. `export const ArrowRightIcon = ArrowRight;`).
- Create: `src/components/clay/HeroResumeCard.tsx`

**Interfaces:**
- Consumes: `ArrowRightIcon`, `CheckIcon`, `MinusIcon` from `@/components/icons`.
- Produces: `export function HeroResumeCard()` — a zero-prop component rendering the full card mockup (dark chrome + white inner card + footer). Consumed by `Hero.tsx` in Task 2 as `<HeroResumeCard />`, no props.

- [ ] **Step 1: Add `CheckIcon` / `MinusIcon` to `src/components/icons.tsx`**

Add `Check` and `Minus` to the `lucide-react` import list at the top of the file, and add two new export lines near the other simple re-exports (after `export const FloatingWidgetIcon = Sparkle;`):

```ts
export const CheckIcon = Check;
export const MinusIcon = Minus;
```

- [ ] **Step 2: Write `HeroResumeCard.tsx`**

```tsx
import { ArrowRightIcon, CheckIcon, MinusIcon } from "@/components/icons";

const DIFF_ROWS = [
  {
    before: "Built features for the web app using React.",
    after: "Shipped distributed React + TS surfaces serving 4M MAU; cut p95 render time 38%.",
  },
  {
    before: "Worked with the product team on improvements.",
    after: "Drove the platform roadmap with PMs across three product pods.",
  },
];

export function HeroResumeCard() {
  return (
    <div className="w-full max-w-[380px] rotate-[2deg] rounded-[28px] bg-black p-4 shadow-2xl shadow-black/40 sm:max-w-[420px]">
      <p className="px-2 pb-3 text-[11px] font-semibold tracking-wide text-white/50 uppercase">
        AI Resume Optimization
      </p>

      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="px-5 pt-5 pb-3">
          <p className="text-sm text-neutral-500">
            Senior Frontend Engineer · 2022 – present
          </p>
        </div>

        <div className="flex flex-col gap-2 px-3 pb-4">
          {DIFF_ROWS.map((row, i) => (
            <div
              key={row.before}
              className="flex flex-col gap-2 opacity-0 animate-diff-in"
              style={{ animationDelay: `${i * 0.9}s` }}
            >
              <div className="flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2.5">
                <MinusIcon className="mt-0.5 size-3.5 shrink-0 text-red-400" />
                <p className="text-[13px] leading-snug text-red-900/70 line-through decoration-red-400/70">
                  {row.before}
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
                <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                <p className="text-[13px] leading-snug text-emerald-950">
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-2 pt-3">
        <p className="text-xs text-white/50">2 changes · optimized for ATS</p>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/70">
            Edit
          </span>
          <span className="flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white">
            Approve & send
            <ArrowRightIcon className="size-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Add the `animate-diff-in` keyframes to `src/app/globals.css`**

Add near the other `@keyframes`/utility definitions in `globals.css` (match whatever pattern existing custom animations there already use — check the file for an existing `@keyframes` block first and follow its placement/style):

```css
@keyframes diff-in {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-diff-in {
  animation: diff-in 0.5s ease-out forwards;
}
```

- [ ] **Step 4: Verify it compiles**

Run: `npm run typecheck`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/icons.tsx src/components/clay/HeroResumeCard.tsx src/app/globals.css
git commit -m "Add HeroResumeCard: resume bullet-diff mockup for the hero section"
```

---

### Task 2: Rewire `Hero.tsx` — layout, copy, CTAs

**Files:**
- Modify: `src/components/clay/Hero.tsx` (full rewrite of the section body)

**Interfaces:**
- Consumes: `HeroResumeCard` from `./HeroResumeCard` (Task 1), `ArrowRightIcon` from `@/components/icons`.
- Produces: `export function Hero()` — same export signature as before, no props change, so `src/app/page.tsx`'s `<Hero />` usage is untouched.

- [ ] **Step 1: Replace `Hero.tsx` contents**

```tsx
import { ArrowRightIcon } from "@/components/icons";
import { HeroResumeCard } from "./HeroResumeCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[48px] bg-clay-hero-green">
      <div className="relative z-10 flex flex-col gap-12 px-6 py-16 sm:px-8 md:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-32">
        <div className="flex max-w-xl flex-col gap-8 md:gap-10">
          <a
            href="#"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold tracking-wide text-lime-300 uppercase"
          >
            New: AI resume optimization
            <ArrowRightIcon className="size-3.5" />
          </a>

          <div className="flex flex-col gap-5">
            <h1 className="font-heading text-5xl leading-[1.05] font-[575] tracking-[-0.03em] text-[rgb(254,253,251)] md:text-6xl lg:text-[72px] lg:leading-[1.02] lg:tracking-[-2.88px]">
              Everything it takes to get hired. Nothing else.
            </h1>
            <p className="max-w-md text-lg leading-snug font-normal text-[rgb(254,253,251)]/80 md:text-xl">
              The system built to make sure you get hired — and make sure you
              don&apos;t fail.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Optimize My Resume
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Find My Next Job
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroResumeCard />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run the dev server and visually check the hero**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: green hero section, no video, headline/subhead/CTAs on the left (or stacked above on mobile-width), the resume diff card on the right (or below, centered, on mobile), bullet rows fading in on load. Check at mobile (~390px), tablet (~768px), and desktop (~1440px) widths — no overlapping text, no horizontal scroll.

- [ ] **Step 3: Run full verification**

Run: `npm run check`
Expected: lint, typecheck, and production build all pass with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/clay/Hero.tsx
git commit -m "Rewire Hero.tsx: JobFlix copy, two CTAs, resume-card layout"
```

---

## Out of scope (carried over from the spec)

- Any section other than the hero.
- Removing the now-unused `public/videos/clay.com/hero.mp4` / `hero-poster.avif` files.
