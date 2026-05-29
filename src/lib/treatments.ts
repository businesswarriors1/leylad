export type TreatmentCategory = "skin" | "laser" | "brows";

export type Treatment = {
  slug: string;
  name: string;
  category: TreatmentCategory;
  tagline: string;
  /** Hero image used on the treatment's own page */
  image?: string;
  /** Image used in tiles on the homepage / treatments index, falls back to `image` if not set */
  tileImage?: string;
  /** CSS object-position for cropping (e.g. "right center", "left 30%"). Defaults to center. */
  objectPosition?: string;
  gallery?: string[];
  isNew?: boolean;
  /** When true, this entry shows in the header dropdown only, not in tile grids or sitemap entries */
  inMenuOnly?: boolean;
};

// Curated editorial gallery pool, Instagram + reference imagery
const MOOD_HERO = "/images/home/hero.jpg";
const MOOD_CONSISTENCY = "/images/treatments/ig-consistency.jpg";
const MOOD_HEALTHY = "/images/treatments/ig-healthy-skin.jpg";

export const TREATMENTS: Treatment[] = [
  {
    slug: "/hifu-treatment-page",
    name: "HIFU",
    category: "skin",
    tagline: "Non-invasive lifting and tightening using high-intensity focused ultrasound.",
    image: "/images/treatments/hifu.jpg",
    gallery: [MOOD_HERO, MOOD_HEALTHY, MOOD_CONSISTENCY],
  },
  {
    slug: "/facial-treatments",
    name: "Skin Treatments",
    category: "skin",
    tagline: "Bespoke skin treatments for pigmentation, acne, anti-ageing and overall skin health.",
    image: "/images/treatments/facials.jpg",
    gallery: [MOOD_HEALTHY, MOOD_HERO, MOOD_CONSISTENCY],
  },
  {
    slug: "/plasma-fibroblast",
    name: "Plasma Fibroblast",
    category: "skin",
    tagline: "Non-surgical skin tightening that stimulates collagen on contact.",
    image: "/images/treatments/plasma-fibroblast.jpg",
    gallery: [MOOD_CONSISTENCY, MOOD_HERO],
  },
  {
    slug: "/cosmelan",
    name: "Cosmelan",
    category: "skin",
    tagline: "Professional depigmentation treatment for melasma and stubborn pigmentation.",
    image: "/images/treatments/cosmelan.jpg",
    gallery: [MOOD_HEALTHY, MOOD_HERO, MOOD_CONSISTENCY],
    isNew: true,
  },
  {
    slug: "/sqt-bio-microneedling-treatment",
    name: "SQT Bio Microneedling",
    category: "skin",
    tagline: "Marine-collagen microneedling for smoother, plumper, more rejuvenated skin.",
    image: "/images/treatments/sqt.webp",
    gallery: [MOOD_HEALTHY, MOOD_CONSISTENCY],
  },
  {
    slug: "/microneedling-treatment",
    name: "Microneedling",
    category: "skin",
    tagline: "Collagen-induction therapy for texture, scarring and tone.",
    image: "/images/treatments/microneedling.jpg",
    tileImage: "/images/treatments/microneedling-tile.jpg",
    gallery: [MOOD_HERO, MOOD_CONSISTENCY],
  },
  {
    slug: "/procell-microchanneling",
    name: "Procell Microchanneling",
    category: "skin",
    tagline: "Next-gen microchanneling using stem-cell-derived growth factors for scarring, ageing and texture.",
    image: MOOD_HERO,
    gallery: [MOOD_CONSISTENCY, MOOD_HEALTHY, "/images/treatments/microneedling.jpg"],
    isNew: true,
  },
  {
    slug: "/q-switch-laser",
    name: "Q-Switch Laser",
    category: "laser",
    tagline: "Targeted nanosecond laser for pigmentation, sun damage and skin renewal.",
    image: "/images/treatments/laser.jpg",
    gallery: [MOOD_HERO, MOOD_HEALTHY, MOOD_CONSISTENCY],
    isNew: true,
  },
  {
    slug: "/laser-treatments",
    name: "Laser Treatments",
    category: "laser",
    tagline: "All of our laser modalities, side-by-side.",
    inMenuOnly: true,
  },
  {
    slug: "/skin-tag-removal",
    name: "Skin Tag Removal",
    category: "skin",
    tagline: "Safe, fast removal of skin tags, milia and minor lesions.",
    image: "/images/treatments/skin-tag.jpg",
    // The subject (practitioner working on a client) sits on the right of the
    // source image, push the image leftward in its frame so the action stays
    // visible at all aspect ratios.
    objectPosition: "right center",
    gallery: [MOOD_HEALTHY, MOOD_HERO],
  },
  {
    slug: "/brow-lamination-eyebrow-services",
    name: "Brow Lamination",
    category: "brows",
    tagline: "Lifted, sculpted brows that hold their shape for weeks.",
    image: "/images/treatments/brow-lamination.jpg",
    gallery: [MOOD_HERO, MOOD_HEALTHY],
  },
  {
    slug: "/lashlift-and-tint-lash-services",
    name: "Lash Lift & Tint",
    category: "brows",
    tagline: "Long, defined lashes, no extensions, no fuss.",
    image: "/images/treatments/lash-lift.png",
    gallery: [MOOD_HEALTHY, MOOD_HERO],
  },
  {
    slug: "/medik8",
    name: "Medik8 Facials",
    category: "skin",
    tagline: "Results-driven Medik8 facial protocols, peels, hydration and prescriptive skin courses.",
    image: "/images/treatments/facials.jpg",
    gallery: [MOOD_HEALTHY, MOOD_CONSISTENCY, MOOD_HERO],
    isNew: true,
  },
  {
    slug: "/tattoo-removal",
    name: "Tattoo Removal",
    category: "laser",
    tagline: "Laser tattoo removal that gradually clears unwanted ink, safely, in stages.",
    image: "/images/treatments/tattoo-removal.jpg",
    gallery: [MOOD_HERO, MOOD_CONSISTENCY],
    isNew: true,
  },
  {
    slug: "/ipl-skin-rejuvenation",
    name: "IPL Skin Rejuvenation",
    category: "laser",
    tagline: "Intense pulsed light for pigmentation, redness and overall skin clarity.",
    image: "/images/treatments/ipl-skin-rejuvenation.jpg",
    gallery: [MOOD_HEALTHY, MOOD_HERO, MOOD_CONSISTENCY],
    isNew: true,
  },
  {
    slug: "/ipl-hair-removal",
    name: "IPL Hair Removal",
    category: "laser",
    tagline: "Long-lasting hair reduction with intense pulsed light, face and body.",
    image: "/images/treatments/ipl-hair-removal.jpg",
    gallery: [MOOD_HERO, MOOD_HEALTHY],
    isNew: true,
  },
];

export function getTreatment(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: TreatmentCategory) {
  return TREATMENTS.filter((t) => t.category === category);
}
