#!/usr/bin/env node
// Take the source Leyla D logo (which has a non-transparent silver/grey background)
// and emit a clean PNG where:
//   - background-ish pixels become fully transparent
//   - everything else becomes pure black, preserving anti-aliased edge alpha
//
// Source is kept at scripts/_logo-source.png so we can re-run the chroma key
// from the original without compounding earlier passes.
//
// Run from project root: node scripts/clean-logo.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "scripts/_logo-source.png");
const OUT_HEADER = path.join(ROOT, "public/images/logo/header.png");
const OUT_FOOTER = path.join(ROOT, "public/images/logo/footer.png");

// Anything brighter than this is background and gets wiped to fully transparent.
// Anything darker is logo and stays solid black. The band between gets
// proportional alpha to keep edges anti-aliased without leaving a grey halo.
const TRANSPARENT_ABOVE = 140;
const SOLID_BELOW = 95;

async function run() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum >= TRANSPARENT_ABOVE) {
      // background — fully transparent
      data[i + 3] = 0;
    } else if (lum <= SOLID_BELOW) {
      // solid logo — pure black, keep existing alpha
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
    } else {
      // narrow edge band — partial transparent black
      const ratio =
        (TRANSPARENT_ABOVE - lum) / (TRANSPARENT_ABOVE - SOLID_BELOW);
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = Math.round(data[i + 3] * ratio);
    }
  }

  const out = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toBuffer();

  await sharp(out).toFile(OUT_HEADER);
  await sharp(out).toFile(OUT_FOOTER);

  console.log(
    `✓ cleaned ${info.width}x${info.height} (thresholds ${SOLID_BELOW}/${TRANSPARENT_ABOVE}) → header.png + footer.png`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
