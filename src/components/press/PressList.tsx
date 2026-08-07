"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";

type Item = {
  outlet: string;
  date?: string;
  headline?: string;
  url: string;
  image: string;
};

const PER_PAGE = 6;

/** Paginated list of media coverage. */
export default function PressList({ items }: { items: Item[] }) {
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);

  const pages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const visible = items.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (n: number) => {
    setPage(n);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-28">
      <div className="space-y-14 lg:space-y-16">
        {visible.map((m) => (
          <article
            key={m.url}
            className="grid items-start gap-8 border-b border-hairline pb-14 last:border-0 last:pb-0 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
          >
            <div className="lg:sticky lg:top-28">
              <h2 className="text-2xl sm:text-3xl">{m.outlet}</h2>
              <span className="mt-4 block h-[3px] w-12 rounded-full bg-brand" />

              <p className="mt-5 flex items-center gap-2 text-[14px] text-slatey">
                <Calendar className="h-4 w-4 text-brand" />
                {m.date ?? "2020"}
              </p>

              {m.headline && (
                <p className="mt-4 text-[16.5px] font-medium leading-snug text-navy">
                  {m.headline}
                </p>
              )}

              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-display text-[14px] font-semibold text-brand hover:underline"
              >
                Read the original article
                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="mt-3 break-all text-[12.5px] leading-relaxed text-slatey/80">
                {m.url}
              </p>
            </div>

            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${m.outlet} article`}
              className="group block overflow-hidden rounded-xl border border-hairline bg-white transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(15,27,61,0.45)]"
            >
              <Image
                src={m.image}
                alt={m.headline ? `${m.outlet}: ${m.headline}` : m.outlet}
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </article>
        ))}
      </div>

      {pages > 1 && (
        <nav
          aria-label="Media coverage pages"
          className="mt-14 flex flex-wrap items-center gap-2 border-t border-hairline pt-8"
        >
          <span className="mr-2 font-display text-[14px] font-semibold text-navy">
            Pages:
          </span>

          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => {
            const on = n === page;
            return (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-current={on ? "page" : undefined}
                className={`grid h-10 w-10 place-items-center rounded-md border font-display text-[14.5px] font-semibold transition-colors ${
                  on
                    ? "border-brand bg-brand text-white"
                    : "border-hairline text-slatey hover:border-brand hover:text-brand"
                }`}
              >
                {n}
              </button>
            );
          })}

          <span className="ml-auto text-[13.5px] text-slatey">
            Showing {(page - 1) * PER_PAGE + 1}–
            {Math.min(page * PER_PAGE, items.length)} of {items.length}
          </span>
        </nav>
      )}
    </div>
  );
}
