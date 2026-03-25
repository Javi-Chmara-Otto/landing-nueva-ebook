import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-6 h-6 text-accent" />
            <span className="font-serif text-xl font-medium text-foreground">
              Velas Luz del Alma
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-foreground transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Velas Luz del Alma. Todos los derechos reservados.
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 max-w-md mt-4">
            Este sitio no es parte de Facebook ni está respaldado por Facebook Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
