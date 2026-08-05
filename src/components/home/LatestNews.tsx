import Link from "next/link";
import { ArrowRight, MessageSquare, User } from "lucide-react";
import Img from "@/components/ui/Img";
import SectionHeading from "@/components/ui/SectionHeading";
import { news } from "@/lib/site";

export default function LatestNews() {
  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Press & Research"
          title="Latest news and submissions"
          intro="What AIMO has said publicly, and what our research desk is currently examining."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <article key={n.slug} className="card group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Img
                  src={n.image}
                  alt={n.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  seed={`news-${i}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-widest text-white">
                  {n.category}
                </span>
                <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-1.5 font-display text-[12.5px] font-semibold text-navy shadow">
                  {n.date}
                </span>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-slatey">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-brand" />
                    {n.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-brand" />
                    Press note
                  </span>
                </div>

                <h3 className="mt-3 text-[18px] leading-snug transition-colors group-hover:text-brand">
                  <Link href="/press">{n.title}</Link>
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">
                  {n.excerpt}
                </p>

                <Link
                  href="/press"
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-navy transition-colors hover:text-brand"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/press" className="btn btn-outline">
            All press releases
          </Link>
        </div>
      </div>
    </section>
  );
}
