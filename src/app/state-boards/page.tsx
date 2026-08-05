import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { img, stateBoards } from "@/lib/site";

export const metadata: Metadata = {
  title: "State Boards",
  description:
    "AIMO operates through annually elected State and Regional Boards across India, each with its own secretariat, calendar and membership relationship.",
};

export default function StateBoardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="State and Regional Boards"
        intro="AIMO is federal by design. Your membership relationship sits with the board closest to your unit — not with a distant head office."
        image={img.india}
        crumb="State Boards"
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Find Your Chapter"
            title="Boards across the country"
            intro="Each board is elected annually by its own members and runs its own secretariat, event calendar and scheme clinics."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stateBoards.map((b) => (
              <article key={b.state} className="card group p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-medium text-slatey">
                    Elected annually
                  </span>
                </div>

                <h3 className="mt-5 text-[19px]">{b.state}</h3>
                <p className="mt-1.5 flex items-center gap-2 text-[13.5px] text-brand">
                  <MapPin className="h-3.5 w-3.5" />
                  {b.city}
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{b.note}</p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-navy transition-colors group-hover:text-brand"
                >
                  Contact this board
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-hairline bg-mist p-8 text-center sm:p-10">
            <h3 className="text-2xl">Not sure which board covers you?</h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
              Boards are organised by the state in which your principal unit is registered.
              If you operate across several states, or your region is not listed above, the
              National Secretariat will point you to the right chapter.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Ask the Secretariat
              </Link>
              <Link href="/membership" className="btn btn-outline">
                Membership categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
