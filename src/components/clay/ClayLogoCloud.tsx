import Image from "next/image";
import type { ClayLogoItem } from "@/types/clay";

const LOGOS: ClayLogoItem[] = [
  { name: "Canva", logoSrc: "/images/clay/67903afc623acf3d66322400_Canva-logo.png", caseStudyHref: "#" },
  { name: "Vanta", logoSrc: "/images/clay/66dac292f8c407c51112b18c_img-logo-vanta.svg", caseStudyHref: "#" },
  { name: "OpenAI", logoSrc: "/images/clay/678fe7a447df0819199060e4_OpenAI-logo.svg", caseStudyHref: "#" },
  { name: "HeyGen", logoSrc: "/images/clay/69e791e194e5baa532af9ea6_heygen.png" },
  { name: "Lovable", logoSrc: "/images/clay/69a7514da5829a662bfc902b_lovable-logoblack.svg" },
  { name: "Supabase", logoSrc: "/images/clay/69e791e1bca997afe1034de8_supabase.png" },
  { name: "ElevenLabs", logoSrc: "/images/clay/69c5d96ad89e43b846dc6845_ElevenLabs.svg", caseStudyHref: "#" },
  { name: "Cursor", logoSrc: "/images/clay/67904cde46ba4240d5c4d49a_cursor-logo.svg" },
  { name: "Anthropic", logoSrc: "/images/clay/66dacb4608a223faada2fd6f_img-logo-anthropic.svg", caseStudyHref: "#" },
  { name: "Stripe", logoSrc: "/images/clay/699369208d74b23d144d64dc_stripe-logo.svg" },
];

interface ClayLogoCloudProps {
  label?: string;
  logos?: ClayLogoItem[];
  columnsClassName?: string;
}

export function ClayLogoCloud({
  label = "POWERING THE GROWTH MOTIONS OF THE FASTEST-GROWING STARTUPS ON EARTH",
  logos = LOGOS,
  columnsClassName = "grid-cols-3 sm:grid-cols-4 lg:grid-cols-5",
}: ClayLogoCloudProps) {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8">
      <p className="font-clay-mono text-center text-xs font-bold tracking-[0.1em] text-black">
        {label}
      </p>
      <div className={`mt-10 grid items-center justify-items-center gap-x-6 gap-y-8 ${columnsClassName}`}>
        {logos.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center gap-2">
            {logo.logoSrc ? (
              <Image
                src={logo.logoSrc}
                alt={logo.name}
                width={120}
                height={32}
                className="h-6 w-auto object-contain grayscale-0 sm:h-7"
              />
            ) : (
              <span className={logo.textClassName ?? "text-lg font-semibold text-black/80"}>
                {logo.logoText ?? logo.name}
              </span>
            )}
            {logo.badge && (
              <span className="rounded-full bg-[rgb(238,233,223)] px-2 py-0.5 text-[10px] font-medium text-black/70">
                {logo.badge}
              </span>
            )}
            {logo.caseStudyHref && (
              <a href={logo.caseStudyHref} className="text-xs text-[rgb(56,89,249)] underline">
                Case study
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
