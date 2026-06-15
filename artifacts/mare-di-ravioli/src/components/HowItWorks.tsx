import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Handmade in Copenhagen", body: "Crafted by hand every week with fresh, quality ingredients and a lot of love." },
  { n: "02", title: "Picked Up Fresh", body: "Still warm, perfectly floured — collect your batch at the pickup point." },
  { n: "03", title: "3 Minutes to Perfection", body: "Boiling salted water, 3 minutes. Done. Best eaten immediately." },
  { n: "04", title: "Every Bite Saves the Ocean", body: "100% of proceeds go directly to ocean conservation projects." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-foreground/8">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-foreground/40 mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">How It Works</h2>
          <div className="w-12 h-px bg-foreground/20 mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-foreground/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`flex gap-8 py-10 px-6 md:px-8 ${
                i % 2 === 0 ? "md:border-r" : ""
              } border-foreground/10 ${
                i < 2 ? "md:border-b" : ""
              }`}
              data-testid={`step-how-it-works-${i}`}
            >
              <span className="font-serif font-bold text-4xl md:text-5xl text-foreground/15 leading-none shrink-0 select-none">
                {step.n}
              </span>
              <div className="pt-1">
                <h3 className="font-serif font-bold text-lg text-foreground mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
