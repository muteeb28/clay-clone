export type BillingCycle = "monthly" | "annual";

export interface PricingTierOption {
  label: string;
  priceMonthly: number;
}

export interface PricingFeature {
  label: string;
  info?: string;
}

export interface PricingPlan {
  id: "free" | "launch" | "growth" | "enterprise";
  name: string;
  accentClass: string;
  icon: string;
  tagline: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaVariant: "solid" | "outline";
  recommended?: boolean;
  buyNowHref?: string;
}

export interface ComparisonRow {
  label: string;
  info?: string;
  values: [string, string, string, string]; // free, launch, growth, enterprise: "-" | "check" | text
}

export interface ComparisonCategory {
  heading: string;
  description?: string;
  rows: ComparisonRow[];
}

export interface CustomerResult {
  company: string;
  stat: string;
  label: string;
  ctaLabel: string;
  image: string;
}

export interface SecurityBadge {
  icon: string;
  label: string;
  description: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}
