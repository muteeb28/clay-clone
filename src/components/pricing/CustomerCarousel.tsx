"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { CUSTOMER_RESULTS } from "@/data/pricing-data";

const CARD_WIDTH = 300;
const GAP = 16;

export function CustomerCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = CUSTOMER_RESULTS.length - 1;

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-neutral-500">Customers</h2>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 disabled:opacity-40"
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <button
            aria-label="Next"
            disabled={index === maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 disabled:opacity-40"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)` }}
        >
          {CUSTOMER_RESULTS.map((c) => (
            <div key={c.company} className="relative shrink-0 overflow-hidden rounded-3xl" style={{ width: CARD_WIDTH }}>
              <div className="relative flex h-52 flex-col justify-between bg-white p-5">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-semibold tracking-wide text-black">{c.company}</p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div>
                  <p className="text-4xl font-bold text-black">{c.stat}</p>
                  <p className="mt-1 text-sm text-neutral-500">{c.label}</p>
                </div>
              </div>
              <div className="relative h-44 w-full">
                <Image src={c.image} alt={c.ctaLabel} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
