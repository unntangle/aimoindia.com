import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Download, HelpCircle, Mail, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import MembershipForm from "@/components/ui/MembershipForm";
import { contact, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Membership Form",
  description:
    "Apply online for membership of the All India Manufacturers' Organisation. Enterprise details, category selection and State Board chapter in one form.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Online Membership Form"
        intro="Fill this in once and the Secretariat routes it to your State Board. Nothing is charged at this stage — payment instructions follow by email."
        image={img.notes}
        crumb="Online Membership Form"
      />

      <section className="bg-mist py-20 lg:py-24">
        <div className="shell grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <MembershipForm />

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">What happens next</h3>
              <ol className="mt-4 space-y-3 text-[14px] text-slatey">
                {[
                  "We acknowledge your application by email within two working days.",
                  "Your State Board reviews the details and may call to clarify.",
                  "Payment instructions are sent — RTGS or the online gateway.",
                  "The National Governing Council ratifies the approval.",
                  "You receive your membership number and docket.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-display font-bold text-brand">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">Your details</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slatey">
                Information submitted here is used only to process your membership and is
                shared with your State Board. It is not sold or passed to third parties.
                Directory listings show only what you agree to publish.
              </p>
            </div>

            <div className="card bg-navy p-7 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-brand">
                <HelpCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px] text-white">Need help?</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                Unsure which category or chapter applies to you? Call or write before you
                fill the form — it is quicker than correcting it later.
              </p>
              <a
                href={`mailto:${contact.emails[0]}`}
                className="mt-5 flex items-center gap-2.5 text-[14px] text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand" />
                {contact.emails[0]}
              </a>
              <Link href="/membership/categories" className="btn btn-ghost mt-5 w-full">
                Compare categories
              </Link>
            </div>

            <a
              href="https://www.aimoindia.com/AIMOMA.pdf"
              target="_blank"
              rel="noreferrer"
              className="card flex items-center gap-4 p-6 text-[14.5px] font-medium text-navy"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <Download className="h-4.5 w-4.5" />
              </span>
              Prefer paper? Download the printed application form.
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
