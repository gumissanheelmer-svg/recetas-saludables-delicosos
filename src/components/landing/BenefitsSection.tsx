import { motion } from "framer-motion";
import { HeartPulse, Salad, Leaf, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: HeartPulse, label: "Desarrollo saludable" },
  { icon: Salad, label: "Mejor digestión" },
  { icon: Leaf, label: "Alimentación natural" },
  { icon: ShieldCheck, label: "Más tranquilidad para los padres" },
];

const BenefitsSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          Tu bebé merece la mejor alimentación
        </motion.h2>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <b.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
              </div>
              <span className="font-display font-bold text-foreground text-center">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
