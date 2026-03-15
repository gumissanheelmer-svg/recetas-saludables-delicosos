import { motion } from "framer-motion";

const FinalCtaSection = () => {
  return (
    <section className="section-spacing bg-primary">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-primary-foreground"
        >
          Compra ahora y comienza hoy mismo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="mt-4 text-lg text-primary-foreground/80 font-body"
        >
          Prepara comidas saludables para tu bebé con confianza y facilidad.
        </motion.p>
        <motion.a
          href="#oferta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.2, 0, 0, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center justify-center bg-accent text-accent-foreground px-10 py-4 rounded-full font-display font-bold text-lg shadow-lg transition-shadow"
        >
          Descargar Ebook – $9.99
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
