import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Download } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Newsletter from "@/components/home/Newsletter";
import Img from "@/components/ui/Img";
import { enrolSteps, img, membershipTiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership Categories",
  description:
    "AIMO membership categories — Associate, Corporate and Patron — with annual subscriptions, entitlements and the enrolment process.",
};

const comparison = [
  ["State Board membership & voting rights", true, true, true],
  ["Monthly policy digest", true, true, true],
  ["Member directory listing", true, true, true],
  ["Credit & compliance helpdesk", true, true, true],
  ["Convention delegate passes", false, true, true],
  ["Sector round-table participation", false, true, true],
  ["Buyer–supplier matchmaking", false, true, true],
  ["Eligible for AIMO Awards", false, true, true],
  ["Seat on a national sub-committee", false, false, true],
  ["Co-branding on AIMO research", false, false, true],
  ["Priority speaking opportunities", false, false, true],
] as const;

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership Categories"
        intro="Three categories, one membership. Every category carries a vote at your State Board — the difference is depth of access, not degree of belonging."
        image={img.boardroom}
        crumb="Membership Categories"
      />

      {/* Tiers */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Choose a Category"
            title="Pick the one that fits your enterprise"
            intro="If you are unsure, apply as Associate — you can move up at renewal without re-applying."
          />

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative overflow-hidden p-8 ${
                  tier.featured
                    ? "border-brand/30 shadow-[0_30px_60px_-32px_rgba(238,75,62,0.55)] lg:-mt-6 lg:pb-12 lg:pt-12"
                    : ""
                }`}
              >
                {tier.featured && (
                  <span className="absolute right-0 top-0 rounded-bl-lg bg-brand px-4 py-1.5 font-display text-[11.5px] font-semibold uppercase tracking-widest text-white">
                    Most chosen
                  </span>
                )}

                <h3 className="font-display text-[15px] font-semibold uppercase tracking-widest text-brand">
                  {tier.name}
                </h3>
                <p className="mt-4 font-display text-4xl font-extrabold text-navy">
                  {tier.price}
                  <span className="ml-1.5 font-sans text-[14px] font-normal text-slatey">
                    {tier.cadence}
                  </span>
                </p>
                <p className="mt-2 text-[14px] text-slatey">{tier.for}</p>

                <ul className="mt-7 space-y-3 border-t border-hairline pt-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14.5px] text-navy">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/membership/apply"
                  className={`btn mt-8 w-full ${tier.featured ? "btn-primary" : "btn-outline"}`}
                >
                  Apply as {tier.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[13px] text-slatey">
            Fees shown are indicative annual subscriptions. Final rates are confirmed by
            your State Board at the time of enrolment.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Side by Side"
            title="What each category includes"
          />

          <div className="mt-14 overflow-x-auto rounded-xl border border-hairline bg-white">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-hairline bg-navy text-white">
                  <th className="px-6 py-4 font-display text-[14px] font-semibold">
                    Entitlement
                  </th>
                  {membershipTiers.map((t) => (
                    <th
                      key={t.name}
                      className="px-6 py-4 text-center font-display text-[14px] font-semibold"
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...cells], i) => (
                  <tr
                    key={label as string}
                    className={i % 2 ? "bg-mist/60" : ""}
                  >
                    <td className="px-6 py-3.5 text-[14.5px] text-navy">{label}</td>
                    {(cells as readonly boolean[]).map((on, j) => (
                      <td key={j} className="px-6 py-3.5 text-center">
                        {on ? (
                          <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-brand">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="text-slatey/50">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enrolment */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">How to Enrol</p>
            <h2 className="text-3xl sm:text-4xl">Six steps, roughly two weeks</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              Applications are approved by both your State Board and the National Governing
              Council, which is why enrolment is not instantaneous. You will receive an
              email acknowledgement as soon as payment is received.
            </p>

            <ol className="mt-10 space-y-7">
              {enrolSteps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand font-display text-[14px] font-bold text-white">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[17px]">{s.title}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-slatey">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
              <Img
                src={img.lectureHall}
                alt="Members at an AIMO orientation session"
                sizes="(max-width: 1024px) 100vw, 40vw"
                seed="cat-enrol"
                className="object-cover"
              />
            </div>

            <div className="card bg-navy p-8 text-white">
              <h3 className="text-xl text-white">Two ways to apply</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                Fill in the online form and we will take it from there, or download the
                printed application if your State Board prefers a signed hard copy.
              </p>

              <Link href="/membership/apply" className="btn btn-primary mt-6 w-full">
                Online membership form
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.aimoindia.com/AIMOMA.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-3 w-full"
              >
                <Download className="h-4 w-4" />
                Download PDF form
              </a>

              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] text-white/50">
                Payment may be made by RTGS or through the online payment gateway. Once
                approved you receive a membership number and docket.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
