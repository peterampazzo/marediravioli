import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wide text-card">
            Mare di Ravioli
          </h2>
          <p className="text-lg text-muted mb-8 italic font-serif">
            Ravioli fatti con ❤️ dai nostri volontari
          </p>
          
          <a
            href="https://instagram.com/marediravioli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 p-3 rounded-full hover:bg-white/10"
            data-testid="link-footer-instagram"
          >
            <Instagram size={24} />
            <span className="font-medium text-lg">@marediravioli</span>
          </a>
          
          <div className="w-full max-w-md h-px bg-white/10 mb-8"></div>
          
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Mare di Ravioli. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
