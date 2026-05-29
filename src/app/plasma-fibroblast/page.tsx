import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/plasma-fibroblast")!;

export const metadata: Metadata = {
  title: "Plasma Fibroblast Skin Tightening Melbourne",
  description:
    "Plasma fibroblast in Melbourne: non-surgical skin tightening for hooded eyelids, fine lines and laxity at our 5-star Point Cook clinic. Book a consult.",
};

export default function PlasmaPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Plasma"
      title="Plasma fibroblast."
      intro="A non-surgical alternative for tightening, lifting and refining the skin, using plasma energy to stimulate immediate collagen contraction."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Immediate contraction. Long-term rebuild."
      what="A plasma pen creates tiny controlled spots on the skin&apos;s surface, triggering an immediate contraction effect and a long-term collagen rebuilding response. Particularly effective on areas where laxity makes other treatments less suitable, like upper eyelids and around the lips."
      bestFor={[
        "Upper eyelid hooding",
        "Fine lines around eyes & lips",
        "Skin laxity",
        "Mild scarring",
        "Stretch marks",
      ]}
    />
  );
}
