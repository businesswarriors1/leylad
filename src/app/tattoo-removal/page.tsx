import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/tattoo-removal")!;

export const metadata: Metadata = {
  title: "Laser tattoo removal",
  description:
    "Laser tattoo removal at Leyla D Point Cook — gradual, safe clearance of unwanted ink using Q-switched nanosecond technology.",
};

export default function TattooRemovalPage() {
  return (
    <TreatmentPage
      eyebrow="Laser · Tattoo Removal"
      title="Tattoo removal."
      intro="Q-switched nanosecond laser breaks tattoo pigment into particles small enough for your body to clear naturally — gradual, safe fading session by session."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Patient, methodical clearance — your skin&apos;s timeline, not a rushed one."
      what="Q-switched laser fires ultra-short pulses of light that pass through the upper skin and shatter ink particles deeper down. Your immune system then carries those fragments away over the weeks following each session. Because the pulse is so brief, surrounding skin stays cool — meaning low downtime and a much lower risk of scarring than older tattoo-removal methods. Most tattoos need a course of sessions; we'll assess realistically at consultation."
      bestFor={[
        "Black & dark-pigment tattoos",
        "Faded older tattoos",
        "Tattoos you want to cover up (lightening for re-work)",
        "Stick-and-pokes and amateur ink",
        "Eyebrow & cosmetic tattoo lightening",
      ]}
      process={[
        {
          step: "Consultation & patch test",
          body: "We assess your tattoo — age, ink type, depth, location — and patch-test a small area to gauge how your skin responds. We'll only proceed when we're confident in the plan.",
        },
        {
          step: "Treatment session",
          body: "Most sessions take 10-30 minutes depending on size. Many describe it as warm pin-pricks or rubber-band snaps. We apply a cooling pass after each section.",
        },
        {
          step: "Recovery & fading",
          body: "The treated area frosts briefly, then settles to redness/mild swelling for 24-48 hours. Fading happens over 6-8 weeks. Sessions are spaced 6-8 weeks apart to let your body clear pigment safely.",
        },
      ]}
      aftercare="Keep the area clean, dry and out of direct sun for 2 weeks. SPF 50+ on the area every day — even on cloudy days. No swimming pools, saunas, or vigorous exercise for 48 hours. We'll send you home with a detailed aftercare sheet."
      faqs={[
        {
          q: "How many sessions will I need?",
          a: "Most tattoos take 6-12 sessions for full clearance, though older and faded tattoos can take fewer. Coloured inks (especially green, yellow, light blue) take longer than black. We give you a realistic estimate at consultation.",
        },
        {
          q: "Will it scar?",
          a: "Q-switched technology was designed specifically to minimise scarring risk. Provided you follow aftercare and don't pick at the treated area, scarring is rare.",
        },
        {
          q: "Does it work on all skin tones?",
          a: "Yes — but settings need to be carefully calibrated for deeper skin tones. We always patch-test first.",
        },
        {
          q: "Can I lighten a tattoo I want to cover up?",
          a: "Absolutely — partial lightening for cover-up work usually only needs 2-4 sessions. Tell us at consultation if that's your goal.",
        },
      ]}
      freshaNote="Full pricing per session for laser tattoo removal lives on our Fresha booking page — pricing is per area and per session."
    />
  );
}
