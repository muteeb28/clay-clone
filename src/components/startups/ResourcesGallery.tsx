import Image from "next/image";
import { STARTUPS_GALLERY } from "@/data/startups-data";

export function ResourcesGallery() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <h2 className="text-3xl font-semibold text-black sm:text-[42px]">
        Resources to mold your GTM journey
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STARTUPS_GALLERY.map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${
              i === 2 ? "col-span-2 aspect-[2/1]" : "aspect-square"
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
