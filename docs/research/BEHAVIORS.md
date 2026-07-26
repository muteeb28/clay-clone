# /livestreams Page Behaviors (clay.com/livestreams)

## 1. Filter pills — CLICK-driven (not scroll-driven)

Confirmed by testing: clicking a pill immediately swaps content (Webflow Tabs widget under the hood: `ls_tabs_link`, `w--current`). No scroll listener involved.

- **Trigger:** click on a pill.
- **State A (inactive pill):** `background: rgb(255,255,255)`, `color: rgb(34,34,34)`, `border: 1px solid rgb(218,212,200)`.
- **State B (active pill):** `background: rgb(0,0,0)`, `color: rgb(255,255,255)`, same border.
- **Transition:** instant in the original (no observed transition on the pill itself); a subtle color transition (150–200ms) is acceptable for polish but not required for fidelity.
- Only one pill active at a time. "All" is active by default on page load.
- Effect on page: see PAGE_TOPOLOGY.md "Filtering behavior" — swaps between row-grouped carousels and a flat 3-column grid.

## 2. Row carousels — CLICK-driven via prev/next buttons

Original uses Swiper.js (`livestreams_swiper`, `swiper-slide`, `swiper_nav-button`). Not scroll-driven, not autoplay — only advances on button click. Not draggable-only; there's no evidence of touch/drag being the primary mechanism, just explicit prev/next buttons. Implement with a horizontally-scrollable flex row (`overflow-x-auto`, `scroll-snap-type: x mandatory` optional) where the nav buttons call `scrollBy()`.

- **Nav buttons:** 38×38px, `border: 1px solid rgb(113,121,137)`, `border-radius: 4px`, transparent background.
- **Disabled state** (start of row, or row has ≤ visible-slide-count cards): `opacity: 0.5`, `cursor: default`, click does nothing. When a row has too few cards to scroll at all, Swiper hides the buttons entirely (`swiper-button-lock`) — replicate by not rendering nav buttons when `cards.length <= visibleSlides`.
- **Enabled state:** `opacity: 1`, `cursor: pointer`.
- Desktop shows 3 cards at a time; each click advances by one card (not a full page) based on observed slide widths (~389px cards + 16px gap in a ~1280px container ≈ 3.3 visible).
- Mobile (390px): shows ~1.3 cards at a time (peeking next card), same click-to-advance nav buttons still present.

## 3. Stat marquee — TIME-driven (auto-scroll), NOT click or scroll-driven

Confirmed by taking two screenshots ~2s apart on the same scroll position: card content visibly shifted with no user interaction. This is a continuous, infinite, vertically-scrolling marquee — classic "duplicate the list, animate translateY(-50%) in a loop" CSS pattern.

- **Two independent columns**, side by side.
- **Left column** (`STAT_MARQUEE_UP` data): scrolls upward continuously.
- **Right column** (`STAT_MARQUEE_DOWN` data): scrolls downward continuously (opposite direction).
- Implementation: duplicate each column's card list once (render list + list again back-to-back), animate the wrapper with a CSS `@keyframes` translateY loop (0 → -50% for up, -50% → 0 or equivalent reversed timing for down), `animation-timing-function: linear`, `animation-iteration-count: infinite`. Pause on hover is a reasonable polish addition (not confirmed on original, optional).
- Speed: moderate/slow — roughly matches typical marquee speeds (~20–40s per full loop); exact duration wasn't measured, use judgment for a smooth, readable pace (not so slow it looks static, not so fast text is unreadable).

## 4. Hover states

- **Filter pills:** no distinct hover style was observed beyond the default browser pointer cursor; a subtle `hover:border-black/40` or slight background tint is reasonable polish.
- **Cards:** no dramatic hover animation observed (no scale/shadow pop confirmed during testing) — keep it subtle (e.g. a slight border-color darken on hover is safe polish, not required for fidelity).
- **Register/Watch Now buttons:** standard `.btn` class — opacity or slight scale on hover is consistent with the rest of the site's buttons (see other `clay/` components for the established hover convention, e.g. `hover:opacity-85` used elsewhere).
- **Nav arrow buttons:** cursor pointer when enabled, cursor default when disabled (see above).

## 5. Responsive behavior

- **Desktop (1440px):** Hero is two columns (text left ~590px, image right ~590px). Filter pills wrap across 2 rows. Row carousels show 3 cards at a time.
- **Mobile (390px):** Hero stacks vertically (text on top, full-width image card below, CTA button below that, all centered/full-width). Filter pills still wrap (flex-wrap), not a horizontal scroller. Row carousels show ~1.3 cards at a time (partial peek of next card), same nav button behavior.
- No distinct tablet breakpoint was captured beyond standard Tailwind `md`/`lg` steps — use judgment consistent with other `clay/` components in this repo (they use `sm`/`md`/`lg`/`xl` breakpoints already).

## 6. No smooth-scroll library, no scroll-snap on the page body

Standard native scrolling on this page. Any scroll-snap belongs only inside a row carousel's horizontal scroller (optional polish), not the page itself.
