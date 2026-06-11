"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { TREATMENTS, type TreatmentCategory } from "@/lib/treatments";
import { CONCERNS } from "@/lib/concerns";
import { cn } from "@/lib/utils";

const CATEGORIES: { key: TreatmentCategory; title: string }[] = [
  { key: "skin", title: "Skin" },
  { key: "laser", title: "Laser" },
  { key: "brows", title: "Brows & Lashes" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileConcernsOpen, setMobileConcernsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [concernsOpen, setConcernsOpen] = useState(false);

  useEffect(() => {
    if (!treatmentsOpen && !concernsOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setTreatmentsOpen(false);
        setConcernsOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [treatmentsOpen, concernsOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
    setMobileConcernsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80 border-b border-hairline">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label={SITE.fullName}
          onClick={closeMobile}
          className="inline-flex items-center"
        >
          <Image
            src="/images/logo/header.png"
            alt={SITE.fullName}
            width={250}
            height={74}
            priority
            className="h-11 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Primary"
        >
          <Link
            href="/about"
            className="text-sm font-medium tracking-wide hover:underline underline-offset-8 decoration-1"
          >
            About
          </Link>

          {/* Treatments dropdown */}
          <div
            className="group/menu relative h-16 md:h-20 flex items-center"
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={treatmentsOpen}
              onClick={() => setTreatmentsOpen((v) => !v)}
              onMouseEnter={() => {
                setTreatmentsOpen(true);
                setConcernsOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium tracking-wide hover:underline underline-offset-8 decoration-1 cursor-pointer"
            >
              Treatments
              <ChevronDown
                aria-hidden
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  "group-hover/menu:rotate-180",
                  treatmentsOpen && "rotate-180"
                )}
              />
            </button>

            <div
              role="region"
              aria-label="Treatments menu"
              className={cn(
                "invisible opacity-0 pointer-events-none",
                "group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto",
                treatmentsOpen &&
                  "!visible !opacity-100 !pointer-events-auto",
                "absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[80rem]",
                "transition-opacity duration-200 ease-out"
              )}
            >
              <div className="bg-paper border-b border-hairline shadow-[0_12px_32px_-16px_rgba(0,0,0,0.10)]">
                <div className="grid grid-cols-12 gap-8 px-10 py-12">
                  <div className="col-span-3">
                    <p className="text-eyebrow text-muted-ink mb-4">browse</p>
                    <h3 className="text-h3 max-w-[12ch]">
                      Our full menu of treatments.
                    </h3>
                    <Link
                      href="/treatment-services"
                      onClick={() => setTreatmentsOpen(false)}
                      className="inline-block mt-6 text-sm font-medium underline underline-offset-8 decoration-1"
                    >
                      View all
                    </Link>
                  </div>

                  {CATEGORIES.map((cat) => {
                    const items = TREATMENTS.filter(
                      (t) => t.category === cat.key && !t.hideInHeader
                    );
                    if (items.length === 0) return null;
                    return (
                      <div key={cat.key} className="col-span-3">
                        <p className="text-eyebrow text-muted-ink mb-4">
                          {cat.title}
                        </p>
                        <ul className="space-y-3">
                          {items.map((t) => (
                            <li key={t.slug}>
                              <Link
                                href={t.slug}
                                onClick={() => setTreatmentsOpen(false)}
                                className="text-sm hover:underline underline-offset-4 decoration-1 inline-flex items-baseline gap-2"
                              >
                                {t.name}
                                {t.isNew && (
                                  <span className="text-[10px] tracking-[0.18em] uppercase text-ink border border-ink px-1.5 py-0.5">
                                    New
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Skin Concerns dropdown */}
          <div
            className="group/concerns relative h-16 md:h-20 flex items-center"
            onMouseLeave={() => setConcernsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={concernsOpen}
              onClick={() => setConcernsOpen((v) => !v)}
              onMouseEnter={() => {
                setConcernsOpen(true);
                setTreatmentsOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium tracking-wide hover:underline underline-offset-8 decoration-1 cursor-pointer"
            >
              Skin Concerns
              <ChevronDown
                aria-hidden
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  "group-hover/concerns:rotate-180",
                  concernsOpen && "rotate-180"
                )}
              />
            </button>

            <div
              role="region"
              aria-label="Skin concerns menu"
              className={cn(
                "invisible opacity-0 pointer-events-none",
                "group-hover/concerns:visible group-hover/concerns:opacity-100 group-hover/concerns:pointer-events-auto",
                concernsOpen &&
                  "!visible !opacity-100 !pointer-events-auto",
                "absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[64rem]",
                "transition-opacity duration-200 ease-out"
              )}
            >
              <div className="bg-paper border-b border-hairline shadow-[0_12px_32px_-16px_rgba(0,0,0,0.10)]">
                <div className="grid grid-cols-12 gap-8 px-10 py-12">
                  <div className="col-span-4">
                    <p className="text-eyebrow text-muted-ink mb-4">
                      browse
                    </p>
                    <h3 className="text-h3 max-w-[14ch]">
                      Explore by skin concern.
                    </h3>
                  </div>
                  {[CONCERNS.slice(0, 3), CONCERNS.slice(3)].map((col, i) => (
                    <div key={i} className="col-span-4">
                      <ul className="space-y-3">
                        {col.map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={c.slug}
                              onClick={() => setConcernsOpen(false)}
                              className="block group"
                            >
                              <p className="text-sm font-medium group-hover:underline underline-offset-4 decoration-1">
                                {c.name}
                              </p>
                              <p className="text-xs text-muted-ink mt-1">
                                {c.tagline}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium tracking-wide hover:underline underline-offset-8 decoration-1"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:gap-4">
          {/* Phone, desktop: icon + number */}
          <a
            href={`tel:${SITE.phoneIntl}`}
            aria-label={`Call ${SITE.phone}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:underline underline-offset-8 decoration-1"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>

          {/* Phone, mobile: icon only */}
          <a
            href={`tel:${SITE.phoneIntl}`}
            aria-label={`Call ${SITE.phone}`}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>

          <a
            href={SITE.booking}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-ink text-paper text-xs font-medium tracking-wider uppercase hover:bg-paper hover:text-ink ring-1 ring-ink transition-colors duration-200"
          >
            Book
          </a>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-hairline overflow-hidden transition-[max-height] duration-300 ease-out",
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        )}
      >
        <div className="container-site py-6 flex flex-col gap-5">
          <Link
            href="/about"
            onClick={closeMobile}
            className="text-h3 leading-none"
          >
            About
          </Link>

          {/* Treatments accordion */}
          <div className="border-t border-hairline pt-5">
            <div className="flex items-center justify-between">
              <Link
                href="/treatment-services"
                onClick={closeMobile}
                className="text-h3 leading-none"
              >
                Treatments
              </Link>
              <button
                type="button"
                aria-expanded={mobileTreatmentsOpen}
                aria-label="Toggle treatments list"
                onClick={() => setMobileTreatmentsOpen((v) => !v)}
                className="p-2 -m-2"
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileTreatmentsOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-300 ease-out",
                mobileTreatmentsOpen ? "max-h-[600px]" : "max-h-0"
              )}
            >
              <div className="pt-5 space-y-5">
                {CATEGORIES.map((cat) => {
                  const items = TREATMENTS.filter(
                    (t) => t.category === cat.key && !t.hideInHeader
                  );
                  if (items.length === 0) return null;
                  return (
                    <div key={cat.key}>
                      <p className="text-eyebrow text-muted-ink mb-3">
                        {cat.title}
                      </p>
                      <ul className="space-y-3">
                        {items.map((t) => (
                          <li key={t.slug}>
                            <Link
                              href={t.slug}
                              onClick={closeMobile}
                              className="text-base inline-flex items-baseline gap-2"
                            >
                              {t.name}
                              {t.isNew && (
                                <span className="text-[10px] tracking-[0.18em] uppercase text-ink border border-ink px-1.5 py-0.5">
                                  New
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skin Concerns accordion */}
          <div className="border-t border-hairline pt-5">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileConcernsOpen((v) => !v)}
                className="text-h3 leading-none text-left"
                aria-expanded={mobileConcernsOpen}
                aria-label="Toggle skin concerns list"
              >
                Skin Concerns
              </button>
              <button
                type="button"
                aria-expanded={mobileConcernsOpen}
                aria-label="Toggle skin concerns list"
                onClick={() => setMobileConcernsOpen((v) => !v)}
                className="p-2 -m-2"
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    mobileConcernsOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-300 ease-out",
                mobileConcernsOpen ? "max-h-[600px]" : "max-h-0"
              )}
            >
              <ul className="pt-5 space-y-3">
                {CONCERNS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={c.slug}
                      onClick={closeMobile}
                      className="text-base"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeMobile}
            className="text-h3 leading-none border-t border-hairline pt-5"
          >
            Contact
          </Link>

          <a
            href={SITE.booking}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center h-12 px-8 rounded-full bg-ink text-paper text-xs font-medium tracking-wider uppercase"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </header>
  );
}
