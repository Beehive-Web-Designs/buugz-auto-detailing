"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely incredible service! My car looks brand new. Tyler's attention to detail is unmatched.",
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Best detailing I've ever had. Professional, fast, and the ceramic coating is amazing.",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "Worth every penny! The interior detail was thorough and my car smells amazing.",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Tyler came to my location and did an outstanding job. Highly recommend.",
  },
  {
    name: "Amanda T.",
    rating: 5,
    text: "10/10 experience. My car has never looked this good. Will definitely book again!",
  },
  {
    name: "Chris P.",
    rating: 5,
    text: "Professional service from start to finish. The paint correction work is incredible.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const goNext = () => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="py-20 skew-box overflow-hidden">
      <div className="content-unskew container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="brand-font font-black text-5xl md:text-7xl mb-6">
            <span className="gradient-text">WHAT OUR</span>
            <br />
            <span className="italic">CUSTOMERS SAY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="hidden md:flex flex-shrink-0 rounded-full p-3 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-focus cursor-pointer"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            <div className="flex-1 max-w-2xl min-h-[240px] md:min-h-[200px] relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  aria-hidden={index !== activeIndex}
                  className={`glass-panel p-6 md:p-10 border-2 border-white/20 bg-black/20 transition-opacity duration-300 ${
                    index === activeIndex
                      ? "relative opacity-100"
                      : "absolute inset-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-focus text-focus" />
                    ))}
                  </div>
                  <p className="text-white text-base md:text-lg leading-relaxed mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-gray-300 font-bold text-sm">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="hidden md:flex flex-shrink-0 rounded-full p-3 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-focus cursor-pointer"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="rounded-full p-3 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-focus cursor-pointer"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="rounded-full p-3 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-focus cursor-pointer"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
