// Inline content: a plain string, or a link. Hrefs starting with "/" render
// as internal Next links; anything else renders as an external link.
export type Inline = string | { text: string; href: string };

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; content: Inline[] }
  | { type: "ul"; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Post = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** Doubles as the meta description, aim for 140-160 characters */
  excerpt: string;
  image?: string;
  /** Optional related treatment slug, surfaced as the post CTA */
  relatedTreatment?: string;
  /** Estimated read time in minutes */
  readMinutes?: number;
  body: BlogBlock[];
};

const SKIN_EXPLAINED =
  "https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/skin";
const SUN_SAFETY =
  "https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety";

// Ported and enhanced from the previous leylad.com.au/blog. Slugs preserved
// for SEO continuity. Copy rewritten in the house voice: AU spelling, no em
// dashes, plain language, internal links, credible citations and FAQs.
export const POSTS: Post[] = [
  {
    slug: "say-goodbye-to-ageing-transform-your-skin-with-plasma-fibroblast-therapy",
    title:
      "Plasma fibroblast in Melbourne: tighten ageing skin without surgery",
    date: "2025-04-14",
    excerpt:
      "Plasma fibroblast tightens and lifts ageing skin without surgery by stimulating your own collagen. How it works, what it treats, results and aftercare.",
    image: "/images/treatments/plasma-fibroblast.jpg",
    relatedTreatment: "/plasma-fibroblast",
    readMinutes: 6,
    body: [
      {
        type: "p",
        content: [
          "Loose eyelids, soft jowls and fine lines around the mouth are some of the first changes people want to address, and they are also some of the hardest to treat with cream alone. Plasma fibroblast is a non-surgical option built for exactly these areas. It firms and refines the skin by prompting your body to make fresh collagen, the protein that keeps skin tight and smooth.",
        ],
      },
      { type: "h2", text: "What is plasma fibroblast?" },
      {
        type: "p",
        content: [
          "Plasma fibroblast is a skin-tightening treatment that uses a fine plasma arc to create tiny, controlled points on the surface of the skin. Those points trigger fibroblast cells, the cells in the ",
          { text: "deeper layer of your skin", href: SKIN_EXPLAINED },
          ", to produce new collagen and contract the surrounding tissue. The result is a gradual lift and tightening, without a scalpel, stitches or injectables.",
        ],
      },
      {
        type: "p",
        content: [
          "It suits areas where laxity is the main concern and where other treatments are harder to use, such as the upper eyelids, around the lips and along the neck.",
        ],
      },
      { type: "h2", text: "How does plasma fibroblast work?" },
      {
        type: "p",
        content: [
          "A handheld plasma pen delivers focused energy just above the skin, creating a small thermal reaction on contact. That controlled micro-injury clears tired surface cells and signals the skin to repair. As it heals, collagen and elastin rebuild, firming the area over the following weeks. Most people see the first change within a couple of weeks, and results keep developing as the collagen matures.",
        ],
      },
      { type: "h2", text: "What plasma fibroblast can treat" },
      {
        type: "ul",
        items: [
          "Upper eyelid hooding and tired-looking eyes",
          "Fine lines around the eyes, mouth and forehead",
          "Mild to moderate skin laxity on the face and neck",
          "Uneven tone and pigmentation",
          "Loose skin on the stomach, jowls and neck",
        ],
      },
      {
        type: "p",
        content: [
          "If your main concern is overall loss of firmness rather than a single area, it is worth reading our guide to ",
          { text: "anti-ageing treatments", href: "/anti-ageing" },
          " as well, since a combined plan often works better than one treatment alone.",
        ],
      },
      { type: "h2", text: "The benefits" },
      {
        type: "ul",
        items: [
          "Non-invasive, with no cuts or stitches",
          "Long-lasting results, depending on your skin and how you care for it",
          "Works across delicate areas other devices struggle with",
          "Natural-looking, because it uses your own collagen",
          "Short, manageable recovery",
        ],
      },
      { type: "h2", text: "What to expect on the day and after" },
      {
        type: "p",
        content: [
          "We start with a proper skin assessment to confirm plasma fibroblast is right for you. We apply numbing cream for comfort, then treat the area, which usually takes 30 to 60 minutes. Small carbon crusts form over the treated points and fall away on their own over about a week. Keep the area clean and dry, avoid picking, and protect it from the sun while it heals.",
        ],
      },
      {
        type: "p",
        content: [
          "Daily sun protection matters more than people expect, both for healing and for keeping your results. ",
          { text: "Cancer Council Australia", href: SUN_SAFETY },
          " recommends SPF 50 or 50+ as part of everyday sun safety, and we ask every client to wear it after treatment.",
        ],
      },
      { type: "h2", text: "Is plasma fibroblast right for you?" },
      {
        type: "p",
        content: [
          "Plasma fibroblast suits people with mild to moderate laxity who want a firmer result without surgery. It is not for everyone, and deeper sagging is sometimes better treated another way. The honest answer comes from a consultation, where we look at your skin in person and tell you what will actually help. You can ",
          { text: "book a skin consultation", href: "/contact" },
          " to start.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How long do plasma fibroblast results last?",
            a: "Because the treatment builds your own collagen, results can last a few years depending on your skin type, age and sun protection. Skin keeps ageing naturally, so occasional top-ups help maintain the effect.",
          },
          {
            q: "Does plasma fibroblast hurt?",
            a: "We apply numbing cream beforehand, so most people feel warmth and small pricking rather than pain. The treated area can feel tight and a little tender for a day or two afterwards.",
          },
          {
            q: "How many sessions will I need?",
            a: "Many areas respond well to one session, with some needing a second after eight to twelve weeks for the best result. We give you a realistic plan at your consultation.",
          },
          {
            q: "What is the downtime?",
            a: "Expect small scabs over the treated points for about a week, along with mild redness and swelling. Most people plan it around a few quieter days and continue normal life with diligent sun protection.",
          },
        ],
      },
    ],
  },
  {
    slug: "achieve-younger-looking-skin-with-hifu-treatment-in-melbourne",
    title: "HIFU treatment in Melbourne: lift and firm skin without surgery",
    date: "2025-03-21",
    excerpt:
      "HIFU treatment in Melbourne lifts and firms skin using focused ultrasound, with no surgery and no downtime. How it works, results, what to expect and aftercare.",
    image: "/images/treatments/hifu.jpg",
    relatedTreatment: "/hifu-treatment-page",
    readMinutes: 6,
    body: [
      {
        type: "p",
        content: [
          "By our mid-thirties, the skin's support structure starts to soften, and the jawline and neck are usually the first places it shows. HIFU treatment in Melbourne offers a way to lift and firm those areas without surgery or downtime, by working deep below the surface where creams cannot reach.",
        ],
      },
      { type: "h2", text: "What is HIFU?" },
      {
        type: "p",
        content: [
          "HIFU stands for high-intensity focused ultrasound. It directs ultrasound energy to precise depths under the skin to heat tiny target points, which prompts a natural ",
          { text: "collagen", href: SKIN_EXPLAINED },
          " response in the same deep layer a surgical facelift addresses. The surface stays intact, so there is nothing to heal on top.",
        ],
      },
      { type: "h2", text: "Why people choose HIFU" },
      {
        type: "ul",
        items: [
          "Non-surgical, with no cuts, stitches or long recovery",
          "Minimal downtime, so you return to normal activities straight away",
          "Long-lasting, with results that typically hold for 12 to 18 months",
          "Suitable for most skin types and tones",
        ],
      },
      { type: "h2", text: "The benefits" },
      {
        type: "ul",
        items: [
          "Lifts and tightens the cheeks, jawline and neck",
          "Boosts collagen and elastin for firmer skin",
          "Comfortable, with only mild warmth or tingling during treatment",
          "Treats several areas, including the face, neck and décolletage",
        ],
      },
      { type: "h2", text: "What to expect during and after treatment" },
      {
        type: "p",
        content: [
          "A session takes around 30 to 90 minutes depending on the areas treated. We assess your skin first and can apply a topical numbing cream for comfort. You feel short pulses of warmth as the energy is delivered. Afterwards there may be mild redness or slight tenderness that settles within hours.",
        ],
      },
      {
        type: "p",
        content: [
          "The lift is gradual on purpose. Some tightening shows early, but the real change builds over eight to twelve weeks as new collagen forms. Sun protection helps protect that investment, so daily ",
          { text: "SPF", href: SUN_SAFETY },
          " is part of the plan.",
        ],
      },
      { type: "h2", text: "HIFU compared with other options" },
      {
        type: "p",
        content: [
          "HIFU is a lifting treatment, so it pairs well with treatments that work on the surface. If your concern is texture or scarring rather than laxity, ",
          { text: "microneedling", href: "/microneedling-treatment" },
          " may suit you better, and many people use both for different goals. We cover the differences in detail in our ",
          {
            text: "HIFU versus other treatments guide",
            href: "/blog/hifu-vs-other-treatments-which-is-better",
          },
          ".",
        ],
      },
      { type: "h2", text: "Is HIFU right for you?" },
      {
        type: "p",
        content: [
          "HIFU suits people with early to moderate sagging who want a natural lift without surgery. Very advanced laxity is sometimes better addressed another way, which is why we assess every client in person first. You can ",
          { text: "book a consultation", href: "/contact" },
          " to find out if it fits your goals.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How long do HIFU results last?",
            a: "Most people see results lasting 12 to 18 months. Because skin keeps ageing, a maintenance session about once a year helps keep collagen production active.",
          },
          {
            q: "Is there any downtime after HIFU?",
            a: "Very little. You can return to normal activities the same day, including makeup. Mild redness or tenderness usually settles within hours.",
          },
          {
            q: "Does HIFU hurt?",
            a: "Most people describe brief warmth or tingling during the pulses rather than pain. A numbing cream can be applied for comfort.",
          },
          {
            q: "When will I see HIFU results?",
            a: "Some tightening appears early, with the full lifting effect developing over eight to twelve weeks as new collagen forms.",
          },
        ],
      },
    ],
  },
  {
    slug: "achieve-glowing-skin-with-sqt-bio-microneedling-in-melbourne-2025",
    title: "SQT bio-microneedling in Melbourne: needle-free skin renewal",
    date: "2025-03-21",
    excerpt:
      "SQT bio-microneedling in Melbourne renews tone, texture and glow using marine-collagen spicules, with no needles. Benefits, how it works, sessions and aftercare.",
    image: "/images/treatments/sqt.webp",
    relatedTreatment: "/sqt-bio-microneedling-treatment",
    readMinutes: 6,
    body: [
      {
        type: "p",
        content: [
          "Most people want the results of microneedling without the idea of needles, and that is exactly the gap SQT bio-microneedling fills. It renews tone and texture and brings back glow, using natural marine-collagen spicules instead of a needle cartridge.",
        ],
      },
      { type: "h2", text: "What is SQT bio-microneedling?" },
      {
        type: "p",
        content: [
          "SQT uses millions of microscopic spicules made from marine collagen. A spicule is a tiny natural spine, and when massaged into the skin they embed gently into the upper layers and act like natural microneedles. They open fine channels so active ingredients absorb better, while triggering a strong self-renewal response. There are no needles and no broken skin.",
        ],
      },
      { type: "h2", text: "The benefits" },
      {
        type: "ul",
        items: [
          "Softens fine lines and wrinkles by supporting collagen",
          "Refines texture, including acne scarring and enlarged pores",
          "Brightens dull, tired skin",
          "Helps fade pigmentation and post-acne marks",
          "Improves the look of stretch marks",
        ],
      },
      {
        type: "p",
        content: [
          "If your main concern is rough or uneven skin, our guide to ",
          { text: "texture and tone", href: "/texture-tone" },
          " explains how SQT fits alongside other resurfacing options.",
        ],
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        content: [
          "The spicules create thousands of tiny channels in the skin. That mild, controlled stimulation prompts your skin's natural repair response, building fresh ",
          { text: "collagen and elastin", href: SKIN_EXPLAINED },
          " over the following weeks while the channels help nourishing serums absorb more deeply.",
        ],
      },
      { type: "h2", text: "Who is SQT for?" },
      {
        type: "p",
        content: [
          "SQT suits most skin types, including sensitive skin. If you have active acne, eczema or another flare-up, we wait until your skin settles before treating. We always assess your skin first and tailor the plan to you.",
        ],
      },
      { type: "h2", text: "How many sessions will I need?" },
      {
        type: "p",
        content: [
          "Some people notice a difference after one session, but the strongest results usually come from a course of three to six sessions, spaced four to six weeks apart, with occasional maintenance after that. If it is your first time, our guide on ",
          {
            text: "how to prepare for your first SQT treatment",
            href: "/blog/prepare-for-your-first-sqt-treatment",
          },
          " walks you through it.",
        ],
      },
      { type: "h2", text: "Aftercare" },
      {
        type: "ul",
        items: [
          "Avoid direct sun for a few days and wear SPF 50 or 50+ daily",
          "Use gentle, hydrating products",
          "Skip makeup for 24 to 48 hours",
          "Cleanse gently while your skin settles",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Is SQT bio-microneedling painful?",
            a: "It is needle-free and generally well tolerated. You may feel mild heat, tingling or prickling as the spicules work in, which settles quickly.",
          },
          {
            q: "How long until I see results?",
            a: "Many people see brighter, smoother skin within seven to ten days, with results building over a course as collagen renews.",
          },
          {
            q: "Can I wear makeup afterwards?",
            a: "We recommend skipping makeup for 24 to 48 hours so your skin can settle, then returning to your normal routine.",
          },
          {
            q: "How is SQT different from regular microneedling?",
            a: "Regular microneedling uses fine needles to create channels. SQT uses natural marine-collagen spicules instead, so there are no needles and no broken skin, with a gentler recovery.",
          },
        ],
      },
    ],
  },
  {
    slug: "hifu-treatment-melbourne-the-non-surgical-solution-for-stubborn",
    title: "HIFU for stubborn stomach fat in Melbourne: a non-surgical option",
    date: "2025-03-21",
    excerpt:
      "HIFU for the stomach in Melbourne targets stubborn fat and loose skin with focused ultrasound, no surgery. How it works, the benefits, and what to expect.",
    image: "/images/treatments/hifu.jpg",
    relatedTreatment: "/hifu-treatment-page",
    readMinutes: 5,
    body: [
      {
        type: "p",
        content: [
          "Stubborn belly fat that holds on despite a good diet and regular exercise is one of the most common frustrations we hear. HIFU offers a non-invasive way to target the area, firming loose skin and helping contour the stomach without surgery.",
        ],
      },
      { type: "h2", text: "How does HIFU work on the stomach?" },
      {
        type: "p",
        content: [
          "HIFU directs focused ultrasound energy to set depths beneath the skin while leaving the surface untouched. The energy gently heats and breaks down targeted fat cells, which your body then clears through its natural processes over the following weeks. At the same time it stimulates ",
          { text: "collagen", href: SKIN_EXPLAINED },
          " to firm and tighten the overlying skin.",
        ],
      },
      { type: "h2", text: "The benefits" },
      {
        type: "ul",
        items: [
          "Non-invasive, with no incisions, stitches or scarring",
          "Precise, targeting deeper fat and skin laxity",
          "Minimal downtime, so you resume daily life straight away",
          "Gradual, natural-looking definition",
          "Firmer skin as collagen rebuilds",
        ],
      },
      { type: "h2", text: "What HIFU on the stomach is, and is not" },
      {
        type: "p",
        content: [
          "HIFU is a contouring and skin-firming treatment, not a weight-loss program or a substitute for one. It works best for a defined pocket of stubborn fat and mild laxity in someone already close to their goal, rather than for large-volume fat reduction. We will always be honest about whether it suits your goals.",
        ],
      },
      { type: "h2", text: "What to expect" },
      {
        type: "p",
        content: [
          "We start with a consultation to assess the area and set realistic expectations. The treatment itself uses warmth and short pulses of energy, and most people find it comfortable. Results build gradually over several weeks. For overall lifting and firming on the face and neck, see our main ",
          { text: "HIFU treatment page", href: "/hifu-treatment-page" },
          ".",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Is HIFU a weight-loss treatment?",
            a: "No. HIFU helps contour a defined area of stubborn fat and firm loose skin. It is not a weight-loss program and works best alongside a healthy lifestyle.",
          },
          {
            q: "How many sessions will I need on the stomach?",
            a: "It depends on the area and your goals. We give you a realistic plan at consultation rather than a one-size answer.",
          },
          {
            q: "Is there downtime?",
            a: "Minimal. You can usually return to normal activities the same day, with any mild redness settling quickly.",
          },
        ],
      },
    ],
  },
  {
    slug: "prepare-for-your-first-sqt-treatment",
    title: "How to prepare for your first SQT bio-microneedling treatment",
    date: "2024-12-10",
    excerpt:
      "A simple guide to preparing for your first SQT bio-microneedling treatment, including what to do before, on the day, and how to care for your skin afterwards.",
    image: "/images/treatments/sqt.webp",
    relatedTreatment: "/sqt-bio-microneedling-treatment",
    readMinutes: 5,
    body: [
      {
        type: "p",
        content: [
          "A little preparation makes a real difference to how comfortable your first SQT treatment feels and how well your skin responds. SQT bio-microneedling, sometimes called collagen induction therapy, uses fine marine-collagen spicules to create controlled micro-channels that prompt your skin to repair and rebuild collagen. Here is how to get ready.",
        ],
      },
      { type: "h2", text: "Start with research and a consultation" },
      {
        type: "ul",
        items: [
          "Choose a reputable provider and read genuine client reviews",
          "Book a consultation with a qualified, experienced practitioner",
          "Talk through your goals, medical history and any concerns",
          "Let your practitioner assess your skin and confirm you are a good candidate",
        ],
      },
      {
        type: "p",
        content: [
          "If you are still deciding whether SQT is right for you, our overview of ",
          {
            text: "SQT bio-microneedling",
            href: "/sqt-bio-microneedling-treatment",
          },
          " explains what it treats and who it suits.",
        ],
      },
      { type: "h2", text: "In the week before" },
      {
        type: "ul",
        items: [
          "Avoid sun exposure and don't arrive with a fresh tan or sunburn",
          "Pause retinol, strong acids or any products your practitioner flags",
          "Skip other facials, waxing or harsh exfoliation on the area",
          "Stay hydrated and keep your skin barrier calm",
        ],
      },
      {
        type: "p",
        content: [
          "Sun exposure is the one to take seriously. Treated skin is more sensitive, and good ",
          { text: "sun protection", href: SUN_SAFETY },
          " before and after helps you heal well and protects your results.",
        ],
      },
      { type: "h2", text: "On the day" },
      {
        type: "p",
        content: [
          "Arrive with clean, makeup-free skin. We cleanse the area first, then massage the spicules into the surface to create the micro-channels. You may feel mild pressure, warmth or prickling, and we adjust to keep you comfortable. The treatment is needle-free, so there is no broken skin.",
        ],
      },
      { type: "h2", text: "Aftercare and recovery" },
      {
        type: "p",
        content: [
          "Your skin may look a little flushed and feel like mild sunburn for a day or two, which is normal. Keep to gentle, hydrating products, avoid makeup for 24 to 48 hours, and stay out of direct sun while it settles. Most people see brighter, smoother skin within seven to ten days.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "What should I do the day before my SQT treatment?",
            a: "Avoid sun, tanning and harsh actives like retinol or strong acids, and skip other facials or waxing on the area. Arrive with clean, well-hydrated skin.",
          },
          {
            q: "Can I wear makeup to my appointment?",
            a: "Come with clean, makeup-free skin if you can. We cleanse the area before starting, and we recommend skipping makeup for 24 to 48 hours afterwards.",
          },
          {
            q: "How long does the treatment take?",
            a: "A typical session runs around 45 to 60 minutes including preparation, though this varies with the areas treated.",
          },
          {
            q: "How soon will I see results?",
            a: "Many people notice an improvement in texture and tone within seven to ten days, with results building over a course of sessions.",
          },
        ],
      },
    ],
  },
  {
    slug: "hifu-vs-other-treatments-which-is-better",
    title: "HIFU vs other treatments: which skin-tightening option is better?",
    date: "2024-12-10",
    excerpt:
      "HIFU vs radiofrequency, microneedling, fillers and peels. A clear comparison of how each works and when HIFU is the better skin-tightening choice.",
    image: "/images/treatments/hifu.jpg",
    relatedTreatment: "/hifu-treatment-page",
    readMinutes: 7,
    body: [
      {
        type: "p",
        content: [
          "There are more non-surgical skin treatments than ever, which makes choosing one harder, not easier. This is an honest look at how HIFU compares with radiofrequency, microneedling, dermal fillers and chemical peels, so you can see where each one earns its place.",
        ],
      },
      { type: "h2", text: "Why HIFU stands out for lifting" },
      {
        type: "p",
        content: [
          "HIFU uses focused ultrasound to reach the deep support layer of the face, the same layer a surgical facelift targets, and stimulate ",
          { text: "collagen", href: SKIN_EXPLAINED },
          " there. That depth is why it lifts rather than just refreshes the surface.",
        ],
      },
      {
        type: "ul",
        items: [
          "Reaches the deep SMAS layer for genuine lifting",
          "Results that can last 12 to 18 months from one or two sessions",
          "Non-invasive, with no cuts, stitches or prolonged downtime",
          "Improves firmness, smoothness and elasticity",
          "Can be tailored to the face, neck and décolletage",
        ],
      },
      { type: "h2", text: "HIFU vs radiofrequency" },
      {
        type: "p",
        content: [
          "Radiofrequency heats the upper layers of skin to tighten gradually and often needs several sessions for a clear change. HIFU reaches deeper, so it tends to lift more effectively in fewer sessions. Radiofrequency can be a good option for very superficial tightening.",
        ],
      },
      { type: "h2", text: "HIFU vs microneedling" },
      {
        type: "p",
        content: [
          "Microneedling is excellent for texture, scarring and fine lines, but it does not lift. HIFU adds genuine tightening and deep collagen stimulation. These two solve different problems, and many people use both. You can read more about ",
          { text: "microneedling", href: "/microneedling-treatment" },
          " and how it improves the skin's surface.",
        ],
      },
      { type: "h2", text: "HIFU vs dermal fillers" },
      {
        type: "p",
        content: [
          "Fillers add instant volume in a specific spot, but they do not address sagging or build your own collagen. HIFU lifts and rejuvenates more broadly by working with your skin's own structure, so the two are often complementary rather than competing.",
        ],
      },
      { type: "h2", text: "HIFU vs chemical peels" },
      {
        type: "p",
        content: [
          "Peels refine texture and pigmentation at the surface, which is great for tone and clarity, but they do not tighten loose skin. HIFU works deeper to firm and lift while encouraging long-term collagen. Pairing surface and deep treatments often gives the most complete result.",
        ],
      },
      { type: "h2", text: "Who is HIFU best for?" },
      {
        type: "ul",
        items: [
          "Softening sagging on the face, neck or jawline",
          "Reducing the look of fine lines and wrinkles",
          "A natural lift without surgery",
          "Firmer, more elastic, more radiant skin",
        ],
      },
      {
        type: "p",
        content: [
          "The right choice depends on your skin and your goal, and the honest answer comes from an assessment in person. You can ",
          { text: "book a consultation", href: "/contact" },
          " and we will tell you whether HIFU, or something else, is the better fit. Remember that whatever you choose, daily ",
          { text: "sun protection", href: SUN_SAFETY },
          " keeps your results going for longer.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Is HIFU better than radiofrequency?",
            a: "For genuine lifting, HIFU usually has the edge because it reaches the deeper support layer. Radiofrequency can suit very superficial tightening and is sometimes used alongside HIFU.",
          },
          {
            q: "Can I combine HIFU with microneedling?",
            a: "Yes. They target different things, lifting versus surface texture, so many people use both. We sequence them so they support each other.",
          },
          {
            q: "How long do HIFU results last compared with fillers?",
            a: "HIFU results typically last 12 to 18 months and rely on your own collagen. Fillers last until the product breaks down and add volume rather than lift, so the two are often used together.",
          },
        ],
      },
    ],
  },
];

export function getPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
