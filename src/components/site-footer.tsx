import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";
import { CONCERNS } from "@/lib/concerns";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="container-site py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
        {/* Visit / contact */}
        <div className="md:col-span-4 space-y-6">
          <p className="text-eyebrow">visit</p>
          <p className="font-display text-h3 leading-tight">
            {SITE.address.line1}
            <br />
            {SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}
          </p>
          <div className="space-y-1 text-sm">
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
          <a
            href={SITE.booking}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-ink text-paper text-xs font-medium tracking-wider uppercase hover:bg-paper hover:text-ink ring-1 ring-ink transition-colors duration-200"
          >
            Book a consultation
          </a>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Leyla D on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-hairline hover:bg-ink hover:text-paper hover:ring-ink transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Leyla D on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-hairline hover:bg-ink hover:text-paper hover:ring-ink transition-colors duration-200"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Treatments */}
        <div className="md:col-span-3">
          <p className="text-eyebrow mb-6">treatments</p>
          <ul className="space-y-3 text-sm">
            {TREATMENTS.map((t) => (
              <li key={t.slug}>
                <Link
                  href={t.slug}
                  className="hover:underline underline-offset-4"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Skin concerns */}
        <div className="md:col-span-2">
          <p className="text-eyebrow mb-6">skin concerns</p>
          <ul className="space-y-3 text-sm">
            {CONCERNS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.slug}
                  className="hover:underline underline-offset-4"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Site + legal */}
        <div className="md:col-span-3">
          <p className="text-eyebrow mb-6">site</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/treatment-services"
                className="hover:underline underline-offset-4"
              >
                All treatments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline underline-offset-4">
                Journal
              </Link>
            </li>
          </ul>

          <p className="text-eyebrow mt-10 mb-6">legal</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline underline-offset-4"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="hover:underline underline-offset-4"
              >
                Terms & conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-site py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-ink">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <Image
            src="/images/logo/footer.png"
            alt={SITE.fullName}
            width={250}
            height={74}
            className="h-11 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
