import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/events/GalleryGrid";
import BecomeMemberCTA from "@/components/ui/BecomeMemberCTA";
import { galleryAlbums, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Glimpses of AIMO events: photographs from conferences, celebrations and chapter gatherings across India.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photographs"
        title="Glimpses of AIMO Events"
        intro="Select any photograph to view it full size."
        image={img.networking}
        crumb="Gallery"
      />

      {galleryAlbums.map((album, i) => (
        <section
          key={album.title}
          className={`py-16 lg:py-20 ${i % 2 ? "bg-mist" : ""}`}
        >
          <div className="shell">
            <h2 className="text-3xl sm:text-4xl">{album.title}</h2>
            <span className="mt-5 block h-[3px] w-14 rounded-full bg-brand" />
            {album.meta && (
              <p className="mt-5 font-display text-[14px] font-semibold text-brand">
                {album.meta}
              </p>
            )}
            {album.blurb && (
              <p className="mt-2 max-w-3xl text-[15.5px] leading-relaxed text-slatey">
                {album.blurb}
              </p>
            )}

            <div className="mt-10">
              <GalleryGrid photos={album.photos} />
            </div>
          </div>
        </section>
      ))}

      <BecomeMemberCTA blurb="Join the manufacturers who meet at gatherings like these: policy representation, credit clinics, research access and industry recognition, since 1941." />
    </>
  );
}
