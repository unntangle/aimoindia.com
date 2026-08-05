import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BarChart3,
  BookOpen,
  Cpu,
  Download,
  Landmark,
  Users,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipPlans from "@/components/home/MembershipPlans";
import Newsletter from "@/components/home/Newsletter";
import Img from "@/components/ui/Img";
import { enrolSteps, img, memberBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Become a member of the All India Manufacturers' Organisation — policy representation, credit clinics, research access, business networks and industry recognition.",
};

const iconMap = {
  cpu: Cpu,
  landmark: Landmark,
  book: BookOpen,
  users: Users,
  chart: BarChart3,
  award: Award,
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Join AIMO"
        title="Become a member and reap the benefits"
        intro="Membership is open to micro, small, medium and large enterprises across manufacturing and services, anywhere in India."
        image={img.officeTeam}
        crumb="Membership"
      />

      {/* Benefits */}
      <section id="benefits" className="scroll-mt-28 py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Members Stay"
            title="Six things membership actually gets you"
            intro="Not a logo for your letterhead — a set of working relationships you can call on when something goes wrong."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memberBenefits.map((b) => {
              const Icon = iconMap[b.icon as keyof typeof iconMap];
              return (
                <div key={b.title} className="card group p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-[19px]">{b.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MembershipPlans />

      {/* How to enrol */}
      <section className="bg-mist py-20 lg:py-24">
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
                seed="member-enrol"
                className="object-cover"
              />
            </div>

            <div className="card bg-navy p-8 text-white">
              <h3 className="text-xl text-white">Ready to apply?</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                Download the membership form, fill it in, and send it to your State Board
                along with proof of payment. The Secretariat can help you identify the
                right chapter.
              </p>

              <a
                href="https://www.aimoindia.com/AIMOMA.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-6 w-full"
              >
                <Download className="h-4 w-4" />
                Download membership form
              </a>
              <Link href="/contact" className="btn btn-ghost mt-3 w-full">
                Ask a question first
              </Link>

              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] text-white/50">
                Payment may be made by RTGS or through the online payment gateway. Once
                approved you receive a membership number and docket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Questions" title="Before you apply" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline">
            {[
              [
                "Do I need to be a manufacturer?",
                "No. AIMO's membership includes services MSMEs, which now form the largest part of the Indian economy. If your enterprise is registered and operating, you are eligible.",
              ],
              [
                "Which State Board should I join?",
                "Normally the one covering the state where your principal unit is registered. If you operate across several states, the Secretariat will advise you on the most useful chapter.",
              ],
              [
                "How long does approval take?",
                "Typically ten to fifteen working days, depending on your State Board's meeting cycle and the National Governing Council calendar.",
              ],
              [
                "Is membership annual?",
                "Yes. Subscriptions run for a financial year and are renewable. Members in good standing retain voting rights at their State Board.",
              ],
              [
                "Can an association or cluster join?",
                "Yes. Industry associations, clusters and groups can affiliate. Write to the General Secretary to discuss the arrangement.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16.5px] font-semibold text-navy marker:hidden">
                  {q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-[15px] leading-relaxed text-slatey">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
