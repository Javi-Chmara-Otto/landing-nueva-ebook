import { Star, Quote, CheckCircle } from "lucide-react"

export function Testimonios() {
  const listaTestimonios = [
    {
      id: 1,
      nombre: "María F.",
      rol: "Emprendedora desde hace 3 meses",
      testimonio: "Gracias a la guía pasé de no saber nada a lanzar mi primera colección en semanas. Las guías de proveedores y packaging fueron claves. ¡Vendí todo en menos de un mes!",
      estrellas: 5,
      imagenAlumna: "/Maria.jpg", // Foto de perfil (opcional, pero recomendada)
      imagenVela: "/Testimonios 1.jpg", // <--- Foto de SU vela (Pilar de veracidad)
    },
    {
      id: 2,
      nombre: "Clara S.",
      rol: "Hobby que se volvió negocio",
      testimonio: "El bono de técnicas avanzadas es increíble. Mis clientes quedan fascinados con el efecto chantilly. ¡Parecen postres reales! No duden en comenzar.",
      estrellas: 5,
      imagenAlumna: "/Clara.jpg",
      imagenVela: "/Testimonios 2.jpg", // <--- Foto de SU vela tipo postre
    },
    {
      id: 3,
      nombre: "Lucía P.",
      rol: "Nueva en el rubro",
      testimonio: "Me daba miedo invertir y perder dinero. Pero con la planilla de costos y los textos para redes, logré comenzar a vender en la primera semana.",
      estrellas: 5,
      imagenAlumna: "/Lucía.jpg",
      imagenVela: "/Testimonios 3.jpg", // <--- Foto de SU vela con buen packaging
    }
  ]

  return (
    <section className="py-24 bg-[#fcf9f5] border-y border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabecera con Autoridad y Deseo */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-900 
                 text-[11px] md:text-sm font-black uppercase tracking-[0.2em] 
                 px-6 py-2 rounded-full shadow-sm">
            Historias de Éxito Real
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-amber-950 italic leading-tight">
            Ellas ya iluminan sus emprendimientos
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl italic">
            No creas en mi palabra, cree en los resultados de mujeres reales que transformaron su pasión en un negocio rentable con nuestra guía.
          </p>
        </div>

        {/* Grid de Testimonios Visuales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {listaTestimonios.map((test) => (
            <div key={test.id} className="group bg-white rounded-[3rem] shadow-sm border border-amber-100 overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col">

              {/* IMAGEN DE LA VELA DE LA ALUMNA (GIGANTE) */}
              {/* CONTENEDOR DE IMAGEN (Rediseñado para dar "aire") */}
              <div className="relative aspect-[4/3] bg-amber-50/10 overflow-hidden flex items-center justify-center p-6 md:p-8 rounded-t-[3rem]">
                <img
                  src={test.imagenVela}
                  alt={`Vela creada por ${test.nombre}`}
                  /* w-full y scale-100 para que la imagen se adapte al contenedor sin desbordar */
                  className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] 
                   transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay de "Resultado de Alumna" (Opcional, pero recomendado) */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">Obra de Alumna</span>
                </div>
              </div>

              {/* Contenido del Testimonio */}
              <div className="p-10 text-left flex flex-col flex-grow">

                {/* Estrellas y Cita */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(test.estrellas)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-amber-100 rotate-180" />
                </div>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 flex-grow italic">
                  "{test.testimonio}"
                </p>

                {/* Perfil de la Alumna */}
                <div className="pt-8 border-t border-amber-50 flex items-center gap-4 mt-auto">
                  <img
                    src={test.imagenAlumna}
                    alt={test.nombre}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-50 shadow-inner"
                  />
                  <div>
                    <p className="font-serif text-xl text-amber-950 font-semibold">{test.nombre}</p>
                    <p className="text-xs text-amber-700 font-medium uppercase tracking-widest">{test.rol}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}