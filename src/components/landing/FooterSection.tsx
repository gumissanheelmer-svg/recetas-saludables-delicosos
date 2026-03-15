const FooterSection = () => {
  return (
    <footer className="py-10 px-5 text-center border-t border-border">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Primeros Sabores. Todos los derechos reservados.
      </p>
      <p className="text-xs text-muted-foreground/60 mt-2">
        Este producto es un ebook digital. No reemplaza el consejo de un profesional de la salud.
      </p>
    </footer>
  );
};

export default FooterSection;
