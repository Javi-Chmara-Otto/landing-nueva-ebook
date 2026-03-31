"use client";

const modules = [
  {
    number: "01",
    title: "El Atajo de la Emprendedora",
    description: "Por qué las velas son el negocio más rentable para arrancar hoy mismo con menos de $25 de inversión inicial.",
  },
  {
    number: "02",
    title: "Tu Kit Esencial de Inicio",
    description: "Los únicos 4 materiales que realmente necesitas. Deja de tirar dinero en insumos innecesarios y costosos.",
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
    /* Eliminamos el absolute top-0 que causaba el solapamiento */
    <section className="relative py-20 md:py-32 bg-[#F3E9DC]">

      {/* FIX: El degradado ahora es parte del flujo o está contenido 
         para no subir al Hero. Usamos h-20 y top-0 pero con z-0 
      */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FBF8F3] to-[#F3E9DC] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-950/70 font-black mb-6">
            Contenido Completo
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-950 leading-tight mb-8 tracking-tight">
            Todo lo que <span className="italic text-amber-800 font-normal">necesitas</span>
            <br className="hidden lg:block" />
            <span className="lg:block"> en un solo lugar</span>
          </h2>
          <p className="text-stone-700 italic text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Seis pasos que te llevan desde no saber nada hasta tener tu emprendimiento funcionando.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {modules.map((module) => (
            <article
              key={module.number}
              className={`
                relative p-10 md:p-12 rounded-[2.5rem] border transition-all duration-500 group
                ${module.highlighted
                  ? "bg-white border-amber-300 shadow-2xl scale-105 z-10"
                  : "bg-white border-amber-100/40 shadow-xl hover:border-amber-300/60 hover:shadow-2xl hover:-translate-y-3"
                }
              `}
            >
              <span className="font-serif italic text-6xl md:text-7xl text-amber-900/10 group-hover:text-amber-900/25 transition-colors duration-500 block mb-8">
                {module.number}
              </span>

              <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-5 leading-tight">
                {module.title}
              </h3>

              <p className="text-stone-700 text-base md:text-lg leading-relaxed font-medium">
                {module.description}
              </p>

              {module.highlighted && (
                <div className="absolute top-8 right-10">
                  <span className="text-amber-600 text-2xl animate-pulse">✨</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}