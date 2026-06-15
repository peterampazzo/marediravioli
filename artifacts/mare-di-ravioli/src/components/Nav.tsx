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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF7]/96 backdrop-blur-md border-b border-[#e0d8cc]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8">

        {/* ── DESKTOP: links | bleeding logo | links ── */}
        <div className="hidden md:grid md:grid-cols-3 items-end h-16">
          {/* Left */}
          <nav className="flex items-center gap-10 pb-3">
            <a href="#about"
              className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              data-testid="link-nav-about">
              About
            </a>
            <a href="#gallery"
              className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              data-testid="link-nav-gallery">
              Gallery
            </a>
          </nav>

          {/* Center — large logo bleeding below nav */}
          <div className="flex justify-center">
            <a
              href="#"
              className="flex flex-col items-center gap-1 relative z-10"
              style={{ marginBottom: "-28px" }}
              data-testid="link-logo"
            >
              <img
                src={logoIcon}
                alt="Mare di Ravioli"
                className="h-[88px] w-[88px] object-contain drop-shadow-md"
              />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/60 leading-none">
                Mare di Ravioli
              </span>
            </a>
          </div>

          {/* Right */}
          <nav className="flex items-center gap-10 justify-end pb-3">
            <a href="#order"
              className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              data-testid="link-nav-order">
              Order
            </a>
            <a
              href="https://instagram.com/marediravioli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              data-testid="link-nav-instagram"
            >
              <Instagram size={17} />
            </a>
          </nav>
        </div>

        {/* ── MOBILE ── */}
        <div className="flex md:hidden items-center justify-between h-14">
          <button
            className="p-1 text-foreground/70 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2" data-testid="link-logo-mobile">
            <img src={logoIcon} alt="Mare di Ravioli" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-wide text-foreground">Mare di Ravioli</span>
          </a>

          <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer"
            className="p-1 text-foreground/60 hover:text-foreground transition-colors"
            data-testid="link-mobile-instagram">
            <Instagram size={19} />
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7]/98 backdrop-blur-md border-b border-[#e0d8cc]">
          <div className="container mx-auto px-5 py-2 flex flex-col">
            {[
              { label: "About Us", href: "#about" },
              { label: "Gallery", href: "#gallery" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Order Now", href: "#order" },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm font-semibold tracking-[0.12em] uppercase text-foreground/70 hover:text-foreground py-4 border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
