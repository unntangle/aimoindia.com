import type { Metadata } from "next";
import { Check, Clock, MapPin, Maximize, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import HallEnquiryForm from "@/components/ui/HallEnquiryForm";
import { contact, img, venues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Hall & Board Room",
  description:
    "Hire the AIMO conference hall, board room or training room for meetings, workshops, AGMs and interviews. Member and non-member rates available.",
};

export default function BookHallPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Book Hall & Board Room"
        intro="Three fully equipped spaces at the AIMO premises, available to members and non-members for meetings, workshops, AGMs, training and interviews."
        image={img.lectureHall}
        crumb="Book Hall & Board Room"
      />

      {/* Venues */}
      <section id="spaces" className="scroll-mt-28 py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Spaces"
            title="Three rooms, three purposes"
            intro="All rates are per half day and include air conditioning, Wi-Fi and basic setup. Members pay a substantially reduced rate."
          />

          <div className="mt-14 space-y-8">
            {venues.map((v, i) => (
              <article
                key={v.name}
                className={`card grid gap-0 overflow-hidden lg:grid-cols-2 ${
                  i % 2 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
                  <Img
                    src={v.image}
                    alt={v.name}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    seed={`venue-${i}`}
                    className="object-cover"
                  />
                </figure>

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl">{v.name}</h3>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-slatey">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand" />
                      {v.capacity}
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-brand" />
                      {v.area}
                    </span>
                  </div>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-navy">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 rounded-lg bg-mist px-5 py-3.5 text-[14px] font-medium text-navy">
                    {v.rates}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <HallEnquiryForm />

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">Where the venue is</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
                {contact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-[13.5px] text-slatey">
                In the Fort business district, walking distance from Churchgate and CSMT.
                Paid parking is available nearby.
              </p>
            </div>

            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px]">Booking terms</h3>
              <ul className="mt-4 space-y-2.5 text-[14px] text-slatey">
                {[
                  "Enquiries are answered within one working day.",
                  "A booking is held for 48 hours pending confirmation.",
                  "50% advance confirms the date; balance on the day.",
                  "Cancellation more than seven days ahead is refunded in full.",
                  "Setup access is normally available one hour before the slot.",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-navy p-7 text-white">
              <h3 className="text-[18px] text-white">Members save on every booking</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                Member rates run roughly 40% below the standard tariff, and members get
                first call on dates during convention season.
              </p>
              <a href="/membership" className="btn btn-ghost mt-5 w-full">
                About membership
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
