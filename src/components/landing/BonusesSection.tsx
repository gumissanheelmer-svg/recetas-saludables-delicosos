import { motion } from "framer-motion";
import { IceCreamCone, Moon, Ban, CalendarDays, Baby } from "lucide-react";

const bonuses = [
  { icon: IceCreamCone, title: "Receta de Yogur Casero", desc: "Aprende a preparar yogur natural y saludable en casa." },
  { icon: Moon, title: "Consejos para mejorar el sueño del bebé", desc: "Técnicas probadas para noches más tranquilas." },
  { icon: Ban, title: "Lista de alimentos prohibidos", desc: "Conoce qué alimentos evitar en cada etapa." },
  { icon: CalendarDays, title: "Menú semanal de 6 a 12 meses", desc: "Planificación completa semana a semana." },
  { icon: Baby, title: "Guía del método BLW", desc: "Introducción al Baby Led Weaning paso a paso." },
];

const BonusesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          Además recibirás <span className="text-accent">5 bonos exclusivos</span>
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="card-soft text-left relative overflow-hidden"
            >
              <span className="tag-gratis mb-4 inline-block">GRATIS</span>
              <div className="w-12 h-12 rounded-inner bg-secondary flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
