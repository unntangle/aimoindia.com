import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import Newsletter from "@/components/home/Newsletter";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Past Events",
  description:
    "An archive of AIMO conclaves, credit clinics, workshops, factory visits and award nights, with attendance and outcomes.",
};

const past = [
  {
    title: "MSME Policy Conclave",
    date: "14 February 2026",
    venue: "New Delhi",
    attendance: "310 delegates",
    image: img.boardroom,
    outcome:
      "Produced the working paper that became AIMO's pre-budget submission on capital goods duty structures.",
  },
  {
    title: "Export Readiness Workshop",
    date: "22 January 2026",
    venue: "Coimbatore",
    attendance: "140 promoters",
    image: img.warehouse,
    outcome:
      "Forty-one first-time exporters completed documentation clinics; nineteen shipped within the following quarter.",
  },
  {
    title: "Young Entrepreneurs Forum",
    date: "09 December 2025",
    venue: "Bengaluru",
    attendance: "95 participants",
    image: img.networking,
    outcome:
      "Launched the mentor pairing scheme now running across four state boards.",
  },
  {
    title: "AIMO Excellence Awards Night",
    date: "21 November 2025",
    venue: "Mumbai",
    attendance: "480 guests",
    image: img.awards,
    outcome:
      "Six category winners announced; each featured across the AIMO press platform through 2026.",
  },
  {
    title: "Women in Manufacturing Round-table",
    date: "18 October 2025",
    venue: "Chennai",
    attendance: "120 participants",
    image: img.womanEngineer,
    outcome:
      "Set the terms of reference for the Women Entrepreneur award category introduced this cycle.",
  },
  {
    title: "Shop-Floor Automation Site Visit",
    date: "27 September 2025",
    venue: "Pune industrial belt",
    attendance: "40 participants",
    image: img.precision,
    outcome:
      "Case study published in the quarterly magazine on staged automation without workforce displacement.",
  },
];

export default function PastEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Past Events"
        intro="What we have held, who came, and what came of it. Presentations and summary notes are available to members on request."
        image={img.lectureHall}
        crumb="Past Events"
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Recently"
            title="The last twelve months"
            intro="An event that produced nothing is worth recording too — but these all produced something."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {past.map((e, i) => (
              <article key={e.title} className="card group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Img
                    src={e.image}
                    alt={e.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    seed={`past-ev-${i}`}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <p className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-slatey">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand" />
                      {e.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      {e.venue}
                    </span>
                  </p>

                  <h3 className="mt-2.5 text-[18px] leading-snug transition-colors group-hover:text-brand">
                    {e.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-1.5 text-[13px] font-medium text-navy">
                    <Users className="h-3.5 w-3.5 text-brand" />
                    {e.attendance}
                  </p>

                  <p className="mt-3 border-t border-hairline pt-3 text-[14px] leading-relaxed text-slatey">
                    {e.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-hairline bg-mist p-8 text-center sm:p-10">
            <h3 className="text-2xl">Looking for a specific presentation?</h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
              Decks, summary notes and attendee lists from past sessions are held by the
              Secretariat and shared with members on request.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Request materials
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/gallery" className="btn btn-outline">
                Photo gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
