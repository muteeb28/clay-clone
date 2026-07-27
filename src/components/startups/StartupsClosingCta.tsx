import { ArrowRightIcon } from "@/components/icons";

export function StartupsClosingCta() {
  return (
    <section
      className="relative overflow-hidden bg-[rgb(240,248,255)] bg-cover bg-top px-4 pb-10 pt-20 text-center"
      style={{ backgroundImage: 'url("/images/clay.com/startups/closing-cta-bg.webp")' }}
    >
      <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-black sm:text-[42px]">
        Turn your growth ideas into reality today
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
        >
          Start building for free
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-xl border border-black bg-transparent px-5 py-2.5 text-[15px] font-medium text-black"
        >
          Get a demo
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="mt-16 h-72 sm:h-96" aria-hidden />
    </section>
  );
}
