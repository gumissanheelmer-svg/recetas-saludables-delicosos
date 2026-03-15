import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    text: "Este ebook me ayudó mucho a organizar las comidas de mi bebé. Ahora tengo una rutina clara y saludable.",
  },
  {
    name: "Laura Pérez",
    text: "Las recetas son simples y saludables. Mi bebé las ama y yo ahorro mucho tiempo en la cocina.",
  },
  {
    name: "Carlos Rodríguez",
    text: "Ahora sé exactamente qué preparar cada día. Como papá primerizo, esta guía me dio toda la confianza.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const TestimonialsSection = () => {
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
          <span className="tag-label bg-primary/10 text-primary inline-block mb-4">Testimonios</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Lo que dicen otros padres
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -3 }}
              className="glass-card p-7"
            >
              <p className="text-foreground leading-relaxed text-[15px]">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                  <div className="flex items-center gap-1 text-primary">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span className="text-xs text-muted-foreground">Padre/Madre verificado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
