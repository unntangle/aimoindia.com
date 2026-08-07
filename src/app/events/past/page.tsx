import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PastEventsGrid from "@/components/events/PastEventsGrid";
import { img, pastEventPosters } from "@/lib/site";

export const metadata: Metadata = {
  title: "Past Events",
  description:
    "An archive of past events held by the All India Manufacturers' Organisation.",
};

export default function PastEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Past Events"
        intro="Select an event to view it in full."
        image={img.lectureHall}
        crumb="Past Events"
      />

      <section className="py-16 lg:py-20">
        <div className="shell">
          <PastEventsGrid posters={pastEventPosters} />
        </div>
      </section>
    </>
  );
}
