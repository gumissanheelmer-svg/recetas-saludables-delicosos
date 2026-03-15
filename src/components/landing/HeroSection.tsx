import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="section-container section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 tag-label bg-primary/10 text-primary mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
              Guía #1 en alimentación infantil
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-foreground"
              style={{ textWrap: "balance" as any }}
            >
              Alimenta a tu bebé con recetas{" "}
              <motion.span
                className="gradient-text"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                saludables
              </motion.span>
              , simples y seguras.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl"
              style={{ textWrap: "pretty" as any }}
            >
              Descubre 100 recetas nutritivas para bebés de 6 a 12 meses que cualquier padre puede preparar en minutos.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 300 }}
                    className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </motion.div>
              ))}
            </div>

            {/* Price box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a
                href="#oferta"
                className="btn-hero relative overflow-hidden group"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Sparkles className="w-5 h-5 mr-2" />
                Descargar Ebook Ahora
              </motion.a>
              <div className="flex items-baseline gap-3">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="price-strike text-xl font-medium"
                >
                  $39.99
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                  className="flex flex-col leading-none"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">HOY SOLO</span>
                  <span className="font-display text-3xl font-extrabold text-foreground tabular-nums mt-0.5">$19.99</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Book cover */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-3xl bg-primary/10 blur-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={ebookCover}
                alt="Primeros Sabores - 100 Recetas Saludables para Bebés"
                className="relative w-64 sm:w-80 lg:w-[22rem] drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 12 }}
                whileHover={{ scale: 1.1 }}
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
