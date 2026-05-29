import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/pigmentation")!;

export const metadata: Metadata = {
  title: "Pigmentation & Melasma Treatment Point Cook",
  description:
    "Fade pigmentation, melasma and uneven tone with expert laser and Cosmelan treatments in Point Cook. See brighter, clearer skin. Book your skin consult.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
