import type { Metadata } from "next";
import { ConcernPage } from "@/components/concern-page";
import { getConcern } from "@/lib/concerns";

const concern = getConcern("/anti-ageing")!;

export const metadata: Metadata = {
  title: `${concern.name} — skin concern`,
  description: concern.intro,
};

export default function Page() {
  return <ConcernPage concern={concern} />;
}
