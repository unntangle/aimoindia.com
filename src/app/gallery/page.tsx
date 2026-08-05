import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Img from "@/components/ui/Img";
import { gallery, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from AIMO conventions, council sessions, member unit visits, workshops and award nights across India.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photographs"
        title="Gallery"
        intro="Council sessions, factory floors, workshops and award nights — the organisation as it actually looks on the day."
        image={img.networking}
        crumb="Gallery"
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Moments"
            title="From across the network"
            intro="Higher-resolution files are available to members and to the press on request."
          />

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((g, i) => (
              <figure
                key={g.caption}
                className={`group relative overflow-hidden rounded-xl break-inside-avoid ${
                  i % 5 === 0 ? "aspect-[4/5]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Img
                  src={g.src}
                  alt={g.caption}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  seed={`gal-${i}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-[14px] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Camera className="mb-1.5 h-4 w-4 text-brand-light" />
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-hairline bg-mist p-8 text-center sm:p-10">
            <h3 className="text-2xl">Have photographs from an AIMO event?</h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slatey">
              State Boards are welcome to send images from chapter events for inclusion
              here. Please include the date, venue and a one-line caption.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Send to the Secretariat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
