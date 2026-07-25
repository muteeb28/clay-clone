import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MarqueeLogo } from "@/types/clay";

/**
 * Discriminated union for the three marquee card variants. Defined locally
 * since the shared `MarqueeQuoteCard` / `MarqueeStatCard` types in
 * `@/types/clay` don't capture the per-card logo attribution needed here.
 */
type MarqueeCard =
  | { type: "logo"; logo: MarqueeLogo }
  | { type: "quote"; logo?: MarqueeLogo; quote: string; linkLabel?: string }
  | { type: "stat"; stat: string; label: string; logo?: MarqueeLogo };

const LOGO_DIR = "/images/clay.com/logos";

const CARDS: MarqueeCard[] = [
  { type: "logo", logo: { src: `${LOGO_DIR}/stripe.svg`, alt: "Stripe" } },
  {
    type: "quote",
    logo: { src: `${LOGO_DIR}/figma.svg`, alt: "Figma" },
    quote:
      "Clay has become the orchestration layer for everything GTM. Salesforce for record-keeping, Snowflake for product data, and Clay for turning it all into automated action.",
  },
  { type: "logo", logo: { src: `${LOGO_DIR}/vanta.svg`, alt: "Vanta" } },
  {
    type: "quote",
    logo: { src: `${LOGO_DIR}/openai.svg`, alt: "OpenAI" },
    quote:
      "Clay has one of the most practical and exciting applications of AI, in a decades-old practice that has long been stale.",
    linkLabel: "view open ai",
  },
  { type: "stat", stat: "+140%", label: "OUTBOUND PIPELINE" },
  { type: "stat", stat: "80%+", label: "ENRICHMENT COVERAGE" },
  {
    type: "quote",
    logo: { src: `${LOGO_DIR}/google.svg`, alt: "Google" },
    quote:
      "In our first AI Hackathon week, we unlocked data across YouTube, Ads, Cloud, and CapitalG into powerful AI workflows.",
  },
  {
    type: "stat",
    stat: "All inbound",
    label: "QUALIFIED AND SCORED WITH CLAY",
    logo: { src: `${LOGO_DIR}/anthropic.svg`, alt: "Anthropic" },
  },
  {
    type: "quote",
    logo: { src: `${LOGO_DIR}/anthropic.svg`, alt: "Anthropic" },
    quote:
      "Clay 3x'd our enrichment rate and unlocked AI-powered GTM workflows that were infeasible before",
  },
  { type: "stat", stat: "2x", label: "DEMOS FROM COLD EMAIL" },
  { type: "stat", stat: "3x", label: "REPLY RATE" },
  { type: "stat", stat: "+50%", label: "SQLS" },
  { type: "logo", logo: { src: `${LOGO_DIR}/hubspot.svg`, alt: "HubSpot" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/rippling.svg`, alt: "Rippling" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/workday.svg`, alt: "Workday" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/uber.svg`, alt: "Uber" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/canva.svg`, alt: "Canva" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/okta.svg`, alt: "Okta" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/verkada.svg`, alt: "Verkada" } },
  { type: "logo", logo: { src: `${LOGO_DIR}/elevenlabs.svg`, alt: "ElevenLabs" } },
  {
    type: "quote",
    quote:
      "I love using and working with Clay because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack.",
  },
];

function LogoChip({ logo }: { logo: MarqueeLogo }) {
  return (
    <div className="flex h-[60px] w-[110px] shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm sm:h-[72px] sm:w-[140px]">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={90}
        height={32}
        className="h-auto max-h-6 w-auto max-w-[90px] object-contain sm:max-h-8"
      />
    </div>
  );
}

function QuoteCard({ card }: { card: Extract<MarqueeCard, { type: "quote" }> }) {
  return (
    <div className="flex w-[260px] shrink-0 flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm sm:w-[320px] sm:p-5">
      {card.logo ? (
        <Image
          src={card.logo.src}
          alt={card.logo.alt}
          width={72}
          height={24}
          className="h-5 w-auto max-w-[72px] object-contain object-left"
        />
      ) : null}
      <p className="text-[13px] leading-relaxed text-neutral-700 sm:text-sm">{card.quote}</p>
      {card.linkLabel ? (
        <span className="text-xs font-medium lowercase text-neutral-400">{card.linkLabel}</span>
      ) : null}
    </div>
  );
}

function StatCard({ card }: { card: Extract<MarqueeCard, { type: "stat" }> }) {
  return (
    <div className="flex w-[130px] shrink-0 flex-col justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm sm:w-[160px] sm:p-5">
      {card.logo ? (
        <Image
          src={card.logo.src}
          alt={card.logo.alt}
          width={64}
          height={20}
          className="h-4 w-auto max-w-[64px] object-contain object-left"
        />
      ) : null}
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold text-neutral-900 sm:text-[28px]">{card.stat}</span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-neutral-400 sm:text-[11px] sm:tracking-wider">
          {card.label}
        </span>
      </div>
    </div>
  );
}

function MarqueeCardItem({ card }: { card: MarqueeCard }) {
  switch (card.type) {
    case "logo":
      return <LogoChip logo={card.logo} />;
    case "quote":
      return <QuoteCard card={card} />;
    case "stat":
      return <StatCard card={card} />;
  }
}

export function SocialProofMarquee() {
  return (
    <section className={cn("relative z-10 -mt-16 rounded-t-[48px] bg-clay-cream pb-16 pt-12 sm:pb-20 sm:pt-16")}>
      <p className="mx-auto max-w-3xl px-6 text-center text-base leading-snug text-neutral-600 sm:text-xl sm:leading-normal">
        Trusted by more than 500,000+ leading GTM teams of all sizes. Inspired by our{" "}
        <span className="font-bold text-neutral-900">customers</span>. Built with{" "}
        <span className="font-bold text-neutral-900">love</span>.
      </p>

      <div className="mt-10 w-full overflow-hidden sm:mt-14">
        <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, cycleIndex) =>
            CARDS.map((card, cardIndex) => (
              <MarqueeCardItem key={`${cycleIndex}-${cardIndex}`} card={card} />
            )),
          )}
        </div>
      </div>
    </section>
  );
}
