const FooterSection = () => {
  return (
    <footer className="py-8 px-4 text-center text-muted-foreground font-body text-sm border-t border-border">
      <p>© {new Date().getFullYear()} Primeros Sabores. Todos los derechos reservados.</p>
    </footer>
  );
};

export default FooterSection;
