import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Skin notes and clinic updates from Leyla D in Point Cook.",
};

export default function BlogPage() {
  return (
    <section>
      <div className="container-site pt-12 md:pt-20 pb-32 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="text-display">Skin notes,
            <br />coming soon.</h1>
          <p className="text-body max-w-xl text-muted-ink">
            We&apos;re putting together a journal — short writing on what
            actually works for skin, what doesn&apos;t, and what we&apos;re
            seeing in clinic. Until then, the best place to start is a
            consultation.
          </p>
          <BookButton />
        </div>
      </div>
    </section>
  );
}
