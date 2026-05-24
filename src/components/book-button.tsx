import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

export function BookButton({
  variant = "primary",
  children = "Book a consultation",
  className,
}: {
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center h-12 px-8 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-200 ring-1 ring-ink";

  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-paper hover:text-ink"
      : "bg-paper text-ink hover:bg-ink hover:text-paper";

  return (
    <a
      href={SITE.booking}
      target="_blank"
      rel="noreferrer"
      className={cn(base, styles, className)}
    >
      {children}
    </a>
  );
}
