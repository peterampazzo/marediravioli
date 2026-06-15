import { Instagram } from "lucide-react";
import logoFull from "@assets/logo-full-white-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <img src={logoFull} alt="Mare di Ravioli" className="h-24 w-24 object-contain mb-5 opacity-90" />

          <h2 className="font-serif font-bold text-2xl text-[#FDFBF7] mb-1 tracking-wide">
            Mare di Ravioli
          </h2>
          <p className="text-sm italic font-serif text-[#FDFBF7]/50 mb-8">
            Save the Oceans, One Raviolo at a Time.
          </p>

          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FDFBF7]/50 hover:text-[#FDFBF7] transition-colors text-sm font-semibold tracking-wide mb-12"
            data-testid="link-footer-instagram"
          >
            <Instagram size={16} /> @marediravioli
          </a>

          <div className="w-full max-w-xs h-px bg-[#FDFBF7]/10 mb-8" />

          <p className="text-xs text-[#FDFBF7]/25 tracking-wide">
            © {new Date().getFullYear()} Mare di Ravioli · Copenhagen
          </p>
        </div>
      </div>
    </footer>
  );
}
