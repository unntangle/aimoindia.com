"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";
import Img from "@/components/ui/Img";
import { featuredEvent } from "@/lib/site";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return [
    Math.floor(ms / 86_400_000),
    Math.floor(ms / 3_600_000) % 24,
    Math.floor(ms / 60_000) % 60,
    Math.floor(ms / 1000) % 60,
  ];
}

export default function UpcomingEvent() {
  const target = new Date(featuredEvent.date).getTime();
  // Start at zero so server and client markup match, then hydrate live values.
  const [time, setTime] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image with date badge */}
        <div className="relative">
          <span className="dot-grid absolute -left-5 -top-5 hidden h-28 w-28 lg:block" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(15,27,61,0.55)]">
            <Img
              src={featuredEvent.image}
              alt="Speaker addressing an AIMO convention"
              sizes="(max-width: 1024px) 100vw, 50vw"
              seed="event"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -right-4 top-8 rounded-lg bg-brand px-5 py-3 text-center text-white shadow-lg">
            <span className="block font-display text-2xl font-extrabold leading-none">
              {featuredEvent.dayBadge.day}
            </span>
            <span className="block text-[12px] font-medium uppercase tracking-widest">
              {featuredEvent.dayBadge.month}
            </span>
          </div>
        </div>

        {/* Copy + countdown */}
        <div>
          <p className="eyebrow mb-3">{featuredEvent.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl">{featuredEvent.title}</h2>

          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px] font-medium text-navy">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" />
              {featuredEvent.venue}
            </span>
            <span className="text-slatey">{featuredEvent.dateLabel}</span>
          </p>

          <p className="mt-5 text-[15.5px] leading-relaxed text-slatey">
            {featuredEvent.body}
          </p>

          <ul className="mt-6 space-y-2.5">
            {featuredEvent.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[15px] text-navy">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* Countdown */}
          <div className="mt-9 grid max-w-md grid-cols-4 gap-3" suppressHydrationWarning>
            {UNITS.map((unit, i) => (
              <div
                key={unit}
                className="rounded-lg border border-hairline bg-white py-4 text-center shadow-sm"
              >
                <span
                  className="block font-display text-2xl font-extrabold text-navy"
                  suppressHydrationWarning
                >
                  {String(time[i]).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[11.5px] font-medium uppercase tracking-widest text-slatey">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/events" className="btn btn-primary">
              Register Interest
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Sponsor the Summit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
