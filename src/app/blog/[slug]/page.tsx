import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import {
  POSTS,
  getPost,
  getPosts,
  formatPostDate,
  type Inline,
} from "@/lib/blog";
import { getTreatment } from "@/lib/treatments";

function InlineContent({ content }: { content: Inline[] }) {
  return (
    <>
      {content.map((seg, i) => {
        if (typeof seg === "string") return <span key={i}>{seg}</span>;
        const isInternal = seg.href.startsWith("/");
        if (isInternal) {
          return (
            <Link
              key={i}
              href={seg.href}
              className="text-ink underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              {seg.text}
            </Link>
          );
        }
        return (
          <a
            key={i}
            href={seg.href}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline underline-offset-4 decoration-1 hover:decoration-2"
          >
            {seg.text}
          </a>
        );
      })}
    </>
  );
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedTreatment
    ? getTreatment(post.relatedTreatment)
    : undefined;
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        {/* Header */}
        <section>
          <div className="container-site pt-12 md:pt-20 pb-10 md:pb-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-eyebrow text-muted-ink hover:text-ink transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Journal
            </Link>
            <div className="max-w-3xl mt-8 space-y-6">
              <p className="text-eyebrow text-muted-ink">
                {formatPostDate(post.date)}
                {post.readMinutes ? ` · ${post.readMinutes} min read` : ""}
              </p>
              <h1 className="text-h1">{post.title}</h1>
              <p className="text-body text-muted-ink">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Hero image */}
        {post.image && (
          <section>
            <div className="container-site pb-12 md:pb-16">
              <SkinPhoto
                src={post.image}
                ratio="landscape"
                alt={post.title}
                priority
              />
            </div>
          </section>
        )}

        {/* Body */}
        <section>
          <div className="container-site pb-20 md:pb-28">
            <div className="max-w-2xl space-y-6">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="text-h3 text-ink pt-6">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="border-t border-hairline pt-3 text-body text-muted-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "faq") {
                  return (
                    <div key={i} className="pt-6 space-y-6">
                      <h2 className="text-h3 text-ink">
                        Frequently asked questions
                      </h2>
                      <dl>
                        {block.items.map((f) => (
                          <div
                            key={f.q}
                            className="border-t border-hairline py-6"
                          >
                            <dt className="text-body text-ink font-medium mb-2">
                              {f.q}
                            </dt>
                            <dd className="text-body text-muted-ink">{f.a}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-body text-muted-ink">
                    <InlineContent content={block.content} />
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </article>

      {/* Related treatment CTA */}
      <section className="bg-bone">
        <div className="container-site py-20 md:py-28 text-center space-y-8">
          <Eyebrow>{related ? "Related treatment" : "Ready"}</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            {related ? `Explore ${related.name}.` : "Book a skin consultation."}
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            {related
              ? related.tagline
              : "We'll assess your skin and walk you through the right plan."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <BookButton>Book a consultation</BookButton>
            {related && (
              <Link
                href={related.slug}
                className="text-sm font-medium tracking-wide underline underline-offset-8 decoration-1"
              >
                View treatment
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* More posts */}
      {more.length > 0 && (
        <section className="border-t border-hairline">
          <div className="container-site py-20 md:py-28">
            <div className="mb-12">
              <Eyebrow>More from the journal</Eyebrow>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <SkinPhoto
                      src={p.image}
                      ratio="portrait"
                      alt={p.title}
                      className="mb-5 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                    <p className="text-eyebrow text-muted-ink mb-3">
                      {formatPostDate(p.date)}
                    </p>
                    <h3 className="text-h3">{p.title}</h3>
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
