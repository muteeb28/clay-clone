import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export function AbmDemoCta() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8">
      <div className="rounded-3xl bg-[rgb(11,66,80)] px-6 py-16 text-center sm:px-12">
        <p className="text-xs font-bold tracking-[0.15em] text-white/70">DEMO</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-[42px]">
          Get a walk through of how Clay uses Clay for ABM
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
          Get a tactical overview from Everett, Clay&rsquo;s Head of GTM Engineering, breaking down
          how Clay runs ABM.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
        >
          Watch the demo
          <ArrowRightIcon className="size-4" />
        </a>

        <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl">
          <div className="flex items-center gap-1.5 bg-neutral-900 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex flex-col items-center gap-4 bg-neutral-100 p-8 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2 text-left">
              <div className="h-3 w-3/4 rounded bg-neutral-300" />
              <div className="h-3 w-1/2 rounded bg-neutral-300" />
              <div className="h-3 w-2/3 rounded bg-neutral-300" />
            </div>
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/clay.com/abm/everett-berry.jpg"
                alt="Everett Berry, Head of GTM Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-black shadow">
                Everett Berry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
