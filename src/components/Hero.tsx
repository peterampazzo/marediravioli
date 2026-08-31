import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { formatPickupDate, getEffectiveBatchStatus } from "@/config/batch";
import { SOCIAL_LINKS } from "@/config/social";
import type { BatchConfig } from "@/types/batch";

interface HeroProps {
  batch: BatchConfig;
}

export default function Hero({ batch }: HeroProps) {
  const batchStatus = getEffectiveBatchStatus(batch);
  const isOpen = batchStatus === "open";
  const pickupDate = formatPickupDate(batch);

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as const },
    },
  };

  return (
    <section className="bg-[#FDFBF7] pt-32 pb-10 md:pt-36 md:pb-14 relative overflow-hidden">
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

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight"
            >
              Good Food,
              <br />
              Cleaner Seas.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-lg"
            >
              Mare di Ravioli is a Copenhagen community project where people
              come together around handmade ravioli while supporting ocean
              conservation and local environmental initiatives.
            </motion.p>

            {/* Upcoming pickup badge */}
            {isOpen ? (
              <motion.div
                variants={item}
                className="w-full max-w-sm bg-white border border-[#A7D7C5]/50 rounded-2xl px-5 py-4 text-left shadow-sm"
              >
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1D4E89]/50 mb-2">
                  🗓 Upcoming Community Batch
                </p>
                <p className="font-bold text-primary text-base leading-snug">
                  {batch.filling}
                </p>
                <p className="text-sm text-foreground/55 mt-0.5">
                  Pickup in {batch.location} · {pickupDate}
                </p>
              </motion.div>
            ) : batchStatus === "sold-out" ? (
              <motion.div
                variants={item}
                className="w-full max-w-sm bg-[#FEF0F0] border border-[#F28C8C]/40 rounded-2xl px-5 py-4 text-left"
              >
                <p className="font-bold text-[#9f4039]">
                  This batch is fully requested.
                </p>
                <p className="text-sm text-[#9f4039]/75 mt-1">
                  Follow our community to hear about the next Copenhagen pickup.
                </p>
              </motion.div>
            ) : (
              <motion.div
                variants={item}
                className="w-full max-w-sm bg-[#EBF5F1] border border-[#A7D7C5]/60 rounded-2xl px-5 py-4 text-left"
              >
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1D4E89]/50 mb-2">
                  Next Community Batch
                </p>
                <p className="font-bold text-primary">
                  We’re planning the next Copenhagen pickup.
                </p>
                <p className="text-sm text-foreground/55 mt-1">
                  Follow along and we’ll share the date and filling when they’re
                  ready.
                </p>
              </motion.div>
            )}

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-sm lg:max-w-none"
            >
              {isOpen ? (
                <a
                  href="#pickup"
                  className="flex-1 text-center py-3.5 px-6 bg-[#1D4E89] text-white font-bold rounded-full shadow-md hover:bg-[#163d6e] transition-colors text-sm"
                  data-testid="button-hero-join"
                >
                  Request a Pickup Spot
                </a>
              ) : (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#1D4E89] text-white font-bold rounded-full shadow-md hover:bg-[#163d6e] transition-colors text-sm"
                  data-testid="button-hero-follow"
                >
                  <Instagram size={16} aria-hidden="true" /> Follow Our
                  Community
                </a>
              )}
              <a
                href="#mission"
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
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80"
              srcSet="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=480&auto=format&fit=crop&q=80 480w, https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80 800w, https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=80 1200w"
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt="Friends preparing food together in a home kitchen"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Ocean conservation badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
              <p className="text-xs font-bold text-primary">
                🌊 100% of proceeds support ocean conservation
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="block w-full h-8 md:h-10"
          fill="hsl(var(--card))"
        >
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
