import { motion } from "framer-motion";
import { PARTNER } from "@/config/impact";

const features = [
  {
    emoji: "🍝",
    title: "Ravioli made by hand",
    desc: "Rolled, filled and sealed by hand on the day you pick them up. The filling changes with the season: ricotta and spinach, porcini, pink beetroot dough with red cabbage, black kale with potato and pecorino.",
    bg: "bg-[#FFF8E7]",
    border: "border-[#F4C542]/40",
  },
  {
    emoji: "📍",
    title: "Pre-order, pick up in Østerbro",
    desc: "When a date is announced you order a portion here and collect it in Østerbro on the day. One portion is 130 DKK and serves two. They keep 2 to 3 days in the fridge and up to 2 months in the freezer.",
    bg: "bg-[#EEF3FA]",
    border: "border-[#1D4E89]/15",
  },
  {
    emoji: "🌊",
    title: `All profits to ${PARTNER.name}`,
    desc: "Every batch is for the same cause. The profits go to Marine Conservation Philippines, a non-profit that runs reef monitoring, survey dives and turtle hatchling protection with local communities.",
    bg: "bg-[#EBF5F1]",
    border: "border-[#A7D7C5]/50",
  },
  {
    emoji: "🐟",
    title: "Sustainable seafood tips",
    desc: "With marine scientist Dr. Berthe Vastenhoud we share short, practical tips on choosing seafood that is easier on the ocean, like looking for the MSC and ASC labels.",
    bg: "bg-[#FEF0F0]",
    border: "border-[#F28C8C]/40",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            What we do
          </h2>
          <p className="text-foreground/75 text-base max-w-xl mx-auto">
            The short version.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`${f.bg} ${f.border} border rounded-2xl p-6 flex flex-col gap-3`}
            >
              <span className="text-4xl">{f.emoji}</span>
              <h3 className="font-bold text-lg text-primary leading-tight">
                {f.title}
              </h3>
              <p className="text-base text-foreground/75 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
