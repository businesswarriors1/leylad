export type Review = {
  name: string;
  treatment?: string;
  body: string;
};

// Real 5-star reviews from the Leyla D Fresha profile (Point Cook, Melbourne).
// Lightly tidied for punctuation only, wording preserved.
export const REVIEWS: Review[] = [
  {
    name: "Ilmije A.",
    treatment: "Skin treatments",
    body: "Incredible service at Leyla D skin body and brows. I always leave feeling amazing. Leyla and Emily are amazing at what they do. You've both worked wonders on my skin, and every session leaves me feeling so refreshed. Thank you both so much!",
  },
  {
    name: "Anna L.",
    treatment: "Skin treatments",
    body: "Leyla and Emily are always so lovely and knowledgeable when it comes to skin. Love coming for treatments.",
  },
  {
    name: "Andrea D.",
    treatment: "Skin consultation",
    body: "Brilliant work, great advice. I highly recommend Leyla.",
  },
  {
    name: "Nicole J.",
    treatment: "Brow lamination",
    body: "Very happy with my brows. Super gentle and really listened to what I wanted. Will definitely be returning!",
  },
  {
    name: "Keryn M.",
    treatment: "Brow shaping",
    body: "Emily always works her magic on my brows and is an absolute genius. She deserves ten stars if not more. Thank you for an amazing experience.",
  },
  {
    name: "Ava D.",
    treatment: "Lash lift & tint",
    body: "I'm happy with my lashes and love the individual service and advice I get from the girls.",
  },
  {
    name: "Lianne V.",
    body: "Emily and Leyla are so amazing, perfect service every time.",
  },
];
