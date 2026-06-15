import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-foreground/40 mb-3">Our Creations</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Gallery</h2>
          <div className="w-12 h-px bg-foreground/20 mt-5" />
        </motion.div>

        {/* Asymmetric grid — desktop */}
        <div className="hidden md:grid md:grid-cols-12 gap-5 md:gap-6">

          {/* Large — left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="col-span-7 flex flex-col gap-3"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.55 }}
                src="https://images.unsplash.com/photo-1551183053-bf91798d047e?w=800"
                alt="Butter & Sage Ravioli"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-serif italic text-foreground/60">Butter & Sage — a classic done right.</p>
          </motion.div>

          {/* Small stack — right */}
          <div className="col-span-5 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="overflow-hidden aspect-square">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.55 }}
                  src="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600"
                  alt="Ricotta & Spinach"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-serif italic text-foreground/60">Ricotta & Fresh Spinach.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="flex flex-col gap-3"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.55 }}
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600"
                  alt="Shared Joy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-serif italic text-foreground/60">A moment of shared joy.</p>
            </motion.div>
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="col-span-5 flex flex-col gap-3"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.55 }}
                src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600"
                alt="The craft"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-serif italic text-foreground/60">Handcrafted, every time.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="col-span-7 flex flex-col gap-3"
          >
            <div className="overflow-hidden aspect-[16/9]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.55 }}
                src="https://images.unsplash.com/photo-1584278858536-52532423b4b4?w=900"
                alt="Fresh pasta table"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-serif italic text-foreground/60">The floured table. Every Saturday.</p>
          </motion.div>

        </div>

        {/* Mobile — simple stack */}
        <div className="md:hidden flex flex-col gap-8">
          {[
            { src: "https://images.unsplash.com/photo-1551183053-bf91798d047e?w=600", caption: "Butter & Sage — a classic done right." },
            { src: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600", caption: "Ricotta & Fresh Spinach." },
            { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600", caption: "A moment of shared joy." },
            { src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600", caption: "Handcrafted, every time." },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="flex flex-col gap-2"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-serif italic text-foreground/60">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
