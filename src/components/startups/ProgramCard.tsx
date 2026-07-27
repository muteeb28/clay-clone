"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { StartupsBenefit } from "@/types/startups";

interface ProgramCardProps {
  icon: string;
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  benefitsLabel: string;
  benefits: StartupsBenefit[];
}

export function ProgramCard({
  icon,
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  benefitsLabel,
  benefits,
}: ProgramCardProps) {
  const [open, setOpen] = useState(true);

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8">
      <div className="rounded-3xl border border-neutral-200 px-6 py-14 text-center sm:px-12">
        <Image src={icon} alt="" width={64} height={64} className="mx-auto h-16 w-16" />
        <p className="mt-6 font-mono text-xs font-bold tracking-[0.1em] text-black">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold text-black sm:text-[42px]">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-neutral-600 sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
          >
            {primaryCta.label}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="group inline-flex items-center gap-2 rounded-xl border border-black bg-black px-5 py-2.5 text-[15px] font-medium text-white"
            >
              {secondaryCta.label}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-10 flex w-full items-center justify-between border-t border-neutral-200 pt-6 text-left text-[15px] font-medium text-black"
        >
          {benefitsLabel}
          <ChevronDownIcon className={cn("size-4 transition-transform", open && "rotate-180")} />
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-250 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 pt-6 text-left sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="rounded-2xl border border-neutral-200 p-5">
                  <Image src={benefit.icon} alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
                  <p className="mt-4 text-[15px] text-black">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
