import { CheckCircle2 } from "lucide-react"

export function Bonus() {
    const listaBonos = [
        {
            id: 1,
            titulo: "Tu Guía de Suministros VIP",
            descripcion: "Aprende a identificar materiales premium y evita estafas sin depender de listas desactualizadas. Te enseño a filtrar proveedores confiables.",
            imagen: "/Mockup Bonus 1.png",
            valor: "$17.00"
        },
        {
            id: 2,
            titulo: "Calculadora de costos",
            descripcion: "Deja de adivinar y empieza a ganar dinero real. Con esta planilla automatizada, el sistema te dice exactamente cuánto cobrar para asegurar tu ganancia.",
            imagen: "/Mockup Bonus 2.png",
            valor: "$27.00"
        },
        {
            id: 3,
            titulo: "10 Plantillas para Redes",
            descripcion: "10 plantillas de alta conversión para Instagram y WhatsApp. Solo copia, pega y adapta para empezar a recibir pedidos desde tu primera semana.",
            imagen: "/Mockup Bonus 3.png",
            valor: "$15.00"
        },
        {
            id: 4,
            titulo: "Velas Navideñas y de Temporada",
            descripcion: "Domina los diseños más lucrativos del año. Crea velas temáticas que se venden solas en Navidad y fechas especiales para multiplicar tus ingresos.",
            imagen: "/Mockup Bonus 4.png",
            valor: "$19.00"
        },
        {
            id: 5,
            titulo: "Técnicas Avanzadas de Repostería",
            descripcion: "Lleva tus velas al siguiente nivel con el efecto 'Chantilly'. Aprende a crear velas que parezcan postres reales y sorprendan a tus clientes.",
            imagen: "/Mockup Bonus 5.png",
            valor: "$27.00"
        },
        {
            id: 6,
            titulo: "Marketing para tu Marca de Velas",
            descripcion: "Estrategias prácticas para atraer clientes sin invertir en publicidad. Construye una marca sólida que genere ventas constantes en redes sociales.",
            imagen: "/Mockup Bonus 6.png",
            valor: "$15.00"
        }
    ];

    return (
        <section className="py-24 bg-[#fcf9f5] border-y border-amber-100/50 overflow-hidden">
            <div className="w-full mb-12 md:mb-16 text-center">
                <span className="inline-block mb-6 md:mb-8 bg-amber-100 text-amber-900 
                   text-[11px] md:text-sm font-black uppercase tracking-[0.2em] 
                   px-6 py-2 rounded-full shadow-sm">
                    Oferta exclusiva de hoy
                </span>

                <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight mb-6">
                    ¡Llévate más de <span className="italic text-amber-800">$120 USD</span> en Bonos de Regalo!
                </h2>

                <p className="text-stone-600 italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Si te inscribes hoy, desbloqueas estas herramientas para lanzar tu negocio
                    con <strong className="text-stone-900 font-bold">menos de $25 USD</strong>.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {listaBonos.map((bono) => (
                        <div key={bono.id} className="group bg-white rounded-[3rem] shadow-sm border border-amber-100 flex flex-col transition-all duration-500 hover:shadow-2xl">

                            {/* CONTENEDOR DE IMAGEN GIGANTE: Maximizamos el espacio visual */}
                            <div className="relative h-[380px] md:h-[480px] flex items-center justify-center p-2 bg-gradient-to-b from-amber-50/40 to-transparent rounded-t-[3rem] overflow-visible">
                                <img
                                    src={bono.imagen}
                                    alt={bono.titulo}
                                    className="w-full max-w-[320px] md:max-w-[420px] h-auto drop-shadow-[0_35px_55px_rgba(0,0,0,0.3)] 
                                               transform scale-110 md:scale-125
                                               group-hover:scale-120 md:group-hover:scale-135 
                                               transition-transform duration-700 ease-out z-10"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-10 pt-12 text-left flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-1.5 bg-amber-600 rounded">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[11px] font-black text-amber-900 uppercase tracking-widest italic">Bono #0{bono.id}</span>
                                </div>

                                <h3 className="font-serif text-3xl mb-4 text-amber-950 leading-tight">
                                    {bono.titulo}
                                </h3>

                                <p className="text-muted-foreground text-base leading-relaxed mb-10 flex-grow">
                                    {bono.descripcion}
                                </p>

                                <div className="pt-8 border-t border-amber-50 flex justify-between items-center">
                                    <span className="text-sm md:text-base text-slate-400 line-through decoration-slate-400/60 font-bold italic tracking-wider">
                                        Valor: <span className="line-through">{bono.valor}</span>
                                    </span>
                                    <span className="text-2xl font-black text-amber-700 italic bg-amber-50 px-4 py-1 rounded-xl">
                                        ¡GRATIS!
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}