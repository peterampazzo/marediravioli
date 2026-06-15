import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Who We Are</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-24">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block bg-accent/30 text-foreground text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">Our Mission</span>
              <h3 className="text-3xl md:text-4xl font-black text-primary mb-5 leading-tight">
                Saving Oceans,<br/>One Raviolo at a Time
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a passionate crew of volunteers who gather every week to hand-craft fresh ravioli from scratch. Every sale directly funds ocean conservation initiatives — from beach clean-ups to marine wildlife protection. Each plate you enjoy is a small act of love for the sea.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700"
                alt="Hands making fresh pasta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700"
                alt="Fresh pasta sheets being made"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="pl-0 md:pl-8"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">The Craft</span>
              <h3 className="text-3xl md:text-4xl font-black text-primary mb-5 leading-tight">
                Made With Hands,<br/>Heart & Purpose
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use only fresh, quality ingredients — rolling the dough by hand, crafting each filling with care. We're not a restaurant. We're a community united by two loves: great food and a healthy ocean. Come for the ravioli, stay for the mission.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
