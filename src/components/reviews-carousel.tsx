"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/reviews";

const AUTO_ADVANCE_MS = 7000;

function Stars({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  } as const;
  return (
    <div className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(sizes[size], "fill-ink stroke-ink")}
        />
      ))}
    </div>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}

export function ReviewsHeader({
  rating = 5.0,
  count,
}: {
  rating?: number;
  count?: string | number;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <Stars size="lg" />
      <p className="text-eyebrow text-muted-ink">
        {rating.toFixed(1)} out of 5{count ? ` · ${count} reviews` : ""}
      </p>
      <span className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5">
        <GoogleG className="h-3.5 w-3.5" />
        <span className="text-eyebrow text-ink">Verified by Google</span>
      </span>
    </div>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance every 7s, paused on hover
  useEffect(() => {
    if (isHovering || reviews.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [isHovering, reviews.length]);

  // Scroll active card into view
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[activeIndex] as HTMLElement | undefined;
    if (!card) return;
    scroller.scrollTo({
      left: card.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  // Update activeIndex when user manually scrolls
  function onScroll() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.children) as HTMLElement[];
    const scrollLeft = scroller.scrollLeft;
    let closestIdx = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scroller.offsetLeft - scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });
    if (closestIdx !== activeIndex) setActiveIndex(closestIdx);
  }

  function go(direction: -1 | 1) {
    setActiveIndex((i) => {
      const next = i + direction;
      if (next < 0) return reviews.length - 1;
      if (next >= reviews.length) return 0;
      return next;
    });
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative"
    >
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <figure
            key={i}
            className="shrink-0 snap-center w-[88%] sm:w-[60%] lg:w-[40%] xl:w-[32%] border-t border-hairline pt-6 space-y-4"
          >
            <Stars size="sm" />
            <p className="text-body leading-relaxed">&ldquo;{r.body}&rdquo;</p>
            <figcaption className="text-sm">
              <span className="font-medium">{r.name}</span>
              {r.treatment && (
                <span className="text-muted-ink"> · {r.treatment}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-10 gap-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Review">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                i === activeIndex
                  ? "w-10 bg-ink"
                  : "w-1.5 bg-hairline hover:bg-muted-ink"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="inline-flex h-10 w-10 items-center justify-center border border-hairline hover:border-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="inline-flex h-10 w-10 items-center justify-center border border-hairline hover:border-ink transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
