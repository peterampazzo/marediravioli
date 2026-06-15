import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    emoji: "✍️",
    title: "Reserve a Spot",
    body: "Fill out the short signup form and tell us how many servings you'd like. It only takes a minute.",
    color: "bg-[#EEF3FA] border-[#1D4E89]/15",
    numColor: "text-[#1D4E89]/20",
  },
  {
    n: "02",
    emoji: "🍝",
    title: "We Prepare the Batch",
    body: "Our volunteer crew gathers to roll, fill, and seal each raviolo by hand. No machines, just people who care.",
    color: "bg-[#FFF8E7] border-[#F4C542]/30",
    numColor: "text-[#F4C542]/50",
  },
  {
    n: "03",
    emoji: "📍",
    title: "Pick Up in Copenhagen",
    body: "Come collect your batch in person at our pickup location in Copenhagen. Bring a container and say hi!",
    color: "bg-[#EBF5F1] border-[#A7D7C5]/40",
    numColor: "text-[#A7D7C5]/60",
  },
  {
    n: "04",
    emoji: "🌊",
    title: "Your Contribution Helps the Ocean",
    body: "100% of the proceeds from each batch go directly to ocean conservation projects. Enjoy your ravioli — you've done good.",
    color: "bg-[#FEF0F0] border-[#F28C8C]/30",
    numColor: "text-[#F28C8C]/50",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 bg-[#FDFBF7]">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">How It Works</h2>
          <p className="text-foreground/60 text-base max-w-lg mx-auto">
            Four simple steps from signup to pickup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`${step.color} border rounded-2xl p-6 flex gap-5 items-start`}
              data-testid={`step-how-it-works-${i}`}
            >
              <span className={`font-bold text-5xl leading-none ${step.numColor} shrink-0 select-none`}>
                {step.n}
              </span>
              <div>
                <span className="text-2xl block mb-1">{step.emoji}</span>
                <h3 className="font-bold text-base text-primary mb-1.5 leading-snug">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
