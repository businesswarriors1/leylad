import { cn } from "@/lib/utils";

// Video equivalent of SkinPhoto — applies the same editorial B&W treatment,
// supports the same aspect ratios, and autoplays muted/loop/playsInline so
// it behaves like an animated hero image. Provide a `poster` so the cover
// frame shows immediately before the video buffers.
export function SkinVideo({
  src,
  poster,
  ratio = "portrait",
  className,
  ariaLabel = "Treatment in motion",
  label,
}: {
  src: string;
  poster?: string;
  ratio?: "portrait" | "landscape" | "square";
  className?: string;
  ariaLabel?: string;
  label?: string;
}) {
  const ratioClass =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "landscape"
        ? "aspect-[3/2]"
        : "aspect-square";

  return (
    <figure
      aria-label={ariaLabel}
      className={cn(
        "relative w-full overflow-hidden bg-ink",
        ratioClass,
        className
      )}
    >
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover [filter:grayscale(1)_contrast(1.05)_brightness(1.02)]"
      />
      {label && (
        <figcaption className="absolute bottom-4 left-4 text-eyebrow text-paper/80">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
