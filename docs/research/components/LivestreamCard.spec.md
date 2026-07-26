# LivestreamCard + LivestreamRow Specification

## Overview
- **Target files:**
  - `src/components/livestreams/LivestreamCard.tsx` — one card
  - `src/components/livestreams/LivestreamRow.tsx` — a titled section wrapping a horizontal carousel of cards, with prev/next nav buttons
- **Interaction model:** row carousel is click-driven via nav buttons (see BEHAVIORS.md §2). Card itself is a static link (whole card links to `/livestreams/${slug}`, but the visible "Register"/"Watch Now" button is the primary visual CTA).
- **Types:** `LivestreamCard`, `LivestreamRow` from `src/types/livestreams.ts`. Data: `LIVESTREAM_ROWS` from `src/data/livestreams-data.ts`.

## LivestreamRow — DOM Structure
```
<section> one per row
  <div> flex justify-between items-center header row
    <h3>{row.title}</h3>
    <div> nav buttons (only rendered if row.cards.length > visibleSlides, i.e. > 3 on desktop)
      <button aria-label="Previous"> chevron-left
      <button aria-label="Next"> chevron-right
  <div> horizontally-scrollable track: overflow-x-auto, flex, gap-4, scroll-smooth (optionally scroll-snap-x)
    <LivestreamCard> × row.cards.length
```

### Row header title (`<h3>`)
- fontSize: 32px, fontWeight: 600, lineHeight: 35.2px (1.1), letterSpacing: -0.64px (≈ `-0.02em`)
- color: rgb(0,0,0)
- Use this repo's heading font convention (see other `clay/` components)

### Nav buttons
- 38×38px, border: 1px solid rgb(113,121,137) → `border-[#717989]`, border-radius: 4px, background: transparent
- Icons: `ChevronLeftIcon` / `ChevronRightIcon` from `icons.tsx` (already added)
- Disabled (start-of-row / not enough cards to scroll): `opacity-50`, `cursor-default`, `disabled` attribute — implement by tracking scroll position (disable "prev" at scrollLeft ≈ 0, disable "next" at max scroll) OR simply hide both entirely when `cards.length <= 3` (desktop) matching the original's `swiper-button-lock` behavior.
- Click behavior: scroll the track by roughly one card width (~389px + 16px gap) via `scrollBy({ left: ±405, behavior: "smooth" })`.

## LivestreamCard — DOM Structure
```
<Link href={`/livestreams/${card.slug}`}> whole card is a link, OR keep the outer div non-interactive and just make the image+title clickable — use judgment, but the Register/Watch button below must remain a distinct clickable element with its own href
  <div> card container (bg #F4F3F0, border #DAD4C8, rounded-[30px], padding 8px)
    <div> image wrapper, rounded corners on top matching outer radius minus padding
      <Image> card.image, aspect ~16:9, object-cover
    <div> content padding area (padding: 16px 2px based on observed `claybooks_content_wrap`)
      <div> badge row: flex gap-2
        <StatusBadge status={card.status} />   — "Upcoming" or "Replay"
        {card.date && <DateBadge>{card.date}</DateBadge>}
        {card.time && <TimeBadge>{card.time}</TimeBadge>}
      <h4>{card.title}</h4>
      {card.description && <p>{card.description}</p>}
      <div> flex justify-between items-center footer
        <a href={`/livestreams/${card.slug}`} className="btn">{card.cta} →</a>
        <button aria-label="Add to calendar"><CalendarPlusIcon /></button>
```

## Computed Styles (exact values)

### Card container
- backgroundColor: rgb(244, 243, 240) → `bg-[#F4F3F0]`
- border: 1px solid rgb(218, 212, 200) → `border-[#DAD4C8]`
- borderRadius: 30px
- padding: 8px
- Fixed-ish width on desktop: ~389px (so ~3 cards + gaps fit a ~1280px row); on mobile, ~85% of viewport width so the next card peeks (e.g. `w-[85vw] sm:w-[389px]` or similar with a min-width so flex/overflow-x works)

### Image
- object-fit: cover, natural aspect ratio ≈ 16:9 (1424×801 for one sample)
- rounded corners on top only (radius should read as continuous with the outer card's 30px radius minus the 8px padding, so ≈ `rounded-[22px]` for the image itself, or just round all 4 corners — use judgment based on visual smoothness)

### Status badge ("Upcoming" / "Replay")
- Container: backgroundColor: rgb(203, 216, 16) → `bg-[#CBD810]` (same lime-green for BOTH "Upcoming" and "Replay" states — confirmed both use this color), padding: 4px 8px, borderRadius: 4px
- Text: fontSize: 12.8px (0.8rem), fontWeight: 400, `text-transform: uppercase` (source text is "Upcoming"/"Replay" title-case, CSS uppercases it — apply `uppercase` class rather than changing the string)

### Date badge (only present when `card.date` is set — upcoming cards; replay cards have no date/time chips)
- backgroundColor: rgb(255, 255, 255) → white, padding: 4px 10.4px, borderRadius: 4px
- Sits on the card's off-white background — add a subtle 1px border in the same `#DAD4C8` tone for definition since white-on-#F4F3F0 needs a hairline to read clearly (not strictly measured on the original but necessary for legibility)
- Text uppercase, same ~12.8px sizing as status badge

### Time badge (only present when `card.time` is set)
- backgroundColor: rgb(216, 208, 255) → `bg-[#D8D0FF]` (light purple/lavender), padding: 4px 8px, borderRadius: 4px
- Text uppercase, same sizing

### Title (`<h4>`)
- fontSize: 20px, fontWeight: 600, lineHeight: 28px
- color: rgb(0,0,0)
- Clamp to 2 lines with ellipsis (`line-clamp-2`)

### Description (`<p>`, only rendered when `card.description` is not null)
- fontSize: 16px, fontWeight: 400, lineHeight: 22.4px (1.4)
- Color reads visually as muted gray (not pure black) — use `text-muted-foreground` or `text-gray-600` equivalent from this repo's token set
- Clamp to 2-3 lines with ellipsis (`line-clamp-2` or `line-clamp-3` — match card height consistency, use judgment, 3 lines fits the observed card height better)

### CTA button (`card.cta` — "Register" or "Watch Now")
- fontSize: 16px, fontWeight: 500, color: white on black background
- padding: 8px 16px, borderRadius: 12px, gap: 8px (for arrow icon after label)
- Use `ArrowRightIcon` after the label

### Calendar-add icon button
- Plain 24×24 icon, no background/border/padding — just the `CalendarPlusIcon` from `icons.tsx`, black stroke, positioned at the far right of the footer row (`ml-auto` or `justify-between` on the row)

## Grid mode (used when a filter pill other than "All" is active)
When rendered in the flat filtered grid (see PAGE_TOPOLOGY.md), the SAME `LivestreamCard` component is reused, just laid out in a `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` container instead of inside `LivestreamRow`'s horizontal scroller — no row title, no nav buttons. Keep `LivestreamCard` layout-agnostic (don't hardcode a fixed width that breaks in grid mode — use `w-full` in grid context, fixed width only in the carousel context, e.g. via a wrapping element supplied by the parent rather than baked into the card itself).

## Text Content
All copy comes from `src/data/livestreams-data.ts` — no hardcoded strings except the "Add to calendar" aria-label.

## Responsive Behavior
- **Desktop (1440px):** row shows ~3 cards fully visible, nav buttons scroll one card at a time.
- **Mobile (390px):** row shows ~1.3 cards (peek of next card at the edge), same nav buttons.
- **Breakpoint:** card width switches around `sm`/`md` (640–768px), consistent with rest of repo.
