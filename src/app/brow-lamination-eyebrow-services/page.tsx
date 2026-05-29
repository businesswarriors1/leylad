import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/brow-lamination-eyebrow-services")!;

export const metadata: Metadata = {
  title: "Brow Lamination Point Cook for Sculpted Brows",
  description:
    "Brow lamination in Point Cook for lifted, fuller, sculpted brows that last weeks. Expert shaping and tint at our 5-star clinic. Book your brow appointment.",
};

export default function BrowsPage() {
  return (
    <TreatmentPage
      eyebrow="Brows"
      title="Brow lamination."
      intro="Lifted, sculpted, naturally-fuller brows, straightened and set in place to give you a polished shape that holds for weeks."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Shape, hold, finish."
      what="Brow lamination is a controlled chemical treatment that softens the brow hairs and re-sets them in a brushed-up direction. Paired with our shaping and tinting work, it gives you a fuller, more defined brow without daily product."
      bestFor={[
        "Unruly or downward-growing brows",
        "Sparse or gappy brows",
        "Asymmetrical shape",
        "Low-maintenance grooming",
      ]}
    />
  );
}
