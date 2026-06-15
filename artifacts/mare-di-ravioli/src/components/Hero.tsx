import { motion } from "framer-motion";
import logoFull from "@assets/logo-full-dark-transparent.png";
import type { BatchConfig } from "@/types/batch";

interface HeroProps {
  batch: BatchConfig;
}

export default function Hero({ batch }: HeroProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative bg-[#FDFBF7] min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-20 pb-12">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }}
      />

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* ── MOBILE layout ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-7 lg:hidden"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={item}>
            <motion.img
              src={logoFull}
              alt="Mare di Ravioli"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-52 h-52 object-contain"
            />
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <h1 className="text-[3.5rem] leading-[1.0] font-bold font-serif text-foreground">
              Mare di<br />Ravioli
            </h1>
            <p className="text-lg italic font-serif text-foreground/60">
              Copenhagen's ravioli crew, saving one ocean at a time.
            </p>
          </motion.div>

          <motion.hr variants={item} className="w-16 border-foreground/20" />

          {!batch.isSoldOut ? (
            <motion.div
              variants={item}
              className="border border-foreground/15 rounded-sm px-6 py-4 w-full max-w-xs text-left bg-white/40"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/40 mb-2">Next batch</p>
              <p className="font-serif font-bold text-foreground text-base leading-snug">{batch.nextFilling}</p>
              <p className="text-sm text-foreground/50 mt-1">{batch.nextPickupDate}</p>
            </motion.div>
          ) : (
            <motion.div variants={item} className="border border-secondary/40 rounded-sm px-5 py-3 bg-secondary/5">
              <p className="text-secondary font-semibold text-sm tracking-wide">Fully booked — follow us for the next drop 🌊</p>
            </motion.div>
          )}

          <motion.div variants={item} className="flex flex-col gap-3 w-full max-w-xs">
            <a href="#order"
              className="w-full text-center py-4 rounded-sm bg-accent text-foreground font-semibold tracking-wide text-sm transition-all hover:opacity-90"
              data-testid="button-hero-order">
              Order Now
            </a>
            <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-sm bg-foreground text-[#FDFBF7] font-semibold tracking-wide text-sm transition-all hover:opacity-85"
              data-testid="button-hero-instagram">
              @marediravioli on Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* ── DESKTOP 2-column layout ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={item}>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-foreground/40 mb-4">
                Copenhagen · Ocean Conservation · Handmade Pasta
              </p>
              <h1 className="text-[5.5rem] xl:text-[7rem] leading-[0.95] font-bold font-serif text-foreground">
                Mare<br />di<br />Ravioli
              </h1>
            </motion.div>

            <motion.hr variants={item} className="border-foreground/15 w-24" />

            <motion.p variants={item} className="text-xl italic font-serif text-foreground/60 max-w-sm leading-relaxed">
              A volunteer crew, hand-crafting fresh ravioli every week to fund ocean conservation.
            </motion.p>

            {!batch.isSoldOut ? (
              <motion.div
                variants={item}
                className="border border-foreground/15 rounded-sm px-6 py-5 max-w-sm bg-white/40"
              >
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/40 mb-2">Next batch</p>
                <p className="font-serif font-bold text-foreground text-lg leading-snug">{batch.nextFilling}</p>
                <p className="text-sm text-foreground/50 mt-1.5">{batch.nextPickupDate}</p>
              </motion.div>
            ) : (
              <motion.div variants={item} className="border border-secondary/40 rounded-sm px-5 py-4 max-w-sm bg-secondary/5">
                <p className="text-secondary font-semibold">Fully booked — follow us for the next drop 🌊</p>
              </motion.div>
            )}

            <motion.div variants={item} className="flex gap-4">
              <a href="#order"
                className="px-8 py-4 rounded-sm bg-accent text-foreground font-semibold tracking-wide text-sm transition-all hover:opacity-90"
                data-testid="button-hero-order-desktop">
                Order Now
              </a>
              <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-sm bg-foreground text-[#FDFBF7] font-semibold tracking-wide text-sm transition-all hover:opacity-85"
                data-testid="button-hero-instagram-desktop">
                @marediravioli
              </a>
            </motion.div>
          </motion.div>

          {/* Right: logo */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            >
              <motion.img
                src={logoFull}
                alt="Mare di Ravioli"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[380px] xl:w-[440px] h-[380px] xl:h-[440px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/8" />
    </section>
  );
}
