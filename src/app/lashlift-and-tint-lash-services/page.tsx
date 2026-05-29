import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/lashlift-and-tint-lash-services")!;

export const metadata: Metadata = {
  title: "Lash Lift & Tint Point Cook | No Extensions",
  description:
    "Lash lift and tint in Point Cook for longer, darker, lifted lashes that last 6 to 8 weeks. No extensions, no mascara. Book your appointment today.",
};

export default function LashesPage() {
  return (
    <TreatmentPage
      eyebrow="Lashes"
      title="Lash lift & tint."
      intro="Long, defined lashes without extensions, a gentle curl that opens up the eye and lasts 6-8 weeks."
      image={TREATMENT.image}
      videoSrc="/videos/lash-lift.mp4"
      videoPoster="/videos/lash-lift.jpg"
      gallery={TREATMENT.gallery}
      galleryCaption="Natural lashes, lifted and defined."
      what="A nourishing solution lifts your natural lashes from the root, followed by a tint that adds depth and definition. The result is a wide-eyed, low-maintenance lash look that lasts through showers, swimming and sleep."
      bestFor={[
        "Straight or downward-pointing lashes",
        "An everyday open-eye look",
        "Skipping daily mascara",
        "Pre-holiday prep",
      ]}
    />
  );
}
