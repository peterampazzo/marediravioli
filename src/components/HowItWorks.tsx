import { motion } from "framer-motion";
import { PARTNER } from "@/config/impact";
import { SOCIAL_LINKS } from "@/config/social";

const steps = [
  {
    n: "01",
    emoji: "✍️",
    title: "Order when a date is announced",
    body: "We post the date and the filling here and on Instagram. Fill in the form with your name and how many portions you want, and we confirm by email.",
    color: "bg-[#EEF3FA] border-[#1D4E89]/12",
    numColor: "text-[#1D4E89]/65",
  },
  {
    n: "02",
    emoji: "🍝",
    title: "We make them on the day",
    body: "On the Saturday we roll, fill and seal every raviolo by hand. A batch is around 300 ravioli.",
    color: "bg-[#FFF8E7] border-[#F4C542]/30",
    numColor: "text-[#806000]",
  },
  {
    n: "03",
    emoji: "📍",
    title: "Pick up in Østerbro",
    body: "Come by between 13 and 15 at the address we send you. If you can’t make it that day, write to us and we find another time.",
    color: "bg-[#EBF5F1] border-[#A7D7C5]/40",
    numColor: "text-[#2F765C]",
  },
  {
    n: "04",
    emoji: "🌊",
    title: "The profits go to the ocean",
    body: `All the profits go to ${PARTNER.name}. We post the totals, and what they paid for, on Instagram.`,
    color: "bg-[#FEF0F0] border-[#F28C8C]/30",
    numColor: "text-[#A83F3F]",
  },
];

const faq = [
  {
    q: "How much is it?",
    a: "130 DKK per portion. One portion serves two people.",
  },
  {
    q: "How long do they keep?",
    a: "2 to 3 days in the fridge, up to 2 months in the freezer.",
  },
  {
    q: "Can I order when no date is announced?",
    a: "No. Orders open a few weeks before each date. Follow us on Instagram and you will see it first.",
  },
  {
    q: "Who is behind this?",
    a: "Elena, Val, Sofia and Pietro, four Italians living in Copenhagen. We are all volunteers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-14 bg-[#FDFBF7]">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            How it works
          </h2>
          <p className="text-foreground/75 text-base max-w-lg mx-auto">
            From order to pickup.
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
              className={`${step.color} border rounded-2xl p-5`}
              data-testid={`step-how-it-works-${i}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-bold text-5xl leading-none ${step.numColor} select-none`}
                >
                  {step.n}
                </span>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <h3 className="font-bold text-lg text-primary mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-base text-foreground/75 leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-5">
            Good to know
          </h3>
          <div
            className="divide-y divide-border rounded-2xl border border-border bg-white"
            data-testid="faq"
          >
            {faq.map((entry) => (
              <details key={entry.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary [&::-webkit-details-marker]:hidden">
                  {entry.q}
                  <span
                    aria-hidden="true"
                    className="text-xl leading-none text-primary/60 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-2 text-base leading-relaxed text-foreground/75">
                  {entry.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-foreground/75">
            Anything else?{" "}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              Send us a message on Instagram
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
