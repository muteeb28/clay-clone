"use client";

import { useState } from "react";
import { Diamond, Rocket, TrendingUp, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingCard } from "./PricingCard";
import {
  LAUNCH_ACTIONS,
  LAUNCH_CREDITS,
  GROWTH_ACTIONS,
  GROWTH_CREDITS,
  FREE_FEATURES,
  LAUNCH_FEATURES,
  GROWTH_FEATURES,
  ENTERPRISE_FEATURES,
} from "@/data/pricing-data";
import type { BillingCycle } from "@/types/pricing";

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-8">
      <div className="flex justify-end">
        <div className="inline-flex rounded-xl bg-neutral-100 p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              billingCycle === "monthly" ? "bg-white text-black shadow-sm" : "text-neutral-500"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              billingCycle === "annual" ? "bg-white text-black shadow-sm" : "text-neutral-500"
            )}
          >
            Annual · <span className="text-green-600">Save 10%</span>
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PricingCard
          variant="static"
          planId="free"
          name="Free"
          icon={Diamond}
          accentBg="bg-clay-data"
          tagline="Start building in Clay for free. No strings attached."
          priceLabel="Free"
          priceSubtext={billingCycle === "annual" ? "Includes 6,000 actions/year" : "Includes 500 actions/mo"}
          pills={
            billingCycle === "annual"
              ? ["6K actions/yr", "1.2K data credits/yr"]
              : ["500 actions/mo", "100 data credits/mo"]
          }
          features={FREE_FEATURES}
          ctaLabel="Start 14-day trial"
          ctaVariant="outline"
        />
        <PricingCard
          variant="calculator"
          planId="launch"
          name="Launch"
          icon={Rocket}
          accentBg="bg-[rgb(2,105,62)]"
          tagline="For small teams building and automating prospecting workflows"
          billingCycle={billingCycle}
          actionTiers={LAUNCH_ACTIONS}
          creditTiers={LAUNCH_CREDITS}
          features={LAUNCH_FEATURES}
          ctaLabel="Start 14-day trial"
          ctaVariant="outline"
          buyNowHref="#"
        />
        <PricingCard
          variant="calculator"
          planId="growth"
          name="Growth"
          icon={TrendingUp}
          accentBg="bg-clay-execution"
          tagline="For teams with CRM-based workflows & growth campaigns."
          billingCycle={billingCycle}
          actionTiers={GROWTH_ACTIONS}
          creditTiers={GROWTH_CREDITS}
          features={GROWTH_FEATURES}
          ctaLabel="Start 14-day trial"
          ctaVariant="solid"
          recommended
          buyNowHref="#"
        />
        <PricingCard
          variant="static"
          planId="enterprise"
          name="Enterprise"
          icon={Building2}
          accentBg="bg-[rgb(109,76,214)]"
          tagline="For organizations building GTM systems at scale."
          priceLabel="Custom"
          priceSubtext="Custom actions"
          pills={["Custom actions", "Custom data credits"]}
          features={ENTERPRISE_FEATURES}
          ctaLabel="Get a demo"
          ctaVariant="outline"
        />
      </div>
    </section>
  );
}
