import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { AbmFeatureRow as AbmFeatureRowData } from "@/types/abm";

interface AbmFeatureRowProps {
  data: AbmFeatureRowData;
  reverse?: boolean;
}

export function AbmFeatureRow({ data, reverse }: AbmFeatureRowProps) {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8">
      <div className="grid grid-cols-1 gap-8 rounded-3xl bg-neutral-50 p-6 lg:grid-cols-2 lg:p-10">
        <div className={cn("relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100", reverse && "lg:order-2")}>
          <Image src={data.image} alt={data.imageAlt} fill className="object-cover" />
        </div>
        <div className={cn("flex flex-col justify-center", reverse && "lg:order-1")}>
          <h2 className="text-3xl font-semibold text-black sm:text-[42px]">{data.heading}</h2>
          <p className="mt-4 max-w-md text-base text-neutral-600">{data.body}</p>
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
          >
            Get a demo
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
