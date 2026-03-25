"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pages = [
  { id: 1, src: "/pagina_4.webp", alt: "Introducción - Página 4" },
  { id: 2, src: "/pagina_6.webp", alt: "Tipos de velas - Página 6" },
  { id: 3, src: "/pagina_3.webp", alt: "Índice - Página 3" },
  { id: 4, src: "/pagina_12.webp", alt: "Espacio de trabajo - Página 12" },
  { id: 5, src: "/pagina_11.webp", alt: "Mitos - Página 11" },
];

export function LookInside() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 px-4 bg-[#2A1810] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-amber-50 mb-4 text-balance">
            Explora el contenido de la Guía
          </h2>
          <p className="text-amber-100/60 text-base md:text-xl max-w-2xl mx-auto">
            Usa las flechas o desliza para ver el interior del manual profesional.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-4">
              {pages.map((page, index) => (
                <CarouselItem
                  key={page.id}
                  className="pl-4 basis-[85%] sm:basis-[70%] md:basis-[50%] lg:basis-[40%]"
                >
                  <div
                    className={cn(
                      "relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-500",
                      "bg-white shadow-2xl border border-white/10",
                      current === index
                        ? "scale-100 opacity-100 z-10"
                        : "scale-[0.85] opacity-40 blur-[1px]"
                    )}
                  >
                    <Image
                      src={page.src}
                      alt={page.alt}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-black/10 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Flechas para Desktop (Laterales) */}
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12 w-12 h-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12 w-12 h-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
          </Carousel>

          {/* CONTROLES PARA MOBILE (Flechas + Dots) */}
          <div className="flex items-center justify-center gap-6 mt-10 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="rounded-full bg-white/10 border-white/20 text-white h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 transition-all duration-300 rounded-full",
                    current === index ? "bg-amber-400 w-8" : "bg-white/20 w-3"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="rounded-full bg-white/10 border-white/20 text-white h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots solo para Desktop (ya que en mobile están arriba) */}
          <div className="hidden md:flex justify-center gap-2 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  current === index ? "bg-amber-400 w-8" : "bg-white/20 hover:bg-white/40 w-3"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-amber-100/40 mt-6 md:mt-10">
        Más de 50 páginas de contenido exclusivo dentro de la guía
      </p>
    </section>
  );
}