import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";

const bullets = [
  "100 recetas saludables",
  "Ingredientes simples y naturales",
  "Preparación rápida",
  "Ideal para bebés de 6 a 12 meses",
  "Incluye guía BLW y menú semanal",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 tag-label bg-primary/10 text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Guía #1 en alimentación infantil
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-foreground" style={{ textWrap: "balance" as any }}>
              Alimenta a tu bebé con recetas{" "}
              <span className="gradient-text">saludables</span>, simples y seguras.
            </h1>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl" style={{ textWrap: "pretty" as any }}>
              Descubre 100 recetas nutritivas para bebés de 6 a 12 meses que cualquier padre puede preparar en minutos.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </motion.div>
              ))}
            </div>

            {/* Price box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a href="#oferta" className="btn-hero">
                Descargar Ebook Ahora
              </a>
              <div className="flex items-baseline gap-3">
                <span className="price-strike text-xl font-medium">$39.99</span>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">HOY SOLO</span>
                  <span className="font-display text-3xl font-extrabold text-foreground tabular-nums mt-0.5">$19.99</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Book cover */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-secondary/60 blur-3xl" />
              <img
                src={ebookCover}
                alt="Primeros Sabores - 100 Recetas Saludables para Bebés"
                className="relative w-64 sm:w-80 lg:w-[22rem] drop-shadow-2xl animate-float"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 180 }}
                className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-2xl w-[72px] h-[72px] flex flex-col items-center justify-center font-display font-extrabold shadow-lg"
              >
                <span className="text-[9px] uppercase tracking-wider opacity-90">Solo</span>
                <span className="text-xl leading-none tabular-nums">$19.99</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
