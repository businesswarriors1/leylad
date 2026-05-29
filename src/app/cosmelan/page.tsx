import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/cosmelan")!;

export const metadata: Metadata = {
  title: "Cosmelan Peel Melbourne for Pigmentation",
  description:
    "Fade melasma and stubborn pigmentation with a Cosmelan peel in Melbourne. Expert depigmentation at our 5-star Point Cook clinic. Book your skin consult.",
};

export default function CosmelanPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Cosmelan"
      title="Cosmelan."
      intro="A professional two-phase depigmentation treatment that targets even the most stubborn pigmentation. Cosmelan reduces existing melanin and regulates how your skin produces it, making it one of the most effective options for melasma and uneven tone."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Less melanin. More even tone. A visible reset for pigment-prone skin."
      what="Cosmelan is a clinically proven depigmentation method that works in two phases. The first is an intensive in-clinic mask applied during your appointment and left on the skin at home for a set number of hours before you remove it. The second is a guided home maintenance routine that keeps melanin production in check over the following months. Rather than simply fading the surface, Cosmelan acts on the cells responsible for producing pigment, which is why it's effective on melasma and pigmentation that hasn't responded to other treatments."
      bestFor={[
        "Melasma & hormonal pigmentation",
        "Sun-induced pigmentation",
        "Post-inflammatory hyperpigmentation",
        "Uneven skin tone",
        "Pigmentation resistant to other treatments",
        "Freckles & age spots",
      ]}
      process={[
        {
          step: "Consultation & prep",
          body: "We assess your skin, history and pigmentation type to confirm Cosmelan is the right approach. You'll be guided through a short priming routine before your treatment day.",
        },
        {
          step: "In-clinic mask",
          body: "The Cosmelan mask is applied in clinic and worn home for a prescribed number of hours, then removed at home following clear written instructions. The application itself is quick and comfortable.",
        },
        {
          step: "Home maintenance",
          body: "You'll continue with a prescriptive home regime that maintains results and regulates melanin over the months that follow. We check in throughout to keep your skin on track.",
        },
      ]}
      aftercare="Expect some redness, tightness and flaking in the days after the mask, this is a normal part of the process. Keep the skin well hydrated, follow your prescribed home products exactly, and avoid active acids and retinol unless directed. Daily SPF 50+ is non-negotiable, sun exposure is the fastest way to undo your results."
      faqs={[
        {
          q: "Is Cosmelan suitable for melasma?",
          a: "Yes, Cosmelan is one of the most effective professional treatments available for melasma. Because it regulates melanin production rather than just fading the surface, it's well suited to hormonal and stubborn pigmentation. We'll confirm suitability at your consultation.",
        },
        {
          q: "How long until I see results?",
          a: "Many clients notice a visible improvement in tone within the first few weeks. Pigmentation continues to fade over the following months as the home maintenance routine takes effect.",
        },
        {
          q: "Is there downtime?",
          a: "There's a short recovery period of redness, tightness and flaking in the days following the mask. Most clients plan their treatment around a few quieter days and continue normal activities with diligent SPF.",
        },
        {
          q: "Does it work on all skin types?",
          a: "Cosmelan is designed to be safe across a wide range of skin types, including deeper skin tones where many pigmentation treatments carry more risk. Every plan is tailored to your skin at consultation.",
        },
      ]}
      freshaNote="Full pricing and what's included with Cosmelan live on our Fresha booking page."
    />
  );
}
