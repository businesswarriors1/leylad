import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/microneedling-treatment")!;

export const metadata: Metadata = {
  title: "Microneedling",
  description:
    "Collagen induction microneedling at Leyla D Point Cook — for texture, scarring, fine lines and overall skin renewal. Now with EXO-PDRN Prismatic exosome therapy.",
};

export default function MicroneedlingPage() {
  return (
    <>
      <TreatmentPage
        eyebrow="Skin · Microneedling"
        title="Microneedling."
        intro="Classic collagen-induction therapy — fine micro-channels that trigger your skin&apos;s own repair response, smoothing texture, softening scarring, and rebuilding firmness."
        image={TREATMENT.image}
        gallery={TREATMENT.gallery}
        galleryCaption="Texture, scarring, tone — rebuilt from the inside."
        what="A controlled-needling device creates thousands of microscopic channels in the skin, triggering a wound-healing response that lays down new collagen and elastin. Over a series of sessions, skin becomes firmer, smoother and more even — particularly effective on scarring, fine lines, and pore size."
        bestFor={[
          "Acne scarring",
          "Fine lines",
          "Enlarged pores",
          "Uneven texture",
          "Skin firmness",
        ]}
      />

      {/* Exosome upgrade — EXO-PDRN Prismatic */}
      <section className="border-t border-hairline bg-bone">
        <div className="container-site py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <Eyebrow>Upgrade · Exosomes</Eyebrow>
            <h2 className="text-h1">
              Microneedling
              <br />
              with exosomes.
            </h2>
            <p className="text-body text-muted-ink max-w-md">
              Pair microneedling with EXO-PDRN Prismatic — a next-generation
              regenerative serum infused through the micro-channels created by
              the needling pass.
            </p>
            <div className="pt-2">
              <BookButton>Book the exosome upgrade</BookButton>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-eyebrow text-ink">— EXO-PDRN Prismatic</p>
              <h3 className="text-h2">
                Exosomes &amp; PDRN — the cell&apos;s own signals, delivered
                deeper.
              </h3>
              <p className="text-body text-muted-ink max-w-2xl">
                EXO-PDRN Prismatic combines two of the most studied
                regenerative actives in skin science. Exosomes are
                nano-vesicles that carry growth factors, peptides and
                messenger RNA between cells — essentially the body&apos;s own
                repair instructions. PDRN (polydeoxyribonucleotide) is a salmon-DNA
                derived fragment shown to accelerate tissue repair and stimulate
                fibroblast activity. Delivered through fresh micro-channels,
                they reach the layer where new collagen is built.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-2xl">
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Accelerated recovery</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Redness and downtime are reduced — most clients are
                  socially-presentable within 24-48 hours.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Stronger collagen response</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Growth factors amplify the wound-healing signal already
                  triggered by the needling pass.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Better on scarring</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Particularly suited to acne scarring, where remodelling is
                  the bottleneck — not channel depth.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Calmer, brighter finish</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Skin tends to look more even and luminous in the days
                  after — not just smoother in months.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
