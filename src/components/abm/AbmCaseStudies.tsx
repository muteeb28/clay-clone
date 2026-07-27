"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ABM_CASE_STUDIES } from "@/data/abm-data";

export function AbmCaseStudies() {
  const [activeId, setActiveId] = useState(ABM_CASE_STUDIES[0].id);
  const active = ABM_CASE_STUDIES.find((c) => c.id === activeId) ?? ABM_CASE_STUDIES[0];

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8">
      <div className="flex overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
        {ABM_CASE_STUDIES.map((study) => (
          <button
            key={study.id}
            onClick={() => setActiveId(study.id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 py-6 text-base font-medium transition-colors",
              activeId === study.id ? "bg-white shadow-sm" : "text-neutral-400 hover:text-neutral-600"
            )}
          >
            <Image src={study.logoSrc} alt={study.tabLabel} width={110} height={28} className="h-6 w-auto object-contain" />
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 rounded-3xl bg-neutral-100 p-6 lg:grid-cols-2 lg:p-8">
        <div className="relative aspect-square overflow-hidden rounded-3xl lg:aspect-auto">
          <Image src={active.image} alt={active.heading} fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold tracking-[0.1em] text-neutral-500">CASE STUDY</p>
          <h2 className="mt-4 text-5xl font-semibold text-black">{active.heading}</h2>
          <p className="mt-4 max-w-md text-base text-neutral-600">{active.description}</p>
          {active.bullets && (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base font-semibold text-neutral-600">
              {active.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
          >
            {active.ctaLabel}
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
