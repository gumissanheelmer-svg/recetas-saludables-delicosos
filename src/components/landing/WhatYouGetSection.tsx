import { motion } from "framer-motion";
import { BookOpen, Zap, ShoppingBasket, Baby, Salad } from "lucide-react";

const cards = [
  { icon: BookOpen, title: "100 recetas saludables", desc: "Variadas y equilibradas para cada día." },
  { icon: Zap, title: "Recetas rápidas y fáciles", desc: "Listas en menos de 20 minutos." },
  { icon: ShoppingBasket, title: "Ingredientes accesibles", desc: "Todo lo encuentras en el supermercado." },
  { icon: Baby, title: "Guía de 6 a 12 meses", desc: "Adaptadas a cada etapa de crecimiento." },
  { icon: Salad, title: "Método BLW incluido", desc: "Introducción al Baby Led Weaning." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const WhatYouGetSection = () => {
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
          <span className="tag-label bg-primary/10 text-primary inline-block mb-4">Contenido</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Todo lo que incluye el ebook
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((c) => (
            <motion.div key={c.title} variants={item} className="glass-card p-7 flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
