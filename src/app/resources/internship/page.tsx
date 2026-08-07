import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Building2, CalendarClock, GraduationCap } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { img, internship } from "@/lib/site";

export const metadata: Metadata = {
  title: "Internship Programme",
  description:
    "AIMO places engineering, management and polytechnic students into member enterprises for structured, supervised internships across production, quality, supply chain and digital tracks.",
};

export default function InternshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Internship Programme"
        intro={internship.intro}
        image={img.womanEngineer}
        crumb="Internship Programme"
      />

      {/* Why */}
      <section className="py-20 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(15,27,61,0.5)]">
              <Img
                src={img.engineers}
                alt="Students on a shop-floor internship"
                sizes="(max-width: 1024px) 100vw, 50vw"
                seed="internship-hero"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-xl bg-navy px-6 py-5 text-white shadow-xl">
              <p className="font-display text-[13px] font-semibold uppercase tracking-widest text-brand">
                Duration
              </p>
              <p className="mt-1 text-[14px] leading-tight text-white/80">
                {internship.duration}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Why It Exists</p>
            <h2 className="text-3xl sm:text-4xl">
              Two problems that happen to be each other&rsquo;s solution
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Students finish good technical courses without ever having stood on a working
              shop floor. Member units, meanwhile, need capable hands for well-defined
              projects they never get around to: the process that is still on paper, the
              dashboard nobody has built, the audit trail that lives in one person&rsquo;s head.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              The programme puts the two together on terms that are honest to both sides: a
              named supervisor, a defined project, a stipend, and a written assessment at
              the end that means something because it is signed by someone who watched the
              work happen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Apply as a student
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Host an intern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Tracks"
            title="Four routes through a member enterprise"
            intro="You are matched to a track and then to a unit, not the other way round, so the placement fits what you are studying."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {internship.tracks.map((t) => (
              <article key={t.title} className="card group p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl">{t.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{t.body}</p>
                <p className="mt-4 border-t border-hairline pt-4 text-[13.5px] font-medium text-brand">
                  Suits: {t.suits}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="How It Works"
            title="Whichever side you are on"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl">For students</h3>
              <ol className="mt-7 space-y-5">
                {internship.studentSteps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand font-display text-[13px] font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-[15px] leading-relaxed text-slatey">{s}</p>
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="btn btn-primary mt-8">
                Send your CV
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="card p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl">For member enterprises</h3>
              <ol className="mt-7 space-y-5">
                {internship.hostSteps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy font-display text-[13px] font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-[15px] leading-relaxed text-slatey">{s}</p>
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="btn btn-outline mt-8">
                Register as a host
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="bg-navy py-16">
        <div className="shell grid gap-8 sm:grid-cols-3">
          {[
            { icon: CalendarClock, title: "Cycles", body: "Summer (May–July) and winter (Dec–Jan) intakes, with rolling placements in between." },
            { icon: Award, title: "Certification", body: "A joint certificate from AIMO and the host unit, with a written supervisor assessment." },
            { icon: Building2, title: "Stipend", body: "Set by the host enterprise and confirmed in writing before the internship begins." },
          ].map((f) => (
            <div key={f.title} className="text-center sm:text-left">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-brand sm:mx-0">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px] text-white">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
