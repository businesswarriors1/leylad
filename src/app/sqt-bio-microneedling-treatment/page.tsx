import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/sqt-bio-microneedling-treatment")!;

export const metadata: Metadata = {
  title: "SQT bio microneedling",
  description:
    "SQT bio microneedling at Leyla D Point Cook — marine collagen spicules for plumper, smoother, more rejuvenated skin.",
};

export default function SqtPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Microneedling"
      title="SQT bio microneedling."
      intro="A needle-free microneedling treatment using natural marine-collagen spicules to deliver active ingredients deep into the skin and trigger powerful renewal."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Renewal, without the needle."
      what="SQT uses millions of microscopic sponge spicules — sourced from marine collagen — that gently embed into the upper layers of skin. They act as natural microneedles, opening channels for actives to penetrate while triggering a strong self-renewal response. No needles, no broken skin."
      bestFor={[
        "Dull, tired skin",
        "Fine lines",
        "Mild scarring",
        "Pigmentation",
        "Pre-event glow",
      ]}
    />
  );
}
