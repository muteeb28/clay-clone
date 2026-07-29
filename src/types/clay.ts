export interface NavDropdownLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdownGroup {
  heading: string;
  links: NavDropdownLink[];
}

export interface NavItem {
  label: string;
  href: string;
  groups?: NavDropdownGroup[];
}

export type FeatureAccent = "data" | "agents" | "orchestration" | "execution" | "infrastructure";

export interface FeaturePanelData {
  id: FeatureAccent;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  body: string;
  vendorMarks: { src: string; alt: string }[];
  customerQuote: { name: string; text: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  media: { type: "video" | "image"; src: string; poster?: string; alt: string };
}

export interface PillTabData {
  id: string;
  label: string;
  subheadline: string;
  accentColor: string;
  mockupImage: string;
  mockupAlt: string;
}

export interface MarqueeLogo {
  src: string;
  alt: string;
}

export interface MarqueeStatCard {
  stat: string;
  label: string;
}

export interface MarqueeQuoteCard {
  quote: string;
  avatar?: string;
  name?: string;
}

export interface ResourceCard {
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  href: string;
  image: string;
  variant: "banner" | "video" | "photo" | "story";
}

// --- Added for the clay-for-sales route (ported from clone_realestate) ---

export interface ClayNavLink {
  label: string;
  href: string;
}

export interface ClayLogoItem {
  name: string;
  logoSrc?: string;
  /** Rendered as a styled text wordmark when no logoSrc image is available. */
  logoText?: string;
  textClassName?: string;
  caseStudyHref?: string;
  badge?: string;
}

export interface ClayFooterColumn {
  heading: string;
  links: { label: string; href: string; badge?: string }[];
}
