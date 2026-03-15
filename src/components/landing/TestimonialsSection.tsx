import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    text: "Este ebook me salvó. Antes no sabía qué darle a mi bebé y ahora tengo recetas para toda la semana. ¡Totalmente recomendado!",
  },
  {
    name: "Laura P.",
    text: "Las recetas son súper fáciles y a mi bebé le encantan. Además los bonos son increíbles, especialmente la guía BLW.",
  },
  {
    name: "Carlos R.",
    text: "Como papá primerizo estaba perdido. Esta guía me dio la confianza para preparar comidas saludables y variadas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          Lo que dicen otros padres
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="card-soft text-left"
            >
              <p className="text-foreground font-body leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="font-display font-bold text-foreground text-sm">{t.name}</span>
                  <div className="flex items-center gap-1 text-primary">
                    <BadgeCheck className="w-4 h-4" />
                    <span className="text-xs font-body text-muted-foreground">Padre/Madre verificado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
