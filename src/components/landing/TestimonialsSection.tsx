import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";

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
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const TestimonialsSection = () => {
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
            Testimonios
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Lo que dicen otros padres
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-7 relative group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4"
              >
                <Quote className="w-8 h-8 text-primary" />
              </motion.div>
              <p className="text-foreground leading-relaxed text-[15px] relative">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm"
                >
                  {t.name.split(" ").map(n => n[0]).join("")}
                </motion.div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                  <div className="flex items-center gap-1 text-primary">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span className="text-xs text-muted-foreground">Padre/Madre verificado</span>
                  </div>
                </div>
              </div>
              {/* Hover glow */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
