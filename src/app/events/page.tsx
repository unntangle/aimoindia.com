import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import Newsletter from "@/components/home/Newsletter";
import Img from "@/components/ui/Img";
import { eventGallery, img } from "@/lib/site";

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
        title="Upcoming Events"
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

      {/* Past events */}
      <section id="past" className="scroll-mt-28 bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Archive"
            title="Past events"
            intro="Presentations and summary notes from recent sessions are available to members on request."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {eventGallery.map((e, i) => (
              <article
                key={e.title}
                className="group relative aspect-[16/9] overflow-hidden rounded-xl"
              >
                <Img
                  src={e.image}
                  alt={e.title}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  seed={`past-${i}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="flex items-center gap-1.5 font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand-light">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {e.meta}
                  </p>
                  <h3 className="mt-1.5 text-xl text-white">{e.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn btn-primary">
              Browse the photo gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
