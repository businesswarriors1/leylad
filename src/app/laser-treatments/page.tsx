import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { SkinVideo } from "@/components/skin-video";

export const metadata: Metadata = {
  title: "Laser Skin Treatments Point Cook, Melbourne",
  description:
    "Specialist laser skin treatments in Point Cook for pigmentation, sun damage and renewal. Calibrated by an expert clinician. Book your consultation today.",
};

const LASER_TREATMENTS = [
  {
    slug: "/q-switch-laser",
    name: "Q-Switch Laser",
    tagline:
      "Nanosecond pulse laser for pigmentation, sun damage, age spots and skin renewal, without downtime.",
    bestFor: ["Pigmentation", "Sun spots", "Skin renewal"],
  },
];

export default function LaserPage() {
  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <Eyebrow>Laser</Eyebrow>
            <h1 className="text-display">
              Laser, calibrated
              <br />
              for your skin.
            </h1>
            <p className="text-body max-w-xl">
              Targeted laser treatments for pigmentation, sun damage and skin
              renewal, delivered by a specialist clinician, calibrated to
              your skin type and goals.
            </p>
            <BookButton>Book a consultation</BookButton>
          </div>
          <div className="lg:col-span-5">
            <SkinVideo
              src="/videos/laser.mp4"
              poster="/videos/laser.jpg"
              ratio="portrait"
              ariaLabel="Q-Switch laser treatment in motion"
              label="Q-Switch"
            />
          </div>
        </div>
      </section>

      {/* Why laser */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 space-y-6">
          <Eyebrow>Why laser</Eyebrow>
          <h2 className="text-h1">
            Specific energy.
            <br />
            <span className="text-muted-ink">Specific results.</span>
          </h2>
          <p className="text-body max-w-2xl">
            Laser works because it delivers a very specific wavelength of
            light to a very specific target, pigment, damaged cells, or
            upper layers of skin, without harming the tissue around it.
            Done well, it produces results that topicals alone can&apos;t
            match.
          </p>
          <p className="text-body max-w-2xl">
            Done badly, it leaves marks. Which is why proper assessment,
            the right device, and an experienced clinician matter more than
            anything else.
          </p>
          <p className="text-body max-w-2xl">
            The same technology also powers our laser tone facial, a gentle,
            low-downtime treatment that evens out pigmentation and tone and
            leaves the skin clearer and more radiant, a favourite before an
            event.
          </p>
        </div>
      </section>

      {/* Our lasers */}
      <section>
        <div className="container-site py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-6">
              <Eyebrow>Our lasers</Eyebrow>
              <h2 className="text-h1 max-w-2xl">What we use, and why.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {LASER_TREATMENTS.map((t) => (
              <Link key={t.slug} href={t.slug} className="group block">
                <SkinPhoto
                  src="/images/treatments/laser.jpg"
                  ratio="landscape"
                  alt={`${t.name}`}
                  className="mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h2">{t.name}</h3>
                  <ArrowUpRight className="h-5 w-5 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-body text-muted-ink mt-4 leading-relaxed max-w-xl">
                  {t.tagline}
                </p>
                <ul className="flex flex-wrap gap-2 mt-5">
                  {t.bestFor.map((b) => (
                    <li
                      key={b}
                      className="text-eyebrow border border-hairline rounded-full px-3 py-1.5"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32">
          <div className="space-y-6 mb-16">
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="text-h1">Three steps.</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                step: "Skin assessment",
                body: "We start with a proper consultation, your skin history, goals, and whether laser is the right tool for the job.",
              },
              {
                step: "Tailored protocol",
                body: "Settings calibrated to your skin type and concern. Most pigmentation cases need 3-6 sessions, spaced 2-4 weeks apart.",
              },
              {
                step: "Recovery & results",
                body: "Most lasers we use have minimal downtime, light redness for a few hours. Pigment lifts and clears over the following weeks.",
              },
            ].map((p, i) => (
              <li key={i} className="space-y-4">
                <p className="font-display text-5xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-h3">{p.step}</h3>
                <p className="text-sm text-muted-ink leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Ready</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Book a laser consultation.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            We&apos;ll assess your skin and tell you whether laser is right
            for what you&apos;re trying to treat. No pressure.
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
