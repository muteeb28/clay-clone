import type { Metadata } from "next";
import { Header } from "@/components/clay/Header";
import { Footer } from "@/components/clay/Footer";
import { AbmHero } from "@/components/abm/AbmHero";
import { AbmDataCards } from "@/components/abm/AbmDataCards";
import { AbmCaseStudies } from "@/components/abm/AbmCaseStudies";
import { AbmFeatureRow } from "@/components/abm/AbmFeatureRow";
import { AbmMultiThread } from "@/components/abm/AbmMultiThread";
import { AbmDemoCta } from "@/components/abm/AbmDemoCta";
import { StartupsTestimonials } from "@/components/startups/StartupsTestimonials";
import { ABM_FEATURE_ROWS } from "@/data/abm-data";

export const metadata: Metadata = {
  title: "ABM | Clay.com",
  description: "Surround your ABM accounts — build dynamic account tiers that refresh with real-time data and signals, then orchestrate personalized campaigns across channels.",
};

export default function AbmPage() {
  return (
    <>
      <Header />
      <main>
        <AbmHero />
        <AbmDataCards />
        <AbmCaseStudies />
        {ABM_FEATURE_ROWS.map((row, i) => (
          <AbmFeatureRow key={row.heading} data={row} reverse={i % 2 === 1} />
        ))}
        <AbmMultiThread />
        <AbmDemoCta />
        <StartupsTestimonials />
      </main>
      <Footer />
    </>
  );
}
