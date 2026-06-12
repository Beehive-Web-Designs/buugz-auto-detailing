import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute right-0 top-0 w-3/4 h-full z-0 skew-box translate-x-20 origin-top-right">
        <div className="w-full h-full bg-black relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.jpg"
            alt=""
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#17c9f4] text-black font-black px-3 py-1 mb-6 mt-8 rotate-[-2deg] tracking-tighter italic">
            OVER A DECADE OF EXPERIENCE
          </div>
          <h1 className="text-white mb-8 hero-title font-black italic leading-tight">
            SHINE ON WITH<br />
            <span className="gradient-text">OUR MOBILE AUTO</span>
            <br />
            <span className="italic">DETAILING SERVICES</span>
          </h1>

          <div className="flex items-start gap-12 mt-12">
            <div className="max-w-sm">
              <p className="text-xl text-gray-400 leading-relaxed font-normal mb-8">
                Professional mobile auto detailing services. Attention to detail
                and a customer-first approach for a hassle-free, satisfying
                experience every time.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/book"
                  className="px-10 py-5 gradient-bg text-black font-black text-xl tracking-tighter flex items-center gap-3 hover:scale-110 transition-transform shadow-[0_0_50px_rgba(23,201,244,0.4)]"
                >
                  START YOUR DETAIL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
