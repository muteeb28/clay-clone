import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { STAT_MARQUEE_DOWN, STAT_MARQUEE_UP } from "@/data/livestreams-data";
import type { StatMarqueeItem } from "@/types/livestreams";

/** Standard technique so cards fade in/out at the column edges instead of clipping abruptly. */
const EDGE_FADE_STYLE = {
  maskImage:
    "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
};

function StatCard({ stat, label, color }: StatMarqueeItem) {
  return (
    <div className={cn("flex w-[150px] shrink-0 flex-col gap-2 rounded-2xl p-4 sm:w-[280px] sm:p-6", color)}>
      <span className="text-xl font-bold sm:text-3xl">{stat}</span>
      <span className="text-xs leading-snug sm:text-sm">{label}</span>
    </div>
  );
}

function MarqueeColumn({
  items,
  direction,
}: {
  items: StatMarqueeItem[];
  direction: "up" | "down";
}) {
  return (
    <div className="relative h-[420px] w-[150px] overflow-hidden sm:h-[560px] sm:w-[280px]" style={EDGE_FADE_STYLE}>
      <div
        className={cn(
          "flex flex-col gap-4",
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down",
          "hover:[animation-play-state:paused]",
        )}
      >
        {[...items, ...items].map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export function StatMarqueeCta() {
  return (
    <section className="bg-clay-infra-bg px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-col items-start gap-6 lg:w-[40%]">
          <span className="inline-flex w-fit items-center rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700">
            Talk to sales
          </span>

          <h2 className="font-heading text-[32px] leading-[1.1] font-[500] tracking-[-0.02em] text-black md:text-5xl">
            Streamline{" "}
            <span className="underline decoration-2 underline-offset-4">data</span>{" "}
            <span className="underline decoration-2 underline-offset-4">enrichment</span>
          </h2>

          <p className="max-w-md text-base leading-snug text-neutral-600 md:text-lg">
            Leverage 100+ data sources and an AI agent with 140M monthly runs.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Schedule a demo
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        <div className="flex w-full justify-center gap-4 lg:w-[60%] lg:justify-end">
          <MarqueeColumn items={STAT_MARQUEE_UP} direction="up" />
          <MarqueeColumn items={STAT_MARQUEE_DOWN} direction="down" />
        </div>
      </div>
    </section>
  );
}
