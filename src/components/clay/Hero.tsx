import {
  ArrowRightIcon,
  RadarIcon,
  FileCheckIcon,
  MessageCircleIcon,
  BlocksIcon,
  UserCheckIcon,
  CalendarCheckIcon,
} from "@/components/icons";
import type { ComponentType, CSSProperties, SVGProps } from "react";

type HeroStep = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  meta: string;
  chip: string;
  chipTone: "green" | "neutral" | "filled";
  final?: boolean;
};

const STEPS: HeroStep[] = [
  {
    icon: RadarIcon,
    title: "Discover the right role",
    meta: "Frontend Engineer · surfaced 2 min after posting",
    chip: "94% match",
    chipTone: "green",
  },
  {
    icon: FileCheckIcon,
    title: "Optimize your resume for it",
    meta: "Rewritten against this exact job description",
    chip: "ATS 91",
    chipTone: "neutral",
  },
  {
    icon: MessageCircleIcon,
    title: "Reach a real person",
    meta: "Ananya · HR at the hiring company",
    chip: "Replied",
    chipTone: "green",
  },
  {
    icon: BlocksIcon,
    title: "Prepare hands-on",
    meta: "Interactive drills, not video lectures",
    chip: "Level 4",
    chipTone: "neutral",
  },
  {
    icon: UserCheckIcon,
    title: "Review with your mentor",
    meta: "Mock interview · Thursday, 7pm",
    chip: "Booked",
    chipTone: "neutral",
  },
  {
    icon: CalendarCheckIcon,
    title: "Land the interview",
    meta: "Onsite confirmed for Monday",
    chip: "Scheduled",
    chipTone: "filled",
    final: true,
  },
];

const TRUST_ITEMS = [
  "ATS optimization",
  "Real-time jobs",
  "Referrals",
  "Interactive learning",
  "Mentorship",
];

const CHIP_TONES: Record<HeroStep["chipTone"], string> = {
  green: "bg-[#e6f0ea] text-clay-hero-green",
  neutral: "bg-neutral-100 text-neutral-700",
  filled: "bg-clay-hero-green text-white",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-clay-hero-green">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 pt-12 pb-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-16 lg:pb-36">
        {/* Left — message and actions */}
        <div className="hero-rise">
          <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-lime-300 uppercase">
            The career system built to get you hired
            <ArrowRightIcon className="size-3.5" />
          </p>

          <h1 className="mt-4 max-w-[13ch] font-heading text-[2.6rem] leading-[1.06] font-[575] tracking-[-0.02em] text-balance text-[rgb(254,253,251)] md:text-[3.4rem] lg:text-[3.9rem] lg:leading-[1.04]">
            Everything It Takes to Get Hired.{" "}
            <em className="block text-lime-300">Working Together.</em>
          </h1>

          <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-white/80">
            From finding the right opportunity to building the skills, resume,
            connections, and accountability needed to land it — JobFlix brings
            your entire job search into one connected system.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Optimize My Resume
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore JobFlix
            </a>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] font-medium text-white/70">
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-x-2.5">
                {i > 0 && (
                  <span aria-hidden className="text-white/40">
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </p>
        </div>

        {/* Right — the six connected stages, as product UI */}
        <div
          className="hero-rise mx-auto w-full max-w-[480px] lg:mr-0"
          style={{ "--rise-delay": "0.12s" } as CSSProperties}
        >
          <div className="rounded-2xl bg-white p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:p-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <p className="text-[13px] font-semibold text-neutral-900">
                Your search, running as one system
              </p>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-clay-hero-green uppercase">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-clay-hero-green"
                />
                Live
              </p>
            </div>

            <ol className="relative mt-2">
              {/* Spine connecting every stage */}
              <div
                aria-hidden
                className="absolute top-4 bottom-4 left-4 w-px bg-neutral-200"
              />
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="hero-rise relative flex items-center gap-3.5 py-2.5"
                  style={
                    { "--rise-delay": `${0.2 + i * 0.07}s` } as CSSProperties
                  }
                >
                  <span
                    className={
                      step.final
                        ? "z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-clay-hero-green text-white"
                        : "z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-clay-hero-green"
                    }
                  >
                    <step.icon className="size-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] leading-tight font-semibold text-neutral-900">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-neutral-600">
                      {step.meta}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${CHIP_TONES[step.chipTone]}`}
                  >
                    {step.chip}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
