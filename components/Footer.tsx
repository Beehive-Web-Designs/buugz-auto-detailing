import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 pb-0 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Buugz Detailing Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Professional mobile auto detailing with over a decade of experience.
            Attention to detail and a customer-first approach for a hassle-free,
            satisfying experience every time.
          </p>
        </div>
        <div>
          <h3 className="brand-font font-black text-xl mb-8 text-focus">
            LINKS
          </h3>
          <ul className="space-y-4 text-gray-400 font-bold">
            <li>
              <Link href="/services" className="hover:text-focus transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-focus transition-colors">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-focus transition-colors">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-focus transition-colors">
                BOOK NOW
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="brand-font font-black text-xl mb-8 text-focus">
            SOCIAL
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/buugzautodetailing/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-panel flex items-center justify-center hover:text-focus transition-colors cursor-pointer"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-16 py-8 mb-0 border-t border-white/5 text-center text-gray-400 text-sm">
        © 2026 Buugz Auto Detailing. Powered by <Link href="https://beehivewebdesigns.com" target="_blank" className="hover:text-focus transition-colors">Beehive Web Designs</Link>
      </div>
    </footer>
  );
}
