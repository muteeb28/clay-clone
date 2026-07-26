"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { LivestreamCard } from "./LivestreamCard";
import type { LivestreamRow as LivestreamRowData } from "@/types/livestreams";

/** Cards visible at once on desktop — nav arrows only render past this. */
const VISIBLE_SLIDES = 3;
/** ~one card width (389px) + track gap (16px), matches live site behavior. */
const SCROLL_AMOUNT = 405;

export function LivestreamRow({ row }: { row: LivestreamRowData }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const showNav = row.cards.length > VISIBLE_SLIDES;

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
  }, [row.cards.length]);

  const scrollByAmount = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-black">
          {row.title}
        </h3>

        {showNav && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              disabled={atStart}
              onClick={() => scrollByAmount(-1)}
              className={cn(
                "flex size-[38px] items-center justify-center rounded border border-[#717989] bg-transparent transition-opacity",
                atStart && "cursor-default opacity-50",
              )}
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={atEnd}
              onClick={() => scrollByAmount(1)}
              className={cn(
                "flex size-[38px] items-center justify-center rounded border border-[#717989] bg-transparent transition-opacity",
                atEnd && "cursor-default opacity-50",
              )}
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="mt-6 flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {row.cards.map((card) => (
          <div
            key={card.slug}
            className="w-[85vw] max-w-[389px] shrink-0 md:w-[389px]"
          >
            <LivestreamCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
