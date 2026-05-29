export type Concern = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  /** A longer, paragraph-length description of the concern */
  description: string;
  /** Common causes, written as bullet-style strings */
  causes: string[];
  /** Treatment slugs we recommend for this concern, in priority order */
  recommendedTreatments: string[];
  /** Optional hero image override */
  image?: string;
};

export const CONCERNS: Concern[] = [
  {
    slug: "/pigmentation",
    name: "Pigmentation",
    tagline: "Sun damage, melasma, age spots and uneven tone.",
    intro:
      "Pigmentation responds best to a layered approach, targeted in-clinic treatments paired with a properly built home routine. There's no magic single fix, but the right plan can make a meaningful difference within weeks.",
    description:
      "Pigmentation refers to patches or spots where the skin produces excess melanin. It can be triggered by sun exposure, hormones, inflammation, or a combination of all three. Because the underlying cause shapes the treatment plan, every consultation starts with an honest assessment of what's actually driving your pigmentation.",
    causes: [
      "Cumulative sun exposure",
      "Hormonal changes (pregnancy, contraception)",
      "Post-inflammatory marks after acne",
      "Genetics and skin type",
      "Heat and friction",
    ],
    recommendedTreatments: [
      "/cosmelan",
      "/q-switch-laser",
      "/microneedling-treatment",
      "/facial-treatments",
    ],
  },
  {
    slug: "/acne-scarring",
    name: "Acne & Scarring",
    tagline: "Active breakouts and the marks they leave behind.",
    intro:
      "Treating acne and acne scarring requires patience and a plan. We address active inflammation first, then move into resurfacing and remodelling once the skin is stable.",
    description:
      "Acne can leave behind both pigmentation marks (PIH) and textural scarring. The right treatment depends on which type of scarring you have, and what's still happening on the surface. We commonly combine clinical-grade facials with collagen-induction treatments to soften scarring over a series of sessions.",
    causes: [
      "Hormonal imbalance",
      "Excess oil and clogged pores",
      "Bacterial overgrowth (C. acnes)",
      "Picking and inflammation",
      "Compromised skin barrier",
    ],
    recommendedTreatments: [
      "/procell-microchanneling",
      "/microneedling-treatment",
      "/facial-treatments",
    ],
  },
  {
    slug: "/anti-ageing",
    name: "Anti-ageing",
    tagline: "Fine lines, loss of firmness and crepiness.",
    intro:
      "Anti-ageing isn't about chasing a younger face, it's about supporting collagen, elastin and skin barrier health so your skin looks rested, even and lifted as you age.",
    description:
      "From your mid-twenties onward, collagen production slows and the skin's foundational structure begins to soften. Combined with cumulative sun damage and lifestyle stressors, this shows up as fine lines, loss of firmness, and a less even surface. The right treatment plan focuses on stimulating new collagen and supporting long-term skin health.",
    causes: [
      "Natural collagen decline with age",
      "Cumulative sun exposure",
      "Repeated facial movement",
      "Loss of hydration and lipids",
      "Stress and sleep deprivation",
    ],
    recommendedTreatments: [
      "/hifu-treatment-page",
      "/procell-microchanneling",
      "/plasma-fibroblast",
    ],
  },
  {
    slug: "/rosacea",
    name: "Rosacea",
    tagline: "Persistent redness, flushing and reactive skin.",
    intro:
      "Rosacea is best managed, not just treated. We focus on calming inflammation, rebuilding the skin barrier, and identifying the triggers that flare your skin.",
    description:
      "Rosacea is a chronic, relapsing condition characterised by redness, visible vessels, and a reactive skin barrier. It can be made worse by heat, alcohol, stress, and the wrong skincare. Our approach combines gentle in-clinic treatments with a properly built calming home routine, and clear advice on what to avoid.",
    causes: [
      "Genetic predisposition",
      "Heat, sun and weather extremes",
      "Spicy food, alcohol and caffeine",
      "Aggressive skincare or peels",
      "Stress and emotional triggers",
    ],
    recommendedTreatments: [
      "/facial-treatments",
      "/sqt-bio-microneedling-treatment",
    ],
  },
  {
    slug: "/sun-damage",
    name: "Sun Damage",
    tagline: "Sun spots, leathery texture and accelerated ageing.",
    intro:
      "Sun damage is the single biggest driver of how your skin ages. The good news: a lot of it is reversible with the right combination of treatments.",
    description:
      "Years of UV exposure shows up as sun spots, blotchy pigmentation, fine lines, and loss of skin firmness. We use targeted laser, collagen-stimulating treatments, and clinical home care to fade existing damage and protect against further accumulation.",
    causes: [
      "Cumulative unprotected UV exposure",
      "Inconsistent or insufficient SPF",
      "Tanning beds",
      "Reflective surfaces (water, snow, glass)",
      "Daily incidental exposure",
    ],
    recommendedTreatments: [
      "/q-switch-laser",
      "/microneedling-treatment",
      "/facial-treatments",
    ],
  },
  {
    slug: "/texture-tone",
    name: "Texture & Tone",
    tagline: "Rough texture, large pores and a dull, uneven surface.",
    intro:
      "Texture and tone issues respond beautifully to resurfacing treatments combined with consistent home care. The goal is skin that catches light evenly.",
    description:
      "Dull, rough or uneven skin is usually a combination of slow cell turnover, surface congestion, mild scarring, and dehydration. We use micro-channeling and microneedling to stimulate fresh collagen and refine the surface, supported by clinical-grade home actives.",
    causes: [
      "Slowed cell turnover",
      "Congestion and surface buildup",
      "Mild scarring and texture irregularities",
      "Dehydration and barrier issues",
      "Inconsistent home care",
    ],
    recommendedTreatments: [
      "/microneedling-treatment",
      "/sqt-bio-microneedling-treatment",
      "/facial-treatments",
    ],
  },
];

export function getConcern(slug: string) {
  return CONCERNS.find((c) => c.slug === slug);
}
