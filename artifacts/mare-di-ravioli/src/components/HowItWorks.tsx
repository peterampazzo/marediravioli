import { motion } from "framer-motion";

const steps = [
  { emoji: "🇩🇰", title: "Handmade in Copenhagen", description: "Crafted by hand with love, laughter, and a little flour." },
  { emoji: "🌊", title: "Picked Up Fresh", description: "Still warm, perfectly floured — collect your batch at the pickup point." },
  { emoji: "⏱️", title: "3 Minutes to Perfection", description: "Boiling salted water, 3 minutes. Done. Eat immediately." },
  { emoji: "🌍", title: "Every Bite Saves the Ocean", description: "100% of proceeds go to ocean conservation." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">How It Works</h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 md:p-6 rounded-3xl bg-card border border-border/50 shadow-sm"
              data-testid={`card-how-it-works-${i}`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.35 }}
                className="text-4xl md:text-5xl mb-4"
              >
                {step.emoji}
              </motion.div>
              <h3 className="text-sm md:text-base font-black text-foreground mb-2 leading-tight">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
