import Image from "next/image";
import { cn } from "@/lib/utils";

// SkinPhoto renders either:
//   - a real image (when `src` is provided) treated with a B&W editorial filter
//   - a generated SVG skin-texture placeholder (default fallback)
//
// The filter mimics the high-contrast B&W reference: grayscale + a touch of
// contrast and brightness lift to feel editorial rather than dull.
export function SkinPhoto({
  src,
  ratio = "portrait",
  className,
  alt = "Close-up of skin texture",
  label,
  priority,
  objectPosition = "center",
}: {
  src?: string;
  ratio?: "portrait" | "landscape" | "square";
  className?: string;
  alt?: string;
  label?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  const ratioClass =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "landscape"
        ? "aspect-[3/2]"
        : "aspect-square";

  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden bg-ink",
        ratioClass,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
          priority={priority}
          className="object-cover [filter:grayscale(1)_contrast(1.05)_brightness(1.02)]"
          style={{ objectPosition }}
        />
      ) : (
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 400 500"
        >
          <defs>
            <radialGradient id="skinHi" cx="50%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#9A9A9A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
            </radialGradient>
            <radialGradient id="skinLo" cx="50%" cy="80%" r="80%">
              <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
            </radialGradient>
            <filter id="skinNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                stitchTiles="stitch"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#skinHi)" />
          <rect width="100%" height="100%" fill="url(#skinLo)" />
          <rect width="100%" height="100%" filter="url(#skinNoise)" />
        </svg>
      )}
      {label && (
        <figcaption className="absolute bottom-4 left-4 text-eyebrow text-paper/80">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
