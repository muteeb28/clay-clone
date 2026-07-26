export type LivestreamStatus = "Upcoming" | "Replay";

export interface LivestreamCard {
  slug: string;
  status: LivestreamStatus;
  date: string | null;
  time: string | null;
  title: string;
  description: string | null;
  cta: string;
  image: string;
  /** Extra keyword tags used to power the pill filter beyond its home row. */
  tags?: string[];
}

export interface LivestreamRow {
  title: string;
  cards: LivestreamCard[];
}

export interface StatMarqueeItem {
  stat: string;
  label: string;
  color: string;
}
