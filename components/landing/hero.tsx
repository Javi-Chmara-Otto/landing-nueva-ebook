"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center justify-center px-4 pt-32 md:pt-40 lg:pt-16 overflow-hidden bg-[#FBF8F3]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Columna de Texto */}
          <div className="text-center lg:text-left order-1 lg:col-span-7">
            {/* FIX: pt-6 extra en mobile para despegar del contador */}
            <span className="inline-block pt-6 lg:pt-0 text-[9px] md:text-xs uppercase tracking-[0.3em] text-amber-900/70 font-black mb-6 lg:mb-4">
              Velas Luz del Alma • Emprender con Lujo
            </span>

            <h1
              style={{ fontSize: 'clamp(36px, 7.5vw, 62px)', lineHeight: '1.1' }}
              className="font-serif font-medium tracking-tight text-stone-950 mb-6"
            >
              Domina el arte de las<br className="hidden lg:block" />
              <span className="italic text-amber-800 font-normal px-2 lg:px-0"> Velas Premium </span>
              <span className="block lg:inline lg:block text-[0.8em]">en tiempo récord</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl mb-8 lg:mx-0 px-2 lg:px-0">
              Convierte tu cocina en un negocio de lujo con menos de <strong>$25 USD</strong> de inversión inicial y el paso a paso para vender tu primera colección.
            </p>

            {/* BOTÓN CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="h-14 lg:h-20 px-8 lg:px-12 text-lg lg:text-2xl font-black transition-all shadow-[0_15px_40px_rgba(245,158,11,0.3)] !bg-[#f59e0b] !text-white rounded-full hover:scale-105 hover:!bg-[#d97706] border-none active:scale-95"
              >
                <a href="https://pay.hotmart.com/U104748042Q?checkoutMode=10" target="_blank" className="tracking-tight uppercase">
                  SÍ, QUIERO EMPEZAR HOY →
                </a>
              </Button>
            </div>

            {/* FIX: BULLETS EN 2 COLUMNAS PARA MOBILE (grid-cols-2) */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-3 text-left max-w-md mx-auto lg:mx-0 mb-8 px-2">
              <div className="flex items-center gap-1.5 text-stone-800 text-[10px] md:text-sm font-bold bg-white/50 p-2 rounded-xl border border-amber-100/50 shadow-sm">
                <span>✨</span> <span className="leading-tight">Ganancia en 30s</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800 text-[10px] md:text-sm font-bold bg-white/50 p-2 rounded-xl border border-amber-100/50 shadow-sm">
                <span>🚀</span> <span className="leading-tight">Plan IG/WA</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800 text-[10px] md:text-sm font-bold bg-white/50 p-2 rounded-xl border border-amber-100/50 shadow-sm">
                <span>💎</span> <span className="leading-tight">Proveedores VIP</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-800 text-[10px] md:text-sm font-bold bg-white/50 p-2 rounded-xl border border-amber-100/50 shadow-sm">
                <span>🎁</span> <span className="leading-tight">+6 Bonos</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[9px] md:text-[10px] text-stone-500 font-bold uppercase tracking-widest opacity-80 mb-10 lg:mb-0">
              <span>• Descarga inmediata</span>
              <span>• Acceso de por vida</span>
              <span>• Garantía 7 días</span>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative w-56 sm:w-72 lg:w-[420px] transition-all duration-700 group-hover:scale-105">
                <Image
                  src="/ebook-ipad-3d.webp"
                  alt="Ebook Velas"
                  width={500}
                  height={666}
                  priority
                  className="w-full h-auto drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]"
                />
              </div>
              {/* Badge de Oferta: Mas pequeño en mobile */}
              <div className="absolute -bottom-4 -right-2 bg-white p-2 lg:p-3 rounded-xl shadow-xl border border-amber-100 flex flex-col items-center rotate-12">
                <span className="text-xl">🔥</span>
                <span className="text-[8px] font-black uppercase text-stone-800 leading-tight">Oferta<br />Limitada</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}