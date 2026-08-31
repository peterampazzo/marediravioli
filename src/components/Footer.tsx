import { Instagram, Heart } from "lucide-react";
import logoFull from "@assets/logo-full-white-transparent.png";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { SOCIAL_LINKS } from "@/config/social";

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-[#1D4E89] pb-12 pt-8">
      <div
        className="absolute inset-x-0 -top-16 h-16 overflow-hidden bg-card text-[#1D4E89]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-full w-full fill-current"
        >
          <path d="M0 52C170 15 322 16 484 49C650 83 807 77 968 41C1128 6 1287 17 1440 45V80H0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div
            className="relative h-44 w-44 overflow-hidden md:h-48 md:w-48"
            data-testid="footer-logo-lockup"
          >
            <img
              src={logoFull}
              alt="Mare di Ravioli — Save the oceans, one raviolo at a time"
              className="absolute left-1/2 top-1/2 w-56 max-w-none -translate-x-1/2 -translate-y-1/2 md:w-60"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="text-sm text-white/60">
            A Copenhagen community initiative 🌊
          </p>

          <div className="flex flex-wrap gap-6 text-sm justify-center">
            {[
              { label: "About", href: "#story" },
              { label: "Our Mission", href: "#mission" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Request a Spot", href: "#pickup" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/60 hover:text-white font-semibold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/25"
              data-testid="link-footer-instagram"
            >
              <Instagram size={17} aria-hidden="true" /> Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/25"
              data-testid="link-footer-facebook"
            >
              <FacebookIcon className="size-[17px]" aria-hidden="true" />{" "}
              Facebook
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-white/10 mt-2" />

          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Made with{" "}
            <Heart
              size={11}
              className="text-[#F28C8C]"
              fill="currentColor"
              aria-hidden="true"
            />{" "}
            in Copenhagen · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
