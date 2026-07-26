# /livestreams Page Topology (clay.com/livestreams)

Route: `src/app/livestreams/page.tsx` (new). Page background: white (`rgb(255,255,255)`).

## Sections, top to bottom

1. **Header** — global site header, already built at `src/components/clay/Header.tsx`. Reuse as-is.
2. **Hero** — badge + H1 + subtitle on the left, a featured-livestream promo image on the right, with a CTA button centered below the two-column row. New component: `LivestreamsHero`.
3. **Filter pills** — horizontal wrapping row of category pills below the hero. Click-driven filter (see BEHAVIORS.md). New component: `FilterPills`.
4. **Livestream rows** — 11 titled sections in "All" mode, each a horizontal carousel of cards (`LivestreamRow` + `LivestreamCard`). In filtered mode, becomes a single untitled 3-column grid of matching cards (no carousel/nav arrows).
5. **Stat marquee CTA** — "Streamline data enrichment" heading + CTA buttons on the left, two columns of auto-scrolling colored stat cards on the right (opposite scroll directions). New component: `StatMarqueeCta`.
6. **Footer** — global site footer, already built at `src/components/clay/Footer.tsx`. Reuse as-is.

## Layout notes

- Max content width matches the rest of the site's container (`max-w-[1600px]` per Header, but livestream content itself reads closer to `max-w-7xl`/1280px based on card row widths — use the same container pattern already established in other `clay/` components).
- No sticky/fixed elements on this page besides the global header.
- No dark mode section transitions on this page (unlike homepage's green CTA); this page stays on a white background throughout except the hero's dark-green promo image and the stat marquee's colored cards.

## Data source

All copy/content already extracted into `src/data/livestreams-data.ts`:
- `LIVESTREAM_ROWS: LivestreamRow[]` — 11 rows, each `{ title, cards: LivestreamCard[] }`
- `STAT_MARQUEE_UP` / `STAT_MARQUEE_DOWN: StatMarqueeItem[]` — the two scrolling columns
- `FILTER_PILLS` — the 13 pill labels ("All" + 12 categories)

Types already defined in `src/types/livestreams.ts`. Images already downloaded to `public/images/clay.com/livestreams/` (59 files) and referenced by path in the data file.

## Filtering behavior (page-level, not a single component's concern)

- **"All"** (default): render all 11 `LivestreamRow`s in order, each with its own title + horizontal carousel + prev/next nav buttons.
- **"Upcoming Live"**: flatten every card across all rows where `status === "Upcoming"` into one 3-column grid, no row titles, no carousel/nav.
- **Any other pill** (e.g. "The future of GTM", "Partners", "EMEA"): flatten every card where the card's parent row title matches the pill label OR `card.tags` includes the pill label, into the same 3-column grid.
- This filter state (`activePill`) must live in the page's client component since it controls what's rendered below the pills — `FilterPills` itself should be a dumb/presentational component (`{ pills, active, onSelect }`), not own the filtering logic.
