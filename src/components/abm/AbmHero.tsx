"use client";

import { useState } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { OrbitDiagram } from "./OrbitDiagram";
import { USE_CASE_OPTIONS, HERO_ORBIT_NODES } from "@/data/abm-data";

export function AbmHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="relative inline-block">
            <div className="inline-flex items-center gap-2 rounded-full border border-black bg-[rgb(203,216,16)] py-1.5 pl-4 pr-1.5">
              <span className="text-sm font-medium text-black">Clay for</span>
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-semibold text-black"
              >
                ABM
                <ChevronDownIcon className={cn("size-4 transition-transform", open && "rotate-180")} />
              </button>
            </div>
            {open && (
              <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
                {USE_CASE_OPTIONS.map((opt) => (
                  <a
                    key={opt.label}
                    href="#"
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm",
                      opt.active ? "font-semibold text-blue-600" : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-black sm:text-6xl">
            Surround your ABM accounts
          </h1>
          <p className="mt-6 max-w-md text-base text-neutral-600 sm:text-lg">
            Build dynamic account tiers that refresh with real-time data and signals, then
            orchestrate personalized campaigns across channels.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
          >
            Get a demo
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        <OrbitDiagram nodes={HERO_ORBIT_NODES} />
      </div>
    </section>
  );
}
