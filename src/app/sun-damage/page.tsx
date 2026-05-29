import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/sun-damage")!;

export const metadata: Metadata = {
  title: "Sun Damage Treatment Melbourne, Point Cook",
  description:
    "Reverse sun spots, leathery texture and premature ageing with expert sun damage treatment in Melbourne. Non-surgical, results-driven. Book a skin consult.",
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
