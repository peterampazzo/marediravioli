import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                La Nostra Missione
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Siamo un gruppo di volontari appassionati che si riunisce ogni settimana per preparare ravioli freschi fatti a mano. Il ricavato delle nostre vendite sostiene iniziative di solidarietà nella nostra comunità. Ogni piatto racconta una storia di cura, tradizione e amore.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group relative"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700" 
                alt="Hands making fresh pasta" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group relative"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700" 
                alt="Fresh pasta sheets" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="pl-0 md:pl-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                L'Arte della Tradizione
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Utilizziamo solo ingredienti locali e di stagione, seguendo le ricette tramandate dalle nostre nonne. Impastiamo la farina, tiriamo la sfoglia e prepariamo il ripieno con dedizione. Non siamo un ristorante, ma una famiglia allargata unita dalla passione per le cose buone e autentiche.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
