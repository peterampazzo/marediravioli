import { Instagram } from "lucide-react";
import logoFull from "@assets/logo-full-white-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={logoFull}
            alt="Mare di Ravioli"
            className="h-28 w-28 object-contain mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-black mb-2 tracking-wide text-white">
            Mare di Ravioli
          </h2>
          <p className="text-base text-white/60 mb-8 font-semibold">
            Save the Oceans, One Raviolo at a Time ❤️
          </p>

          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 p-3 rounded-full hover:bg-white/10"
            data-testid="link-footer-instagram"
          >
            <Instagram size={22} />
            <span className="font-bold text-base">@marediravioli</span>
          </a>

          <div className="w-full max-w-md h-px bg-white/10 mb-8" />

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Mare di Ravioli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
