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
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const SolutionSection = () => {
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
          <span className="tag-label bg-primary/10 text-primary inline-block mb-4">Aprenderás</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Todo lo que aprenderás con esta guía
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Todo lo que necesitas para alimentar a tu bebé con confianza.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {solutions.map((s) => (
            <motion.div key={s.title} variants={item} className="glass-card p-7 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
