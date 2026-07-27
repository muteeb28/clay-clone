import type { Metadata } from "next";
import { Header } from "@/components/clay/Header";
import { Footer } from "@/components/clay/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { UsageBasedPricing } from "@/components/pricing/UsageBasedPricing";
import { CustomerCarousel } from "@/components/pricing/CustomerCarousel";
import { SecurityBadges } from "@/components/pricing/SecurityBadges";
import { PricingFaq } from "@/components/pricing/PricingFaq";

export const metadata: Metadata = {
  title: "Compare plans, features & costs | Clay.com",
  description: "Flexible pricing that fits you — compare Clay's Free, Launch, Growth, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <ComparisonTable />
        <UsageBasedPricing />
        <CustomerCarousel />
        <SecurityBadges />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
