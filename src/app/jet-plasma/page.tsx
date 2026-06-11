import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/jet-plasma")!;

export const metadata: Metadata = {
  title: "Jet Plasma Treatment in Point Cook, Melbourne",
  description:
    "Needle-free Jet Plasma in Point Cook tightens, brightens and calms reactive skin with zero downtime. Book your consultation with our skin team today.",
};

export default function JetPlasmaPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Jet Plasma"
      title="Jet Plasma skin tightening in Point Cook."
      intro="A needle-free cold plasma treatment that tightens, brightens and calms the skin, with no heat, no needles and no downtime."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Cold plasma. Real collagen. Zero downtime."
      what="Jet Plasma uses cold atmospheric plasma, an energised stream of charged particles passed across the skin with a handheld device. It stimulates collagen and elastin and helps remodel the skin from within, while its naturally anti-bacterial, anti-inflammatory action calms congestion and redness and helps active ingredients absorb more deeply. Because there is no heat and no needles, there is no burning, no numbing cream and no downtime, which makes it gentle enough for most skin types, including reactive skin. It is a completely different treatment to plasma fibroblast, which uses a controlled plasma arc on the skin's surface."
      bestFor={[
        "Fine lines & early ageing",
        "Loss of firmness & laxity",
        "Dull, tired skin",
        "Enlarged pores & congestion",
        "Breakout-prone skin",
        "Redness & reactive skin",
      ]}
      process={[
        {
          step: "Consultation",
          body: "A quick skin assessment to confirm Jet Plasma suits your skin and your goals, and to plan how many sessions you are likely to need.",
        },
        {
          step: "Treatment",
          body: "We cleanse, then glide the cold plasma device across the area. Most clients describe a light, warm tingling. No numbing cream is needed and a session takes around 15 to 30 minutes.",
        },
        {
          step: "Recovery & results",
          body: "There is no downtime. Skin often looks brighter and feels firmer straight away, with results building over a course of sessions as collagen rebuilds.",
        },
      ]}
      aftercare="There is no downtime, so you can return to normal activities and wear makeup the same day. Keep the skin well hydrated and wear SPF 50+ daily. A course of treatments gives the strongest, longest-lasting result, and we'll map this out at your consultation."
      faqs={[
        {
          q: "Is Jet Plasma the same as plasma fibroblast?",
          a: "No. Jet Plasma uses cold atmospheric plasma glided across the skin with no heat, no needles and no downtime. Plasma fibroblast uses a controlled plasma arc that creates tiny points on the skin's surface and needs recovery time. They are different treatments for different goals.",
        },
        {
          q: "Does it hurt?",
          a: "No. Most clients feel a light, warm tingling. There is no numbing cream required and no broken skin.",
        },
        {
          q: "Is there any downtime?",
          a: "None. You can return to normal activities and makeup straight away. Some clients notice mild, short-lived warmth or pinkness that settles quickly.",
        },
        {
          q: "How many sessions will I need?",
          a: "It depends on your skin and what you're treating. Many concerns respond well to a course of treatments spaced a week or two apart, with occasional maintenance. We'll give you a realistic plan at your consultation.",
        },
        {
          q: "Is it suitable for sensitive skin?",
          a: "Yes. Because there is no heat, Jet Plasma is gentle and often suits reactive, redness-prone skin. We always assess your skin first.",
        },
      ]}
      freshaNote="Full pricing and session times for Jet Plasma live on our Fresha booking page."
    />
  );
}
