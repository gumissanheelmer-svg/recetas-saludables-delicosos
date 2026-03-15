import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LimitedOfferProgress = () => {
  const [remaining, setRemaining] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((r) => Math.max(5, r - 1));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const percentage = ((100 - remaining) / 100) * 100;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="section-container max-w-2xl">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 text-accent" />
            </motion.div>
            <p className="font-display font-bold text-foreground">
              Quedan <span className="text-accent tabular-nums">{remaining}</span> de 100 descuentos disponibles hoy.
            </p>
          </div>
          <Progress value={percentage} className="h-3 bg-muted" />
          <p className="text-xs text-muted-foreground mt-2">
            Los descuentos se están agotando rápidamente
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default LimitedOfferProgress;
