"use client";

import { Shield, Lock, Sparkles } from "lucide-react";

const benefits = [
  "Guía 'El Arte de las Velas de Lujo': $29.99 USD",
  "Bono 1: Guía de Suministros VIP: $17.00 USD",
  "Bono 2: Calculadora de costos: $27.00 USD",
  "Bono 3: 10 Plantillas para Redes: $15.00 USD",
  "Bono 4: Velas Navideñas y Temporada: $19.00 USD",
  "Bono 5: Repostería Avanzada en Velas: $27.00 USD",
  "Bono 6: Marketing para tus Redes: $15.00 USD",
  "VALOR TOTAL: $149.99 USD",
  "Llévatelo todo hoy por solo: $11.99 USD",
];

export function Offer() {
  return (
    <section id="oferta" className="py-20 md:py-28 px-4 bg-[#2A1810]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-amber-200/60 uppercase tracking-widest text-sm font-bold">
            EMPIEZA HOY
          </span>
          {/* Título Principal: Cambiá text-foreground por text-white */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium mt-4 tracking-tighter text-balance">
            Tu emprendimiento empieza <span className="italic text-amber-400">aquí</span>
          </h2>
          {/* Párrafo descriptivo: Usá un color claro traslúcido */}
          <p className="text-xl text-amber-50/60 mt-8 max-w-2xl mx-auto leading-relaxed italic">
            Todo lo que necesitas para crear tus primeras velas y empezar a venderlas, en una guía que puedes leer esta noche.
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {/* Launch Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold tracking-wider px-5 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              OFERTA DE LANZAMIENTO
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Price Comparison */}
          <p className="text-center text-muted-foreground italic mb-6 text-sm md:text-base">
            Un taller de velas artesanales cuesta más de $150 USD.
          </p>

          {/* Price Display */}
          <div className="text-center mb-2">
            <span className="text-xl md:text-2xl text-muted-foreground line-through mr-3">
              $29,99
            </span>
            <span className="text-amber-600 text-lg align-top relative top-1">$</span>
            <span className="text-5xl md:text-6xl font-serif text-foreground">11,99</span>
            <span className="text-xl md:text-2xl text-muted-foreground ml-2">USD</span>
          </div>

          <p className="text-center text-amber-600 text-sm mb-8">
            Descarga inmediata en PDF · +50 páginas
          </p>

          {/* Benefits List - Optimizado para Mobile */}
          <ul className="space-y-3 mb-8 max-w-lg mx-auto px-1">
            {benefits.map((benefit, index) => {
              const isTotal = benefit.includes("VALOR TOTAL");
              const isFinalOffer = index === benefits.length - 1;

              return (
                <li key={index} className="flex items-start gap-2">
                  {/* Signo + o Flecha */}
                  <span className={`flex-shrink-0 font-bold text-base leading-5 ${isTotal ? 'text-gray-400' : 'text-amber-500'}`}>
                    {isTotal ? '→' : '+'}
                  </span>

                  {/* Texto del Beneficio con ajuste de tamaño en mobile */}
                  <span className={`
          text-[13px] sm:text-sm md:text-base leading-tight
          ${isTotal
                      ? 'text-gray-400 line-through'
                      : isFinalOffer
                        ? 'text-amber-700 font-bold text-[15px] md:text-xl'
                        : 'text-stone-800 font-medium'
                    }
        `}>
                    {benefit}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <a
            href="https://pay.hotmart.com/U104748042Q?checkoutMode=10" target="_blank"
            className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-center font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-base md:text-lg tracking-wide shadow-md hover:shadow-lg"
          >
            DESCARGAR GUÍA POR $11,99 →
          </a>

          <p className="w-full text-center text-[10px] sm:text-xs md:text-sm font-medium text-amber-900/70 uppercase tracking-widest mt-4 mb-3">
            El precio se mostrará en tu moneda local al pagar
          </p>

          {/* Guarantee */}
          <div className="mt-6 border border-border rounded-xl p-4 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-sm text-foreground">
              <span className="font-semibold">Garantía 7 días:</span>{" "}
              <span className="text-muted-foreground">Lee la guía, busca tus materiales por menos de $25 y si no sientes que puedes montar tu negocio, te devolvemos el 100%.</span>
            </p>
          </div>

          {/* Trust Badges */}
          <p className="text-center text-muted-foreground text-xs mt-6 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            Pago seguro · Descarga instantánea
          </p>
        </div>
      </div>
    </section>
  );
}
