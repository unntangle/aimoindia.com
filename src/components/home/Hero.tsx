"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Img from "@/components/ui/Img";
import { heroSlides } from "@/lib/site";

const INTERVAL = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div className={`absolute inset-0 ${i === index ? "ken" : ""}`}>
            <Img
              src={slide.image}
              alt={slide.alt}
              sizes="100vw"
              seed={`hero-${i}`}
              priority={i === 0}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/25" />
        </div>
      ))}

      {/* Angled brand panel, echoing the reference layout */}
      <span className="absolute -right-24 top-0 hidden h-full w-[38%] skew-x-[-12deg] bg-brand/90 lg:block" />
      <span className="absolute -right-24 top-0 hidden h-full w-[38%] skew-x-[-12deg] bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent)] lg:block" />

      {/* Copy */}
      <div className="shell relative flex min-h-[560px] items-center py-20 lg:min-h-[660px]">
        <div className="max-w-2xl">
          {heroSlides.map((slide, i) =>
            i === index ? (
              <div key={slide.title}>
                <p className="eyebrow mb-4 fade-up text-brand-light">{slide.eyebrow}</p>
                <h1 className="text-4xl text-white fade-up delay-1 sm:text-5xl lg:text-[3.4rem]">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/75 fade-up delay-2">
                  {slide.body}
                </p>
                <div className="mt-9 flex flex-wrap gap-4 fade-up delay-3">
                  <Link href={slide.cta.href} className="btn btn-primary">
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/about" className="btn btn-ghost">
                    Our Story Since 1941
                  </Link>
                </div>
              </div>
            ) : null
          )}

          {/* Dots */}
          <div className="mt-12 flex items-center gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  i === index ? "w-10 bg-brand" : "w-5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 lg:flex">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
