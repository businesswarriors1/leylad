import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { TREATMENTS } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Skin Treatments in Point Cook, Built Around You",
  description:
    "Specialist skin treatments in Point Cook for pigmentation, acne and ageing skin, tailored to what your skin needs. Book a skin consultation today.",
};

const FEATURED_SKIN_TREATMENTS = [
  "/hifu-treatment-page",
  "/procell-microchanneling",
  "/q-switch-laser",
  "/microneedling-treatment",
  "/sqt-bio-microneedling-treatment",
  "/plasma-fibroblast",
];

const CONCERNS = [
  {
    title: "Pigmentation",
    body: "Sun damage, melasma, age spots and uneven tone, addressed at the source, not masked.",
    slug: "/pigmentation",
  },
  {
    title: "Acne & scarring",
    body: "Active breakouts and the marks they leave behind, combination protocols built around your skin.",
    slug: "/acne-scarring",
  },
  {
    title: "Anti-ageing",
    body: "Loss of firmness, fine lines, crepiness, collagen-stimulating treatments that work with your skin biology.",
    slug: "/anti-ageing",
  },
  {
    title: "Texture & tone",
    body: "Rough texture, large pores, dullness, resurfacing and rejuvenating without harsh downtime.",
    slug: "/texture-tone",
  },
];

export default function SkinTreatmentsPage() {
  const featured = FEATURED_SKIN_TREATMENTS.map(
    (slug) => TREATMENTS.find((t) => t.slug === slug)!
  ).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-site pt-12 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <Eyebrow>Skin</Eyebrow>
            <h1 className="text-display">
              Skin treatments,
              <br />
              built around yours.
            </h1>
            <p className="text-body max-w-xl">
              From pigmentation and acne to anti-ageing and skin rejuvenation,
              specialist treatments matched to what your skin actually needs,
              not a one-size protocol.
            </p>
            <BookButton>Book a skin consultation</BookButton>
          </div>
          <div className="lg:col-span-5">
            <SkinPhoto
              src="/images/home/hero.jpg"
              ratio="portrait"
              alt="Editorial close-up of skin in soft natural light"
              priority
            />
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32">
          <div className="space-y-6 mb-16">
            <Eyebrow>What we treat</Eyebrow>
            <h2 className="text-h1">
              The full range
              <br />
              <span className="text-muted-ink">of skin concerns.</span>
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {CONCERNS.map((c) => (
              <li key={c.title}>
                <Link
                  href={c.slug}
                  className="group block border-t border-hairline pt-6 hover:border-ink transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-h3">{c.title}</h3>
                      <p className="text-sm text-muted-ink leading-relaxed max-w-md">
                        {c.body}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 mt-2 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured skin treatments */}
      <section>
        <div className="container-site py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-6">
              <Eyebrow>The treatments</Eyebrow>
              <h2 className="text-h1 max-w-2xl">Our skin menu.</h2>
            </div>
            <Link
              href="/treatment-services"
              className="text-sm font-medium tracking-wide underline underline-offset-8 decoration-1"
            >
              View full menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featured.map((t) => (
              <Link key={t.slug} href={t.slug} className="group block">
                <SkinPhoto
                  src={t.tileImage ?? t.image}
                  ratio="portrait"
                  alt={`${t.name} treatment`}
                  objectPosition={t.objectPosition}
                  className="mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3">{t.name}</h3>
                  {t.isNew && (
                    <span className="text-eyebrow text-ink">New</span>
                  )}
                </div>
                <p className="text-sm text-muted-ink mt-2 leading-relaxed">
                  {t.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke facials note */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 space-y-6">
          <Eyebrow>Bespoke facials</Eyebrow>
          <h2 className="text-h1">
            Tailored,
            <br />
            not templated.
          </h2>
          <p className="text-body max-w-2xl">
            Every facial we deliver is built around your skin on the day,
            not a fixed protocol. We use clinical-grade product lines like
            Medik8 and Calecim, paired with treatment techniques matched to
            your concern: clarity, glow, calming inflammation, deep
            hydration, or barrier repair.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Ready</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Book your skin consultation.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            We&apos;ll assess your skin and walk you through the right plan.
            No pressure, no upsell.
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
