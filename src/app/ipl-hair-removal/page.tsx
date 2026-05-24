import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/ipl-hair-removal")!;

export const metadata: Metadata = {
  title: "IPL hair removal",
  description:
    "IPL hair removal at Leyla D Point Cook — long-lasting hair reduction with intense pulsed light. Face, underarms, legs, bikini and more.",
};

export default function IplHairRemovalPage() {
  return (
    <TreatmentPage
      eyebrow="Laser · IPL"
      title="IPL hair removal."
      intro="Long-lasting hair reduction with intense pulsed light — disabling the follicle at its growth stage for smoother skin and far less maintenance, session after session."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Less hair, less ingrowns, less fuss — for every area you want treated."
      what="IPL hair removal uses pulses of filtered light absorbed by the melanin in the hair shaft. The energy travels down to the follicle, where it disables the cells responsible for new hair growth — without damaging the surrounding skin. Because hair grows in cycles, only follicles in their active growth phase respond at any one session. That's why a course of 6-8 treatments, spaced 4-6 weeks apart, gives the strongest, longest-lasting result. Most clients see a dramatic reduction in growth, density and ingrown hairs."
      bestFor={[
        "Underarms",
        "Legs (half & full)",
        "Bikini & Brazilian",
        "Upper lip & chin",
        "Back & chest",
        "Anyone wanting an end to shaving / waxing"
      ]}
      process={[
        {
          step: "Consultation & patch test",
          body: "Skin and hair assessment, plus a test patch to set your treatment intensity. We always confirm compatibility before booking a full course.",
        },
        {
          step: "Treatment session",
          body: "Short sessions — 10 minutes for small areas, up to 45 for full legs. A cooling tip on every pulse keeps you comfortable. Most clients describe it as a warm rubber-band snap.",
        },
        {
          step: "The course",
          body: "6-8 sessions, spaced 4-6 weeks apart, gives the strongest result. Hair sheds gradually over 1-3 weeks after each session — you'll feel the change quickly.",
        },
      ]}
      aftercare="No sun, sauna or hot showers for 24-48 hours after treatment. SPF 50+ daily on treated areas. Avoid waxing or plucking between sessions — shaving only, so the follicle stays intact for the next session to target."
      faqs={[
        {
          q: "Does IPL work on all hair colours?",
          a: "IPL targets melanin, so it works best on darker hair. Very light blonde, grey, white and red hair don't respond well to IPL — we'll be honest with you at consultation if it's not the right tool.",
        },
        {
          q: "Does IPL work on all skin tones?",
          a: "IPL is most effective on lighter skin tones with dark hair. For deeper skin tones, alternative devices may be safer and more effective — we always assess and patch-test individually.",
        },
        {
          q: "Is it permanent?",
          a: "After a full course, most clients enjoy permanent hair reduction — meaning a large percentage of follicles are permanently disabled and any regrowth is finer and sparser. Hormones can trigger new follicle activity over time, so annual maintenance sessions keep results pristine.",
        },
        {
          q: "How should I prep?",
          a: "Shave the area 24 hours before. Don't wax, pluck or use depilatory creams in the 4 weeks before — the hair root needs to be intact. Arrive with clean, product-free skin.",
        },
      ]}
      freshaNote="Full pricing per area, and discounted course packages, live on our Fresha booking page."
    />
  );
}
