import type { Metadata } from "next";
import { Header } from "@/components/clay/Header";
import { Footer } from "@/components/clay/Footer";
import { StartupsHero } from "@/components/startups/StartupsHero";
import { StartupsLogoCloud } from "@/components/startups/StartupsLogoCloud";
import { GtmGrid } from "@/components/startups/GtmGrid";
import { ProgramCard } from "@/components/startups/ProgramCard";
import { TalentJobs } from "@/components/startups/TalentJobs";
import { ResourcesGallery } from "@/components/startups/ResourcesGallery";
import { ResourceLinks } from "@/components/startups/ResourceLinks";
import { StartupsFaq } from "@/components/startups/StartupsFaq";
import { StartupsTestimonials } from "@/components/startups/StartupsTestimonials";
import { StartupsClosingCta } from "@/components/startups/StartupsClosingCta";
import { WEDGE_BENEFITS, CAMPUS_BENEFITS } from "@/data/startups-data";

export const metadata: Metadata = {
  title: "Validate your ICP, find PMF faster | Clay for startups | Clay.com",
  description:
    "Discover your best customers, test messaging, learn what converts, and scale what works with Clay.",
};

export default function ClayForStartupsPage() {
  return (
    <>
      <Header />
      <main>
        <StartupsHero />
        <StartupsLogoCloud />
        <GtmGrid />
        <ProgramCard
          icon="/images/clay.com/startups/wedge-logo.webp"
          eyebrow="BUILD, TEST AND REV YOUR GTM ENGINE"
          heading="Join Wedge: Clay's startup GTM accelerator"
          description="Wedge is Clay's virtual GTM acceleration program for the fastest-growing, venture-backed startups globally."
          primaryCta={{ label: "Apply to join Wedge", href: "#" }}
          secondaryCta={{ label: "Become a Startup Program Partner", href: "#" }}
          benefitsLabel="Key benefits to help you build"
          benefits={WEDGE_BENEFITS}
        />
        <TalentJobs />
        <ProgramCard
          icon="/images/clay.com/startups/clay-ai-skills.webp"
          eyebrow="LAUNCH A CLAY CLUB ON YOUR CAMPUS"
          heading="Become a Clay Campus Ambassador"
          description="Clay is seeking ambitious undergrads to join the first-ever class of Clay Campus Ambassadors for the 2026-2027 school year. This inaugural group will also serve on Clay's Campus Growth Committee this summer, co-creating the campus program directly with our team for Fall 2026 launch."
          primaryCta={{ label: "Apply for the 2027 class", href: "#" }}
          benefitsLabel="Program benefits for student builders"
          benefits={CAMPUS_BENEFITS}
        />
        <ResourcesGallery />
        <ResourceLinks />
        <StartupsFaq />
        <StartupsTestimonials />
        <StartupsClosingCta />
      </main>
      <Footer />
    </>
  );
}
