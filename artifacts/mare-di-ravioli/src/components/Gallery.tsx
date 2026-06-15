import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1551183053-bf91798d047e?w=600",
      caption: "Ravioli al Burro e Salvia",
    },
    {
      src: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600",
      caption: "Ravioli alla Ricotta e Spinaci",
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
      caption: "Un momento di gioia condivisa",
    },
    {
      src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600",
      caption: "Preparazione artigianale",
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">La Nostra Galleria</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md relative">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
              <p className="text-center font-serif text-xl text-foreground font-medium">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
