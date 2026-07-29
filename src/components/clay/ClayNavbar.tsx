"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import type { ClayNavLink } from "@/types/clay";

const NAV_LINKS: ClayNavLink[] = [
  { label: "Product", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
];

export function ClayNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between rounded-b-3xl bg-white px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/clay/6778506d788ebf16fef48551_Clay-primary-logo.avif"
            alt="Clay logo, go to homepage"
            width={100}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-black/80 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label="Search"
            className="flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1.5 text-black/60 hover:border-black/20"
          >
            <span className="text-xs font-medium">⌘</span>
            <span className="text-xs font-medium">K</span>
            <Search className="ml-1 h-3.5 w-3.5" />
          </button>
          <a href="#" className="text-[15px] font-medium text-black/80 hover:text-black">
            Log in
          </a>
          <a
            href="#"
            className="rounded-xl bg-[rgb(243,242,237)] px-4 py-2 text-[15px] font-medium text-black"
          >
            Get a demo
          </a>
          <a
            href="#"
            className="rounded-xl bg-black px-4 py-2 text-[15px] font-medium text-white"
          >
            Start free trial
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#"
            className="rounded-xl bg-[rgb(243,242,237)] px-4 py-2 text-sm font-medium text-black"
          >
            Get a demo
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1240px] rounded-3xl bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-base font-medium text-black">
                {link.label}
              </a>
            ))}
            <a href="#" className="text-base font-medium text-black">
              Log in
            </a>
            <a href="#" className="rounded-xl bg-black px-4 py-2 text-center text-base font-medium text-white">
              Start free trial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
