const modules = [
  {
    number: "01",
    title: "El Atajo de la Emprendedora",
    description: "Por qué las velas son el negocio más rentable para arrancar hoy mismo con solo $30 de inversión.",
  },
  {
    number: "02",
    title: "Tu Kit Esencial de Inicio",
    description: "Los únicos 4 materiales que realmente necesitas. Deja de tirar dinero en insumos innecesarios.",
  },
  {
    number: "03",
    title: "Fórmula 'Cero Errores'",
    description: "El paso a paso exacto para que tus velas huelan increíble y queden perfectas desde la primera prueba.",
  },
  {
    number: "04",
    title: "Diseños de Alta Gama",
    description: "Secretos de aromas y texturas para que tus clientes perciban tus velas como objetos de lujo (y paguen por ello).",
  },
  {
    number: "05",
    title: "Tu Marca Irresistible",
    description: "Crea un packaging que enamore a primera vista y una línea de productos que se venda sin 'perseguir' clientes.",
  },
  {
    number: "06",
    title: "Estrategia de Precios Pro",
    description: "Cómo cobrar lo que realmente vales y conseguir tus primeras ventas sin gastar un centavo en publicidad.",
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
