import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { TREATMENTS, type TreatmentCategory } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Treatments & services",
  description:
    "Skin treatments, laser, brows and lashes — our full menu of specialist treatments in Point Cook.",
};

const GROUPS: { key: TreatmentCategory; title: string }[] = [
  { key: "skin", title: "Skin" },
  { key: "laser", title: "Laser" },
  { key: "brows", title: "Brows & Lashes" },
];

export default function TreatmentsPage() {
  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-8">
            <Eyebrow>Treatments & services</Eyebrow>
            <h1 className="text-display">Our full menu.</h1>
            <p className="text-body max-w-xl">
              Browse by category, or talk to us about what your skin is asking
              for — we&apos;ll build a plan that makes sense.
            </p>
          </div>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = TREATMENTS.filter(
          (t) => t.category === group.key && !t.inMenuOnly
        );
        if (items.length === 0) return null;
        return (
          <section key={group.key} className="border-t border-hairline">
            <div className="container-site py-20 md:py-24">
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-h2">{group.title}</h2>
                <p className="text-eyebrow text-muted-ink">
                  {items.length} treatment{items.length === 1 ? "" : "s"}
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {items.map((t) => (
                  <li key={t.slug}>
                    <Link href={t.slug} className="group block">
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
                      {t.isNew && (
                        <span className="text-eyebrow text-ink mt-2 inline-block">
                          New
                        </span>
                      )}
                      <p className="text-sm text-muted-ink mt-2 leading-relaxed">
                        {t.tagline}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="bg-bone">
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Not sure where to start?</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Let&apos;s build your plan together.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            Book a consultation — we&apos;ll assess your skin and walk you
            through the right options.
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
