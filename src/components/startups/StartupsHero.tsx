import { ArrowRightIcon } from "@/components/icons";

export function StartupsHero() {
  return (
    <section className="px-4 pt-2 sm:px-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-[rgb(66,157,255)] px-6 py-20 text-center sm:px-10 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 hidden h-64 w-64 rotate-12 sm:block"
        >
          <div className="absolute right-0 top-8 h-32 w-32 rounded-full bg-[rgb(56,89,249)]" />
          <div className="absolute right-16 top-0 h-28 w-28 rounded-full bg-[rgb(190,223,253)]" />
          <div className="absolute right-24 top-24 h-36 w-36 rounded-full bg-[rgb(248,185,227)]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-12 hidden h-56 w-56 sm:block"
        >
          <div className="absolute h-24 w-24 rounded-[40%] bg-[rgb(248,185,227)]" />
          <div className="absolute left-16 top-8 h-24 w-24 rounded-[40%] bg-[rgb(238,246,115)]" />
          <div className="absolute left-8 top-20 h-28 w-28 rotate-45 rounded-[30%] bg-[rgb(120,72,20)]" />
        </div>

        <p className="relative font-mono text-xs font-bold tracking-[0.15em] text-white/90">
          CLAY FOR STARTUPS
        </p>
        <h1 className="relative mx-auto mt-4 max-w-3xl text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[64px] sm:leading-[1.02] md:text-[80px] md:leading-[80px] md:tracking-[-3.2px]">
          Validate your ICP, find PMF faster
        </h1>
        <p className="relative mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">
          Discover your best customers, test messaging, learn what converts, and scale what
          works with Clay
        </p>
        <div className="relative mt-8">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-black bg-white px-5 py-2.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.02]"
          >
            Apply to join Wedge
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
