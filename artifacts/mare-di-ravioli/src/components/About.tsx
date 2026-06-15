import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] border-b border-foreground/8">
      <div className="container mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-foreground/40 mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Who We Are</h2>
          <div className="w-12 h-px bg-foreground/20 mt-5" />
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">

          {/* Row 1 — image first on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2 overflow-hidden aspect-[4/3]"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700"
                alt="Hands making fresh pasta"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-5 leading-snug">
                Saving Oceans,<br />One Raviolo at a Time
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                A crew of volunteers hand-crafting fresh ravioli every week. Every sale funds ocean conservation — beach clean-ups, marine wildlife protection, and more.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden aspect-[4/3]"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700"
                alt="Fresh pasta sheets being made"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-5 leading-snug">
                Made With Hands,<br />Heart & Purpose
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                Fresh local ingredients, rolled by hand, filled with care. We're not a restaurant — we're a community united by great food and a love for the ocean.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
