import { Gift, Calculator, MessageCircle } from "lucide-react"

export function Bonus() {
    const listaBonos = [
        {
            id: 1,
            titulo: "Cómo encontrar proveedores al mejor precio",
            descripcion: "Guía práctica para conseguir materiales de calidad sin perder tiempo ni dinero en el intento.",
            icono: <Gift className="w-8 h-8 text-amber-700" />,
            valor: "$7.00"
        },
        {
            id: 2,
            titulo: "Calculadora de Costos",
            descripcion: "Planilla Excel que calcula automáticamente tu costo, precio de venta y ganancia por vela.",
            icono: <Calculator className="w-8 h-8 text-amber-700" />,
            valor: "$5.00"
        },
        {
            id: 3,
            titulo: "10 textos listos para vender en redes",
            descripcion: "Copia, pega, cambia el precio y publica. Sin tener que pensar qué escribir.",
            icono: <MessageCircle className="w-8 h-8 text-amber-700" />,
            valor: "$5.00"
        }
    ]

    return (
        <section className="py-24 bg-[#fcf9f5] border-y border-amber-100/50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-amber-950">Regalos Exclusivos</h2>
                <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Si te sumas hoy, te llevas estas 3 herramientas valuadas en más de $17 USD totalmente GRATIS.
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