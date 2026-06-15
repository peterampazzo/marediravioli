import { useState, useEffect } from "react";
import { Menu, Instagram, X } from "lucide-react";
import logoIcon from "@assets/logo-icon-transparent.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = "text-sm font-semibold text-foreground/70 hover:text-primary transition-colors whitespace-nowrap";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        isScrolled ? "bg-[#FDFBF7]/96 backdrop-blur-md shadow-sm" : "bg-[#FDFBF7]"
      }`}
      style={{ borderBottom: isScrolled ? "1px solid hsl(36 22% 86%)" : "none" }}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden md:flex items-center h-16 relative container mx-auto px-8">

        {/* Left nav */}
        <nav className="flex items-center gap-8 flex-1">
          <a href="#story" className={linkClass} data-testid="link-nav-story">About</a>
          <a href="#mission" className={linkClass} data-testid="link-nav-mission">Our Mission</a>
        </nav>

        {/* CENTER — logo badge hanging below nav */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex justify-center z-20 pointer-events-none">
          <a
            href="#"
            className="pointer-events-auto flex flex-col items-center"
            data-testid="link-logo"
            style={{
              background: "#1D4E89",
              borderRadius: "0 0 999px 999px",
              padding: "10px 28px 22px",
              boxShadow: "0 6px 20px rgba(29,78,137,0.25)",
            }}
          >
            <img
              src={logoIcon}
              alt="Mare di Ravioli"
              className="h-12 w-12 object-contain"
            />
            <span className="text-[9px] font-semibold text-white/70 tracking-[0.2em] uppercase mt-1 leading-none">
              Mare di Ravioli
            </span>
          </a>
        </div>

        {/* Right nav */}
        <nav className="flex items-center gap-8 flex-1 justify-end">
          <a href="#how-it-works" className={linkClass} data-testid="link-nav-events">Events</a>
          <a href="#pickup" className={`${linkClass} bg-[#F4C542] text-foreground px-5 py-2 rounded-full font-bold hover:bg-[#f0bc30] transition-colors`} data-testid="link-nav-join">
            Join Us
          </a>
        </nav>
      </div>

      {/* ── MOBILE ── */}
      <div className="flex md:hidden items-center h-14 relative px-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 text-foreground/60 hover:text-foreground z-10"
          data-testid="button-mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile center badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none z-20">
          <a
            href="#"
            className="pointer-events-auto flex flex-col items-center"
            data-testid="link-logo-mobile"
            style={{
              background: "#1D4E89",
              borderRadius: "0 0 999px 999px",
              padding: "8px 20px 16px",
              boxShadow: "0 4px 14px rgba(29,78,137,0.22)",
            }}
          >
            <img src={logoIcon} alt="Mare di Ravioli" className="h-9 w-9 object-contain" />
            <span className="text-[8px] font-semibold text-white/70 tracking-widest uppercase mt-0.5 leading-none">MDR</span>
          </a>
        </div>

        <a
          href="https://instagram.com/marediravioli"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto p-1.5 text-foreground/60 hover:text-foreground z-10"
          data-testid="link-mobile-instagram"
        >
          <Instagram size={20} />
        </a>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[#e0d8cc] shadow-lg">
          <nav className="container mx-auto px-5 py-3 flex flex-col">
            {[
              { label: "About", href: "#story" },
              { label: "Our Mission", href: "#mission" },
              { label: "Events", href: "#how-it-works" },
              { label: "Join Us", href: "#pickup" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-foreground/70 hover:text-primary py-3.5 border-b border-border/40 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
