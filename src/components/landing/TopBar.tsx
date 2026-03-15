import CountdownTimer from "./CountdownTimer";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background py-3 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium">
        <span>
          🔥 <span className="font-bold">Oferta limitada:</span>{" "}
          <span className="price-strike text-background/50">$39.99</span>{" "}
          <span className="font-bold text-accent">$19.99</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-background/60 text-xs hidden sm:inline">Termina en</span>
          <CountdownTimer hours={2} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
