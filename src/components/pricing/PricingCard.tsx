"use client";

import { useState } from "react";
import { Check, ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BillingCycle, PricingTierOption } from "@/types/pricing";

interface StaticPricingCardProps {
  variant: "static";
  planId: string;
  name: string;
  icon: LucideIcon;
  accentBg: string;
  tagline: string;
  priceLabel: string;
  priceSubtext: string;
  pills: [string, string];
  features: string[];
  ctaLabel: string;
  ctaVariant: "solid" | "outline";
  recommended?: boolean;
}

interface CalculatorPricingCardProps {
  variant: "calculator";
  planId: string;
  name: string;
  icon: LucideIcon;
  accentBg: string;
  tagline: string;
  billingCycle: BillingCycle;
  actionTiers: Record<BillingCycle, PricingTierOption[]>;
  creditTiers: Record<BillingCycle, PricingTierOption[]>;
  features: string[];
  ctaLabel: string;
  ctaVariant: "solid" | "outline";
  recommended?: boolean;
  buyNowHref?: string;
}

type PricingCardProps = StaticPricingCardProps | CalculatorPricingCardProps;

function CardShell({
  name,
  icon: Icon,
  accentBg,
  tagline,
  recommended,
  children,
}: {
  name: string;
  icon: LucideIcon;
  accentBg: string;
  tagline: string;
  recommended?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-neutral-50">
      <div className={cn("relative rounded-2xl rounded-bl-[10px] p-5", accentBg)}>
        {recommended && (
          <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
            Recommended
          </span>
        )}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25">
          <Icon className="size-5 text-white" />
        </div>
        <p className="mt-3 text-xl font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/85">{tagline}</p>
      </div>
      {children}
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {features.map((f) => {
        const isHeading = f.endsWith(":");
        return (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2 text-[14px]",
              isHeading ? "font-medium text-black" : "text-neutral-600"
            )}
          >
            {!isHeading && <Check className="mt-0.5 size-3.5 shrink-0 text-neutral-400" />}
            {f}
          </li>
        );
      })}
    </ul>
  );
}

function CtaButtons({
  ctaLabel,
  ctaVariant,
  buyNowHref,
}: {
  ctaLabel: string;
  ctaVariant: "solid" | "outline";
  buyNowHref?: string;
}) {
  return (
    <div className="mt-6">
      <a
        href="#"
        className={cn(
          "flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-[15px] font-medium transition-opacity hover:opacity-90",
          ctaVariant === "solid" ? "bg-black text-white" : "border border-black text-black"
        )}
      >
        {ctaLabel}
      </a>
      {buyNowHref && (
        <p className="mt-3 text-center text-sm text-neutral-500">
          or <a href={buyNowHref} className="underline">buy now</a>
        </p>
      )}
    </div>
  );
}

export function PricingCard(props: PricingCardProps) {
  const [actionIndex, setActionIndex] = useState(0);
  const [creditIndex, setCreditIndex] = useState(0);

  if (props.variant === "static") {
    return (
      <CardShell name={props.name} icon={props.icon} accentBg={props.accentBg} tagline={props.tagline} recommended={props.recommended}>
        <div className="p-5">
          <p className="text-3xl font-semibold text-black">{props.priceLabel}</p>
          <p className="mt-1 text-sm text-neutral-500">{props.priceSubtext}</p>
          <div className="mt-4 flex flex-col gap-2">
            {props.pills.map((pill) => (
              <div key={pill} className="rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-700">
                {pill}
              </div>
            ))}
          </div>
          <FeatureList features={props.features} />
          <CtaButtons ctaLabel={props.ctaLabel} ctaVariant={props.ctaVariant} />
        </div>
      </CardShell>
    );
  }

  const { billingCycle, actionTiers, creditTiers } = props;

  const actionOptions = actionTiers[billingCycle];
  const creditOptions = creditTiers[billingCycle];
  const safeActionIndex = Math.min(actionIndex, actionOptions.length - 1);
  const safeCreditIndex = Math.min(creditIndex, creditOptions.length - 1);
  const total = actionOptions[safeActionIndex].priceMonthly + creditOptions[safeCreditIndex].priceMonthly;

  return (
    <CardShell name={props.name} icon={props.icon} accentBg={props.accentBg} tagline={props.tagline} recommended={props.recommended}>
      <div className="p-5">
        <p className="text-3xl font-semibold text-black">${total.toLocaleString()}/mo</p>
        <p className="mt-1 text-sm text-neutral-500">
          Starts at {actionOptions[0].label.replace("/yr", "/year").replace("/mo", "/month")}
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <div className="relative">
            <select
              value={safeActionIndex}
              onChange={(e) => setActionIndex(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-neutral-200 px-3 py-2 pr-8 text-sm text-neutral-700"
            >
              {actionOptions.map((opt, i) => (
                <option key={opt.label} value={i}>
                  {opt.label} actions (${opt.priceMonthly}/mo)
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
          </div>
          <div className="relative">
            <select
              value={safeCreditIndex}
              onChange={(e) => setCreditIndex(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-neutral-200 px-3 py-2 pr-8 text-sm text-neutral-700"
            >
              {creditOptions.map((opt, i) => (
                <option key={opt.label} value={i}>
                  {opt.label} data credits (${opt.priceMonthly}/mo)
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <FeatureList features={props.features} />
        <CtaButtons ctaLabel={props.ctaLabel} ctaVariant={props.ctaVariant} buyNowHref={props.buyNowHref} />
      </div>
    </CardShell>
  );
}
