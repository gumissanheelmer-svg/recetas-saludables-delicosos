import { motion } from "framer-motion";
import { CalendarDays, Ban, Moon, IceCreamCone, Gift } from "lucide-react";

const bonuses = [
  { icon: CalendarDays, num: "01", title: "Menú semanal para bebés", desc: "Planifica comidas completas y equilibradas para toda la semana." },
  { icon: Ban, num: "02", title: "Guía de alimentos prohibidos", desc: "Conoce exactamente qué alimentos evitar en cada etapa." },
  { icon: Moon, num: "03", title: "Consejos de sueño infantil", desc: "Técnicas probadas para noches más tranquilas." },
  { icon: IceCreamCone, num: "04", title: "Receta de yogur casero", desc: "Prepara yogur natural y saludable en casa para tu bebé." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const BonusesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "spring" }}
            className="tag-label bg-accent/10 text-accent inline-flex items-center gap-1.5 mb-4"
          >
            <Gift className="w-3 h-3" />
            Extras
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Bonos exclusivos incluidos
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Sin costo adicional. Incluidos con tu compra hoy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {bonuses.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              whileHover={{ y: -4, x: 4, transition: { duration: 0.2 } }}
              className="glass-card p-7 flex gap-5 items-start relative overflow-hidden group"
            >
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4 tag-label bg-accent/10 text-accent"
              >
                GRATIS
              </motion.span>
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent/20"
              >
                <b.icon className="w-5 h-5 text-accent" strokeWidth={2} />
              </motion.div>
              <div className="pr-16">
                <h3 className="font-display font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
              {/* Hover glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BonusesSection;
