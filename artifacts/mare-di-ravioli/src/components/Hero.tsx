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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-0 overflow-hidden bg-primary">
      {/* Subtle wave overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none">
          <path d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,176C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,320L0,320Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <motion.div
            className="flex flex-col items-start max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4 flex flex-wrap gap-2">
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

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] mb-4"
            >
              Mare di<br />Ravioli
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-2 font-bold"
            >
              One Raviolo at a Time.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/70 mb-3 leading-relaxed max-w-md"
            >
              We're a volunteer crew hand-crafting fresh ravioli to fund ocean conservation. Every bite protects the sea.
            </motion.p>

            {!batch.isSoldOut && (
              <motion.div
                variants={itemVariants}
                className="mb-6 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 max-w-md w-full"
              >
                <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Next filling</p>
                <p className="text-white font-black text-lg">{batch.nextFilling}</p>
                <p className="text-white/60 text-xs mt-1">{batch.nextPickupDate}</p>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="text-base h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-foreground font-black shadow-lg hover:shadow-xl transition-all hover:scale-[1.03]"
                data-testid="button-hero-order"
              >
                <a href="#order">Order Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base h-14 px-8 rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 font-bold transition-all hover:scale-[1.03]"
                data-testid="button-hero-instagram"
              >
                <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: floating logo */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={logoFull}
                  alt="Mare di Ravioli — Save the Oceans, One Raviolo at a Time"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl -z-10 scale-150" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full h-16 md:h-20 lg:h-24" fill="hsl(var(--background))">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V100H0V80C59.71,100,130.83,98,188.7,82.55,236.2,70.84,278.4,63.76,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
