import { motion } from "framer-motion";
import { ShieldCheck, Check, Zap } from "lucide-react";
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
    <section id="oferta" className="section-padding bg-muted relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container max-w-2xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="tag-label bg-accent/10 text-accent inline-block mb-4"
          >
            Oferta limitada
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Empieza hoy a alimentar mejor a tu bebé
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 glass-card p-8 md:p-10 relative overflow-hidden"
        >
          {/* Card glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <p className="font-display text-xl font-bold text-foreground">100 Recetas Saludables para Bebés</p>
          <p className="text-sm text-muted-foreground mt-1">Guía completa + 4 bonos exclusivos</p>
          <div className="mt-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-muted rounded-xl px-5 py-3"
            >
              <span className="text-sm font-medium text-muted-foreground">La oferta termina en</span>
              <CountdownTimer hours={2} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-baseline justify-center gap-4"
          >
            <span className="price-strike text-2xl font-medium">$39.99</span>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center leading-none"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">HOY SOLO</span>
              <span className="font-display text-5xl md:text-6xl font-extrabold text-foreground tabular-nums mt-1">$19.99</span>
            </motion.div>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto">
            {included.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            className="btn-hero w-full mt-8 relative overflow-hidden group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            animate={{ boxShadow: ["0 4px 14px rgba(46,204,113,0.3)", "0 4px 24px rgba(46,204,113,0.5)", "0 4px 14px rgba(46,204,113,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Comprar Ahora — $19.99
          </motion.a>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="mt-8 glass-card p-6 flex items-center gap-4"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
          >
            <ShieldCheck className="w-6 h-6 text-primary" />
          </motion.div>
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
