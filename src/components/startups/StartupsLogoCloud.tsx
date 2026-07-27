import Image from "next/image";
import { STARTUPS_LOGOS } from "@/data/startups-data";

export function StartupsLogoCloud() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8">
      <p className="text-center font-mono text-xs font-bold tracking-[0.1em] text-black">
        POWERING THE GROWTH MOTIONS OF THE FASTEST-GROWING STARTUPS ON EARTH
      </p>
      <div className="mt-10 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-5">
        {STARTUPS_LOGOS.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={32}
            className="h-6 w-auto object-contain sm:h-7"
          />
        ))}
      </div>
    </section>
  );
}
