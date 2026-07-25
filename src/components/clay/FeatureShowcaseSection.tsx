import { FeatureShowcase } from "@/components/clay/FeatureShowcase";
import type { FeaturePanelData } from "@/types/clay";

const FEATURE_PANELS: FeaturePanelData[] = [
  {
    id: "data",
    eyebrow: "DATA",
    headingLine1: "Get data from the most",
    headingLine2: "complete data marketplace",
    body: "One contract to buy data from 200+ data and AI vendors in Clay's marketplace. Create intent signals from anything on the internet. Bring 1st and 3rd party data together.",
    vendorMarks: [
      { src: "/images/clay.com/marks/openai-mark.svg", alt: "OpenAI" },
      { src: "/images/clay.com/marks/mistralai-mark.svg", alt: "Mistral AI" },
      { src: "/images/clay.com/marks/anthropic-mark.svg", alt: "Anthropic" },
    ],
    customerQuote: {
      name: "Mistral AI",
      text: "Mistral AI cut the time to map their TAM and score accounts from 2 months to 10 days.",
    },
    primaryCta: { label: "Start free trial", href: "/signup" },
    secondaryCta: { label: "Explore data marketplace", href: "/marketplace" },
    media: {
      type: "video",
      src: "/videos/clay.com/data.webm",
      poster: "/images/clay.com/features/data-poster.avif",
      alt: "Clay data marketplace product preview",
    },
  },
  {
    id: "agents",
    eyebrow: "AGENTS",
    headingLine1: "Create agents who",
    headingLine2: "mimic your best reps",
    body: "Mine the web for custom data points to research and qualify accounts. Constantly monitor accounts for reasons to engage. Prep reps with the detail they need to tailor every touchpoint.",
    vendorMarks: [
      { src: "/images/clay.com/marks/vanta-mark.svg", alt: "Vanta" },
      { src: "/images/clay.com/marks/pendo-mark.svg", alt: "Pendo" },
    ],
    customerQuote: {
      name: "Vanta",
      text: "Vanta cut post-call follow-up time from 3 days to <1 with agents tailoring messaging based on SOC 2 badges, compliance signals, and security job posts.",
    },
    primaryCta: { label: "Start free trial", href: "/signup" },
    secondaryCta: { label: "Explore agents", href: "/agents" },
    media: {
      type: "video",
      src: "/videos/clay.com/agents.webm",
      poster: "/images/clay.com/features/agents-poster.avif",
      alt: "Clay agents product preview",
    },
  },
  {
    id: "orchestration",
    eyebrow: "ORCHESTRATION",
    headingLine1: "Orchestrate workflows",
    headingLine2: "across tools in real time",
    body: "Connect every GTM or AI tool to a common data layer. Update data across millions of records in your CRM and data warehouse. Define GTM logic once to re-use in every play.",
    vendorMarks: [
      { src: "/images/clay.com/marks/verkada-mark.svg", alt: "Verkada" },
      { src: "/images/clay.com/marks/legora-mark.svg", alt: "Legora" },
    ],
    customerQuote: {
      name: "ElevenLabs'",
      text: "ElevenLabs' increased SQLs by +50% by reducing speed-to-lead to <5 mins.",
    },
    primaryCta: { label: "Start free trial", href: "/signup" },
    secondaryCta: { label: "Explore orchestration", href: "/orchestration" },
    media: {
      type: "video",
      src: "/videos/clay.com/orchestration.webm",
      poster: "/images/clay.com/features/orch-poster.avif",
      alt: "Clay orchestration product preview",
    },
  },
  {
    id: "execution",
    eyebrow: "EXECUTION",
    headingLine1: "Launch new plays as fast",
    headingLine2: "as you have ideas",
    body: "Trigger emails, ads, and more with integrations to your existing GTM tools. Write 1:1 messaging for every prospect programmatically. Launch new tests in days.",
    vendorMarks: [
      { src: "/images/clay.com/marks/figma-mark.svg", alt: "Figma" },
      { src: "/images/clay.com/marks/hex-mark.svg", alt: "Hex" },
    ],
    customerQuote: {
      name: "Rippling",
      text: "Rippling 2x'd cold email performance by automatically tailoring email copy based on persona and enriched account data.",
    },
    primaryCta: { label: "Start free trial", href: "/signup" },
    secondaryCta: { label: "Learn more about building plays", href: "/plays" },
    media: {
      type: "video",
      src: "/videos/clay.com/execution.webm",
      poster: "/images/clay.com/features/execution-poster.avif",
      alt: "Clay execution product preview",
    },
  },
  {
    id: "infrastructure",
    eyebrow: "GTM INFRASTRUCTURE",
    headingLine1: "Build systems that make reps more productive",
    headingLine2: "",
    body: "Reps can self-serve the best prospecting data. Chat to get full account context in natural language. Build centralized workflows for any rep to run.",
    vendorMarks: [],
    customerQuote: {
      name: "Terrapinn",
      text: "Terrapinn generates +19% more revenue per rep and reduced acquisition cost by 90% using Claygent to find and qualify leads.",
    },
    primaryCta: { label: "Start free trial", href: "/signup" },
    secondaryCta: { label: "", href: "" },
    media: {
      type: "video",
      src: "/videos/clay.com/reps.webm",
      poster: "/images/clay.com/features/reps-poster.avif",
      alt: "Clay GTM infrastructure product preview",
    },
  },
];

export function FeatureShowcaseSection() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col px-4 md:px-6 lg:px-8">
      {FEATURE_PANELS.map((panel, index) => (
        <FeatureShowcase
          key={panel.id}
          {...panel}
          className={index === 0 ? undefined : "-mt-6"}
        />
      ))}
    </section>
  );
}
