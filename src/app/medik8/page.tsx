import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/medik8")!;

export const metadata: Metadata = {
  title: "Medik8 Facials Melbourne, Clinical Skin Peels",
  description:
    "Specialist Medik8 facials in Point Cook, Melbourne: clinical-grade peels and prescriptive skin courses for real, lasting results. Book your skin consult.",
};

export default function Medik8Page() {
  return (
    <TreatmentPage
      eyebrow="Skin · Medik8"
      title="Medik8 facials."
      intro="Clinical-grade Medik8 facial protocols, peels, infusions and prescriptive courses built around the CSA philosophy: Vitamin C by day, sunscreen always, Vitamin A by night."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Cosmeceutical-grade actives, performed by trained Medik8 therapists."
      what="Medik8 is one of the world's most respected cosmeceutical brands, a British skin-science house whose products are used and prescribed in over 35 countries. Our therapists are trained directly in the Medik8 protocols, which means every facial is paired with a take-home routine that keeps the results building between visits. We use Medik8 peels, enzyme treatments and active infusions tailored to what your skin is actually asking for, never a one-size-fits-all menu."
      bestFor={[
        "Pigmentation & uneven tone",
        "Congestion & breakouts",
        "Fine lines & early ageing",
        "Dehydrated, sensitised skin",
        "Anyone wanting a results-driven facial",
        "Pre-event glow",
      ]}
      process={[
        {
          step: "Skin consultation",
          body: "We assess your skin in person, review what you're using at home, and choose the right Medik8 protocol, peel, hydration or prescriptive, for where your skin is today.",
        },
        {
          step: "In-clinic treatment",
          body: "Cleanse, prep, the active phase (peel/enzyme/infusion), a targeted mask, and a finish that calms and protects. 45-75 minutes depending on the protocol chosen.",
        },
        {
          step: "Home routine",
          body: "You leave with a CSA-aligned at-home routine. Most clients see compounding results when in-clinic and at-home work together, that's the whole Medik8 philosophy.",
        },
      ]}
      aftercare="Avoid retinol and active acids for 5-7 days after any peel-based Medik8 facial. SPF 50+ daily. Most facials have zero social downtime, peels may give light flaking 2-4 days after."
      faqs={[
        {
          q: "Is Medik8 suitable for sensitive skin?",
          a: "Yes, Medik8 has dedicated formulations for reactive and rosacea-prone skin. We'll patch-test and adjust strength carefully.",
        },
        {
          q: "How is this different from a regular facial?",
          a: "Medik8 facials use cosmeceutical-grade actives at clinically tested concentrations, paired with a structured at-home routine. The goal is measurable change, not just a one-off pamper.",
        },
        {
          q: "Can I combine Medik8 with other treatments?",
          a: "Yes, Medik8 sits beautifully alongside microneedling, laser and HIFU. We'll sequence them properly so the actives support, not interfere with, your other treatments.",
        },
      ]}
      freshaNote="Full pricing for Medik8 facials and courses lives on our Fresha booking page."
    />
  );
}
