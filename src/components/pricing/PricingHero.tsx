import Image from "next/image";
import { PRICING_LOGOS } from "@/data/pricing-data";

export function PricingHero() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-8 pt-12 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <h1 className="text-4xl font-semibold leading-[1.05] text-black sm:text-5xl">
          Flexible pricing that fits you
        </h1>

        <div className="w-full overflow-hidden lg:w-auto lg:max-w-[520px]">
          <div className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, cycleIndex) =>
              PRICING_LOGOS.map((logo) => (
                <Image
                  key={`${cycleIndex}-${logo.alt}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={32}
                  className="h-6 w-auto shrink-0 object-contain grayscale"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
