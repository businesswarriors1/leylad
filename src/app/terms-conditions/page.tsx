import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: "Terms and conditions for Leyla D Skin Body Brows.",
};

export default function TermsPage() {
  return (
    <section>
      <div className="container-site pt-12 md:pt-20 pb-32">
        <div className="max-w-3xl space-y-10">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-h1">Terms &amp; conditions.</h1>
          <div className="space-y-6 text-body text-muted-ink">
            <h2 className="text-h3 text-ink">Bookings &amp; deposits</h2>
            <p>
              Some treatments require a deposit at the time of booking.
              Deposits are deducted from the total cost of your appointment.
            </p>
            <h2 className="text-h3 text-ink">Cancellations</h2>
            <p>
              We require a minimum of 24 hours&apos; notice for any cancellation
              or rescheduling. Cancellations inside the 24-hour window may
              forfeit the deposit.
            </p>
            <h2 className="text-h3 text-ink">No-shows</h2>
            <p>
              Missed appointments without notice may be charged at the full
              treatment price.
            </p>
            <h2 className="text-h3 text-ink">Refunds</h2>
            <p>
              Treatment outcomes vary by individual. Where a course of
              treatment has been purchased and not commenced, refunds are
              considered on a case-by-case basis. No refunds are offered on
              completed treatments.
            </p>
            <h2 className="text-h3 text-ink">Consultation</h2>
            <p>
              Some treatments require a consultation prior to booking to
              ensure suitability and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
