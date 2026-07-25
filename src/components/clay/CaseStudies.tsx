import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

interface CaseStudy {
  thumbnail: string;
  caption: string;
  cta: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    thumbnail: "/images/clay.com/resources/hex-thumb.avif",
    caption: "How Hex increased inbound win-rate 50% using Clay",
    cta: "Read case study",
    href: "#",
  },
  {
    thumbnail: "/images/clay.com/resources/verkada-thumb.avif",
    caption:
      "How Verkada GTM team expanded in 28 European countries using Clay",
    cta: "Learn more about GTM engineering",
    href: "#",
  },
];

export function CaseStudies() {
  return (
    <section className="rounded-t-none rounded-b-[40px] bg-clay-infra-bg px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-[32px] font-medium text-black md:text-[48px]">
          Hear from the teams that grow with Clay
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.caption}
              href={study.href}
              className="group relative block aspect-video overflow-hidden rounded-3xl"
            >
              <Image
                src={study.thumbnail}
                alt={study.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white transition-colors group-hover:bg-black/60">
                  <PlayIcon className="ml-0.5 h-6 w-6" fill="currentColor" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[18px] font-medium leading-snug text-white">
                  {study.caption}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-white underline-offset-4 group-hover:underline">
                  {study.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
