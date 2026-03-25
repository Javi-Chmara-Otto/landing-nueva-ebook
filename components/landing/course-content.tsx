const modules = [
  {
    number: "01",
    title: "Por qué las velas artesanales son el negocio más fácil de arrancar desde casa",
    description: "El único negocio que puedes empezar este fin de semana con menos de $30 y sin experiencia previa.",
  },
  {
    number: "02",
    title: "Los 4 materiales que necesitas para hacer tu primera vela hoy",
    description: "Sin desperdiciar plata en cosas innecesarias. Lista de proveedores incluida para que compres al mejor precio.",
  },
  {
    number: "03",
    title: "La receta exacta para tu primera vela perfecta (sin errores costosos)",
    description: "Paso a paso con los errores más comunes ya resueltos para que no desperdicies ni un gramo de cera.",
  },
  {
    number: "04",
    title: "Velas irresistibles que se venden solas",
    description: "Combinaciones de aromas, colores y texturas que convierten una vela común en un producto imposible de ignorar.",
  },
  {
    number: "05",
    title: "Cómo armar una línea de productos que se venda sola",
    description: "Define tu nicho, ponle nombre a tus velas y crea un packaging que enamore a tus clientes desde el primer vistazo.",
  },
  {
    number: "06",
    title: "Cómo fijar tu precio para ganar dinero desde la primera venta",
    description: "La fórmula exacta para calcular tus costos, cobrar lo que vale tu trabajo y conseguir tus primeras ventas sin gastar en publicidad.",
    highlighted: true,
  },
];

export function CourseContent() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-widest text-accent font-medium uppercase mb-4">
            Contenido Completo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            <span className="font-sans font-normal">Todo lo que </span>
            <span className="font-serif italic text-accent">necesitas</span>
            <br />
            <span className="font-sans font-normal">en un solo lugar</span>
          </h2>
          <p className="text-muted-foreground italic text-lg max-w-xl">
            Seis pasos que te llevan desde no saber nada hasta tener tu emprendimiento funcionando.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((module) => (
            <article
              key={module.number}
              className={`
                p-6 md:p-8 rounded-lg border transition-all duration-300
                ${module.highlighted 
                  ? "bg-accent/10 border-accent/30" 
                  : "bg-card border-border hover:border-accent/30 hover:shadow-sm"
                }
              `}
            >
              <span className="font-serif italic text-4xl md:text-5xl text-accent/60 block mb-4">
                {module.number}
              </span>
              <h3 className="font-semibold text-foreground text-base md:text-lg leading-snug mb-3">
                {module.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {module.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
