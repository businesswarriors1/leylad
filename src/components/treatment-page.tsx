import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { SkinVideo } from "@/components/skin-video";
import { TreatmentGallery } from "@/components/treatment-gallery";

type FAQ = { q: string; a: string };

export function TreatmentPage({
  eyebrow,
  title,
  intro,
  image,
  imagePosition,
  videoSrc,
  videoPoster,
  gallery,
  galleryCaption,
  what,
  bestFor,
  process,
  aftercare,
  faqs,
  freshaNote,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imagePosition?: string;
  videoSrc?: string;
  videoPoster?: string;
  gallery?: string[];
  galleryCaption?: string;
  what?: string;
  bestFor?: string[];
  process?: { step: string; body: string }[];
  aftercare?: string;
  faqs?: FAQ[];
  freshaNote?: string;
}) {
  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="text-display">{title}</h1>
              <p className="text-body max-w-xl">{intro}</p>
              <BookButton>Book this treatment</BookButton>
            </div>
            <div className="lg:col-span-5">
              {videoSrc ? (
                <SkinVideo
                  src={videoSrc}
                  poster={videoPoster ?? image}
                  ratio="portrait"
                  ariaLabel={`${title} treatment in motion`}
                />
              ) : (
                <SkinPhoto
                  src={image}
                  ratio="portrait"
                  alt={`${title} treatment`}
                  priority
                  objectPosition={imagePosition}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {what && (
        <section className="bg-bone">
          <div className="container-site py-24 md:py-32 space-y-6">
            <Eyebrow>The treatment</Eyebrow>
            <h2 className="text-h1">What is it.</h2>
            <p className="text-body max-w-2xl">{what}</p>
          </div>
        </section>
      )}

      {bestFor && bestFor.length > 0 && (
        <section>
          <div className="container-site py-24 md:py-32 space-y-8">
            <Eyebrow>Best for</Eyebrow>
            <h2 className="text-h1">Indications.</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-3xl">
              {bestFor.map((item) => (
                <li
                  key={item}
                  className="border-t border-hairline py-5 text-h3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Editorial mood gallery */}
      <TreatmentGallery images={gallery} caption={galleryCaption} />

      {process && process.length > 0 && (
        <section className="bg-bone">
          <div className="container-site py-24 md:py-32 space-y-12">
            <div className="space-y-6">
              <Eyebrow>What to expect</Eyebrow>
              <h2 className="text-h1">How this works.</h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {process.map((p, i) => (
                <li key={i} className="space-y-4">
                  <p className="font-display text-5xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h3">{p.step}</h3>
                  <p className="text-sm text-muted-ink leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {aftercare && (
        <section>
          <div className="container-site py-24 md:py-32 space-y-6">
            <Eyebrow>After your appointment</Eyebrow>
            <h2 className="text-h1">Aftercare.</h2>
            <p className="text-body max-w-2xl">{aftercare}</p>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="bg-bone">
          <div className="container-site py-24 md:py-32 space-y-10">
            <div className="space-y-6">
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="text-h1">FAQ.</h2>
            </div>
            <dl className="max-w-3xl">
              {faqs.map((f, i) => (
                <div key={i} className="border-t border-hairline py-8">
                  <dt className="text-h3 mb-3">{f.q}</dt>
                  <dd className="text-body text-muted-ink max-w-2xl">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section>
        <div className="container-site py-24 md:py-32 text-center space-y-8">
          <Eyebrow>Ready</Eyebrow>
          <h2 className="text-h1 max-w-3xl mx-auto">
            Book your skin consultation.
          </h2>
          <p className="text-body max-w-xl mx-auto text-muted-ink">
            {freshaNote ??
              "Full pricing and availability live on our Fresha booking page."}
          </p>
          <div className="pt-2">
            <BookButton>Book a consultation</BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
