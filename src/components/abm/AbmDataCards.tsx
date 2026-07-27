import Image from "next/image";
import { ABM_DATA_CARDS } from "@/data/abm-data";

export function AbmDataCards() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <h2 className="text-3xl font-semibold text-black sm:text-[42px]">
        Great ABM starts with great data
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {ABM_DATA_CARDS.map((card) => (
          <div key={card.heading}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
              <Image src={card.image} alt={card.heading} fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">{card.heading}</h3>
            <p className="mt-3 text-[15px] text-neutral-600">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
