"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { STARTUPS_TESTIMONIALS } from "@/data/startups-data";

const CARD_WIDTH = 380;
const GAP = 16;

export function StartupsTestimonials() {
  const [index, setIndex] = useState(0);
  const maxIndex = STARTUPS_TESTIMONIALS.length - 1;

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-black sm:text-[42px]">
          What our customers say about us&hellip;
        </h2>
        <div className="flex shrink-0 gap-2">
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

      <div className="mt-10 overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)` }}
        >
          {STARTUPS_TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex shrink-0 flex-col justify-between rounded-3xl p-8"
              style={{ backgroundColor: t.accentColor, width: CARD_WIDTH, minHeight: 320 }}
            >
              <div>
                <span className="text-lg font-bold text-black">{t.company}</span>
                <p className="mt-6 text-[15px] leading-relaxed text-black">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-dashed border-black/20 pt-4">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-black/70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
