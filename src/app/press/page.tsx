import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, User } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { contact, img, news } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press releases, policy submissions and research notes from the All India Manufacturers' Organisation.",
};

const archive = [
  {
    title: "AIMO welcomes revised turnover thresholds for MSME classification",
    date: "18 Apr 2026",
    category: "Policy",
  },
  {
    title: "Submission on delayed payments: the case for automatic interest accrual",
    date: "02 Apr 2026",
    category: "Policy",
  },
  {
    title: "Member survey: energy costs displace credit as the top constraint",
    date: "14 Mar 2026",
    category: "Research",
  },
  {
    title: "AIMO signs MoU with a management institute for sector studies",
    date: "27 Feb 2026",
    category: "Partnership",
  },
  {
    title: "Nine State Boards complete annual elections",
    date: "09 Feb 2026",
    category: "Organisation",
  },
  {
    title: "Note on inverted duty structures in capital goods",
    date: "21 Jan 2026",
    category: "Policy",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Press & Media"
        intro="What AIMO has said publicly, what we have filed with government, and what our research desk is currently examining."
        image={img.pressRoom}
        crumb="Press"
      />

      {/* Featured */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Latest"
            title="Recent releases and research"
            intro="Submissions are published in full once the consultation window closes."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {news.map((n, i) => (
              <article key={n.slug} className="card group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Img
                    src={n.image}
                    alt={n.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    seed={`press-${i}`}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-brand px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-widest text-white">
                    {n.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-slatey">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand" />
                      {n.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-brand" />
                      {n.author}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[18px] leading-snug transition-colors group-hover:text-brand">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
                    {n.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Archive + media contact */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Archive</p>
            <h2 className="text-3xl">Earlier this year</h2>

            <ul className="mt-9 divide-y divide-hairline border-y border-hairline">
              {archive.map((a) => (
                <li key={a.title} className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div>
                    <span className="font-display text-[11.5px] font-semibold uppercase tracking-widest text-brand">
                      {a.category}
                    </span>
                    <h3 className="mt-1 text-[16.5px] leading-snug transition-colors group-hover:text-brand">
                      {a.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[13.5px] text-slatey">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8 lg:sticky lg:top-28">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <Mail className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl">Media enquiries</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
              Journalists seeking comment, data or an interview with an office bearer
              should write to the National Secretariat. We respond to deadline requests
              the same working day wherever possible.
            </p>

            <dl className="mt-6 space-y-3 border-t border-hairline pt-6 text-[14.5px]">
              <div>
                <dt className="text-slatey">Email</dt>
                <dd>
                  <a href={`mailto:${contact.emails[0]}`} className="font-medium text-navy hover:text-brand">
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

            <Link href="/contact" className="btn btn-primary mt-7 w-full">
              Contact the Secretariat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
