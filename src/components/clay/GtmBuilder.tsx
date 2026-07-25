"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { PillTabData } from "@/types/clay";

const AUTO_ADVANCE_MS = 3000;
const CROSSFADE_MS = 350;

const TABS: PillTabData[] = [
  {
    id: "tam-sourcing",
    label: "TAM Sourcing",
    accentColor: "#395afa",
    subheadline: "Find every account in your TAM in one place.",
    mockupImage: "/images/clay.com/pills/case-11.avif",
    mockupAlt: "Lead filtering table with criteria summary panel",
  },
  {
    id: "automated-inbound",
    label: "Automated Inbound",
    accentColor: "#808000",
    subheadline:
      "Enrich, score, and route every lead to the right rep in minutes.",
    mockupImage: "/images/clay.com/pills/case-6.avif",
    mockupAlt: "Demo form submissions table with qualification and rep columns",
  },
  {
    id: "lead-scoring",
    label: "Lead Scoring",
    accentColor: "#cc089e",
    subheadline:
      "Score every lead against your ideal customer profile automatically.",
    mockupImage: "/images/clay.com/pills/case-14.avif",
    mockupAlt: "Lead scoring dashboard mockup",
  },
  {
    id: "automated-outbound",
    label: "Automated Outbound",
    accentColor: "#b53d0a",
    subheadline: "Launch personalized outbound sequences at scale.",
    mockupImage: "/images/clay.com/pills/case-16.avif",
    mockupAlt: "Automated outbound sequence mockup",
  },
  {
    id: "crm-enrichment",
    label: "CRM Enrichment",
    accentColor: "#395afa",
    subheadline: "Keep every record in your CRM enriched and up to date.",
    mockupImage: "/images/clay.com/pills/replace-crm.avif",
    mockupAlt: "CRM enrichment mockup",
  },
  {
    id: "launch-ads",
    label: "Launch Ads",
    accentColor: "#cc089e",
    subheadline:
      "Launch targeted ad audiences built from enriched account data.",
    mockupImage: "/images/clay.com/pills/case-21.avif",
    mockupAlt: "Ads audience builder mockup",
  },
  {
    id: "rep-productivity",
    label: "Rep Productivity",
    accentColor: "#808000",
    subheadline: "Give every rep self-serve access to the data they need.",
    mockupImage: "/images/clay.com/pills/case-23.avif",
    mockupAlt: "Rep productivity dashboard mockup",
  },
];

const PROMPT_EXAMPLES = [
  "Find companies with 30+ sales reps, $10M+ in revenue, and a free trial button on their site",
  "Find VPs of Sales at Series B companies that just raised funding",
  "Find e-commerce brands running Meta ads with under 50 employees",
  "Find people who changed jobs into a RevOps role in the last 30 days",
];

const TYPE_MS = 45;
const DELETE_MS = 25;
const PAUSE_FULL_MS = 1200;
const PAUSE_EMPTY_MS = 400;

/**
 * Cycles through `strings`, typing each one out character by character,
 * pausing, deleting it, pausing briefly, then moving to the next string.
 */
function useTypewriter(strings: string[]): string {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;
    const current = strings[stringIndex % strings.length];

    let delay: number;
    if (!deleting && text === current) {
      delay = PAUSE_FULL_MS;
    } else if (deleting && text === "") {
      delay = PAUSE_EMPTY_MS;
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setStringIndex((i) => (i + 1) % strings.length);
        return;
      }
      const nextLength = text.length + (deleting ? -1 : 1);
      setText(current.slice(0, nextLength));
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, stringIndex, strings]);

  return text;
}

export function GtmBuilder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TABS.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  const activeTab = TABS[activeIndex];
  const placeholder = useTypewriter(PROMPT_EXAMPLES);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl font-heading text-[32px] font-medium leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-[64px] xl:text-[72px]">
          GTM engineers build on Clay
        </h2>
        <p
          key={activeTab.id}
          className="mt-6 max-w-2xl animate-in fade-in text-lg text-neutral-600 duration-300 sm:text-xl"
        >
          {activeTab.subheadline}
        </p>

        {/* Pill tab carousel */}
        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
          role="tablist"
          aria-label="GTM use cases"
        >
          {TABS.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(index)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-5 py-[10px] text-[15px] font-medium transition-colors duration-300",
                  isActive
                    ? "text-white"
                    : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200",
                )}
                style={isActive ? { backgroundColor: tab.accentColor } : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard mockup card */}
        <div className="relative mt-8 flex h-[420px] items-center justify-center overflow-hidden rounded-[40px] bg-neutral-50 sm:h-[560px] lg:h-[640px]">
          <div
            className="absolute h-[70%] w-[70%] rounded-full opacity-20 blur-3xl transition-colors duration-500"
            style={{ backgroundColor: activeTab.accentColor }}
            aria-hidden="true"
          />
          <div
            key={activeTab.id}
            className="relative h-[85%] w-[90%] animate-in fade-in duration-300"
            style={{ animationDuration: `${CROSSFADE_MS}ms` }}
          >
            <Image
              src={activeTab.mockupImage}
              alt={activeTab.mockupAlt}
              fill
              sizes="(min-width: 1024px) 1100px, 90vw"
              className="object-contain drop-shadow-2xl"
              priority={activeIndex === 0}
            />
          </div>
        </div>

        {/* AI builder input */}
        <div className="mt-20">
          <h3 className="text-center font-heading text-2xl font-medium text-black sm:text-3xl">
            What do you want to build?
          </h3>

          <div className="relative mx-auto mt-8 max-w-3xl">
            <textarea
              ref={inputRef}
              rows={2}
              placeholder={placeholder}
              className="min-h-[110px] w-full resize-none rounded-3xl border border-neutral-200 bg-white p-6 pr-6 text-lg text-black placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none sm:pr-20"
            />
            <button
              type="button"
              aria-label="Submit"
              onClick={() => inputRef.current?.focus()}
              className="absolute bottom-4 right-4 flex size-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 sm:bottom-5 sm:right-5"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>

          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3">
            {["Find people data", "Find company data", "Find jobs data"].map(
              (label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  {label}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
