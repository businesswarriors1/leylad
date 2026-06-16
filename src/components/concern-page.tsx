import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { type Concern } from "@/lib/concerns";
import { TREATMENTS } from "@/lib/treatments";

export function ConcernPage({ concern }: { concern: Concern }) {
  const treatments = concern.recommendedTreatments
    .map((slug) => TREATMENTS.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-site pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Eyebrow>Skin concern</Eyebrow>
              <h1 className="text-display">{concern.name}.</h1>
              <p className="text-body max-w-xl">{concern.intro}</p>
              <BookButton>Book a consultation</BookButton>
            </div>
            <div className="lg:col-span-5">
              <SkinPhoto
                src={concern.image ?? "/images/home/hero.jpg"}
                ratio="portrait"
                alt={`${concern.name} skin concern`}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32">
          <Eyebrow>The concern</Eyebrow>
          <h2 className="text-h1 mt-6">What is it.</h2>
          <p className="text-body max-w-2xl mt-8">{concern.description}</p>
        </div>
      </section>

      {/* Causes */}
      <section>
        <div className="container-site py-24 md:py-32">
          <Eyebrow>Common causes</Eyebrow>
          <h2 className="text-h1 mt-6">What drives it.</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-10 max-w-3xl">
            {concern.causes.map((cause) => (
              <li
                key={cause}
                className="border-t border-hairline py-5 text-h3"
              >
                {cause}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended treatments */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32">
          <Eyebrow>What we recommend</Eyebrow>
          <h2 className="text-h1 mt-6">Treatments for {concern.name.toLowerCase()}.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-12">
            {treatments.map((t) => (
              <Link key={t.slug} href={t.slug} className="group block">
                <SkinPhoto
                  src={t.tileImage ?? t.image}
                  ratio="portrait"
                  alt={`${t.name} treatment`}
                  objectPosition={t.objectPosition}
                  className="mb-5 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3">{t.name}</h3>
                  <ArrowUpRight className="h-4 w-4 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-muted-ink mt-2 leading-relaxed">
                  {t.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Ready</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Book a skin consultation.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            We&apos;ll assess your skin and build a plan around what&apos;s
            actually driving your {concern.name.toLowerCase()}.
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
