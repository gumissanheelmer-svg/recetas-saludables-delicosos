import { motion } from "framer-motion";
import { Utensils, ShieldCheck, Sprout, CalendarCheck } from "lucide-react";

const solutions = [
  { icon: Utensils, title: "Introduce alimentos correctamente", desc: "Guía paso a paso para cada etapa de alimentación." },
  { icon: Sprout, title: "Recetas para el desarrollo del bebé", desc: "Comidas equilibradas que apoyan el crecimiento saludable." },
  { icon: ShieldCheck, title: "Alimentación natural sin complicaciones", desc: "Ingredientes simples del día a día, sin complicarte." },
  { icon: CalendarCheck, title: "Organiza las comidas de la semana", desc: "Planifica toda la semana con el menú incluido." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const SolutionSection = () => {
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
            className="tag-label bg-primary/10 text-primary inline-block mb-4"
          >
            Aprenderás
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Todo lo que aprenderás con esta guía
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Todo lo que necesitas para alimentar a tu bebé con confianza.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-7 text-center flex flex-col items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20"
              >
                <s.icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
              </motion.div>
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {/* Animated bottom line */}
              <motion.div
                className="h-0.5 bg-primary/30 mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
