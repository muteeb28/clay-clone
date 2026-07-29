import { ClayNavbar } from "@/components/clay/ClayNavbar";
import { ClaySalesHero } from "@/components/clay/ClaySalesHero";
import { ClayLogoCloud } from "@/components/clay/ClayLogoCloud";
import { ClaySalesFeatureCards } from "@/components/clay/ClaySalesFeatureCards";
import { ClaySalesPersonalize } from "@/components/clay/ClaySalesPersonalize";
import { ClaySalesAccountSignals } from "@/components/clay/ClaySalesAccountSignals";
import { ClaySalesCallAutomation } from "@/components/clay/ClaySalesCallAutomation";
import { ClaySalesEnrich } from "@/components/clay/ClaySalesEnrich";
import { ClaySalesWallOfLove } from "@/components/clay/ClaySalesWallOfLove";
import { ClayClosingCta } from "@/components/clay/ClayClosingCta";
import { ClayFooter } from "@/components/clay/ClayFooter";
import type { ClayLogoItem } from "@/types/clay";

const TRUSTED_BY_LOGOS: ClayLogoItem[] = [
  { name: "Canva", logoSrc: "/images/clay/67903afc623acf3d66322400_Canva-logo.png", badge: "Hackathon" },
  { name: "HubSpot", logoText: "HubSpot", textClassName: "text-lg font-bold text-[rgb(255,122,89)]" },
  { name: "Vanta", logoSrc: "/images/clay/66dac292f8c407c51112b18c_img-logo-vanta.svg", badge: "Case study" },
  { name: "Intercom", logoText: "INTERCOM", textClassName: "text-base font-bold tracking-wide text-black", badge: "Case study" },
  { name: "Google", logoText: "Google", textClassName: "text-lg font-medium text-black", badge: "Hackathon" },
  { name: "OpenAI", logoSrc: "/images/clay/678fe7a447df0819199060e4_OpenAI-logo.svg", badge: "Case study" },
  { name: "ElevenLabs", logoSrc: "/images/clay/69c5d96ad89e43b846dc6845_ElevenLabs.svg", badge: "Case study" },
  { name: "Cursor", logoSrc: "/images/clay/67904cde46ba4240d5c4d49a_cursor-logo.svg" },
  { name: "Anthropic", logoSrc: "/images/clay/66dacb4608a223faada2fd6f_img-logo-anthropic.svg", badge: "Case study" },
  { name: "Stripe", logoSrc: "/images/clay/699369208d74b23d144d64dc_stripe-logo.svg" },
  { name: "ramp", logoSrc: "/images/clay/66dac291bafa65b8a43918f9_img-logo-ramp.svg" },
  { name: "Rippling", logoText: "RIPPLING", textClassName: "text-base font-bold tracking-wide text-black", badge: "Case study" },
  { name: "Notion", logoSrc: "/images/clay/66dac292f8c407c51112b161_img-logo-notion.svg" },
  { name: "perplexity", logoText: "perplexity", textClassName: "text-lg font-medium lowercase text-black" },
  { name: "Uber", logoText: "Uber", textClassName: "text-lg font-bold text-black" },
  { name: "Figma", logoText: "Figma", textClassName: "text-lg font-semibold text-black", badge: "Case study" },
  { name: "workday", logoText: "workday", textClassName: "text-lg font-medium lowercase text-black", badge: "Case study" },
  { name: "Verkada", logoText: "Verkada", textClassName: "text-base font-bold text-black", badge: "Case study" },
  { name: "okta", logoText: "okta", textClassName: "text-lg font-semibold lowercase text-black" },
  { name: "klaviyo", logoText: "klaviyo", textClassName: "text-lg font-medium lowercase text-black" },
];

export default function ClayForSalesPage() {
  return (
    <>
      <ClayNavbar />
      <main>
        <ClaySalesHero />
        <ClayLogoCloud
          label="TRUSTED BY THE WORLD'S BEST SALES TEAMS"
          logos={TRUSTED_BY_LOGOS}
          columnsClassName="grid-cols-3 sm:grid-cols-5 lg:grid-cols-10"
        />
        <ClaySalesFeatureCards />
        <ClaySalesPersonalize />
        <ClaySalesAccountSignals />
        <ClaySalesCallAutomation />
        <ClaySalesEnrich />
        <ClaySalesWallOfLove />
        <ClayClosingCta subtext="Start for free today. No credit card required." />
      </main>
      <ClayFooter />
    </>
  );
}
