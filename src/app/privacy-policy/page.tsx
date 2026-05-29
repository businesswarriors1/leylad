import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for Leyla D Skin Body Brows.",
};

export default function PrivacyPage() {
  return (
    <section>
      <div className="container-site pt-12 md:pt-20 pb-32">
        <div className="max-w-3xl space-y-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-h1">Privacy policy.</h1>
          <div className="prose-leyla space-y-6 text-body text-muted-ink">
            <p>
              Leyla D Skin Body Brows (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              &ldquo;us&rdquo;) is committed to protecting your privacy in line
              with the Australian Privacy Principles under the Privacy Act 1988
              (Cth).
            </p>
            <h2 className="text-h3 text-ink">What we collect</h2>
            <p>
              When you book or attend an appointment, we collect personal
              information you provide, your name, contact details, skin and
              medical history relevant to the treatment, and payment details
              for transactions.
            </p>
            <h2 className="text-h3 text-ink">How we use it</h2>
            <p>
              We use your information solely to provide treatments safely,
              maintain appointment and clinical records, process payments,
              and contact you about your bookings. We do not sell personal
              information to third parties.
            </p>
            <h2 className="text-h3 text-ink">Booking platform</h2>
            <p>
              Online bookings are processed through Fresha. Their privacy
              policy governs how data submitted directly through their
              platform is handled.
            </p>
            <h2 className="text-h3 text-ink">Access &amp; correction</h2>
            <p>
              You may request access to or correction of your personal
              information at any time by contacting us in clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
