import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const title = "Mare di Ravioli";
  const titleWords = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.6 },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            className="flex flex-col items-start max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-primary leading-[1.1] mb-6 flex flex-wrap gap-x-4">
              {titleWords.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-md"
            >
              Ravioli fatti a mano con amore, per sostenere la nostra comunità.
            </motion.p>
            
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg" 
                className="text-base h-14 px-8 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                data-testid="button-hero-order"
              >
                <a href="#order">Ordina Ora</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base h-14 px-8 rounded-full border-primary/20 text-primary hover:bg-primary/5 transition-all hover:scale-[1.02]"
                data-testid="button-hero-instagram"
              >
                <a href="https://instagram.com/marediravioli" target="_blank" rel="noopener noreferrer">
                  Seguici su Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1584278858536-52532423b4b4?w=800" 
                alt="Fresh handmade ravioli" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/10 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none text-card">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-12 md:h-16 lg:h-24 fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,116.8,188.7,101.55,236.2,88.84,278.4,72.76,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
