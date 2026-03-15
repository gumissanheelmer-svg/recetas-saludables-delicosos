import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const included = [
  "100 recetas saludables",
  "5 etapas de alimentación",
  "4 bonos exclusivos",
  "Método BLW incluido",
  "Acceso digital inmediato",
  "Garantía de 7 días",
];

const FinalOfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-muted">
      <div className="section-container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tag-label bg-accent/10 text-accent inline-block mb-4">Oferta limitada</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Empieza hoy a alimentar mejor a tu bebé
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 glass-card p-8 md:p-10"
        >
          <p className="font-display text-xl font-bold text-foreground">100 Recetas Saludables para Bebés</p>
          <p className="text-sm text-muted-foreground mt-1">Guía completa + 4 bonos exclusivos</p>

          <div className="mt-8 flex items-baseline justify-center gap-4">
            <span className="price-strike text-2xl font-medium">$39.99</span>
            <div className="flex flex-col items-center leading-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">HOY SOLO</span>
              <span className="font-display text-5xl md:text-6xl font-extrabold text-foreground tabular-nums mt-1">$19.99</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-hero w-full mt-8 animate-pulse-soft">
            Comprar Ahora — $19.99
          </a>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 glass-card p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-display font-bold text-foreground">Compra sin riesgo</p>
            <p className="text-sm text-muted-foreground">Garantía de satisfacción de 7 días. Si no te gusta, te devolvemos tu dinero sin preguntas.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalOfferSection;
