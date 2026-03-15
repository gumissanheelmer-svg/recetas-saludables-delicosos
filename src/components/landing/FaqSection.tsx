import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "¿Es para bebés desde 6 meses?", a: "Sí, todas las recetas están diseñadas para bebés de 6 a 12 meses, con indicaciones claras para cada etapa de la alimentación complementaria." },
  { q: "¿Las recetas son fáciles de preparar?", a: "¡Por supuesto! Cada receta está pensada para padres ocupados. La mayoría se preparan en menos de 20 minutos con ingredientes simples." },
  { q: "¿Necesito ingredientes especiales?", a: "No. Todas las recetas usan ingredientes que puedes encontrar en cualquier supermercado. Nada exótico ni difícil de conseguir." },
  { q: "¿Cómo recibo el ebook?", a: "Inmediatamente después de tu compra recibirás un enlace de descarga por correo electrónico. Es un PDF que puedes leer en cualquier dispositivo." },
  { q: "¿Qué pasa si no me gusta?", a: "Tienes 7 días de garantía. Si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground"
        >
          Preguntas frecuentes
        </motion.h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="card-soft text-left cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                    className="overflow-hidden text-muted-foreground font-body mt-3 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
