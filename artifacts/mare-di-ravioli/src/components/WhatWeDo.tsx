import { motion } from "framer-motion";

const features = [
  {
    emoji: "🍝",
    title: "Handmade Ravioli",
    desc: "Fresh pasta crafted entirely by hand, every batch. No machines, no shortcuts — just flour, eggs, and good company.",
    bg: "bg-[#FFF8E7]",
    border: "border-[#F4C542]/40",
  },
  {
    emoji: "🌊",
    title: "Ocean Conservation",
    desc: "Every pickup contributes to ocean protection projects. We support beach clean-ups, marine research, and local environmental initiatives.",
    bg: "bg-[#EBF5F1]",
    border: "border-[#A7D7C5]/50",
  },
  {
    emoji: "🤝",
    title: "Community Gatherings",
    desc: "A friendly space to meet neighbors, share a meal, and be part of something local and meaningful in Copenhagen.",
    bg: "bg-[#EEF3FA]",
    border: "border-[#1D4E89]/15",
  },
  {
    emoji: "♻️",
    title: "Sustainable Practices",
    desc: "Local ingredients, minimal packaging, zero delivery. We keep things simple, seasonal, and kind to the planet.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">What We Do</h2>
          <p className="text-foreground/60 text-base max-w-xl mx-auto">
            Four simple things that make us who we are.
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
              <h3 className="font-bold text-lg text-primary leading-tight">{f.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
