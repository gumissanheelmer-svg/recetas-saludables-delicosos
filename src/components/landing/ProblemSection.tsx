import { motion } from "framer-motion";
import { HelpCircle, AlertTriangle, Clock, ShieldQuestion } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Falta de ideas", desc: "No sabes qué comidas saludables preparar y repites lo mismo cada día." },
  { icon: AlertTriangle, title: "Miedo a equivocarte", desc: "Temor a dar alimentos que no sean seguros o adecuados para su edad." },
  { icon: Clock, title: "Sin tiempo", desc: "Entre el trabajo, el bebé y la casa, cocinar se siente imposible." },
  { icon: ShieldQuestion, title: "Confusión total", desc: "Demasiada información contradictoria sobre nutrición infantil." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="tag-label bg-accent/10 text-accent inline-block mb-4">El problema</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            ¿No sabes qué cocinar para tu bebé?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {problems.map((p) => (
            <motion.div key={p.title} variants={item} className="glass-card p-7 flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-accent" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
