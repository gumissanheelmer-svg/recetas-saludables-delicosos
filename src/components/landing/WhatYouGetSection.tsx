import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "100 recetas saludables para bebés",
  "Recetas fáciles y rápidas",
  "Ingredientes simples y accesibles",
  "Alimentación equilibrada",
  "Ideal para bebés de 6 a 12 meses",
];

const WhatYouGetSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          ¿Qué encontrarás en el ebook?
        </motion.h2>
        <div className="mt-10 space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="card-soft flex items-center gap-4 text-left"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </div>
              <span className="font-body text-lg font-medium text-foreground">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
