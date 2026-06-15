import { motion } from "framer-motion";

const steps = [
  {
    emoji: "🇩🇰",
    title: "Handmade in Copenhagen",
    description: "Every raviolo is crafted by hand in our community kitchen with love, laughter, and a little flour everywhere.",
  },
  {
    emoji: "🌊",
    title: "Picked Up Fresh",
    description: "You collect your batch at the pickup point — still warm, perfectly floured, ready to cook.",
  },
  {
    emoji: "⏱️",
    title: "3 Minutes to Perfection",
    description: "Drop them into salted boiling water for just 3 minutes. Best enjoyed immediately — topped however you love.",
  },
  {
    emoji: "🌍",
    title: "Every Bite Saves the Ocean",
    description: "100% of proceeds go directly to ocean conservation. Your dinner is doing real good in the world.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Simple, delicious, and good for the planet.
          </p>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`card-how-it-works-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
                className="text-5xl mb-5"
              >
                {step.emoji}
              </motion.div>
              <h3 className="text-lg font-black text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
