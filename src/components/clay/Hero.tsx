import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[48px] bg-clay-hero-green">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/clay.com/hero/hero-poster.avif"
          className="h-full w-full object-cover"
        >
          <source src="/videos/clay.com/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col px-6 pt-[52vw] pb-16 sm:px-8 md:pt-[36vw] lg:pt-[420px] lg:pb-24">
        <a
          href="#"
          className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold tracking-wide text-lime-300 uppercase"
        >
          Latest launch: Account research agents
          <ArrowRightIcon className="size-3.5" />
        </a>

        <div className="mt-4 flex flex-col gap-8 md:mt-6 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col gap-8 md:gap-10">
            <h1 className="max-w-xl font-heading text-5xl leading-[1.05] font-[575] tracking-[-0.03em] text-[rgb(254,253,251)] md:text-7xl lg:text-[88px] lg:leading-[88px] lg:tracking-[-3.52px]">
              Build systems to grow revenue
            </h1>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Start free trial
              <ArrowRightIcon className="size-4" />
            </a>
          </div>

          <p className="max-w-[320px] text-lg leading-snug font-normal text-[rgb(254,253,251)] md:text-xl">
            Infrastructure to get any data, run agentic workflows, and launch
            GTM plays.
          </p>
        </div>
      </div>
    </section>
  );
}
