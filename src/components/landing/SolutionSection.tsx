import { motion } from "framer-motion";
import { Utensils, Sprout, Timer, Heart } from "lucide-react";

const solutions = [
  { icon: Utensils, title: "Preparar recetas saludables", desc: "100 recetas fáciles, probadas y nutritivas para cada etapa." },
  { icon: Sprout, title: "Introducir nuevos alimentos", desc: "Guía paso a paso para una introducción alimentaria segura." },
  { icon: Timer, title: "Ahorrar tiempo", desc: "Recetas rápidas pensadas para padres ocupados." },
  { icon: Heart, title: "Crear hábitos saludables", desc: "Establece una base nutritiva desde los primeros meses." },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          La guía completa para la alimentación de tu bebé
        </motion.h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Todo lo que necesitas en un solo lugar para sentirte segura y preparada.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="card-soft text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
