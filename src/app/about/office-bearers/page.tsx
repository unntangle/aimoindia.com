import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { gcMembers, img, leaders, stateOfficeBearers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Bearers & Committee Members",
  description:
    "National and state office bearers of the All India Manufacturers' Organisation, and the standing committees that run its work.",
};

const tints = [
  "from-brand to-brand-dark",
  "from-navy to-navy-600",
  "from-brand-light to-brand",
  "from-navy-600 to-navy-700",
];

function initials(name: string) {
  if (name.toLowerCase().startsWith("to be")) return "·";
  return name
    .replace(/^Shri\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function OfficeBearersPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Office Bearers & Committee Members"
        intro="AIMO's office bearers are working promoters, elected annually by the membership. Below are the national team, the state team, and the standing committees that carry the work between meetings."
        image={img.boardroom}
        crumb="Office Bearers"
      />

      {/* National */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="National Team"
            title="National office bearers"
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

      {/* State */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Tamil Nadu State Board"
            title="State office bearers"
            intro="Elected annually by members in Tamil Nadu. Positions marked as pending are confirmed at the state AGM."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stateOfficeBearers.map((o, i) => {
              const pending = o.name.toLowerCase().startsWith("to be");
              return (
                <article key={o.role} className="card p-7 text-center">
                  <span
                    className={`mx-auto grid h-16 w-16 place-items-center rounded-full font-display text-lg font-extrabold text-white ${
                      pending ? "bg-hairline text-slatey" : `bg-gradient-to-br ${tints[i % tints.length]}`
                    }`}
                  >
                    {initials(o.name)}
                  </span>
                  <p className="mt-4 font-display text-[12.5px] font-semibold uppercase tracking-widest text-brand">
                    {o.role}
                  </p>
                  <h3 className={`mt-1.5 text-[17px] ${pending ? "text-slatey" : ""}`}>
                    {o.name}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-slatey">{o.city}</p>
                  {!pending && (
                    <a
                      href={`mailto:${o.email}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] text-slatey hover:text-brand"
                    >
                      <Mail className="h-3.5 w-3.5 text-brand" />
                      Email
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Governing Council */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Governing Council"
            title="National GC Members"
            intro={gcMembers.intro}
          />

          <div className="mt-14 overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 font-display text-[13px] font-semibold">No</th>
                  <th className="px-4 py-3 font-display text-[13px] font-semibold">Name</th>
                  <th className="px-4 py-3 font-display text-[13px] font-semibold">
                    Designation
                  </th>
                  <th className="px-4 py-3 font-display text-[13px] font-semibold">
                    Mobile
                  </th>
                  <th className="px-4 py-3 font-display text-[13px] font-semibold">
                    Email ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {gcMembers.members.map((m, i) => (
                  <tr
                    key={`${m.name}-${m.mobile}`}
                    className="border-t border-hairline transition-colors hover:bg-mist"
                  >
                    <td className="px-4 py-3 text-[13.5px] text-slatey">{i + 1}</td>
                    <td className="px-4 py-3 text-[14px] font-medium text-navy">
                      {m.name}
                    </td>
                    <td className="px-4 py-3 text-[13.5px] text-slatey">
                      {m.designation}
                    </td>
                    <td className="px-4 py-3 text-[13.5px] text-slatey">
                      <a href={`tel:+91${m.mobile}`} className="hover:text-brand">
                        {m.mobile}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-[13.5px]">
                      <a
                        href={`mailto:${m.email}`}
                        className="break-all text-brand hover:underline"
                      >
                        {m.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
