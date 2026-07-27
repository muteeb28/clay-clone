import {
  Mail,
  Globe,
  Calendar,
  MessageCircle,
  Package,
  MessagesSquare,
  MailOpen,
  Users,
  Megaphone,
} from "lucide-react";
import type { OrbitNode, AbmDataCard, AbmCaseStudy, AbmFeatureRow, UseCaseOption } from "@/types/abm";

const IMG = "/images/clay.com/abm";

export const USE_CASE_OPTIONS: UseCaseOption[] = [
  { label: "Automated inbound" },
  { label: "Account research" },
  { label: "ABM", active: true },
  { label: "PLG assist" },
  { label: "Rep assist" },
  { label: "Reverse ETL" },
  { label: "Outbound" },
  { label: "CRM Enrichment" },
  { label: "TAM Sourcing" },
  { label: "Rep Prospecting" },
  { label: "Territory Planning" },
];

export const HERO_ORBIT_NODES: OrbitNode[] = [
  { icon: MailOpen, iconBg: "bg-[rgb(255,200,60)]", label: "Outbound", sublabel: "email campaigns" },
  { icon: Globe, iconBg: "bg-[rgb(60,200,150)]", label: "Personalized", sublabel: "landing pages" },
  { icon: Calendar, iconBg: "bg-[rgb(240,120,150)]", label: "Conference/", sublabel: "event attendees" },
  { icon: Megaphone, iconBg: "bg-[rgb(255,200,60)]", label: "Paid ad", sublabel: "campaigns" },
  { icon: MessageCircle, iconBg: "bg-[rgb(255,200,60)]", label: "Dinner", sublabel: "invites" },
  { icon: Users, iconBg: "bg-[rgb(60,150,255)]", label: "Exec", sublabel: "networking" },
  { icon: Package, iconBg: "bg-[rgb(240,120,60)]", label: "Product activation", sublabel: "(PQL)" },
  { icon: Mail, iconBg: "bg-[rgb(255,200,60)]", label: "Direct mail", sublabel: "campaigns" },
  { icon: MessagesSquare, iconBg: "bg-[rgb(60,150,255)]", label: "Social listening across", sublabel: "LN, X, Reddit" },
];

export const MULTI_THREAD_NODES: OrbitNode[] = [
  { icon: MessagesSquare, iconBg: "bg-[rgb(240,120,60)]", label: "Social listening", sublabel: "Exec activity" },
  { icon: MessageCircle, iconBg: "bg-[rgb(60,150,255)]", label: "Dinner invites", sublabel: "C-suite outreach" },
];

export const ABM_DATA_CARDS: AbmDataCard[] = [
  {
    image: `${IMG}/card1-data.jpg`,
    heading: "Accurate, real-time data on your target accounts",
    body: "Combine first party data, social listening, 150+ providers, and AI web research to know immediately when a target account shows intent.",
  },
  {
    image: `${IMG}/card2-signals.jpg`,
    heading: "Track people & company changes with signals",
    body: "Aggregate signals—job changes, new hires, promotions, website intent, headcount shifts, and more—to notify account owners instantly of changes.",
  },
  {
    image: `${IMG}/card3-scoring.jpg`,
    heading: "Dynamic scoring and segmentation",
    body: "Tier accounts by fit, grade contacts, and automatically move accounts through stages so reps always know where to focus.",
  },
  {
    image: `${IMG}/card4-multichannel.jpg`,
    heading: "Run multi-channel plays automatically",
    body: "Orchestrate conversion plays automatically based on account score while keeping a human in the loop for continuous improvement.",
  },
];

export const ABM_CASE_STUDIES: AbmCaseStudy[] = [
  {
    id: "verkada",
    tabLabel: "Verkada",
    logoSrc: `${IMG}/logo-tab-verkada.svg`,
    heading: "Verkada",
    image: `${IMG}/case-verkada.webp`,
    description:
      "Verkada auto-generates thousands of personalized landing pages for good-fit prospects, using individual company logos and information.",
    ctaLabel: "Read Verkada case study",
  },
  {
    id: "recharge",
    tabLabel: "Recharge",
    logoSrc: `${IMG}/logo-tab-recharge.png`,
    heading: "Recharge",
    image: `${IMG}/case-recharge.jpg`,
    description: "Recharge uses Clay to run ABM campaigns at scale. With Clay, they drove:",
    bullets: [
      "20% jump in opportunity conversion",
      "12% more outbound meeting bookings",
      "10× improvement in call conversion.",
    ],
    ctaLabel: "Read Recharge case study",
  },
  {
    id: "rippling",
    tabLabel: "Rippling",
    logoSrc: `${IMG}/logo-tab-rippling.svg`,
    heading: "Rippling",
    image: `${IMG}/case-rippling.webp`,
    description:
      "Rippling uses Clay to launch direct mail campaigns at scale. With Clay, they can source, enrich, and verify addresses with accuracy, and find the right office locations for their prospects.",
    ctaLabel: "Read Rippling case study",
  },
];

export const ABM_FEATURE_ROWS: AbmFeatureRow[] = [
  {
    heading: "Lock in your target accounts and buyers",
    body: "Consolidate multiple account list building sources—Ocean.io, HG Insights, Google Maps, Openmart, Clay's company database—to build your account universe. Then use People search to identify every key contact, verify their info, and understand what matters to them.",
    image: `${IMG}/diagram-lock-accounts.jpg`,
    imageAlt: "Diagram of account list building sources flowing into Clay",
  },
  {
    heading: "Tier your accounts and score contacts",
    body: "Layer on qualification criteria—headcount by role, open job postings, tech stack—and separate accounts into tiers. Score contacts using AI formulas so sales and demand gen know exactly where to focus. Use these segmented lists to build targets for every ABM play.",
    image: `${IMG}/diagram-tier-accounts.jpg`,
    imageAlt: "Account tiering and scoring stage diagram",
  },
  {
    heading: "Monitor awareness stages with signals",
    body: "Track signals across every touchpoint—executive connections, product signups and spend, Salesforce activity, ad engagement, webinar attendance—and use them to move accounts through stages automatically. Trigger Slack notifications for sales reps to be notified when any of their accounts show intent.",
    image: `${IMG}/diagram-monitor-awareness.jpg`,
    imageAlt: "Slack notification mockup showing account signal alerts",
  },
  {
    heading: "Run multi-channel campaigns",
    body: "Filter by account tier, contact grade, and awareness stage to generate the right list for any ABM play. Trigger campaigns automatically or hand off for high-touch plays like executive dinners. Every campaign runs from the same enriched, scored data.",
    image: `${IMG}/diagram-multichannel-campaigns.jpg`,
    imageAlt: "Account scoring table with campaign channel icons",
  },
];
