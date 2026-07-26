# FilterPills Specification

## Overview
- **Target file:** `src/components/livestreams/FilterPills.tsx`
- **Interaction model:** click-driven (see `docs/research/BEHAVIORS.md` §1). This component is presentational/controlled — it receives `pills: readonly string[]`, `active: string`, `onSelect: (pill: string) => void` as props. It does NOT own filtering logic; the parent page decides what to render based on `active`.
- **Data:** `FILTER_PILLS` from `src/data/livestreams-data.ts` (13 labels: "All", "Upcoming Live", "Binge our best content", "How Clay uses Clay", "The future of GTM", "The Top 1 %", "GTM Strategy & Best Practices", "Tactical Playbooks", "Product Demos & Trainings", "Partners", "Community & Events", "Career & Education", "EMEA")

## DOM Structure
```
<div> flex flex-wrap gap row of pill buttons (wraps to multiple lines, both desktop and mobile — NOT a horizontal scroller)
  <button> per pill in FILTER_PILLS
```

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex, flex-wrap: wrap
- gap: ~12px between pills (both horizontal and vertical gap between wrapped rows)

### Pill button — inactive state (default)
- fontSize: 16px, fontWeight: 400
- color: rgb(34, 34, 34)
- backgroundColor: rgb(255, 255, 255)
- padding: 8px 16px
- borderRadius: 48px (fully rounded — `rounded-full`)
- border: 1px solid rgb(218, 212, 200) → `border-[#DAD4C8]`

### Pill button — active state ("All" is active by default on load)
- color: rgb(255, 255, 255)
- backgroundColor: rgb(0, 0, 0)
- same padding/border-radius/border as inactive
- Only one pill is active at a time (radio-button behavior, not multi-select)

### Transition
- Not observed in the original, but add a short (~150ms) color/background transition for polish — doesn't hurt fidelity and avoids a jarring instant snap.

## Text Content (verbatim)
Render each label from `FILTER_PILLS` exactly as-is, including "The Top 1 %" (note the space before `%`) and "EMEA".

## Responsive Behavior
- **Desktop (1440px):** wraps into 2 rows at this viewport width for all 13 pills.
- **Mobile (390px):** still `flex-wrap` (confirmed — not a horizontal scroll container), wraps into ~5-6 rows.
- No breakpoint-specific layout change needed — same wrapping flex behavior at all widths.
