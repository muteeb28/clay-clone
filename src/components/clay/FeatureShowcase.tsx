"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, PauseIcon, PlayIcon } from "@/components/icons";
import type { FeatureAccent, FeaturePanelData } from "@/types/clay";

export interface FeatureShowcaseProps extends FeaturePanelData {
  /** Extra classes applied to the outer panel (e.g. negative margin for overlap stacking). */
  className?: string;
}

interface AccentStyle {
  /** Text color class for the accent (used on heading line 2, plain labels, etc). */
  text: string;
  /** Solid background class for pills / primary CTA. */
  solidBg: string;
  /** Panel background wash. */
  panelBg: string;
}

const ACCENT_STYLES: Record<FeatureAccent, AccentStyle> = {
  data: {
    text: "text-clay-data",
    solidBg: "bg-clay-data",
    panelBg: "bg-clay-data-bg",
  },
  agents: {
    text: "text-clay-agents",
    solidBg: "bg-clay-agents",
    panelBg: "bg-clay-agents-bg",
  },
  orchestration: {
    text: "text-clay-orch",
    solidBg: "bg-clay-orch",
    panelBg: "bg-clay-orch-bg",
  },
  execution: {
    text: "text-clay-execution",
    solidBg: "bg-clay-execution",
    panelBg: "bg-clay-execution-bg",
  },
  infrastructure: {
    text: "text-black",
    solidBg: "bg-black",
    panelBg: "bg-clay-infra-bg",
  },
};

/**
 * Tiny scroll-triggered reveal hook: fades/slides the element in once it enters
 * the viewport, then stops observing. Falls back to "already visible" if
 * IntersectionObserver isn't available (SSR-safe, degrades gracefully).
 */
function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}

const REVEAL_CLASSES =
  "transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none";

function EyebrowPill({ label, accent }: { label: string; accent: FeatureAccent }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 w-fit items-center rounded-full px-3 text-xs font-semibold tracking-[3px] whitespace-nowrap text-white uppercase",
        ACCENT_STYLES[accent].solidBg
      )}
    >
      {label}
    </span>
  );
}

function VendorMarks({ marks }: { marks: FeaturePanelData["vendorMarks"] }) {
  if (!marks.length) return null;
  return (
    <div className="flex items-center gap-3">
      {marks.map((mark) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={mark.src}
          src={mark.src}
          alt={mark.alt}
          className="h-6 w-auto object-contain md:h-7"
        />
      ))}
    </div>
  );
}

function CustomerQuote({ quote }: { quote: FeaturePanelData["customerQuote"] }) {
  const [lead, ...rest] = quote.text.split(quote.name);
  const hasName = quote.text.includes(quote.name);
  return (
    <p className="max-w-[440px] text-[15px] leading-snug text-black">
      {hasName ? (
        <>
          {lead}
          <strong className="font-bold">{quote.name}</strong>
          {rest.join(quote.name)}
        </>
      ) : (
        quote.text
      )}
    </p>
  );
}

function PrimaryCta({
  cta,
  accent,
}: {
  cta: FeaturePanelData["primaryCta"];
  accent: FeatureAccent;
}) {
  return (
    <a
      href={cta.href}
      className={cn(
        "inline-flex h-11 w-fit items-center justify-center rounded-full px-6 text-sm font-medium text-white transition-opacity hover:opacity-90",
        ACCENT_STYLES[accent].solidBg
      )}
    >
      {cta.label}
    </a>
  );
}

function SecondaryCta({ cta }: { cta: FeaturePanelData["secondaryCta"] }) {
  return (
    <a
      href={cta.href}
      className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-black"
    >
      {cta.label}
      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function FeatureVideo({
  media,
  className,
  interactive = false,
}: {
  media: FeaturePanelData["media"];
  className?: string;
  interactive?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-[28px] md:aspect-auto md:h-full",
        className
      )}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={media.poster}
        aria-label={media.alt}
        className="size-full object-cover"
      >
        <source src={media.src} type="video/webm" />
      </video>
      {interactive && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          aria-pressed={isPlaying}
          className="absolute bottom-4 left-4 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-black shadow-md backdrop-blur transition-transform hover:scale-105"
        >
          {isPlaying ? (
            <PauseIcon className="size-4" />
          ) : (
            <PlayIcon className="size-4" />
          )}
        </button>
      )}
    </div>
  );
}

/**
 * GTM INFRASTRUCTURE panel — mirrored layout variant:
 * plain-text eyebrow (no pill), single-tone heading, body positioned to the
 * right of the heading, CTA near the top, and full-width media beneath.
 */
function InfrastructureShowcase({
  data,
  className,
}: {
  data: FeaturePanelData;
  className?: string;
}) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-[40px] bg-clay-infra-bg px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20",
        REVEAL_CLASSES,
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      <span className="text-xs font-semibold tracking-[3px] text-black/60 uppercase">
        {data.eyebrow}
      </span>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-[32px] leading-[1.05] font-medium text-black md:text-5xl">
            {data.headingLine1}
          </h2>
          <div className="mt-6">
            <PrimaryCta cta={data.primaryCta} accent={data.id} />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="max-w-[480px] text-base text-black/70">{data.body}</p>
          <CustomerQuote quote={data.customerQuote} />
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <FeatureVideo media={data.media} className="rounded-[32px]" />
      </div>
    </section>
  );
}

export function FeatureShowcase({ className, ...data }: FeatureShowcaseProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  if (data.id === "infrastructure") {
    return <InfrastructureShowcase data={data} className={className} />;
  }

  const accent = ACCENT_STYLES[data.id];
  const interactive = data.id === "orchestration";

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16",
        accent.panelBg,
        REVEAL_CLASSES,
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <EyebrowPill label={data.eyebrow} accent={data.id} />

          <h2 className="text-[32px] leading-[1.05] font-medium md:text-5xl">
            <span className="block text-black">{data.headingLine1}</span>
            <span className={cn("block", accent.text)}>{data.headingLine2}</span>
          </h2>

          <p className="max-w-[420px] text-base text-black/70">{data.body}</p>

          <VendorMarks marks={data.vendorMarks} />

          <CustomerQuote quote={data.customerQuote} />

          <div className="flex flex-wrap items-center gap-6 pt-1">
            <PrimaryCta cta={data.primaryCta} accent={data.id} />
            <SecondaryCta cta={data.secondaryCta} />
          </div>
        </div>

        <FeatureVideo
          media={data.media}
          interactive={interactive}
          className="rounded-[28px]"
        />
      </div>
    </section>
  );
}
