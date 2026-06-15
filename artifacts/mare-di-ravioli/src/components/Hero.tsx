import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoFull from "@assets/logo-full-white-transparent.png";
import type { BatchConfig } from "@/types/batch";

interface HeroProps {
  batch: BatchConfig;
}

export default function Hero({ batch }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-primary pt-16 pb-0">
      {/* Subtle wave bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="white">
          <path d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,176C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 w-full">

        {/* ── MOBILE LAYOUT (stacked, logo first) ── */}
        <motion.div
          className="flex flex-col items-center text-center lg:hidden py-8 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo — big and centered */}
          <motion.div variants={item}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={logoFull}
                alt="Mare di Ravioli"
                className="w-52 h-52 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={item} className="text-6xl font-black text-white leading-[1.0]">
            Mare di<br />Ravioli
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={item} className="text-lg text-white/80 font-bold -mt-2">
            Save the Oceans, One Raviolo at a Time.
          </motion.p>

          {/* Batch info */}
          {!batch.isSoldOut ? (
            <motion.div
              variants={item}
              className="bg-white/15 border border-white/25 rounded-2xl px-6 py-4 w-full max-w-xs text-left"
            >
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Next batch</p>
              <p className="text-white font-black text-base leading-tight">{batch.nextFilling}</p>
              <p className="text-white/60 text-sm mt-1">{batch.nextPickupDate}</p>
            </motion.div>
          ) : (
            <motion.div variants={item}>
              <span className="inline-block bg-secondary text-white text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-full">
                Sold Out
              </span>
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col gap-3 w-full max-w-xs">
            <Button
              asChild
              size="lg"
              className="h-14 text-base rounded-full bg-accent hover:bg-accent/90 text-foreground font-black shadow-lg"
              data-testid="button-hero-order"
            >
              <a href="#order">Order Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 text-base rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 font-bold"
              data-testid="button-hero-instagram"
            >
              <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* ── DESKTOP LAYOUT (2-column) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left: copy */}
          <motion.div
            className="flex flex-col items-start max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="mb-5 flex flex-wrap gap-2">
              <span className="inline-block bg-accent text-foreground text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                Save the Oceans
              </span>
              {batch.isSoldOut ? (
                <span className="inline-block bg-secondary text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Sold Out
                </span>
              ) : (
                <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Next batch: {batch.nextPickupDate}
                </span>
              )}
            </motion.div>

            <motion.h1 variants={item} className="text-7xl xl:text-8xl font-black text-white leading-[1.0] mb-4">
              Mare di<br />Ravioli
            </motion.h1>

            <motion.p variants={item} className="text-xl text-white/90 mb-2 font-bold">
              One Raviolo at a Time.
            </motion.p>

            <motion.p variants={item} className="text-base text-white/65 mb-6 leading-relaxed max-w-sm">
              We hand-craft fresh ravioli to fund ocean conservation. Every bite protects the sea.
            </motion.p>

            {!batch.isSoldOut && (
              <motion.div
                variants={item}
                className="mb-7 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 w-full max-w-sm"
              >
                <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Next filling</p>
                <p className="text-white font-black text-lg">{batch.nextFilling}</p>
                <p className="text-white/60 text-xs mt-1">{batch.nextPickupDate}</p>
              </motion.div>
            )}

            <motion.div variants={item} className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-foreground font-black shadow-lg hover:scale-[1.03] transition-all"
                data-testid="button-hero-order-desktop"
              >
                <a href="#order">Order Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 font-bold hover:scale-[1.03] transition-all"
                data-testid="button-hero-instagram-desktop"
              >
                <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: floating logo */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={logoFull}
                  alt="Mare di Ravioli — Save the Oceans, One Raviolo at a Time"
                  className="w-80 xl:w-96 h-80 xl:h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl -z-10 scale-150" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full h-12 md:h-16 lg:h-20" fill="hsl(var(--background))">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V100H0V80C59.71,100,130.83,98,188.7,82.55,236.2,70.84,278.4,63.76,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
