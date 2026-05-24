export type Review = {
  name: string;
  treatment?: string;
  body: string;
};

// PLACEHOLDER reviews — to be replaced with real Google Business Profile reviews
// that mention specific skin treatments. Client will paste 10-15 from Google.
export const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    treatment: "Pigmentation treatment plan",
    body: "After years of trying to fade my pigmentation I finally feel confident going makeup-free. The tailored treatment plan they built for me was a turning point.",
  },
  {
    name: "Renee T.",
    treatment: "HIFU",
    body: "The HIFU results were noticeable within weeks — my jawline and cheeks feel lifted without anything invasive. The clinic is calm, clean and you feel completely looked after.",
  },
  {
    name: "Jess H.",
    treatment: "Procell microchanneling",
    body: "Procell microchanneling has completely transformed my acne scarring. Each session my skin looks smoother and more even. Genuinely the best skin investment I've made.",
  },
  {
    name: "Emma D.",
    treatment: "Facial",
    body: "Skin expertise here is on another level. Every product, every step is explained. My rosacea has calmed dramatically with the bespoke facial routine they built for me.",
  },
  {
    name: "Priya R.",
    treatment: "Q-Switch laser",
    body: "Q-Switch laser cleared up sun spots I'd had for ten years in just a few visits. The whole team is so knowledgeable — they take the time to actually look at your skin.",
  },
  {
    name: "Hannah B.",
    treatment: "SQT bio microneedling",
    body: "The SQT bio microneedling left my skin looking lit-from-within for weeks. I get so many comments. Point Cook is lucky to have a clinic at this level.",
  },
];
