import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/hifu-treatment-page")!;

export const metadata: Metadata = {
  title: "HIFU Skin Tightening Point Cook & Melbourne",
  description:
    "HIFU skin tightening in Point Cook lifts and firms a sagging jawline, neck and brow with no surgery or downtime. See visible results, book a consult today.",
};

export default function HifuPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · HIFU"
      title="HIFU lifting & tightening."
      intro="High-Intensity Focused Ultrasound, a non-surgical lifting and tightening treatment that stimulates collagen deep in the skin without breaking the surface."
      image={TREATMENT.image}
      videoSrc="/videos/hifu.mp4"
      videoPoster="/videos/hifu.jpg"
      gallery={TREATMENT.gallery}
      galleryCaption="Lift, tighten, restore, without breaking the surface."
      what="HIFU delivers focused ultrasound energy to precise depths beneath the skin, triggering a controlled collagen response in the same layers traditionally treated by a surgical facelift. There&apos;s no cutting, no needles, and no recovery, just a gradual lifting and tightening effect that builds over 8-12 weeks."
      bestFor={[
        "Sagging jowls & jawline",
        "Loose neck skin",
        "Brow lifting",
        "Mild to moderate skin laxity",
        "Anti-ageing prevention",
      ]}
      process={[
        {
          step: "Consultation",
          body: "Skin assessment to confirm HIFU is the right modality for your concern and skin condition.",
        },
        {
          step: "Treatment",
          body: "A 60-90 minute session depending on areas treated. You'll feel warm pulses with brief moments of deeper tingling, manageable for most clients without anaesthetic.",
        },
        {
          step: "Results",
          body: "Initial tightening visible within days. Full lifting effect develops over 8-12 weeks as new collagen forms. Most clients return annually.",
        },
      ]}
      faqs={[
        {
          q: "How long do results last?",
          a: "Most clients see results lasting 12-18 months. Maintenance sessions every 12 months keep collagen production active.",
        },
        {
          q: "Is there downtime?",
          a: "None. You can return to normal activities the same day, including makeup.",
        },
      ]}
    />
  );
}
