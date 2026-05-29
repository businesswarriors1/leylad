import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/acne-scarring")!;

export const metadata: Metadata = {
  title: "Acne Scarring Treatment, Point Cook Melbourne",
  description:
    "Smooth acne scarring with expert laser, microneedling and resurfacing in Point Cook. Visible results from our 5-star skin clinic. Book a consult.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
