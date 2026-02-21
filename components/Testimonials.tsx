"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
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
      text: "Tyler came to my location and did an outstanding job. Highly recommend Buugz!",
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

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 skew-box bg-blue-600 overflow-hidden">
      <div className="content-unskew">
        <div className="flex gap-6 animate-marquee py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 glass-panel p-8 border-2 border-white/20 bg-black/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-white text-white"
                  />
                ))}
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-white/80 font-bold text-sm">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
