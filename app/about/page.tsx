import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="text-white selection:bg-blue-500 min-h-screen">
      <Nav />
      <section className="pt-32 pb-20 px-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-600 text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
              ABOUT US
            </div>
            <h1 className="hero-title text-white mb-6">
              <span className="gradient-text">GET TO</span>
              <br />
              <span className="pl-20 italic">KNOW TYLER</span>
            </h1>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="glass-panel p-8 border-2 border-blue-500/50 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <Image
                  src="/tyler.webp"
                  alt="Tyler - Owner of Buugz Auto Detailing"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="glass-panel p-12 border-2 border-blue-500/50 flex flex-col justify-center">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Hi, I&apos;m <span className="text-blue-400 font-bold">Tyler</span>,
                  the proud owner of <span className="text-blue-400 font-bold">Buugz Auto Detailing</span>.
                  With over a decade of professional detailing experience, I&apos;ve
                  honed my skills to deliver the highest quality care for every vehicle I
                  work on.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  I started this business out of a passion for cars and a commitment to
                  making sure every ride looks its absolute best — whether it&apos;s a
                  daily driver or a prized classic.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At Buugz, attention to detail and a customer-first approach are my top
                  priorities, so you can expect a hassle-free, satisfying experience every
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <div className="glass-panel p-12 border-2 border-blue-500/50">
              <h2 className="brand-font font-black text-4xl mb-6">CONTACT US</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                Whether you have questions or want to book an appointment, feel free to
                reach out to us via text or phone call. We&apos;ll do our best to get back
                to you as soon as we can.
              </p>
              <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm italic">
                Please note: We detail part-time, so there may occasionally be a slight
                delay in our response. But don&apos;t worry — you&apos;re important to us,
                and we&apos;ll make sure to follow up as quickly as possible.
              </p>
              <p className="text-gray-400 mb-8">Thanks for your patience and support!</p>
              <a
                href="/book"
                className="inline-block px-16 py-6 gradient-bg text-black font-black text-xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)]"
              >
                MESSAGE US
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
