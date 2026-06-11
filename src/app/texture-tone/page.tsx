import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/texture-tone")!;

export const metadata: Metadata = {
  title: "Skin Texture & Tone Treatment in Point Cook",
  description:
    "Refine rough texture, large pores and a dull surface with expert skin texture treatment in Point Cook. Smoother, brighter skin awaits. Book a consult.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
