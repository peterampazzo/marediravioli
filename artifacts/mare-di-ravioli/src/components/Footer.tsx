import { Instagram, Heart } from "lucide-react";
import logoFull from "@assets/logo-full-white-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-[#1D4E89] py-12">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center gap-5">
          <img src={logoFull} alt="Mare di Ravioli" className="h-20 w-20 object-contain opacity-90" />

          <div>
            <h2 className="font-bold text-xl text-white">Mare di Ravioli</h2>
            <p className="text-white/55 text-sm mt-1">A Copenhagen community initiative 🌊</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm justify-center">
            {[
              { label: "About", href: "#story" },
              { label: "Our Mission", href: "#mission" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Reserve a Spot", href: "#pickup" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-white/60 hover:text-white font-semibold transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
            data-testid="link-footer-instagram"
          >
            <Instagram size={16} /> Follow Our Community
          </a>

          <div className="w-full max-w-xs h-px bg-white/10 mt-2" />

          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Made with <Heart size={11} className="text-[#F28C8C]" fill="currentColor" /> in Copenhagen · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
