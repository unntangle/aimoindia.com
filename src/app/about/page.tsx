import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Handshake, Landmark, Target } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { img, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About AIMO",
  description:
    "Founded by Bharat Ratna Sir M. Visvesvaraya in 1941, the All India Manufacturers' Organisation represents MSMEs across every Indian state under the motto 'Prosperity through Industry'.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Eight decades of speaking for Indian industry"
        intro="AIMO was founded in 1941 and has represented manufacturers through every phase of the Indian economy since — from the licence era to liberalisation to the digital shop floor."
        image={img.boardroom}
        crumb="About"
      />

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl">
              A body committed to industrial progress
            </h2>

            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Traditionally AIMO members have come from small, medium and large scale
              industries across the country, with interests as diverse as engineering,
              chemicals, pharmaceuticals, food processing and services. In recent years we
              have seen a marked surge of interest from start-ups and new-age
              entrepreneurs, who find in AIMO a credible support and a genuine voice for
              their concerns at the policy level.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              AIMO was founded by{" "}
              <strong className="text-navy">Bharat Ratna Sir M. Visvesvaraya in 1941</strong>.
              The organisation has established itself as a body committed to industrial
              progress with the motto{" "}
              <strong className="text-navy">&ldquo;Prosperity through Industry&rdquo;</strong>.
              Its headquarters are in Mumbai, and it operates through numerous State and
              Regional level boards elected annually, each with its own secretariat.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              What has not changed in eighty years is the working premise: that the people
              who actually run factories understand the consequences of a rule better than
              anyone drafting it, and that their evidence deserves to reach the drafting
              table before the rule is final rather than after.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  body: "To encourage dialogue and partnership among stakeholders of the MSME ecosystem, promoting innovation and knowledge sharing.",
                },
                {
                  icon: Building2,
                  title: "Our Reach",
                  body: "A national footprint across manufacturing and the services sector, organised through annually elected State Boards.",
                },
              ].map((c) => (
                <div key={c.title} className="card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[18px]">{c.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slatey">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_70px_-32px_rgba(15,27,61,0.55)]">
              <Img
                src={img.speaker}
                alt="AIMO office bearer addressing members"
                sizes="(max-width: 1024px) 100vw, 40vw"
                seed="about-story"
                className="object-cover"
              />
            </div>
            <div className="card mt-6 bg-navy p-7 text-white">
              <p className="font-display text-[13px] font-semibold uppercase tracking-widest text-brand">
                The Motto
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-white">
                Prosperity through Industry
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                Set down at the founding in 1941 and never revised — because the argument
                it makes has not needed revising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-y border-hairline bg-mist py-14">
        <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-2 text-[14px] leading-snug text-slatey">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry representation */}
      <section id="representation" className="scroll-mt-28 py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
            <Img
              src={img.factoryFloor}
              alt="Member manufacturing unit"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="about-rep"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <Handshake className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl">Industry Representation</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              AIMO represents its members before ministries, regulators, banks and
              statutory bodies. Representation here means something specific: a written
              submission, backed by member survey data, filed within the consultation
              window, followed up in person, and reported back to the membership whatever
              the outcome.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pre-budget and pre-policy submissions on behalf of the sector",
                "Member surveys converted into evidence for consultations",
                "Sector-specific working groups on tariffs, duty structures and standards",
                "Escalation support for members facing procedural deadlock",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-navy">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Government relations */}
      <section id="government" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <Landmark className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl">Government Relations</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
              AIMO aims to bridge the last-mile connectivity between government and MSMEs
              in the implementation of the numerous schemes available to them. A scheme
              that no one can find, understand or apply for is not yet a scheme — it is an
              announcement.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              Our State Boards run scheme clinics, walk members through documentation, and
              carry recurring obstacles back up to the departments concerned. The
              organisation keeps a deliberately non-partisan posture: we work with whoever
              holds the portfolio.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Talk to the Secretariat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Img
              src={img.handshake}
              alt="Industry and government representatives in discussion"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="about-gov"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Links out */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Go Deeper"
            title="More about the organisation"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/about/founder",
                title: "Our Founder",
                body: "Sir M. Visvesvaraya — engineer, Diwan of Mysore, and the reason this organisation exists.",
              },
              {
                href: "/about/tamil-nadu-state-board",
                title: "Tamil Nadu State Board",
                body: "The state chapter, its district clusters and what the board actually does month to month.",
              },
              {
                href: "/about/office-bearers",
                title: "Office Bearers & Committees",
                body: "The national and state teams carrying the mandate, and the standing committees.",
              },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card group p-8">
                <h3 className="text-xl transition-colors group-hover:text-brand">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-brand">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
