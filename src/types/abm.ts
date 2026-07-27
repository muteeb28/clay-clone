import type { LucideIcon } from "lucide-react";

export interface OrbitNode {
  icon: LucideIcon;
  iconBg: string;
  label: string;
  sublabel?: string;
}

export interface AbmDataCard {
  image: string;
  heading: string;
  body: string;
}

export interface AbmCaseStudy {
  id: string;
  tabLabel: string;
  logoSrc: string;
  heading: string;
  image: string;
  description: string;
  bullets?: string[];
  ctaLabel: string;
}

export interface AbmFeatureRow {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface UseCaseOption {
  label: string;
  active?: boolean;
}
