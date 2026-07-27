import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const CARDS = [
  {
    bg: "rgb(238,246,115)",
    icon: "/images/clay.com/startups/talent-hub-icon.webp",
    heading: "GTME Talent Hub",
    description: "Find fulltime and fractional GTM support for your startup",
    ctaLabel: "Explore candidates",
  },
  {
    bg: "rgb(190,223,253)",
    icon: "/images/clay.com/startups/job-board-icon.webp",
    heading: "GTM Job Board",
    description: "Search open GTM roles at leading startups and post your own",
    ctaLabel: "View and add open roles",
  },
];

export function TalentJobs() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <h2 className="text-center text-3xl font-semibold text-black sm:text-[42px]">
        Shape your GTM team with Clay
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {CARDS.map((card) => (
          <div key={card.heading} className="rounded-3xl p-8" style={{ backgroundColor: card.bg }}>
            <Image src={card.icon} alt="" width={48} height={48} className="h-12 w-12 rounded-xl object-cover" />
            <h3 className="mt-6 text-2xl font-semibold text-black">{card.heading}</h3>
            <p className="mt-2 text-[15px] text-black/70">{card.description}</p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-[15px] font-medium text-white"
            >
              {card.ctaLabel}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
