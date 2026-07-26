import Image from "next/image";
import { ArrowRightIcon, CalendarPlusIcon } from "@/components/icons";
import type { LivestreamCard as LivestreamCardData } from "@/types/livestreams";

/**
 * Static card for a single livestream (upcoming or replay). Width is
 * intentionally unconstrained (`w-full`) so the same component works both
 * inside LivestreamRow's horizontal scroll track (parent sets a fixed
 * width on the wrapping div) and inside a filtered grid layout.
 */
export function LivestreamCard({ card }: { card: LivestreamCardData }) {
  return (
    <div className="w-full rounded-[30px] border border-[#DAD4C8] bg-[#F4F3F0] p-2">
      <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#DAD4C8]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 389px, 85vw"
        />
      </div>

      <div className="px-0.5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-[#CBD810] px-2 py-1 text-[12.8px] font-normal text-black uppercase">
            {card.status}
          </span>
          {card.date && (
            <span className="rounded border border-[#DAD4C8] bg-white px-[10.4px] py-1 text-[12.8px] font-normal text-black uppercase">
              {card.date}
            </span>
          )}
          {card.time && (
            <span className="rounded bg-[#D8D0FF] px-2 py-1 text-[12.8px] font-normal text-black uppercase">
              {card.time}
            </span>
          )}
        </div>

        <h4 className="mt-3 line-clamp-2 text-xl leading-7 font-semibold text-black">
          {card.title}
        </h4>

        {card.description && (
          <p className="mt-2 line-clamp-3 text-base leading-[22.4px] font-normal text-muted-foreground">
            {card.description}
          </p>
        )}

        <div className="mt-4 flex w-full items-center justify-between">
          <a
            href={`/livestreams/${card.slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-base font-medium text-white transition-opacity hover:opacity-85"
          >
            {card.cta}
            <ArrowRightIcon className="size-4" />
          </a>
          <button
            type="button"
            aria-label="Add to calendar"
            className="text-black transition-opacity hover:opacity-70"
          >
            <CalendarPlusIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
