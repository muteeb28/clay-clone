import { Header } from "@/components/clay/Header";
import { Hero } from "@/components/clay/Hero";
import { SocialProofMarquee } from "@/components/clay/SocialProofMarquee";
import { GtmBuilder } from "@/components/clay/GtmBuilder";
import { FeatureShowcaseSection } from "@/components/clay/FeatureShowcaseSection";
import { CaseStudies } from "@/components/clay/CaseStudies";
import { ResourceGrid } from "@/components/clay/ResourceGrid";
import { FinalCta } from "@/components/clay/FinalCta";
import { Footer } from "@/components/clay/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProofMarquee />
        <GtmBuilder />
        <FeatureShowcaseSection />
        <CaseStudies />
        <ResourceGrid />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
