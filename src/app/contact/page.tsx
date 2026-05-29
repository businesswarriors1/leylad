import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { SkinPhoto } from "@/components/skin-photo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit Our Skin Clinic in Point Cook",
  description:
    "Visit Leyla D skin clinic in Point Cook at 18 Boardwalk Boulevard. Call, email or book online via Fresha. Rated 5.0 from 670+ happy clients.",
};

const mapsQuery = encodeURIComponent(
  `${SITE.address.line1} ${SITE.address.suburb} ${SITE.address.state} ${SITE.address.postcode}`
);

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="container-site pt-12 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <Eyebrow>Visit</Eyebrow>
            <h1 className="text-display">
              We&apos;d love to
              <br />
              see you in clinic.
            </h1>
            <div className="space-y-1 text-h3 leading-snug">
              <p>{SITE.address.line1}</p>
              <p>
                {SITE.address.suburb} {SITE.address.state}{" "}
                {SITE.address.postcode}
              </p>
            </div>
            <div className="space-y-2 text-body">
              <p>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="hover:underline underline-offset-4"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
            <BookButton />
          </div>
          <div className="lg:col-span-5">
            <SkinPhoto
              src="/images/treatments/facials.jpg"
              ratio="portrait"
              alt="Inside the clinic"
              label="Clinic"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="container-site py-20 md:py-28 space-y-8">
          <Eyebrow>Booking</Eyebrow>
          <h2 className="text-h1">
            Book online,
            <br />
            any time.
          </h2>
          <p className="text-body max-w-2xl">
            We accept all bookings through Fresha, you can browse
            availability, pricing and treatment times, and reschedule yourself
            up to 24 hours before your appointment.
          </p>
          <p className="text-body max-w-2xl">
            For anything else, questions about a specific concern, gift
            vouchers, or supplier enquiries, call us on{" "}
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="underline underline-offset-4"
            >
              {SITE.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline underline-offset-4"
            >
              {SITE.email}
            </a>
            .
          </p>
          <div className="pt-2">
            <BookButton />
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-site py-20 md:py-28">
          <Eyebrow>Find us</Eyebrow>
          <a
            href={`https://maps.google.com/?q=${mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block aspect-[16/9] border border-hairline overflow-hidden relative group bg-paper"
            aria-label="Open in Google Maps"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-110 pointer-events-none"
              title={`Map of ${SITE.fullName}`}
              tabIndex={-1}
            />
            <span className="absolute bottom-4 right-4 text-eyebrow bg-paper px-3 py-1.5 border border-hairline group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-colors">
              Open in Maps
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
