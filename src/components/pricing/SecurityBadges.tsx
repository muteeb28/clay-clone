import Image from "next/image";
import { SECURITY_BADGES } from "@/data/pricing-data";

export function SecurityBadges() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-20 pt-8 text-center sm:px-8">
      <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-black sm:text-5xl">
        Backed by enterprise-grade security and scale
      </h2>
      <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {SECURITY_BADGES.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center">
            <Image src={badge.icon} alt={badge.label} width={140} height={140} className="h-28 w-28 object-contain sm:h-36 sm:w-36" />
            <p className="mt-4 text-base font-semibold text-black">{badge.label}</p>
            <p className="mt-2 text-sm text-neutral-500">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
