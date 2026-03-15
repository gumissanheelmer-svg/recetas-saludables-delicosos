import { motion } from "framer-motion";
import { CalendarDays, Ban, Moon, IceCreamCone } from "lucide-react";

const bonuses = [
  { icon: CalendarDays, num: "01", title: "Menú semanal para bebés", desc: "Planifica comidas completas y equilibradas para toda la semana." },
  { icon: Ban, num: "02", title: "Guía de alimentos prohibidos", desc: "Conoce exactamente qué alimentos evitar en cada etapa." },
  { icon: Moon, num: "03", title: "Consejos de sueño infantil", desc: "Técnicas probadas para noches más tranquilas." },
  { icon: IceCreamCone, num: "04", title: "Receta de yogur casero", desc: "Prepara yogur natural y saludable en casa para tu bebé." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const BonusesSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="tag-label bg-accent/10 text-accent inline-block mb-4">Extras</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Bonos exclusivos incluidos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Sin costo adicional. Incluidos con tu compra hoy.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {bonuses.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              whileHover={{ y: -3 }}
              className="glass-card p-7 flex gap-5 items-start relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 tag-label bg-accent/10 text-accent">GRATIS</span>
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-accent" strokeWidth={2} />
              </div>
              <div className="pr-16">
                <h3 className="font-display font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BonusesSection;
