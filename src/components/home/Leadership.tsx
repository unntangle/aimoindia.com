import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { leaders } from "@/lib/site";

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

export default function Leadership() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="National Leadership Team"
          title="The people who carry the mandate"
          intro="AIMO's national office bearers are working promoters themselves — elected by the membership and answerable to it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <article key={l.name} className="card group overflow-hidden text-center">
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${tints[i % tints.length]}`}
              >
                <span className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-white/50 font-display text-2xl font-extrabold text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                  {initials(l.name)}
                </span>
              </div>

              <div className="px-6 py-6">
                <h3 className="text-[17px]">{l.name}</h3>
                <p className="mt-1 font-display text-[13.5px] font-semibold uppercase tracking-wider text-brand">
                  {l.role}
                </p>
                <p className="mt-1 text-[13.5px] text-slatey">{l.city}</p>

                <div className="mt-5 flex justify-center gap-2 border-t border-hairline pt-5">
                  <a
                    href={`mailto:${l.email}`}
                    aria-label={`Email ${l.name}`}
                    className="grid h-9 w-9 place-items-center rounded-md bg-mist text-navy transition-colors hover:bg-brand hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${l.phone.replace(/\s/g, "")}`}
                    aria-label={`Call ${l.name}`}
                    className="grid h-9 w-9 place-items-center rounded-md bg-mist text-navy transition-colors hover:bg-brand hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/about/leadership" className="btn btn-outline">
            View the full Governing Council
          </Link>
        </div>
      </div>
    </section>
  );
}
