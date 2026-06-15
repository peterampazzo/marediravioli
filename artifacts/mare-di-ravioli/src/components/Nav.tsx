import { useState, useEffect } from "react";
import { Menu, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Chi Siamo", href: "#about" },
    { label: "Galleria", href: "#gallery" },
    { label: "Ordina", href: "#order" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-serif font-bold text-primary tracking-tight"
          data-testid="link-logo"
        >
          Mare di Ravioli
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-nav-instagram"
          >
            <Instagram size={20} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary py-2"
            onClick={() => setIsMobileMenuOpen(false)}
            data-testid="link-mobile-nav-instagram"
          >
            <Instagram size={20} /> Instagram
          </a>
        </div>
      )}
    </header>
  );
}
