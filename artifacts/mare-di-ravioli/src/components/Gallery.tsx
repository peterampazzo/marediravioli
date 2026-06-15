import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1551183053-bf91798d047e?w=600",
      caption: "Butter & Sage Ravioli",
      tag: "Classic"
    },
    {
      src: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600",
      caption: "Ricotta & Spinach Ravioli",
      tag: "Vegetarian"
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
      caption: "A Moment of Shared Joy",
      tag: "Community"
    },
    {
      src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600",
      caption: "Handcrafted with Love",
      tag: "Artisan"
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Our Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">From our kitchen to your table — and straight to the ocean.</p>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex flex-col gap-3 group cursor-pointer"
              data-testid={`card-gallery-${index}`}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg relative">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {img.tag}
                  </span>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
              </div>
              <p className="text-center font-bold text-lg text-foreground">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
