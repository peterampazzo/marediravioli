import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* ── OUR STORY ── */}
      <section id="story" className="py-14 bg-card">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl aspect-[4/3] shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700"
                alt="Community pasta making in Copenhagen"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <span className="inline-block bg-[#EEF3FA] text-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
                How It All Started
              </h2>
              <p className="text-foreground/65 leading-relaxed">
                Mare di Ravioli began as a simple idea: bring people together around a shared table, make something delicious by hand, and give back to the ocean we love.
              </p>
              <p className="text-foreground/65 leading-relaxed">
                What started as a small gathering in Copenhagen has grown into a regular community event, connecting locals who care about good food <em>and</em> a healthier planet. Every batch is rolled by hand, filled with local ingredients, and picked up in person — because that's what makes it real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section id="mission" className="py-14 bg-[#1D4E89] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <circle cx="700" cy="50" r="200" fill="white" />
            <circle cx="50" cy="350" r="150" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full self-start">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                Ravioli for the Ocean
              </h2>
              <p className="text-white/75 leading-relaxed">
                The connection between ravioli and ocean conservation might seem unexpected — but it makes perfect sense to us. Food brings people together, and when people come together, they can make a real difference.
              </p>
              <p className="text-white/75 leading-relaxed">
                Every time you reserve a pickup spot, your contribution goes directly to ocean conservation projects in and around Denmark. We support beach clean-ups, marine education, and local environmental groups making a tangible impact.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Beach Clean-ups", "Marine Education", "Local Partners", "Zero Waste"].map((tag) => (
                  <span key={tag} className="bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-3xl aspect-[4/3] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=700"
                alt="Ocean conservation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
