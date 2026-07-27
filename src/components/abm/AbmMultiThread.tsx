import { ArrowRightIcon } from "@/components/icons";
import { OrbitDiagram } from "./OrbitDiagram";
import { MULTI_THREAD_NODES } from "@/data/abm-data";

export function AbmMultiThread() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8">
      <div className="grid grid-cols-1 gap-8 rounded-3xl bg-neutral-50 p-6 lg:grid-cols-2 lg:p-10">
        <OrbitDiagram nodes={MULTI_THREAD_NODES} />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-black sm:text-[42px]">
            Multi-thread during sales process
          </h2>
          <p className="mt-4 max-w-md text-base text-neutral-600">
            Keep the momentum going once accounts enter the sales process. Multi-thread into the
            buying committee with follow-ups powered by Gong summaries. Use new hire tracking to
            alert sales when key personas join mid-eval. Generate pre-call briefs so reps walk in
            prepared.
          </p>
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
