import { motion } from "framer-motion";
import type { BatchConfig } from "@/types/batch";

interface HeroProps {
  batch: BatchConfig;
}

export default function Hero({ batch }: HeroProps) {
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const },
    },
  };

  return (
    <section className="bg-[#FDFBF7] pt-28 pb-10 md:pt-32 md:pb-14 relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute top-20 -right-24 w-72 h-72 bg-[#A7D7C5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-56 h-56 bg-[#F4C542]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={item}>
              <span className="inline-block bg-[#A7D7C5]/40 text-[#1D4E89] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                Copenhagen Community Initiative 🌊
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
              Good Food,<br />Cleaner Seas.
            </motion.h1>

            <motion.p variants={item} className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-lg">
              Mare di Ravioli is a Copenhagen community project where people come together around handmade ravioli while supporting ocean conservation and local environmental initiatives.
            </motion.p>

            {/* Upcoming pickup badge */}
            {!batch.isSoldOut ? (
              <motion.div
                variants={item}
                className="w-full max-w-sm bg-white border border-[#A7D7C5]/50 rounded-2xl px-5 py-4 text-left shadow-sm"
              >
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1D4E89]/50 mb-2">🗓 Upcoming Community Batch</p>
                <p className="font-bold text-primary text-base leading-snug">{batch.nextFilling}</p>
                <p className="text-sm text-foreground/55 mt-0.5">Pickup in Copenhagen · {batch.nextPickupDate}</p>
              </motion.div>
            ) : (
              <motion.div variants={item} className="w-full max-w-sm bg-[#FEF0F0] border border-[#F28C8C]/40 rounded-2xl px-5 py-4 text-left">
                <p className="font-bold text-[#c0534a]">This batch is fully reserved — follow us for the next one! 🌊</p>
              </motion.div>
            )}

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 w-full max-w-sm lg:max-w-none">
              <a
                href="#pickup"
                className="flex-1 text-center py-3.5 px-6 bg-[#1D4E89] text-white font-bold rounded-full shadow-md hover:bg-[#163d6e] transition-colors text-sm"
                data-testid="button-hero-join"
              >
                Reserve a Pickup Spot
              </a>
              <a
                href="#story"
                className="flex-1 text-center py-3.5 px-6 bg-white border-2 border-[#1D4E89]/20 text-primary font-bold rounded-full hover:bg-[#EEF3FA] transition-colors text-sm"
                data-testid="button-hero-mission"
              >
                Learn About the Mission
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
              alt="People making ravioli together in Copenhagen"
              className="w-full h-full object-cover"
            />
            {/* Ocean conservation badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
              <p className="text-xs font-bold text-primary">🌊 100% funds ocean conservation</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 md:h-10" fill="hsl(var(--card))">
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
