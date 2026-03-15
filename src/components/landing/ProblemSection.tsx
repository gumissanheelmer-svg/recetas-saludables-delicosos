import { motion } from "framer-motion";
import { HelpCircle, Clock, AlertTriangle, ShieldQuestion } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Falta de ideas", desc: "No sabes qué preparar y repites siempre lo mismo." },
  { icon: AlertTriangle, title: "Miedo a equivocarte", desc: "Temor a dar alimentos que no sean seguros para tu bebé." },
  { icon: Clock, title: "Poco tiempo", desc: "Entre el trabajo y el bebé, cocinar parece imposible." },
  { icon: ShieldQuestion, title: "Confusión total", desc: "Demasiada información contradictoria sobre alimentación infantil." },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          ¿No sabes qué cocinar para tu bebé?
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="card-soft text-left flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-muted-foreground font-body">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
