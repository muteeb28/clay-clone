import { ArrowRightIcon } from "@/components/icons";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden rounded-t-[48px] bg-clay-hero-green">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(120% 90% at 15% 110%, #145c45 0%, transparent 60%)",
            "radial-gradient(100% 80% at 85% 115%, #0a2e23 0%, transparent 55%)",
            "radial-gradient(140% 100% at 50% 130%, #1a6b50 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-12 text-center sm:px-8 md:gap-8 md:py-24 lg:py-32">
        <h2 className="font-heading text-[32px] leading-[1.1] font-[500] tracking-[-0.02em] text-[rgb(254,253,251)] md:text-5xl lg:text-6xl">
          Turn your growth ideas into reality today
        </h2>

        <p className="max-w-lg text-base leading-snug font-normal text-[rgb(254,253,251)]/85 md:text-lg">
          Start for free today. No credit card required.
        </p>

        <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-3">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Start free trial
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Get a demo
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
