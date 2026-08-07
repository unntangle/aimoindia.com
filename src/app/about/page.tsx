import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  ExternalLink,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Quote,
  Target,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AboutNav from "@/components/about/AboutNav";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import {
  founder,
  gcMembers,
  governmentRelations,
  immediatePastTeam,
  img,
  industryRepresentation,
  leaders,
  pastPresidents,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About AIMO",
  description:
    "Founded by Bharat Ratna Sir M. Visvesvaraya in 1941, the All India Manufacturers' Organisation represents MSMEs across every Indian state. Our founder, industry representation, government relations, past presidents and national leadership.",
};

const milestones = [
  {
    year: "1861",
    title: "Born at Muddenahalli",
    body: "Born on 15 September in Muddenahalli, in present-day Chikkaballapur district, Karnataka. His birthday is observed across India as Engineers' Day.",
  },
  {
    year: "1883",
    title: "Engineering at Pune",
    body: "Graduated from the College of Science, Pune, and entered the Bombay Presidency's public works service.",
  },
  {
    year: "1903",
    title: "Automatic sluice gates",
    body: "Designed and patented a system of automatic floodgates, first installed at the Khadakvasla reservoir near Pune, raising storage without raising the dam.",
  },
  {
    year: "1912",
    title: "Diwan of Mysore",
    body: "Appointed Diwan of the princely state of Mysore, where he pursued industrialisation and education with unusual single-mindedness.",
  },
  {
    year: "1932",
    title: "Krishna Raja Sagara",
    body: "The KRS dam across the Cauvery, whose construction he led as chief engineer, transformed irrigation across the Mysore region.",
  },
  {
    year: "1941",
    title: "AIMO is founded",
    body: "He established the All India Manufacturers' Organisation to give India's industrialists a single, credible, national voice.",
  },
  {
    year: "1955",
    title: "Bharat Ratna",
    body: "Conferred the Bharat Ratna, India's highest civilian honour, for his contribution to the nation's engineering and industry.",
  },
];

