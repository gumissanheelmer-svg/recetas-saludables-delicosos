import { motion } from "framer-motion";
import ebookCover from "@/assets/ebook-cover.png";

const HeroSection = () => {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="order-2 md:order-1"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-foreground" style={{ textWrap: "balance" }}>
              100 Recetas Saludables para Bebés que{" "}
              <span className="text-primary">Amarás</span> Preparar
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body leading-relaxed" style={{ textWrap: "pretty" }}>
              Descubre cómo alimentar a tu bebé de forma saludable, fácil y segura con recetas simples y nutritivas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.a
                href="#oferta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-lg shadow-lg hover:shadow-[0_10px_20px_rgba(59,142,89,0.2)] transition-shadow"
              >
                Comprar Ahora
              </motion.a>
              <div className="flex items-baseline gap-3">
                <span className="price-old text-xl">$19.99</span>
                <div className="flex flex-col">
                  <span className="tag-gratis">HOY SOLO</span>
                  <span className="font-display text-3xl font-bold text-foreground tabular-nums">$9.99</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1], delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-muted rounded-outer opacity-50 blur-2xl" />
              <img
                src={ebookCover}
                alt="Primeros Sabores - 100 Recetas Saludables para Bebés - Portada del ebook"
                className="relative w-72 md:w-96 -rotate-3 drop-shadow-2xl"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center font-display font-bold shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <span className="text-xs">SOLO</span>
                <span className="text-lg tabular-nums">$9.99</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
