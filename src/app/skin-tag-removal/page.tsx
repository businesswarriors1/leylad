import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/skin-tag-removal")!;

export const metadata: Metadata = {
  title: "Skin tag removal",
  description:
    "Safe, professional skin tag, milia and minor lesion removal at Leyla D Point Cook.",
};

export default function SkinTagPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Lesion removal"
      title="Skin tag removal."
      intro="Safe, fast removal of skin tags, milia and other benign lesions — without referrals or downtime."
      image={TREATMENT.image}
      imagePosition={TREATMENT.objectPosition}
      gallery={TREATMENT.gallery}
      galleryCaption="Clean, professional, in-and-out."
      what="We use precision tools and clinical technique to remove minor benign lesions in-clinic. Most appointments take 15-30 minutes. We&apos;ll always assess first — anything we&apos;re unsure about, we refer on."
      bestFor={[
        "Skin tags",
        "Milia",
        "Cherry angiomas",
        "Sebaceous hyperplasia",
        "Small benign lesions",
      ]}
    />
  );
}
