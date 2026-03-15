const TopBar = () => {
  return (
    <div className="bg-foreground text-background text-center py-2.5 px-4 text-sm font-medium tracking-wide">
      🔥 <span className="font-bold">Oferta limitada:</span>{" "}
      <span className="price-strike text-background/50">$39.99</span>{" "}
      <span className="font-bold text-accent">$19.99</span>{" "}
      — ¡Ahorra 50% hoy!
    </div>
  );
};

export default TopBar;
