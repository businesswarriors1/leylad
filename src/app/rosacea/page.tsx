import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/rosacea")!;

export const metadata: Metadata = {
  title: "Calming Rosacea & Redness Treatment Melbourne",
  description:
    "Calm rosacea, redness and flushing with gentle, expert rosacea treatment in Melbourne. Soothe reactive skin and rebuild your barrier. Book a consult.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
