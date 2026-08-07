import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import PressList from "@/components/press/PressList";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import { contact, img, mediaCoverage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press Release",
  description:
    "AIMO in the media: coverage of the organisation and of Indian MSMEs in Reuters, Nasdaq, The Times of India, Business Today and elsewhere.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="In The Media"
        intro="Where AIMO and the concerns of Indian MSMEs have been reported. Each entry links to the original article."
        image={img.pressRoom}
        crumb="Press Release"
      />

      <section className="py-16 lg:py-20">
        <div className="shell">
          <PressList items={mediaCoverage} />
        </div>
      </section>

      {/* Media enquiries */}
      <section className="border-t border-hairline bg-mist py-16 lg:py-20">
        <div className="shell">
          <div className="card mx-auto max-w-3xl p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <Mail className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl">Media enquiries</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slatey">
              Journalists seeking comment, data or an interview with an office bearer
              should write to the National Secretariat. We respond to deadline requests
              the same working day wherever possible.
            </p>

            <dl className="mt-6 grid gap-4 border-t border-hairline pt-6 text-[14.5px] sm:grid-cols-3">
              <div>
                <dt className="text-slatey">Email</dt>
                <dd>
                  <a
                    href={`mailto:${contact.emails[0]}`}
                    className="font-medium text-navy hover:text-brand"
                  >
                    {contact.emails[0]}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slatey">Telephone</dt>
                <dd className="font-medium text-navy">{contact.phones[0]}</dd>
              </div>
              <div>
                <dt className="text-slatey">Office hours</dt>
                <dd className="font-medium text-navy">{contact.hours}</dd>
              </div>
            </dl>

            <Link href="/contact" className="btn btn-primary mt-7">
              Contact the Secretariat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <BecomeMemberCTA />
    </>
  );
}
