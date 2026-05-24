import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/procell-microchanneling")!;

export const metadata: Metadata = {
  title: "Procell microchanneling",
  description:
    "Procell microchanneling at Leyla D — next-generation microchanneling with stem-cell-derived growth factors for scarring, ageing and texture.",
};

export default function ProcellPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Procell"
      title="Procell microchanneling."
      intro="The next generation of microchanneling — combining ultra-fine micro-channels with a serum of stem-cell-derived growth factors to dramatically improve scarring, ageing, and texture."
      image={TREATMENT.image}
      videoSrc="/videos/procell.mp4"
      videoPoster="/videos/procell.jpg"
      gallery={TREATMENT.gallery}
      galleryCaption="Growth factors meet your skin&apos;s own repair response."
      what="Procell uses a precision device to create thousands of microscopic channels in the skin while simultaneously infusing a clinical-grade serum rich in human-derived growth factors and cytokines. Those growth factors are exactly what your skin uses to repair itself — so by getting them through the surface and into the active layers, we trigger a much stronger collagen and elastin response than microneedling alone. The result is firmer, smoother, more even skin, with particularly impressive results on acne scarring and crepiness."
      bestFor={[
        "Acne scarring",
        "Surgical & traumatic scars",
        "Stretch marks",
        "Fine lines & wrinkles",
        "Sagging or crepey skin",
        "Uneven tone & texture",
      ]}
      process={[
        {
          step: "Consultation",
          body: "Skin assessment and a tailored treatment plan. We discuss expectations, contraindications, and whether Procell is the right step for what you're treating.",
        },
        {
          step: "Treatment",
          body: "We cleanse, apply topical numbing, and treat the area with the Procell device — taking around 45-60 minutes. The growth-factor serum is infused throughout. Most clients describe it as a mild prickling sensation.",
        },
        {
          step: "Recovery & results",
          body: "Expect 24-48 hours of redness similar to mild sunburn. Skin feels tighter immediately, with visible texture improvements over 4-6 weeks as collagen rebuilds. Best results from a course of 3-4 sessions, 4-6 weeks apart.",
        },
      ]}
      aftercare="Avoid direct sun, heat, sweat, makeup, and active skincare (retinol, acids, vitamin C) for 48 hours. Hydrate generously. Apply the take-home growth-factor serum twice daily for one week to amplify results. SPF 50+ every day."
      faqs={[
        {
          q: "How is Procell different from regular microneedling?",
          a: "Regular microneedling creates channels and relies on your skin's own repair response. Procell adds a clinical-grade growth-factor serum into those channels at the time of treatment — giving your skin the exact biological signals it needs to repair more aggressively. Results are typically faster and more pronounced, especially for scarring.",
        },
        {
          q: "Is it safe?",
          a: "Yes. The serum uses human-derived growth factors that mimic what your skin produces naturally. We follow strict hygiene protocols and use sterile, single-use treatment tips.",
        },
        {
          q: "How many sessions will I need?",
          a: "Most concerns respond well to a course of 3-4 sessions, spaced 4-6 weeks apart. We'll give you a realistic plan at consultation based on what you're treating.",
        },
        {
          q: "How long until I see results?",
          a: "Immediate skin tightening, with visible texture and tone improvements building over 4-6 weeks as new collagen develops. Full course results continue to improve for months after the final session.",
        },
      ]}
      freshaNote="Full pricing and session times for Procell microchanneling live on our Fresha booking page."
    />
  );
}
