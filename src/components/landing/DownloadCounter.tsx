import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const DownloadCounter = () => {
  const [count, setCount] = useState(2847);
  const [displayCount, setDisplayCount] = useState(0);
  const hasAnimated = useRef(false);

  // Animate count up on first view
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = count / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), count);
      setDisplayCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count]);

  // Slowly increase over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
      setDisplayCount((d) => d + 1);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 bg-muted"
    >
      <div className="section-container flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <p className="text-lg font-medium text-foreground">
          Más de{" "}
          <span className="font-display font-extrabold text-primary tabular-nums">
            {displayCount.toLocaleString()}
          </span>{" "}
          padres ya descargaron esta guía.
        </p>
      </div>
    </motion.section>
  );
};

export default DownloadCounter;
