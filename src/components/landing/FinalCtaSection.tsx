import { motion } from "framer-motion";

const FinalCtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-background rounded-full blur-3xl" />
      </div>
      <div className="section-container max-w-3xl text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground"
        >
          Empieza hoy la alimentación saludable de tu bebé
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-5 text-lg text-primary-foreground/80"
        >
          100 recetas + 4 bonos exclusivos por solo $19.99
        </motion.p>
        <motion.a
          href="#oferta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="btn-accent mt-8 text-lg"
        >
          Descargar Ebook Ahora
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
