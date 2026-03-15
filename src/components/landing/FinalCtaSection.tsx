import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"
            style={{ left: `${i * 25}%`, top: `${(i % 2) * 40}%` }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>
      <div className="section-container max-w-3xl text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground"
        >
          Empieza hoy la alimentación saludable de tu bebé
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-5 text-lg text-primary-foreground/80"
        >
          100 recetas + 4 bonos exclusivos por solo $19.99
        </motion.p>
        <motion.a
          href="#oferta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center font-bold text-lg rounded-xl px-8 py-4 mt-8 bg-background text-foreground shadow-lg"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Descargar Ebook Ahora
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
