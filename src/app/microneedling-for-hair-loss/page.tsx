import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { getTreatment } from "@/lib/treatments";

const TREATMENT = getTreatment("/microneedling-for-hair-loss")!;

export const metadata: Metadata = {
  title: "Microneedling for Hair Loss in Point Cook",
  description:
    "Non-surgical scalp microneedling for thinning hair in Point Cook, supporting thicker, healthier-looking hair for men and women. Book your consultation.",
};

export default function HairLossPage() {
  return (
    <TreatmentPage
      eyebrow="Skin · Hair Loss"
      title="Microneedling for hair loss in Point Cook."
      intro="Thinning hair and a widening part are more common than most people realise, and they respond best to early, consistent care. Scalp microneedling is a non-surgical treatment that stimulates your hair follicles to support thicker, healthier-looking hair, here in Point Cook."
      image={TREATMENT.image}
      gallery={TREATMENT.gallery}
      galleryCaption="Healthier scalp. Stronger follicles. Thicker-looking hair."
      what="Scalp microneedling uses a controlled-needling device to create thousands of microscopic channels across the scalp. Those tiny channels trigger your body's natural repair response, increasing blood flow to the follicles, stimulating collagen, and helping to wake up follicles that have slowed down. They also let regenerative actives absorb far more deeply than they could on their own. Over a course of sessions this supports thicker, stronger, healthier-looking hair, without surgery and with very little downtime."
      bestFor={[
        "Early thinning & reduced density",
        "A widening part",
        "Postpartum hair shedding",
        "Thinning at the crown or hairline",
        "Overall scalp health",
        "Supporting your at-home hair routine",
      ]}
      process={[
        {
          step: "Scalp consultation",
          body: "We start with an honest scalp and hair assessment to understand what's driving your thinning and whether microneedling is the right support for you. If it isn't, we'll tell you.",
        },
        {
          step: "Treatment",
          body: "We cleanse the scalp and pass the microneedling device across the thinning areas, infusing regenerative actives as we go. Most clients find it very tolerable. A session takes around 30 to 45 minutes.",
        },
        {
          step: "The course & results",
          body: "Hair grows slowly, so patience matters. Many people notice finer regrowth and improved density over a course of sessions spaced a few weeks apart, with the clearest change from around three months.",
        },
      ]}
      aftercare="Keep the scalp clean and avoid harsh products, heat tools and direct sun for a day or two. Skip vigorous exercise and swimming for 24 hours. We'll send you home with a simple routine, since consistent home care is what keeps results building between sessions."
      faqs={[
        {
          q: "Does microneedling actually regrow hair?",
          a: "Microneedling supports your existing follicles by boosting blood flow, collagen and the absorption of regenerative actives. It works best on early thinning and reduced density rather than areas with no active follicles, and results build gradually over a course.",
        },
        {
          q: "How many sessions will I need?",
          a: "Most people do a course of sessions spaced a few weeks apart, then occasional maintenance. We'll give you a realistic plan based on your scalp at consultation.",
        },
        {
          q: "Is scalp microneedling painful?",
          a: "Most clients find it very tolerable, more pressure and tingling than pain. We keep you comfortable throughout.",
        },
        {
          q: "How long until I see results?",
          a: "Hair grows slowly. Many people notice finer regrowth and better density from around three months, with continued improvement over the course of treatment.",
        },
        {
          q: "Is it suitable for everyone?",
          a: "It suits early to moderate thinning in both men and women. It is not a fix for advanced hair loss where follicles are no longer active, and we'll be honest at your consultation if another path would serve you better.",
        },
        {
          q: "Is it safe?",
          a: "Scalp microneedling is a well-tolerated, minimally invasive treatment performed with sterile, single-use tips and strict hygiene. We assess your scalp first to make sure it's right for you.",
        },
      ]}
      freshaNote="Full pricing and session times for scalp microneedling for hair loss live on our Fresha booking page."
    />
  );
}
