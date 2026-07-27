import { Layers } from "lucide-react";

export function UsageBasedPricing() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-8">
      <div className="rounded-3xl bg-neutral-50 px-6 py-16 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(238,246,115)]">
          <Layers className="size-6 text-black" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-black sm:text-4xl">Usage-based pricing</h2>
        <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-[15px] text-neutral-600">
          <li>
            <span className="font-semibold text-black">Actions</span> measure platform usage:
            enrichment &amp; GTM execution.
          </li>
          <li>
            <span className="font-semibold text-black">Data credits</span> buy data &amp; AI from
            vendors in Clay&rsquo;s marketplace.
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white">
            Learn more in our docs
          </a>
          <a href="#" className="rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white">
            Pricing calculator
          </a>
        </div>
      </div>
    </section>
  );
}
