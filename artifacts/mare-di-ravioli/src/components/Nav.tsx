import { useState, useEffect } from "react";
import { Menu, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@assets/logo-icon-transparent.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* ── DESKTOP: 3-column centered ── */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          <nav className="flex items-center gap-8 justify-start">
            <a href="#about" className="text-sm font-black text-foreground hover:text-primary transition-colors uppercase tracking-wider" data-testid="link-nav-about">About Us</a>
            <a href="#gallery" className="text-sm font-black text-foreground hover:text-primary transition-colors uppercase tracking-wider" data-testid="link-nav-gallery">Gallery</a>
          </nav>

          <div className="flex justify-center">
            <a href="#" className="flex flex-col items-center gap-0.5 group" data-testid="link-logo">
              <img src={logoIcon} alt="Mare di Ravioli" className="h-11 w-11 object-contain group-hover:scale-105 transition-transform duration-300" />
              <span className={`text-[10px] font-black tracking-widest uppercase leading-none transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
                Mare di Ravioli
              </span>
            </a>
          </div>

          <nav className="flex items-center gap-8 justify-end">
            <a href="#order" className="text-sm font-black text-foreground hover:text-primary transition-colors uppercase tracking-wider" data-testid="link-nav-order">Order Now</a>
            <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" data-testid="link-nav-instagram">
              <Instagram size={20} />
            </a>
          </nav>
        </div>

        {/* ── MOBILE: hamburger | logo+name | instagram ── */}
        <div className="flex md:hidden items-center justify-between h-12">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>

          <a href="#" className="flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2" data-testid="link-logo-mobile">
            <img src={logoIcon} alt="Mare di Ravioli" className="h-9 w-9 object-contain" />
            <span className={`text-sm font-black tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Mare di Ravioli
            </span>
          </a>

          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"} hover:opacity-70`}
            data-testid="link-mobile-instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-xl">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-0">
            {[
              { label: "About Us", href: "#about" },
              { label: "Gallery", href: "#gallery" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Order Now", href: "#order" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-black text-foreground hover:text-primary py-4 border-b border-border/40 uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
