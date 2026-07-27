import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { STARTUPS_FEATURE_CARDS } from "@/data/startups-data";

export function GtmGrid() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <h2 className="text-center text-3xl font-semibold text-black sm:text-[42px]">
        Your <span className="text-[rgb(56,89,249)]">GTM engine</span> from Day Zero
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-base text-neutral-600 sm:text-lg">
        Clay scales with you, supporting startup teams of one to one hundred to one thousand and
        beyond
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
        {STARTUPS_FEATURE_CARDS.map((card) => (
          <div key={card.heading}>
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black sm:text-2xl">{card.heading}</h3>
            <p className="mt-3 text-[15px] text-neutral-600">{card.body}</p>
            {card.ctaVariant === "solid" ? (
              <a
                href="#"
                className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-[15px] font-medium text-white"
              >
                {card.ctaLabel}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <a href="#" className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-black">
                {card.ctaLabel}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
