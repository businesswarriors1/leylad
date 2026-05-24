import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";
import { REVIEWS } from "@/lib/reviews";
import { ReviewsCarousel, ReviewsHeader } from "@/components/reviews-carousel";

const SIGNATURE_SLUGS = [
  "/hifu-treatment-page",
  "/facial-treatments",
  "/q-switch-laser",
  "/procell-microchanneling",
  "/plasma-fibroblast",
  "/microneedling-treatment",
];

export default function Home() {
  const signature = SIGNATURE_SLUGS.map(
    (slug) => TREATMENTS.find((t) => t.slug === slug)!
  );

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-site pt-12 md:pt-20 pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <Eyebrow>Beauty and skin clinic Point Cook</Eyebrow>
            <h1 className="text-display">
              Better skin
              <br />
              starts here.
            </h1>
            <p className="text-body max-w-xl">
              Advanced treatments for pigmentation, acne and anti-ageing — built
              around your skin, not a one-size protocol.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <BookButton />
              <Link
                href="/treatment-services"
                className="text-sm font-medium tracking-wide underline underline-offset-8 decoration-1 hover:decoration-2"
              >
                Explore treatments
              </Link>
            </div>
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

      {/* Stat ribbon */}
      <section className="border-y border-hairline bg-paper">
        <div className="container-site py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Stat number={SITE.stats.services} label="Services completed" />
          <Stat number={SITE.stats.reviews} label="Five-star client reviews" />
          <Stat number="100%" label="Tailored treatment plans" />
        </div>
      </section>


      {/* Signature treatments */}
      <section>
        <div className="container-site py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-6">
              <Eyebrow>Signature treatments</Eyebrow>
              <h2 className="text-h1 max-w-2xl">Built on results, not trends.</h2>
            </div>
            <Link
              href="/treatment-services"
              className="text-sm font-medium tracking-wide underline underline-offset-8 decoration-1"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {signature.map((t) => (
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

      {/* Reviews */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 space-y-8">
          <Eyebrow>Client words</Eyebrow>
          <h2 className="text-h1">
            {SITE.stats.reviews} five-star reviews,
            <br />
            <span className="text-muted-ink">and counting.</span>
          </h2>
          <div className="pt-6 flex justify-center">
            <ReviewsHeader rating={5.0} count={SITE.stats.reviews} />
          </div>
          <div className="pt-8">
            <ReviewsCarousel reviews={REVIEWS} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-hairline">
        <div className="container-site py-20 md:py-24 space-y-6">
          <Eyebrow>Premium partners</Eyebrow>
          <h2 className="text-h2 max-w-xl">The product lines we trust.</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center pt-8">
            {["medik8", "calecim", "sqt", "brow-code", "simka"].map((p) => (
              <li
                key={p}
                className="relative aspect-[3/2] flex items-center justify-center"
              >
                <PartnerLogo name={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <p className="font-display text-5xl md:text-6xl leading-none tracking-tight">
        {number}
      </p>
      <p className="text-eyebrow text-muted-ink">{label}</p>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <Image
      src={`/images/partners/${name}.webp`}
      alt={`${name} logo`}
      width={200}
      height={100}
      className="max-h-12 md:max-h-14 w-auto object-contain [filter:grayscale(1)_contrast(1.5)_brightness(0.75)] opacity-100 transition-opacity"
    />
  );
}
