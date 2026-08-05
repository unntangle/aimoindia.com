import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { awardCategories, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "AIMO Awards",
  description:
    "The AIMO Awards recognise members who have set the standard in manufacturing excellence, exports, sustainability, digital adoption and entrepreneurship.",
};

const criteria = [
  {
    n: "01",
    t: "Nomination",
    b: "Members nominate themselves or a peer through their State Board. Nominations open each August.",
  },
  {
    n: "02",
    t: "Documentation",
    b: "Audited financials, employment data and a short written case covering the assessment year.",
  },
  {
    n: "03",
    t: "Jury review",
    b: "An independent jury of industrialists, academics and former officials shortlists across categories.",
  },
  {
    n: "04",
    t: "Site verification",
    b: "Shortlisted units receive a visit. Claims about process or sustainability are checked on the floor.",
  },
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="The AIMO Awards"
        intro="We reward performing and active members with industry recognition and media exposure — judged on evidence, verified on site."
        image={img.awards}
        crumb="AIMO Awards"
      />

      {/* Categories */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Categories"
            title="Six awards, six different kinds of achievement"
            intro="Categories are reviewed each year so that the awards keep pace with what the sector is actually contending with."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awardCategories.map((a, i) => (
              <article key={a.title} className="card group relative overflow-hidden p-8">
                <span className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-brand-soft transition-transform duration-500 group-hover:scale-[2.4]" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                  <Trophy className="h-5 w-5" />
                </span>
                <p className="relative mt-5 font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand">
                  Category {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="relative mt-1.5 text-[19px]">{a.title}</h3>
                <p className="relative mt-3 text-[14.5px] leading-relaxed text-slatey">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            tone="dark"
            eyebrow="How Winners Are Chosen"
            title="An award is only worth the scrutiny behind it"
            intro="Every stage is documented, and unsuccessful nominees receive the jury's reasoning on request."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((c) => (
              <div
                key={c.n}
                className="group rounded-xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-brand/40 hover:bg-white/10"
              >
                <span className="font-display text-3xl font-extrabold text-brand">
                  {c.n}
                </span>
                <h3 className="mt-3 text-[18px] text-white">{c.t}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Img
              src={img.speaker}
              alt="AIMO Awards presentation"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="awards-cta"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow mb-3">Nominations</p>
            <h2 className="text-3xl sm:text-4xl">
              Nominations for the 2026 cycle open in August
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              Eligibility is straightforward: you must be a member in good standing in the
              Corporate or Patron category, with at least two completed financial years of
              operation. Associate members can nominate a peer.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              Winners are announced at the AIMO Awards night held alongside the National
              Manufacturing Summit, and are featured across our press platform through the
              following year.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Register a nomination
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/membership" className="btn btn-outline">
                Check eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
