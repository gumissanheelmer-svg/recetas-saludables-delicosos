import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const notifications = [
  { name: "María", city: "Madrid", product: "100 Recetas Saludables para Bebés", time: "Hace 2 minutos" },
  { name: "Laura", city: "Bogotá", product: "Ebook + pack con descuento", time: "Hace 5 minutos" },
  { name: "Ana", city: "Ciudad de México", product: "100 Recetas Saludables para Bebés", time: "Hace 3 minutos" },
  { name: "Sofía", city: "Lima", product: "Ebook + guía con descuento", time: "Hace 6 minutos" },
  { name: "Carmen", city: "Buenos Aires", product: "100 Recetas Saludables para Bebés", time: "Hace 1 minuto" },
  { name: "Isabella", city: "Santiago", product: "Ebook + pack completo", time: "Hace 4 minutos" },
];

const SocialProofPopup = () => {
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const showNext = () => {
      const idx = Math.floor(Math.random() * notifications.length);
      setCurrent(idx);
      setTimeout(() => setCurrent(null), 5000);
    };

    const initialDelay = setTimeout(showNext, 2000);

    const interval = setInterval(showNext, 2000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {current !== null && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card p-4 flex items-start gap-3 max-w-[300px] pointer-events-auto"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground truncate">
                {notifications[current].name} – {notifications[current].city}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                Compró "{notifications[current].product}"
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">
                {notifications[current].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofPopup;
