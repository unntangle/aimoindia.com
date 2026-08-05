import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Clock, MapPin, Trophy } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import Newsletter from "@/components/home/Newsletter";
import Img from "@/components/ui/Img";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "AIMO's calendar of conclaves, credit clinics, export workshops, factory visits and award nights, held across India's states.",
};

const upcoming = [
  {
    day: "19",
    month: "Nov",
    title: "AIMO National Manufacturing Summit",
    venue: "Nehru Centre, Worli, Mumbai",
    time: "09:30 AM – 6:00 PM IST",
    type: "Convention",
    body: "Two days on export competitiveness, credit access, energy costs and the skills pipeline. Ministers, bankers, buyers and 900 promoters.",
    image: img.speaker,
  },
  {
    day: "04",
    month: "Sep",
    title: "Credit Clinic with Public Sector Banks",
    venue: "AIMO Tamil Nadu Board, Chennai",
    time: "10:00 AM – 4:00 PM IST",
    type: "Clinic",
    body: "Bring your last two years of financials. Bankers review collateral-free lending eligibility case by case, on the day.",
    image: img.handshake,
  },
  {
    day: "22",
    month: "Sep",
    title: "Export Readiness Workshop",
    venue: "Coimbatore",
    time: "11:00 AM – 5:00 PM IST",
    type: "Workshop",
    body: "Documentation, incoterms, RoDTEP claims and the practical mechanics of a first shipment, taught by members who have done it.",
    image: img.warehouse,
  },
  {
    day: "11",
    month: "Oct",
    title: "Young Entrepreneurs Forum",
    venue: "Bengaluru",
    time: "05:00 PM – 8:30 PM IST",
    type: "Forum",
    body: "For under-40 promoters taking over or building a unit. Mentor pairing, followed by an open floor.",
    image: img.networking,
  },
  {
    day: "30",
    month: "Oct",
    title: "Shop-Floor Automation Site Visit",
    venue: "Pune industrial belt",
    time: "10:00 AM – 2:00 PM IST",
    type: "Site visit",
    body: "A working tour of a member unit that automated in stages without displacing its workforce. Limited to 40 participants.",
    image: img.precision,
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="AIMO Calendar"
        title="Upcoming Event"
        intro="Conclaves, clinics, workshops and factory visits — deliberately held across the states rather than only in the metros."
        image={img.lectureHall}
        crumb="Events"
      />

      <UpcomingEvent />

      {/* Listing */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="What's Next"
            title="The months ahead"
            intro="Members attend free unless otherwise stated. Non-members are welcome at open sessions."
          />

          <div className="mt-14 space-y-5">
            {upcoming.map((e) => (
              <article
                key={e.title}
                className="card group grid gap-6 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
              >
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 shrink-0 place-content-center rounded-lg bg-brand text-center text-white">
                    <span className="font-display text-2xl font-extrabold leading-none">
                      {e.day}
                    </span>
                    <span className="mt-1 text-[11px] font-medium uppercase tracking-widest">
                      {e.month}
                    </span>
                  </div>
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg sm:hidden lg:block">
                    <Img
                      src={e.image}
                      alt={e.title}
                      sizes="112px"
                      seed={`ev-list-${e.day}`}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <span className="inline-block rounded-full bg-brand-soft px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-widest text-brand">
                    {e.type}
                  </span>
                  <h3 className="mt-2.5 text-[19px] transition-colors group-hover:text-brand">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slatey">{e.body}</p>
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px] text-slatey">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      {e.venue}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand" />
                      {e.time}
                    </span>
                  </p>
                </div>

                <Link href="/contact" className="btn btn-outline sm:self-center">
                  Register
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Links onward */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/events/past",
              icon: CalendarDays,
              title: "Past Events",
              body: "Conclaves, clinics and conventions already held, with summary notes available to members.",
            },
            {
              href: "/gallery",
              icon: Camera,
              title: "Photo Gallery",
              body: "Photographs from council sessions, factory visits, workshops and award nights.",
            },
            {
              href: "/awards",
              icon: Trophy,
              title: "Awards",
              body: "Six categories recognising members who set the standard, judged on evidence and verified on site.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card group p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl transition-colors group-hover:text-brand">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-brand">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
