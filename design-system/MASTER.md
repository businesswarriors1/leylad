# Leyla D — Design System (Master)

> Editorial monochrome skin clinic. Pure white + warm bone + ink. B&W close-up skin photography. Magazine-grade typography. No greys. No colour accent.

---

## 1. Brand Direction

**Positioning:** Specialist skin clinic in Werribee. Read as authoritative and considered — not a generalist beauty salon.

**Voice:**
- Quiet confidence, never loud.
- Outcome-led, not founder-led. Avoid "Leyla" by name on the public site (use "the clinic", "our team", "we").
- Use specifics (Cosmelan, HIFU, Q-Switch laser) rather than vague claims.
- Australian English. Lowercase preferred for tags and labels.

**Anti-patterns:**
- Pastels, gradients, rose-gold, bling.
- Stock-photo founder portraits, generic spa imagery, lifestyle models smiling at salads.
- Emoji icons, decorative shadows, animated heroes.
- Grey-on-grey hierarchy. Soft grey backgrounds.

---

## 2. Colour Tokens

All colours in OKLCH for Tailwind v4. **There is no colour accent — contrast does the work.**

```css
@theme {
  --color-paper: oklch(100% 0 0);          /* #FFFFFF — primary surface */
  --color-bone:  oklch(97.5% 0.005 80);    /* #F7F5F2 — warm off-white, used sparingly for alternating sections */
  --color-ink:   oklch(15% 0 0);           /* #0A0A0A — text, primary CTA */
  --color-hairline: oklch(91% 0.003 80);   /* #E8E4DF — thin dividers only */
  --color-muted-ink: oklch(35% 0 0);       /* #4A4A4A — only for de-emphasised captions, never body */
  --color-destructive: oklch(58% 0.20 28); /* #EF4444 — form errors only */
}
```

**Usage rules:**
- Default background = `paper`. Alternating section bg = `bone` (max 1–2 sections per page).
- Body text = `ink` on `paper` or `bone`. Contrast is always ≥ 14:1.
- Dividers = `hairline`, 1px, never thicker.
- **Never** `muted-ink` for body text. It's only for image captions, meta info, and form helper text.

---

## 3. Typography

```css
@theme {
  --font-display: "Playfair Display", Georgia, serif;
  --font-body:    "Inter", -apple-system, system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
}
```

**Scale (mobile → desktop):**

| Token | Mobile | Desktop | Family | Use |
|---|---|---|---|---|
| `text-display` | 56px / 1.0 | 96px / 0.95 | Playfair, weight 400 | Hero headline only |
| `text-h1` | 40px / 1.05 | 64px / 1.0 | Playfair, weight 400 | Page titles |
| `text-h2` | 32px / 1.1 | 48px / 1.05 | Playfair, weight 400 | Section headings |
| `text-h3` | 22px / 1.2 | 28px / 1.2 | Playfair, weight 400 | Card titles, sub-sections |
| `text-body` | 16px / 1.6 | 18px / 1.65 | Inter, weight 400 | Body |
| `text-small` | 14px / 1.5 | 14px / 1.55 | Inter, weight 400 | Captions, meta |
| `text-eyebrow` | 11px / 1 | 12px / 1 | Inter, weight 500, tracking 0.18em, uppercase | Section eyebrows |

**Rules:**
- Headlines: Playfair, regular weight (400). Never bold Playfair — it reads heavy. Use size, not weight, for hierarchy.
- Body: Inter 400. Use 500 only for nav links and button labels.
- Line length: max 65 characters on body text. Use `max-w-prose` or `max-w-[60ch]`.
- Letter-spacing: tight (-0.02em) on display only. Default elsewhere.

---

## 4. Spacing & Layout

**Spacing scale:** Tailwind defaults (`4px` base). Use `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128` consistently.

**Section padding:**
- Mobile: `py-20` (80px)
- Tablet: `py-24` (96px)
- Desktop: `py-32` (128px)

**Container:**
- Default: `max-w-7xl mx-auto px-6 lg:px-12`
- Prose: `max-w-prose` (≈ 65ch)
- Full-bleed hero/imagery: no container

**Grid breakpoints:** 375 / 768 / 1024 / 1440

---

## 5. Effects

**Shadows:** None on cards. Use `border-hairline` (1px solid) for separation instead.

**Border radius:** `rounded-none` for cards and images. `rounded-full` for buttons only.

**Hover:**
- Links: underline appears on hover (`underline-offset-4`), 200ms ease-out.
- Buttons: subtle invert (ink↔paper) on hover, 200ms.
- Image cards: 1.02 scale on container only (image stays still), 400ms ease-out.

**Transitions:** Default `transition-all duration-200 ease-out`. Never longer than 400ms.

**No animations on scroll.** No parallax. No reveal-on-scroll. Respect `prefers-reduced-motion`.

---

## 6. Imagery

**Style:** B&W only on hero and section feature images. Skin-macro close-ups preferred — texture, pores, hands on skin, treatment in motion. Reference: editorial beauty, not stock-photo spa.

**Treatment of imagery:**
- Full-bleed hero, no inset frame.
- Aspect ratios: 4:5 (portrait), 3:2 (landscape), 1:1 (square) — pick one per section and commit.
- No overlay text on photos unless the photo is designed for it (lots of negative space).
- Compress aggressively. Use `next/image` with WebP/AVIF.

**Avoid:**
- Stock photos of smiling women in robes.
- Founder portraits on the homepage.
- Colour skincare-product flat-lays.

---

## 7. Components

### Button (single primary style)
```
class="inline-flex items-center justify-center
       h-12 px-8 rounded-full
       bg-ink text-paper
       text-sm font-medium tracking-wide uppercase
       hover:bg-paper hover:text-ink hover:ring-1 hover:ring-ink
       transition-all duration-200"
```
Secondary = same shape, `bg-paper text-ink ring-1 ring-ink`, invert on hover.

### Eyebrow label
Small uppercase, letter-spaced, ink colour, often above a heading:
```
class="text-eyebrow text-ink"
```

### Card (treatment)
- No background colour, no shadow, no rounded corners.
- 1px hairline divider top.
- Image (4:5 ratio, B&W) → eyebrow → h3 → 1-line description → arrow link.

### Stat block
- Huge Playfair number (text-display size), single line of meta below.
- e.g. `3,100` / `Services completed`

### Section eyebrow + heading pair
```
<p class="text-eyebrow text-ink">— skin</p>
<h2 class="text-h2 mt-4">Better skin starts here.</h2>
```

---

## 8. Accessibility

- Body contrast ≥ 14:1 (ink on paper).
- Focus rings: `ring-2 ring-ink ring-offset-2 ring-offset-paper` on all interactive elements.
- Touch targets ≥ 44×44px.
- Respect `prefers-reduced-motion` — disable image scale hovers.
- Heading hierarchy strict: h1 once per page, then h2 → h3.
- All images have alt text describing skin/treatment shown.

---

## 9. Hero copy direction

**Approved hero (homepage):**
> Better skin starts here.
>
> Advanced treatments for pigmentation, acne, and anti-ageing — right here in Werribee.

**Approved CTA label:** `Book a consultation`

---

## 10. Page-level overrides

See `design-system/pages/` — any deviations from this Master live there.
