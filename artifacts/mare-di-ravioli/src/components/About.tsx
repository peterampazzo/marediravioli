import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-5 md:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Who We Are</h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image first on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl relative order-1 md:order-2"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700"
                alt="Hands making fresh pasta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block bg-accent/30 text-foreground text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Our Mission
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                Saving Oceans,<br />One Raviolo at a Time
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A crew of volunteers hand-crafting fresh ravioli every week. Every sale funds ocean conservation — beach clean-ups, marine wildlife protection, and more.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image first on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700"
                alt="Fresh pasta sheets being made"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                The Craft
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                Made With Hands,<br />Heart & Purpose
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Fresh local ingredients, rolled by hand, filled with care. We're not a restaurant — we're a community united by great food and a love for the ocean.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
