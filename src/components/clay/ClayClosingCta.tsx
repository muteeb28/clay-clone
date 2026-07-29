import { ArrowRight } from "lucide-react";

interface ClayClosingCtaProps {
  subtext?: string;
}

export function ClayClosingCta({ subtext }: ClayClosingCtaProps) {
  return (
    <section
      className="relative overflow-hidden bg-[rgb(240,248,255)] px-4 pt-20 pb-10 text-center bg-cover bg-top"
      style={{ backgroundImage: 'url("/images/clay/6a26fff108a74d8a55ddab89_Footer-Still-(1)-p-1600.avif")' }}
    >
      <h2
        className="mx-auto max-w-2xl"
        style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 2.625rem)", fontWeight: 600, color: "#000" }}
      >
        Turn your growth ideas into reality today
      </h2>
      {subtext && <p className="mt-4 text-base text-[rgb(85,83,78)]">{subtext}</p>}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          className="clay-arrow-btn inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
        >
          Start building for free
          <ArrowRight className="clay-arrow-icon h-4 w-4" />
        </a>
        <a
          href="#"
          className="clay-arrow-btn inline-flex items-center gap-2 rounded-xl border border-black bg-transparent px-5 py-2.5 text-[15px] font-medium text-black"
        >
          Get a demo
          <ArrowRight className="clay-arrow-icon h-4 w-4" />
        </a>
      </div>
      <div className="mt-16 h-72 sm:h-96" aria-hidden />
    </section>
  );
}
