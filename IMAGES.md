# Image Manifest

The site has the design and code wired for editorial B&W photography. Images live in `public/images/` and are converted to grayscale via CSS at render time — so just drop JPG/PNG/WebP files at the paths below and they'll appear styled correctly.

## Current state

### ✓ Loaded
- `public/images/home/hero.jpg` — your reference editorial portrait (Image20260505105038.jpg)
- `public/images/treatments/hifu.jpg` · `facials.jpg` · `plasma-fibroblast.jpg` · `microneedling.jpg` · `sqt.webp` · `skin-tag.jpg` · `brow-lamination.jpg` · `lash-lift.png` — pulled from current leylad.com.au
- `public/images/treatments/ig-consistency.jpg` · `ig-healthy-skin.jpg` — pulled from Instagram (signed CDN URLs that worked)
- `public/images/partners/medik8.webp` · `calecim.webp` · `sqt.webp` · `brow-code.webp` · `simka.webp` — partner logos

### ⚠ Failed Instagram downloads (need manual save)

Instagram CDN URLs are time-signed and 4 of 8 expired before we could download. To get the rest, open each Instagram post in your browser, right-click the image → **Save image as...**, and save with the suggested filename below:

| Instagram post | Save as |
|---|---|
| [DSqzyVKjssf — exosomes + treatments](https://www.instagram.com/p/DSqzyVKjssf/) | `public/images/treatments/ig-exosomes.jpg` |
| [DPkijmpAed1](https://www.instagram.com/p/DPkijmpAed1/) | `public/images/treatments/ig-04.jpg` |
| [DO96t5fiHwa](https://www.instagram.com/p/DO96t5fiHwa/) | `public/images/treatments/ig-05.jpg` |
| [DMO0l1DMfDT](https://www.instagram.com/p/DMO0l1DMfDT/) | `public/images/treatments/ig-06.jpg` |
| [DIh7eiqPts-](https://www.instagram.com/p/DIh7eiqPts-/) | `public/images/treatments/ig-07.jpg` |
| [DHcZ__Bvu0c](https://www.instagram.com/p/DHcZ__Bvu0c/) | `public/images/treatments/ig-08.jpg` |

Once dropped in, edit `src/lib/treatments.ts` and replace the gallery entries to use the new files (or tell me to do it).

## How galleries work

Each treatment has a `gallery: [main, second, third?]` array. The `TreatmentGallery` component renders these as one tall portrait + 1-2 square images stacked. Filter applies grayscale + slight contrast automatically.

## Adding more images later

1. Drop the file into `public/images/treatments/<descriptive-name>.jpg`
2. In `src/lib/treatments.ts`, swap the corresponding entry's `image` or add to its `gallery` array
3. Save — hot reload picks it up
