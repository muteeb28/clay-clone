import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { LivestreamCard } from "@/types/livestreams";

interface LivestreamsHeroProps {
  /** The featured "Upcoming live" card — e.g. LIVESTREAM_ROWS[0].cards[0]. */
  card: LivestreamCard;
}

export function LivestreamsHero({ card }: LivestreamsHeroProps) {
  const href = `/livestreams/${card.slug}`;

  return (
    <section className="bg-white px-6 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-40 lg:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-col items-start lg:w-1/2">
          <span className="mb-6 inline-block w-fit rounded-full border border-[#85817A] bg-white px-3.5 py-[7px] text-xs font-normal text-black">
            Streaming weekly
          </span>
          <h1 className="font-heading text-[40px] font-medium leading-none tracking-[-0.03em] text-black md:text-[56px] lg:text-[72px]">
            GTM livestreams
          </h1>
          <p className="mt-6 max-w-[590px] text-base leading-6 font-normal text-black">
            Clay livestreams are live walkthroughs of real workflows, with
            space to ask questions as we go. All times are ET.
          </p>
        </div>

        <Link
          href={href}
          className="block w-full overflow-hidden rounded-[30px] lg:w-1/2"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={1424}
            height={801}
            className="h-auto w-full object-cover"
            priority
          />
        </Link>
      </div>

      <div className="mt-10 flex justify-center lg:mt-14">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-base font-medium leading-6 tracking-[-0.16px] text-white transition-opacity hover:opacity-85"
        >
          Register for upcoming livestream
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export default LivestreamsHero;
