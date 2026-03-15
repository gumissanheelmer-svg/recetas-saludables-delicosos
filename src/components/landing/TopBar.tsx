import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-primary text-primary-foreground py-3 px-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium">
        <span>
          🔥 <span className="font-bold">Oferta limitada:</span>{" "}
          <span className="price-strike text-primary-foreground/50">$39.99</span>{" "}
          <span className="font-bold text-primary-foreground">$19.99</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-primary-foreground/60 text-xs hidden sm:inline">Termina en</span>
          <CountdownTimer hours={2} />
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
