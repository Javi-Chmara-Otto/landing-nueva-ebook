"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 overflow-hidden bg-[#FBF8F3]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Columna de Texto - Sale PRIMERO en mobile (order-1) */}
          <div className="text-center lg:text-left order-1 lg:col-span-7">
            <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-amber-900/70 font-bold mb-6">
              Únete a la comunidad que están transformando su pasión en un negocio de lujo.
            </span>

            <h1
              style={{ fontSize: 'clamp(40px, 8vw, 60px)', lineHeight: '1.2' }}
              className="font-serif font-medium tracking-tighter text-black mb-8"
            >
              Crea tu propia marca de<br className="hidden lg:block" />
              <span className="italic text-amber-950 text-[1.1em]">Velas de Lujo</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 leading-relaxed max-w-2xl mb-8 lg:mx-0">
              Comienza hoy mismo desde tu cocina, con menos de $15 USD de inversión y sin necesidad de experiencia previa.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-6 mb-4">
              <Button
                asChild
                size="lg"
                className="h-14 lg:h-20 px-12 text-xl lg:text-2xl font-bold transition-all shadow-2xl !bg-[#f59e0b] !text-white rounded-full hover:!bg-[#d97706] border-none"
              >
                <a href="https://pay.hotmart.com/U104748042Q?checkoutMode=10" target="_blank" className="uppercase">
                  SÍ. Quiero Empezar →
                </a>
              </Button>
            </div>

            {/* Trust badges - Stickers ocultos en mobile */}
            <div className="mt-2 flex items-center justify-center lg:justify-start gap-6 text-xs md:text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <div className="hidden lg:block w-2 h-2 bg-amber-500 rounded-full" />
                <span>Descarga inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden lg:block w-2 h-2 bg-amber-500 rounded-full" />
                <span>Acceso de por vida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden lg:block w-2 h-2 bg-amber-500 rounded-full" />
                <span>Garantía 7 días</span>
              </div>
            </div>
          </div>

          {/* Columna de Imagen - Sale DESPUÉS en mobile (order-2) */}
          <div className="order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 sm:w-80 lg:w-[450px] transition-all duration-700 hover:scale-105">
                <Image
                  src="/ebook-ipad-3d.webp"
                  alt="Ebook El Arte de las Velas Artesanales"
                  width={500}
                  height={666}
                  priority
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 border border-amber-200/50 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-amber-200/30 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}