import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const OrderBumpSection = () => {
  const [added, setAdded] = useState(false);

  return (
    <section className="section-padding bg-muted">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="tag-label bg-accent/10 text-accent inline-flex items-center gap-1.5 mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Oferta especial
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
            Oferta especial para padres
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          onClick={() => setAdded(!added)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`glass-card p-7 cursor-pointer transition-all duration-300 relative overflow-hidden ${
            added ? "ring-2 ring-accent" : ""
          }`}
        >
          <AnimatePresence>
            {added && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-primary/5 pointer-events-none"
              />
            )}
          </AnimatePresence>
          <div className="flex items-start gap-4 relative">
            <motion.div
              animate={added ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
                added
                  ? "bg-accent border-accent"
                  : "border-border"
              }`}
            >
              <AnimatePresence>
                {added && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-4 h-4 text-accent-foreground" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display font-bold text-lg text-foreground">Primeros Sabores – Guía de Alimentación para Bebés</h3>
                <span className="tag-label bg-accent/10 text-accent">50% OFF</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Guía práctica para aprender cómo comenzar la alimentación complementaria de tu bebé paso a paso.
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="price-strike text-base">$19.99</span>
                <span className="font-display text-xl font-extrabold text-primary tabular-nums">$9.99</span>
              </div>
            </div>
          </div>
          <motion.p
            animate={{ opacity: added ? 1 : 0.7 }}
            className="mt-4 text-xs text-muted-foreground text-center"
          >
            {added ? "✓ Agregado a tu compra" : "Haz click para agregar esta guía con 50% de descuento"}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderBumpSection;
