import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Leyla D is a specialist skin clinic in Point Cook with 3,100+ services completed and 700+ five-star client reviews.",
};

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <Eyebrow>About the clinic</Eyebrow>
            <h1 className="text-display">
              Specialist skin care,
              <br />
              done quietly well.
            </h1>
            <p className="text-body max-w-xl">
              {SITE.fullName} is a specialist skin, body and brow clinic in{" "}
              {SITE.address.suburb}. We focus on what actually moves the needle
              for your skin — advanced facials, peels, microneedling, laser
              and HIFU — paired with honest, no-pressure consultation.
            </p>
          </div>
          <div className="lg:col-span-5">
            <SkinPhoto
              src="/images/home/hero.jpg"
              ratio="portrait"
              alt="Skin in soft natural light"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-hairline">
        <div className="container-site py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Stat number={SITE.stats.services} label="Services completed" />
          <Stat number={SITE.stats.reviews} label="Five-star reviews" />
          <Stat number="100%" label="Tailored treatment plans" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 space-y-8">
          <Eyebrow>Philosophy</Eyebrow>
          <h2 className="text-h1">
            No fluff. No upsell.
            <br />
            <span className="text-muted-ink">Just the right plan.</span>
          </h2>
          <p className="text-body max-w-2xl">
            Every appointment begins with a proper skin assessment. We won&apos;t
            recommend a treatment your skin doesn&apos;t need — and we&apos;ll
            tell you when something simpler would do the job better. Our
            focus is long-term skin health, not the next trend.
          </p>
          <p className="text-body max-w-2xl">
            We treat pigmentation, acne and acne scarring, melasma, rosacea,
            fine lines, sagging skin, sun damage and dark spots — using
            clinically proven modalities and partnering with trusted brands
            like Medik8, Calecim and SQT.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <div className="container-site py-24 md:py-32 space-y-10">
          <div className="space-y-6">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="text-h1">
              Care that earns
              <br />
              the trust.
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-3xl">
            {[
              "Honest skin assessments",
              "Clinically proven modalities",
              "Tailored treatment plans",
              "Long-term skin health",
              "Cleanliness without compromise",
              "Built on trust, since day one",
            ].map((item) => (
              <li
                key={item}
                className="border-t border-hairline py-5 text-h3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Ready</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Book a skin consultation today.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            We&apos;ll assess your skin and walk you through the right plan —
            no pressure, no upsell.
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
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
