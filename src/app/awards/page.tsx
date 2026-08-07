import type { Metadata } from "next";
import { Award, Trophy } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import { img, visvesvarayaAward } from "@/lib/site";

export const metadata: Metadata = {
  title: "AIMO Awards",
  description:
    "The Sir Visvesvaraya Industrial Award — presented each year by AIMO to an industry for excellent performance, with past recipients and the dignitaries who presented it.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="AIMO Awards"
        intro="Every year we identify an industry for its excellent performance and present it with the Sir Visvesvaraya Industrial Award."
        image={img.awards}
        crumb="AIMO Awards"
      />

      {/* Award */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
              <Trophy className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl">{visvesvarayaAward.title}</h2>
            <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />

            {visvesvarayaAward.intro.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-[15.5px] leading-relaxed text-slatey"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Recipients */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visvesvarayaAward.recipients.map((r, i) => (
              <div
                key={r}
                className="flex items-center gap-3 rounded-lg border border-hairline bg-white px-4 py-3.5 transition-all hover:border-brand hover:bg-brand-soft"
              >
                <span className="font-display text-[12px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14.5px] leading-snug text-navy">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presented by */}
      <section className="border-y border-hairline bg-mist py-20 lg:py-24">
        <div className="shell">
          <p className="eyebrow mb-3">Presented By</p>
          <h2 className="max-w-3xl text-3xl sm:text-4xl">
            In the presence of renowned personalities
          </h2>
          <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
          <p className="mt-5 max-w-3xl text-[15.5px] leading-relaxed text-slatey">
            {visvesvarayaAward.presentersLead}
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {visvesvarayaAward.presenters.map((p) => (
              <article
                key={`${p.name}-${p.body.slice(0, 16)}`}
                className="card flex gap-5 p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[17px] leading-snug">{p.name}</h3>
                  <p className="mt-1 font-display text-[13px] font-semibold text-brand">
                    {p.role}
                  </p>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-slatey">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BecomeMemberCTA blurb="Recognition through the AIMO Awards is one of the benefits open to performing and active members." />
    </>
  );
}
