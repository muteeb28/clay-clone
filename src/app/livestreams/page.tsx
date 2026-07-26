"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/clay/Header";
import { Footer } from "@/components/clay/Footer";
import { LivestreamsHero } from "@/components/livestreams/LivestreamsHero";
import { FilterPills } from "@/components/livestreams/FilterPills";
import { LivestreamRow } from "@/components/livestreams/LivestreamRow";
import { LivestreamCard } from "@/components/livestreams/LivestreamCard";
import { StatMarqueeCta } from "@/components/livestreams/StatMarqueeCta";
import { LIVESTREAM_ROWS, FILTER_PILLS } from "@/data/livestreams-data";

export default function LivestreamsPage() {
  const [activePill, setActivePill] = useState<string>(FILTER_PILLS[0]);

  const filteredCards = useMemo(() => {
    if (activePill === "All") return null;
    const pillLower = activePill.toLowerCase();
    return LIVESTREAM_ROWS.flatMap((row) =>
      row.cards.filter(
        (card) =>
          row.title.toLowerCase() === pillLower ||
          card.tags?.some((tag) => tag.toLowerCase() === pillLower)
      )
    );
  }, [activePill]);

  return (
    <>
      <Header />
      <main className="bg-white">
        <LivestreamsHero card={LIVESTREAM_ROWS[0].cards[0]} />

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <FilterPills
            pills={FILTER_PILLS}
            active={activePill}
            onSelect={setActivePill}
          />

          <div className="mt-12">
            {filteredCards === null ? (
              <div className="flex flex-col gap-16">
                {LIVESTREAM_ROWS.map((row) => (
                  <LivestreamRow key={row.title} row={row} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCards.map((card) => (
                  <LivestreamCard key={card.slug} card={card} />
                ))}
              </div>
            )}
          </div>
        </section>

        <StatMarqueeCta />
      </main>
      <Footer />
    </>
  );
}
