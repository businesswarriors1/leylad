import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/ipl-skin-rejuvenation")!;

export const metadata: Metadata = {
  title: "IPL skin rejuvenation",
  description:
    "IPL skin rejuvenation at Leyla D Point Cook — intense pulsed light for pigmentation, redness, vascular concerns and overall skin clarity.",
};

export default function IplSkinRejuvenationPage() {
  return (
    <TreatmentPage
      eyebrow="Laser · IPL"
      title="IPL skin rejuvenation."
      intro="Intense pulsed light targets pigmentation, broken capillaries and diffuse redness — clearing the skin and restoring an even, luminous base over a short course of sessions."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Pigment and redness, lifted away gently over a course."
      what="IPL uses a broad spectrum of light filtered to target specific chromophores in the skin — melanin (pigment) and haemoglobin (redness). The light is absorbed by these targets and converted to heat, which breaks down pigment clusters and seals tiny broken capillaries. Because IPL treats both pigment and vascular concerns simultaneously, it's particularly powerful for sun-damaged, ruddy or unevenly-toned skin. The result is a clearer, more even complexion that compounds with each session."
      bestFor={[
        "Sun damage & age spots",
        "Diffuse facial redness",
        "Broken capillaries",
        "Uneven skin tone",
        "Early signs of ageing",
        "Décolletage & chest rejuvenation",
      ]}
      process={[
        {
          step: "Consultation & test patch",
          body: "We assess your skin type, history, and the specific concern. A small test patch confirms the right settings for your skin — we don't compromise on this step.",
        },
        {
          step: "Treatment session",
          body: "20-40 minutes depending on area. Most clients describe it as a warm elastic-band snap. We use cooling on every pass for comfort.",
        },
        {
          step: "Recovery & course",
          body: "Pigment darkens briefly then flakes away over 7-10 days. Redness fades over hours. A course of 3-5 sessions, spaced 4 weeks apart, gives the strongest result.",
        },
      ]}
      aftercare="Strict SPF 50+ for at least 4 weeks before and after each session — IPL is not compatible with recently tanned skin. Skip retinol and acids for 5-7 days. Keep the area cool and well-hydrated."
      faqs={[
        {
          q: "Is IPL the same as laser?",
          a: "Not quite. Lasers emit a single wavelength of light; IPL emits a filtered broad spectrum. That makes IPL versatile — it can treat several concerns in one pass — but a dedicated laser is sometimes the better tool for a single, deep target.",
        },
        {
          q: "Is IPL safe for my skin tone?",
          a: "IPL works best on lighter skin tones (Fitzpatrick I-III) because it targets pigment. We assess every client carefully — for deeper skin tones we'll often recommend Q-Switch laser instead, which is safer for pigment in those skin types.",
        },
        {
          q: "How long do the results last?",
          a: "Once pigment and vascular lesions are cleared, they don't come back — provided you maintain SPF daily. New sun damage will always require touch-ups, so an annual maintenance session is common.",
        },
        {
          q: "Is there downtime?",
          a: "Minimal. Redness settles in hours. Treated pigment darkens then flakes off naturally over 7-10 days — completely normal and a sign it's working.",
        },
      ]}
      freshaNote="Full pricing for IPL skin rejuvenation — per area and per course — lives on our Fresha booking page."
    />
  );
}
