import type { Metadata } from "next";
import Link from "next/link";
import { TreatmentPage } from "@/components/treatment-page";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/microneedling-treatment")!;

export const metadata: Metadata = {
  title: "Microneedling in Point Cook for Scars & Texture",
  description:
    "Collagen-induction microneedling in Point Cook smooths scars, texture and tone, boosted by a Medik8 exosome upgrade. Book your skin consult today.",
};

export default function MicroneedlingPage() {
  return (
    <>
      <TreatmentPage
        eyebrow="Skin · Microneedling"
        title="Microneedling."
        intro="Classic collagen-induction therapy, fine micro-channels that trigger your skin&apos;s own repair response, smoothing texture, softening scarring, and rebuilding firmness."
        image={TREATMENT.image}
        gallery={TREATMENT.gallery}
        galleryCaption="Texture, scarring, tone, rebuilt from the inside."
        what="A controlled-needling device creates thousands of microscopic channels in the skin, triggering a wound-healing response that lays down new collagen and elastin. Over a series of sessions, skin becomes firmer, smoother and more even, particularly effective on scarring, fine lines, and pore size. The same technique is also used on the scalp: controlled micro-needling stimulates dormant hair follicles and helps active ingredients absorb, a supportive treatment for thinning hair and early hair loss."
        bestFor={[
          "Acne scarring",
          "Fine lines",
          "Enlarged pores",
          "Uneven texture",
          "Skin firmness",
          "Hair loss & thinning (scalp)",
        ]}
      />

      {/* Exosome upgrade, EXO-PDRN Prismatic */}
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
              Pair microneedling with Medik8 Exo-PDRN Prismatic+, a
              next-generation regenerative concentrate infused through the
              micro-channels created by the needling pass. Part of our{" "}
              <Link
                href="/medik8"
                className="underline underline-offset-4 decoration-1 hover:text-ink"
              >
                Medik8
              </Link>{" "}
              professional range.
            </p>
            <div className="pt-2">
              <BookButton>Book the exosome upgrade</BookButton>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-eyebrow text-ink">Medik8 Exo-PDRN Prismatic+</p>
              <h3 className="text-h2">
                Exosomes &amp; PDRN, the cell&apos;s own signals, delivered
                deeper.
              </h3>
              <p className="text-body text-muted-ink max-w-2xl">
                Exo-PDRN Prismatic+ combines two of the most studied
                regenerative actives in skin science. Its Triple Exosome
                Complex packs up to 151 billion exosomes, nano-vesicles that
                carry growth factors, peptides and messenger RNA between cells,
                essentially the body&apos;s own repair instructions. Prismatic
                PDRN is a vegan-derived polydeoxyribonucleotide engineered with
                a stable tetrahedral structure for around 61% deeper
                penetration, supporting tissue repair and fibroblast activity.
                A GF MiniProtein&trade; and ATP precursor round out the formula.
                Delivered through fresh micro-channels, they reach the layer
                where new collagen is built.
              </p>
            </div>

            {/* Clinical proof points, manufacturer split-face study vs microneedling alone */}
            <div>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-2xl">
                {[
                  { stat: "5×", label: "more powerful results" },
                  { stat: "8.2×", label: "visible wrinkle reduction" },
                  { stat: "5.3×", label: "visible elasticity" },
                  { stat: "3.6×", label: "greater barrier support" },
                ].map((s) => (
                  <div key={s.label} className="border-t border-hairline pt-4">
                    <dt className="font-display text-4xl md:text-5xl leading-none">
                      {s.stat}
                    </dt>
                    <dd className="text-xs text-muted-ink leading-relaxed mt-2">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-[11px] text-muted-ink/80 mt-4 max-w-2xl">
                Medik8 independent split-face clinical study, results measured
                against microneedling alone.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-2xl">
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Calmer recovery</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Prismatic PDRN helps soothe post-treatment redness, so most
                  clients are socially-presentable within 24-48 hours.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Stronger collagen response</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  The GF MiniProtein&trade; helps boost collagen, elastin and
                  hyaluronic acid, amplifying the signal the needling pass
                  already triggers.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Reinforced skin barrier</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  The Triple Exosome Complex supports the skin&apos;s own
                  signalling and barrier, with barrier improvement shown from
                  7 days.
                </p>
              </li>
              <li className="border-t border-hairline pt-5">
                <p className="text-h3 mb-2">Smoother, brighter finish</p>
                <p className="text-sm text-muted-ink leading-relaxed">
                  Skin tends to look more even, firmer and luminous in the days
                  after, not just smoother in months.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
