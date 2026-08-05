import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { img, leaders, stateBoards } from "@/lib/site";

export const metadata: Metadata = {
  title: "National Leadership Team",
  description:
    "The national office bearers of the All India Manufacturers' Organisation — President, Convenor, Vice President and General Secretary.",
};

const tints = [
  "from-brand to-brand-dark",
  "from-navy to-navy-600",
  "from-brand-light to-brand",
  "from-navy-600 to-navy-700",
];

function initials(name: string) {
  return name
    .replace(/^Shri\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="National Leadership Team"
        intro="AIMO's office bearers are working promoters, elected by the membership through the State Boards and the National Governing Council."
        image={img.boardroom}
        crumb="Leadership"
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Office Bearers"
            title="Who to contact, and for what"
            intro="Policy matters go to the President's office; membership and administration to the General Secretary."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <article key={l.name} className="card group overflow-hidden">
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${tints[i % tints.length]}`}
                >
                  <span className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                  <span className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-white/50 font-display text-2xl font-extrabold text-white transition-transform duration-500 group-hover:scale-110">
                    {initials(l.name)}
                  </span>
                </div>

                <div className="p-6">
                  <p className="font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand">
                    {l.role}
                  </p>
                  <h3 className="mt-1.5 text-[17px]">{l.name}</h3>

                  <ul className="mt-4 space-y-2.5 border-t border-hairline pt-4 text-[13.5px] text-slatey">
                    <li className="flex items-center gap-2.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                      {l.city}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-brand" />
                      <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                        {l.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail className="h-3.5 w-3.5 shrink-0 text-brand" />
                      <a href={`mailto:${l.email}`} className="break-all hover:text-brand">
                        {l.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How governance works */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="How It Works"
            title="Elected annually, answerable continuously"
            intro="AIMO's structure is deliberately federal — the national team coordinates, but the State Boards hold the membership relationship."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "State & Regional Boards",
                b: "Elected annually by members in each region. Each board runs its own secretariat, calendar and scheme clinics.",
              },
              {
                n: "02",
                t: "National Governing Council",
                b: "Drawn from the State Boards. Approves membership, sets the national agenda and ratifies submissions.",
              },
              {
                n: "03",
                t: "National Office Bearers",
                b: "President, Vice President, Convenor and General Secretary. They represent AIMO externally and run the Secretariat.",
              },
            ].map((s) => (
              <div key={s.n} className="card p-8">
                <span className="font-display text-4xl font-extrabold text-brand-soft">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl">{s.t}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-hairline bg-white p-8 text-center">
            <p className="text-[15px] text-slatey">
              AIMO currently operates through{" "}
              <strong className="text-navy">{stateBoards.length}+ State and Regional Boards</strong>{" "}
              across India, each with its own elected chair and secretariat.
            </p>
            <Link href="/state-boards" className="btn btn-primary mt-6">
              Browse State Boards
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
