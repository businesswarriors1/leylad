import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/q-switch-laser")!;

export const metadata: Metadata = {
  title: "Q-Switch Laser Melbourne for Pigment & Glow",
  description:
    "Q-Switch laser in Melbourne's west targets pigmentation, sun damage and dullness with little downtime, plus carbon facials for instant glow. Book today.",
};

export default function QSwitchPage() {
  return (
    <TreatmentPage
      eyebrow="Laser · Q-Switch"
      title="Q-Switch laser."
      intro="A targeted nanosecond-pulse laser that shatters unwanted pigment without harming the surrounding skin, ideal for sun damage, age spots, freckles and overall skin renewal."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Specific wavelengths. Specific targets. Skin around them stays cool."
      what="Q-Switch laser emits very short, high-energy pulses of light that pass harmlessly through the upper layers of skin and target pigment in the deeper layers. The pigment absorbs the energy and breaks into smaller particles, which your body then naturally clears over the following weeks. Because the pulse is so fast, surrounding tissue stays cool, meaning very little downtime and a much lower risk of unwanted side effects compared to older laser technology. The same device also powers our carbon facial (the Hollywood peel), where a fine carbon lotion is applied to the skin and the laser passes over it to deep-clean pores, refine texture and add instant radiance."
      bestFor={[
        "Sun spots & age spots",
        "Freckles & hyperpigmentation",
        "Melasma (case-by-case)",
        "Dull, tired-looking skin",
        "Overall skin renewal",
        "Tattoo pigment (assessed individually)",
      ]}
      process={[
        {
          step: "Consultation",
          body: "Skin assessment, history, and a patch test if needed. We'll only proceed if Q-Switch is the right tool for what you're treating.",
        },
        {
          step: "Treatment",
          body: "The session itself takes 20-40 minutes depending on area. Most clients describe it as a series of warm pin-pricks. No anaesthetic required for most areas.",
        },
        {
          step: "Recovery",
          body: "Mild redness for a few hours. Pigment typically darkens briefly before flaking off naturally over 1-2 weeks. Most courses are 3-6 sessions, spaced 2-4 weeks apart.",
        },
      ]}
      aftercare="Avoid direct sun for at least two weeks after treatment. SPF 50+ is non-negotiable. Skip retinol and active acids for 5-7 days. We'll send you home with a written aftercare plan and check in between sessions."
      faqs={[
        {
          q: "Is Q-Switch laser safe for all skin types?",
          a: "Q-Switch is well-tolerated across most Fitzpatrick skin types, but settings must be calibrated carefully, especially for deeper skin tones. We assess every client individually and patch-test where appropriate.",
        },
        {
          q: "How many sessions will I need?",
          a: "Most pigmentation concerns respond well to 3-6 sessions, spaced 2-4 weeks apart. We'll give you a realistic course plan at consultation.",
        },
        {
          q: "Is there downtime?",
          a: "Minimal. Most clients return to normal activities the same day with light redness that fades within a few hours.",
        },
        {
          q: "Does it hurt?",
          a: "Most clients describe it as a series of warm pin-pricks or rubber band snaps. Comfortable for most people without anaesthetic.",
        },
        {
          q: "What is a carbon facial?",
          a: "The carbon facial, often called a Hollywood peel, uses the same Q-Switch laser with a layer of carbon lotion applied to the skin. The laser targets the carbon to gently exfoliate, draw out impurities, refine pores and boost radiance, with no downtime. It's a great option for dull, congested or oily skin and a glow before an event.",
        },
      ]}
      freshaNote="Full pricing and session times for Q-Switch laser live on our Fresha booking page."
    />
  );
}
