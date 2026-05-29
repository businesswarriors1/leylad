import { SkinPhoto } from "@/components/skin-photo";
import { Eyebrow } from "@/components/eyebrow";

// Editorial asymmetric gallery, one tall feature image + two stacked square
// images. Renders nothing when fewer than 2 images supplied.
export function TreatmentGallery({
  images,
  caption,
  eyebrow = "Mood",
}: {
  images?: string[];
  caption?: string;
  eyebrow?: string;
}) {
  if (!images || images.length < 2) return null;
  const [main, second, third] = images;

  return (
    <section className="bg-paper">
      <div className="container-site py-24 md:py-32">
        <div className="space-y-6 mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          {caption && <p className="text-h2 max-w-2xl">{caption}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7">
            <SkinPhoto
              src={main}
              ratio="portrait"
              alt="Editorial skin imagery"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            <SkinPhoto
              src={second}
              ratio="square"
              alt="Editorial skin imagery"
            />
            {third && (
              <SkinPhoto
                src={third}
                ratio="square"
                alt="Editorial skin imagery"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
