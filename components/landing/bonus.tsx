import { Gift, Calculator, MessageCircle } from "lucide-react"

export function Bonus() {
    const listaBonos = [
        {
            id: 1,
            titulo: "El Radar de Proveedores Inteligente",
            descripcion: "No necesitas una lista mágica, necesitas saber dónde buscar. Te enseño mi sistema exacto para encontrar proveedores confiables en tu ciudad o país , filtrar a los mejores y conseguir precios de mayorista desde tu primera compra de prueba.",
            icono: <Gift className="w-8 h-8 text-amber-700" />,
            valor: "$17.00"
        },
        {
            id: 2,
            titulo: "Sistema Automático de Rentabilidad",
            descripcion: "Deja de adivinar y empieza a ganar dinero real. Con esta planilla automatizada, solo ingresas lo que pagaste por tus insumos y el sistema te dice exactamente cuánto cobrar por cada vela para asegurar tu ganancia neta. Sin errores, sin perder dinero.",
            icono: <Calculator className="w-8 h-8 text-amber-700" />,
            valor: "$27.00"
        },
        {
            id: 3,
            titulo: "Pack 'Venta Explosiva' en Redes Sociales",
            descripcion: "¿No sabes qué escribir en tus publicaciones? Te entrego 10 plantillas de texto de alta conversión diseñadas para Instagram y WhatsApp. Solo copia, pega y adapta a tu marca de lujo para empezar a recibir pedidos desde tu primera semana, tal como hizo María en su emprendimiento.",
            icono: <MessageCircle className="w-8 h-8 text-amber-700" />,
            valor: "$15.00"
        }
    ]

    return (
        <section className="py-24 bg-[#fcf9f5] border-y border-amber-100/50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-amber-950">Regalos Exclusivos</h2>
                <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Si te sumas hoy, te llevas estas 3 herramientas valuadas en más de $50 USD totalmente GRATIS.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {listaBonos.map((bono) => (
                        <div key={bono.id} className="bg-white p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                            <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                {bono.icono}
                            </div>
                            <h3 className="font-serif text-2xl mb-4">{bono.titulo}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{bono.descripcion}</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 line-through opacity-50">
                                Valor: {bono.valor}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}