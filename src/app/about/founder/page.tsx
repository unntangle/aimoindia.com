import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Founder — Sir M. Visvesvaraya",
  description:
    "Bharat Ratna Sir Mokshagundam Visvesvaraya, engineer and statesman, founded the All India Manufacturers' Organisation in 1941.",
};

const milestones = [
  {
    year: "1861",
    title: "Born at Muddenahalli",
    body: "Born on 15 September in Muddenahalli, in present-day Chikkaballapur district, Karnataka. His birthday is observed across India as Engineers' Day.",
  },
  {
    year: "1883",
    title: "Engineering at Pune",
    body: "Graduated from the College of Science, Pune, and entered the Bombay Presidency's public works service.",
  },
  {
    year: "1903",
    title: "Automatic sluice gates",
    body: "Designed and patented a system of automatic floodgates, first installed at the Khadakvasla reservoir near Pune, raising storage without raising the dam.",
  },
  {
    year: "1912",
    title: "Diwan of Mysore",
    body: "Appointed Diwan of the princely state of Mysore, where he pursued industrialisation and education with unusual single-mindedness.",
  },
  {
    year: "1932",
    title: "Krishna Raja Sagara",
    body: "The KRS dam across the Cauvery, whose construction he led, transformed irrigation across the Mysore region.",
  },
  {
    year: "1941",
    title: "AIMO is founded",
    body: "He established the All India Manufacturers' Organisation to give India's industrialists a single, credible, national voice.",
  },
  {
    year: "1955",
    title: "Bharat Ratna",
    body: "Conferred the Bharat Ratna, India's highest civilian honour, for his contribution to the nation's engineering and industry.",
  },
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Founder"
        title="Bharat Ratna Sir M. Visvesvaraya"
        intro="Engineer, administrator and industrial evangelist. He founded AIMO in 1941, six years before independence, on the conviction that India would be built by its manufacturers."
        image={img.precision}
        crumb="Our Founder"
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Portrait card */}
          <div className="lg:sticky lg:top-28">
            <div className="card overflow-hidden">
              <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-navy to-navy-700">
                <span className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.6)_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
                <span className="relative h-48 w-48">
                  <Image
                    src="/aimo-logo-left.png"
                    alt="Sir M. Visvesvaraya, founder of AIMO"
                    fill
                    sizes="192px"
                    className="object-contain brightness-0 invert"
                  />
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl">Sir Mokshagundam Visvesvaraya</h2>
                <p className="mt-1 text-[14px] text-brand">1861 – 1962</p>
                <dl className="mt-5 space-y-3 border-t border-hairline pt-5 text-[14.5px]">
                  {[
                    ["Honours", "Bharat Ratna (1955), KCIE (1915)"],
                    ["Office", "Diwan of Mysore, 1912–1918"],
                    ["Legacy", "Engineers' Day, 15 September"],
                    ["Founded", "AIMO, 1941"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-slatey">{k}</dt>
                      <dd className="text-right font-medium text-navy">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div>
            <p className="eyebrow mb-3">The Man Behind the Motto</p>
            <h2 className="text-3xl sm:text-4xl">
              He did not think industry was one policy among many
            </h2>

            <p className="mt-6 text-[15.5px] leading-relaxed text-slatey">
              Visvesvaraya belonged to a generation that had to argue, from first
              principles, that a colonised agrarian economy could become an industrial one.
              He made that argument as an engineer rather than as an ideologue — with dams,
              sluice gates, factories, an iron works, a bank and a university, each built
              and then pointed at as evidence.
            </p>

            <p className="mt-4 text-[15.5px] leading-relaxed text-slatey">
              By the time he founded AIMO in 1941 he was eighty years old and had spent
              six decades observing what actually stopped Indian enterprise: not a shortage
              of ambition, but fragmentation. Individual manufacturers had grievances;
              nobody had a hearing. The organisation he created was a remedy for that
              specific problem, and its motto — <strong className="text-navy">Prosperity
              through Industry</strong> — is a compressed version of the argument he had
              been making his whole working life.
            </p>

            <figure className="my-10 border-l-[3px] border-brand bg-mist p-7">
              <Quote className="h-7 w-7 text-brand" />
              <blockquote className="mt-3 font-display text-xl font-semibold leading-snug text-navy">
                Industrialise or perish.
              </blockquote>
              <figcaption className="mt-3 text-[14px] text-slatey">
                The phrase most associated with him — and, in substance, the founding brief
                of this organisation.
              </figcaption>
            </figure>

            <h3 className="text-2xl">A working life, in brief</h3>
            <ol className="mt-7 space-y-0">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative flex gap-6 pb-9 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-display text-[12.5px] font-bold text-white">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-hairline" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-[17px]">{m.title}</h4>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-slatey">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Link href="/membership" className="btn btn-primary mt-10">
              Continue the work — join AIMO
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