/* Local section header — the About page stacks many sections in one column. */
function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-[2.15rem]">{title}</h2>
      <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
      {intro && (
        <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">{intro}</p>
      )}
    </div>
  );
}

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

      <div className="shell grid gap-8 py-12 lg:grid-cols-[248px_1fr] lg:gap-14 lg:py-16">
        <AboutNav />

        <div className="min-w-0 space-y-20 lg:space-y-28">
          {/* ------------------------------ Overview ------------------------------ */}
          <section id="overview" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Our Story"
              title="A body committed to industrial progress"
            />

            <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-[15.5px] leading-relaxed text-slatey">
                  Traditionally AIMO members have come from small, medium and large scale
                  industries across the country, with interests as diverse as engineering,
                  chemicals, pharmaceuticals, food processing and services. In recent years
                  we have seen a marked surge of interest from start-ups and new-age
                  entrepreneurs, who find in AIMO a credible support and a genuine voice
                  for their concerns at the policy level.
                </p>

                <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
                  AIMO was founded by{" "}
                  <strong className="text-navy">
                    Bharat Ratna Sir M. Visvesvaraya in 1941
                  </strong>
                  . The organisation has established itself as a body committed to
                  industrial progress with the motto{" "}
                  <strong className="text-navy">
                    &ldquo;Prosperity through Industry&rdquo;
                  </strong>
                  . Its headquarters are in Mumbai, and it operates through numerous State
                  and Regional level boards elected annually, each with its own
                  secretariat.
                </p>

                <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
                  What has not changed in eighty years is the working premise: that the
                  people who actually run factories understand the consequences of a rule
                  better than anyone drafting it, and that their evidence deserves to reach
                  the drafting table before the rule is final rather than after.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                      <p className="mt-2 text-[14.5px] leading-relaxed text-slatey">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_70px_-32px_rgba(15,27,61,0.55)]">
                  <Img
                    src={img.speaker}
                    alt="AIMO office bearer addressing members"
                    sizes="(max-width: 1024px) 100vw, 30vw"
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
                    Set down at the founding in 1941 and never revised — because the
                    argument it makes has not needed revising.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 rounded-xl border border-hairline bg-mist p-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-extrabold text-brand">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-snug text-slatey">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------- Our Founder ---------------------------- */}
          <section id="our-founder" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Our Founder"
              title="Bharat Ratna Sir M. Visvesvaraya"
            />

            <div className="grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="card overflow-hidden">
                <div className="relative flex h-72 items-center justify-center bg-mist p-6">
                  <span className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(var(--color-navy)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                  <Image
                    src="/SirMVTN.png"
                    alt="Portrait of Bharat Ratna Sir Mokshagundam Visvesvaraya, founder of the All India Manufacturers' Organisation"
                    width={600}
                    height={700}
                    className="relative h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[19px]">{founder.name}</h3>
                  <p className="mt-1 text-[13.5px] text-brand">
                    {founder.born} – {founder.died}
                  </p>
                  <dl className="mt-5 space-y-3 border-t border-hairline pt-5 text-[14px]">
                    {[
                      ["Honours", "Bharat Ratna (1955), KCIE"],
                      ["Office", "Diwan of Mysore, 1912–1918"],
                      ["Legacy", "Engineers' Day, 15 September"],
                      ["Founded", "AIMO, 1941"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-slatey">{k}</dt>
                        <dd className="text-right font-medium text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div>
                {founder.bio.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="mb-4 text-[15.5px] leading-relaxed text-slatey"
                  >
                    {para}
                  </p>
                ))}

                <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
                  By the time he founded AIMO in 1941 he was eighty years old and had spent
                  six decades observing what actually stopped Indian enterprise: not a
                  shortage of ambition, but fragmentation. Individual manufacturers had
                  grievances; nobody had a hearing. The organisation he created was a
                  remedy for that specific problem, and its motto —{" "}
                  <strong className="text-navy">Prosperity through Industry</strong> — is a
                  compressed version of the argument he had been making his whole working
                  life.
                </p>

                <figure className="my-8 border-l-[3px] border-brand bg-mist p-7">
                  <Quote className="h-7 w-7 text-brand" />
                  <blockquote className="mt-3 font-display text-xl font-semibold leading-snug text-navy">
                    Industrialise or perish.
                  </blockquote>
                  <figcaption className="mt-3 text-[14px] text-slatey">
                    The phrase most associated with him — and, in substance, the founding
                    brief of this organisation.
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Timeline */}
            <h3 className="mt-12 text-2xl">A working life, in brief</h3>
            <ol className="mt-7">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative flex gap-6 pb-9 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-display text-[12.5px] font-bold text-white">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-hairline" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-[17px]">{m.title}</h4>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-slatey">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Honours */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl">Honours &amp; distinctions</h3>
                <ul className="mt-5 space-y-3.5">
                  {founder.honours.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-slatey"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Landmark className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl">Named in his honour</h3>
                <ul className="mt-5 space-y-4">
                  {founder.namedInHisHonour.map((n) => (
                    <li key={n.name} className="border-l-2 border-hairline pl-4">
                      <p className="font-display text-[14.5px] font-semibold text-navy">
                        {n.name}
                      </p>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-slatey">
                        {n.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Works */}
            <h3 className="mt-12 text-2xl">Works of Sir M. Visvesvaraya</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slatey">
              He argued his case in print as well as in concrete. His published writing on
              planning, industry and unemployment remains in library catalogues worldwide.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {founder.works.map((w) => (
                <article key={w.title} className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <span className="font-display text-[13px] font-bold tracking-widest text-brand">
                      {w.year}
                    </span>
                  </div>
                  <h4 className="mt-4 text-[17px] italic">{w.title}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slatey">
                    Visvesvaraya, M &middot; {w.publisher}
                  </p>
                  {w.oclc && (
                    <a
                      href={`https://search.worldcat.org/oclc/${w.oclc}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-[13px] font-semibold text-brand"
                    >
                      OCLC {w.oclc}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* ------------------------ Industry representation ---------------------- */}
          <section id="industry-representation" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Make in India"
              title="Industry Representation"
              intro={industryRepresentation.intro}
            />

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {industryRepresentation.sectors.map((s) => (
                <div
                  key={s}
                  className="group flex items-center gap-3 rounded-lg border border-hairline bg-white px-4 py-3.5 transition-all hover:border-brand hover:bg-brand-soft"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="font-display text-[14.5px] font-medium text-navy">
                    {s}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-5 rounded-xl border border-hairline bg-mist p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Handshake className="h-5 w-5" />
                </span>
                <p className="max-w-xl text-[14.5px] leading-relaxed text-slatey">
                  Representation here means something specific: a written submission,
                  backed by member survey data, filed within the consultation window,
                  followed up in person, and reported back to the membership whatever the
                  outcome.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary shrink-0">
                Raise an issue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* ------------------------- Government relations ------------------------ */}
          <section id="government-relations" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Policy & Liaison"
              title="Government Relations"
              intro={governmentRelations.intro}
            />

            <div className="mb-8 flex items-center gap-5 rounded-xl bg-navy p-7 text-white">
              <p className="font-display text-4xl font-extrabold text-brand">
                {governmentRelations.count}
              </p>
              <p className="text-[14.5px] leading-relaxed text-white/70">
                National and State level Government and quasi-Government bodies in which
                AIMO actively participates on behalf of its members.
              </p>
            </div>

            <h3 className="text-xl">Representation includes</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {governmentRelations.bodies.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] leading-relaxed text-navy">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* --------------------------- Past presidents --------------------------- */}
          <section id="past-presidents" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Since 1941"
              title="Past Presidents"
              intro="Every national president of the All India Manufacturers' Organisation since its founding, beginning with Sir M. Visvesvaraya himself."
            />

            <div className="overflow-hidden rounded-xl border border-hairline">
              <div className="grid sm:grid-cols-2">
                {pastPresidents.map((p, i) => (
                  <div
                    key={`${p.name}-${p.year}`}
                    className={`flex items-center justify-between gap-4 border-b border-hairline px-5 py-3.5 transition-colors hover:bg-mist ${
                      i % 2 === 0 ? "sm:border-r" : ""
                    }`}
                  >
                    <span className="text-[14.5px] text-navy">{p.name}</span>
                    <span className="shrink-0 font-display text-[13.5px] font-semibold text-brand">
                      {p.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------ National leadership team ---------------------- */}
          <section id="national-leadership" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Current Team"
              title="National Leadership Team"
              intro="Policy matters go to the President's office; membership and administration to the General Secretary."
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {leaders.map((l) => (
                <article key={l.role} className="card p-7">
                  <p className="font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand">
                    {l.role}
                  </p>
                  <h3 className="mt-1.5 text-[19px]">{l.name}</h3>

                  <ul className="mt-5 space-y-2.5 border-t border-hairline pt-5 text-[14px] text-slatey">
                    <li className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-brand" />
                      {l.city}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 shrink-0 text-brand" />
                      <a
                        href={`tel:${l.phone.replace(/\s/g, "")}`}
                        className="hover:text-brand"
                      >
                        {l.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 shrink-0 text-brand" />
                      <a href={`mailto:${l.email}`} className="break-all hover:text-brand">
                        {l.email}
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* --------------------------- National GC members ------------------------ */}
          <section id="gc-members" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Governing Council"
              title="National GC Members"
              intro={gcMembers.intro}
            />

            <div className="overflow-x-auto rounded-xl border border-hairline">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 font-display text-[13px] font-semibold">
                      No
                    </th>
                    <th className="px-4 py-3 font-display text-[13px] font-semibold">
                      Name
                    </th>
                    <th className="px-4 py-3 font-display text-[13px] font-semibold">
                      Designation
                    </th>
                    <th className="px-4 py-3 font-display text-[13px] font-semibold">
                      Mobile
                    </th>
                    <th className="px-4 py-3 font-display text-[13px] font-semibold">
                      Email ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gcMembers.members.map((m, i) => (
                    <tr
                      key={`${m.name}-${m.mobile}`}
                      className="border-t border-hairline transition-colors hover:bg-mist"
                    >
                      <td className="px-4 py-3 text-[13.5px] text-slatey">{i + 1}</td>
                      <td className="px-4 py-3 text-[14px] font-medium text-navy">
                        {m.name}
                      </td>
                      <td className="px-4 py-3 text-[13.5px] text-slatey">
                        {m.designation}
                      </td>
                      <td className="px-4 py-3 text-[13.5px] text-slatey">
                        <a href={`tel:+91${m.mobile}`} className="hover:text-brand">
                          {m.mobile}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-[13.5px]">
                        <a
                          href={`mailto:${m.email}`}
                          className="break-all text-brand hover:underline"
                        >
                          {m.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ---------------------- Immediate past national team -------------------- */}
          <section id="past-national-team" className="scroll-mt-32">
            <SectionTitle
              eyebrow="Previous Term"
              title="Immediate Past National Team"
              intro="The office bearers who held the national mandate in the preceding term."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {immediatePastTeam.map((p) => (
                <article
                  key={`${p.role}-${p.name}`}
                  className="card border-l-2 border-l-brand p-6"
                >
                  <p className="font-display text-[12px] font-semibold uppercase tracking-widest text-brand">
                    {p.role}
                  </p>
                  <h3 className="mt-1.5 text-[17px]">{p.name}</h3>
                  {p.org && (
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slatey">
                      {p.org}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-hairline pt-4 text-[13.5px] text-slatey">
                    <a
                      href={`tel:${p.mobile.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 hover:text-brand"
                    >
                      <Phone className="h-3.5 w-3.5 text-brand" />
                      {p.mobile}
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      className="inline-flex items-center gap-2 break-all hover:text-brand"
                    >
                      <Mail className="h-3.5 w-3.5 text-brand" />
                      {p.email}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-hairline bg-mist p-8 text-center sm:p-10">
              <h3 className="text-2xl">Looking for a state chapter?</h3>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
                AIMO operates through annually elected State and Regional Boards, each with
                its own secretariat and office bearers.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Link href="/about/tamil-nadu-state-board" className="btn btn-primary">
                  Tamil Nadu State Board
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about/office-bearers" className="btn btn-outline">
                  Office Bearers &amp; Committees
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
