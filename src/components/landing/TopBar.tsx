const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 font-body text-sm">
      🎉 <span className="font-bold">Oferta especial:</span> 50% de descuento — <span className="price-old text-primary-foreground/70">$19.99</span>{" "}
      <span className="font-bold">$9.99</span>
    </div>
  );
};

export default TopBar;
