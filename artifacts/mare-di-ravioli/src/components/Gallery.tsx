import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1551183053-bf91798d047e?w=600", caption: "Butter & Sage", tag: "Classic" },
  { src: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600", caption: "Ricotta & Spinach", tag: "Vegetarian" },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600", caption: "Shared Joy", tag: "Community" },
  { src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600", caption: "Made by Hand", tag: "Artisan" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Gallery</h2>
          <div className="w-16 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2 group cursor-pointer"
              data-testid={`card-gallery-${i}`}
            >
              <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] shadow-md relative">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <span className="bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-2 py-1 md:px-3 rounded-full">
                    {img.tag}
                  </span>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl md:rounded-3xl pointer-events-none" />
              </div>
              <p className="text-center font-black text-sm md:text-base text-foreground">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
