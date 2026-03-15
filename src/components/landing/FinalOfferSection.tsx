import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const FinalOfferSection = () => {
  return (
    <section id="oferta" className="section-spacing bg-muted">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          Empieza hoy a alimentar mejor a tu bebé
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="mt-10 card-soft mx-auto max-w-md"
        >
          <p className="font-display text-xl font-bold text-foreground">Primeros Sabores</p>
          <p className="text-muted-foreground font-body text-sm mt-1">100 Recetas + 5 Bonos Exclusivos</p>
          <div className="mt-6 flex items-baseline justify-center gap-4">
            <span className="price-old text-2xl">$19.99</span>
            <div>
              <span className="tag-gratis block">HOY</span>
              <span className="font-display text-5xl font-bold text-foreground tabular-nums">$9.99</span>
            </div>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            className="mt-8 inline-flex w-full items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-lg shadow-lg hover:shadow-[0_10px_20px_rgba(59,142,89,0.2)] transition-shadow animate-subtle-pulse"
          >
            Descargar Ebook Ahora
          </motion.a>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="mt-8 flex items-center justify-center gap-3 text-muted-foreground"
        >
          <ShieldCheck className="w-6 h-6 text-primary" />
          <span className="font-body text-sm">Garantía de satisfacción de 7 días. Si no te gusta, te devolvemos tu dinero.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalOfferSection;
