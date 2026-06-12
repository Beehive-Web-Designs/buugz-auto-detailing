"use client";

import { useState, useEffect, useMemo } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ServiceConfig } from "@/lib/servicesConfig";

type Props = {
  service: ServiceConfig;
};

/** Warm browser cache for gallery slides. Compress large JPEGs under public/ for faster transfers (unoptimized static export). */
function preloadImageSrcs(srcs: string[]) {
  const seen = new Set<string>();
  for (const src of srcs) {
    if (seen.has(src)) continue;
    seen.add(src);
    const img = document.createElement("img");
    img.src = src;
  }
}

export default function ServiceDetailLayout({ service }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = service.images[activeIndex] ?? service.images[0];

  const gallerySrcKey = useMemo(
    () => service.images.map((i) => i.src).join("\0"),
    [service.images]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [service.slug]);

  useEffect(() => {
    const images = service.images;
    if (images.length === 0 || images.length > 6) return;
    preloadImageSrcs([...new Set(images.map((i) => i.src))]);
  }, [service.slug, gallerySrcKey]);

  useEffect(() => {
    const images = service.images;
    if (images.length === 0 || images.length <= 6) return;
    const n = images.length;
    const prev = (activeIndex - 1 + n) % n;
    const next = (activeIndex + 1) % n;
    preloadImageSrcs([images[prev].src, images[next].src]);
  }, [service.slug, activeIndex, gallerySrcKey]);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-white font-bold brand-font hover:text-focus transition-colors"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to all services
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 lg:items-stretch">
          {/* Gallery — row 1 col 1 on lg; matches main glass height */}
          <div className="glass-panel p-4 border-2 border-focus/50 flex flex-col min-h-0 lg:row-start-1 lg:col-start-1 lg:h-full lg:min-h-[42rem]">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch flex-1 min-h-0">
              {service.images.length > 1 && (
                <div className="hidden lg:flex flex-col gap-3 w-24 flex-shrink-0 min-h-0 max-h-full overflow-y-auto pr-1">
                  {service.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative w-full aspect-square border ${
                        index === activeIndex
                          ? "border-focus"
                          : "border-white/10 hover:border-focus/60"
                      }`}
                    >
                      <NextImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="cursor-pointer absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </button>
                  ))}
                </div>
              )}

              {activeImage && (
                <div className="relative w-full flex-1 min-w-0 aspect-[3/4] min-h-[280px] overflow-hidden lg:aspect-auto lg:min-h-0">
                  <NextImage
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {service.images.length > 1 && (
                    <div className="lg:hidden pointer-events-none absolute inset-0 flex items-center justify-between px-0.5">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            (prev) =>
                              (prev - 1 + service.images.length) %
                              service.images.length
                          )
                        }
                        className="pointer-events-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/85 backdrop-blur-[1px] transition-colors hover:border-white/20 hover:bg-black/40 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-focus"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            (prev) => (prev + 1) % service.images.length
                          )
                        }
                        className="pointer-events-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/85 backdrop-blur-[1px] transition-colors hover:border-white/20 hover:bg-black/40 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-focus"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" strokeWidth={2} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Main content — row 1 col 2 on lg */}
          <div className="glass-panel p-8 border-2 border-focus/50 flex flex-col min-h-0 lg:row-start-1 lg:col-start-2 lg:h-full lg:min-h-[42rem]">
            <div className="mb-6">
              <h1 className="text-lg font-bold text-white mb-2 text-left leading-snug">
                <span className="gradient-text text-4xl italic">{service.name}</span>
              </h1>
              {service.shortDescription && (
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {service.shortDescription}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <div>
                <div className="text-focus font-black text-2xl mb-1">
                  {service.price}
                </div>
                {service.sizes && (
                  <div className="text-sm text-gray-400">{service.sizes}</div>
                )}
              </div>
              {service.time && (
                <div className="text-xs text-gray-500 italic">
                  <span className="font-bold">Estimated service time:</span>{" "}
                  {service.time}
                </div>
              )}
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-2 mb-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-gray-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-focus rounded-full mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {service.addOn && (
              <div className="mt-4 p-4 bg-focus/10 border border-focus/40">
                <p className="text-sm text-focus font-bold">Add-On</p>
                <p className="text-sm text-gray-200 mt-1">{service.addOn}</p>
              </div>
            )}

            {service.optional && (
              <div className="mt-4 p-4 bg-focus/10 border border-focus/40">
                <p className="text-sm text-focus font-bold">Optional</p>
                <p className="text-sm text-gray-200 mt-1">
                  {service.optional}
                </p>
              </div>
            )}

            {service.note && (
              <div className="mt-4 p-4 bg-focus/5 border border-focus/30">
                <p className="text-sm text-focus font-bold italic">
                  {service.note}
                </p>
              </div>
            )}
          </div>

          {/* Contact — row 2 col 2 on lg */}
          {/* <div className="glass-panel p-8 border border-focus/30 lg:row-start-2 lg:col-start-2">
            <p className="text-sm text-gray-400 leading-relaxed text-center">
              Contact us with any questions or to schedule an appointment.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

