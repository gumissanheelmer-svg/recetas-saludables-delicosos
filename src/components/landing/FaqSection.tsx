import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "¿Es para bebés desde 6 meses?", a: "Sí, todas las recetas están diseñadas para bebés de 6 a 12 meses, con indicaciones claras para cada etapa de la alimentación complementaria." },
  { q: "¿Las recetas son fáciles de preparar?", a: "¡Por supuesto! Cada receta está pensada para padres ocupados. La mayoría se preparan en menos de 20 minutos con ingredientes simples." },
  { q: "¿Necesito ingredientes especiales?", a: "No. Todas las recetas usan ingredientes que puedes encontrar en cualquier supermercado. Nada exótico ni difícil de conseguir." },
  { q: "¿El ebook es digital?", a: "Sí. Inmediatamente después de tu compra recibirás un enlace de descarga por correo electrónico. Es un PDF que puedes leer en cualquier dispositivo." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tag-label bg-muted text-muted-foreground inline-block mb-4">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card p-6 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-foreground pr-4">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-3 leading-relaxed text-[15px]">{faq.a}</p>
                  </motion.div>
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
