import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { SkinPhoto } from "@/components/skin-photo";
import { getPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Skincare Tips & Treatment Guides, Point Cook",
  description:
    "Expert skincare tips and treatment guides from our Point Cook clinic, covering HIFU, laser, microneedling and more. Read the Leyla D journal today.",
};

export default function BlogPage() {
  const posts = getPosts();
  const [lead, ...rest] = posts;

  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="max-w-3xl space-y-8">
            <Eyebrow>Journal</Eyebrow>
            <h1 className="text-display">Skin notes.</h1>
            <p className="text-body max-w-xl text-muted-ink">
              Honest writing on what actually works for skin, the treatments we
              offer, how to prepare, and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Lead post */}
      {lead && (
        <section>
          <div className="container-site pb-16 md:pb-24">
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7">
                <SkinPhoto
                  src={lead.image}
                  ratio="landscape"
                  alt={lead.title}
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  priority
                />
              </div>
              <div className="lg:col-span-5 space-y-5">
                <p className="text-eyebrow text-muted-ink">
                  {formatPostDate(lead.date)}
                </p>
                <h2 className="text-h1">{lead.title}</h2>
                <p className="text-body text-muted-ink max-w-xl">
                  {lead.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-8 decoration-1">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining posts */}
      {rest.length > 0 && (
        <section className="border-t border-hairline">
          <div className="container-site py-20 md:py-28">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <SkinPhoto
                      src={post.image}
                      ratio="portrait"
                      alt={post.title}
                      className="mb-5 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                    <p className="text-eyebrow text-muted-ink mb-3">
                      {formatPostDate(post.date)}
                    </p>
                    <h3 className="text-h3">{post.title}</h3>
                    <p className="text-sm text-muted-ink mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
