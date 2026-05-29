import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/anti-ageing")!;

export const metadata: Metadata = {
  title: "Anti-Ageing Treatments Melbourne, Point Cook",
  description:
    "Smooth fine lines and restore firmness with non-surgical anti-ageing treatments in Melbourne. Tailored skin plans at our Point Cook clinic. Book today.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
