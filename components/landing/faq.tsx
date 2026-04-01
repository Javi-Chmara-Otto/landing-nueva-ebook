"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito experiencia previa para usar esta guía?",
    answer: "No, esta guía está diseñada desde cero. Te llevo paso a paso desde lo más básico hasta técnicas avanzadas. Si sabes hervir agua, puedes hacer velas."
  },
  {
    question: "¿Cuánto dinero necesito para empezar?",
    answer: "Con $10-15 dólares puedes hacer tus primeras 3-4 velas de prueba. Incluyo una lista de proveedores mayoristas para que consigas los mejores precios."
  },
  {
    question: "¿Cómo recibo el ebook después de comprarlo?",
    answer: "Inmediatamente después de tu compra recibirás un email con el link de descarga. Es un PDF que puedes leer en cualquier dispositivo."
  },
  {
    question: "¿Puedo vender las velas que aprenda a hacer con esta guía?",
    answer: "¡Por supuesto! De hecho, la guía incluye un módulo completo sobre cómo armar tu línea de productos, calcular precios y conseguir tus primeras ventas."
  },
  {
    question: "¿La guía sirve para mi país?",
    answer: "Sí, el contenido es aplicable en cualquier país de habla hispana. Los materiales son universales y te doy alternativas según lo que tengas disponible."
  },
  {
    question: "¿Qué pasa si tengo dudas después de leerla?",
    answer: "Tienes acceso a soporte por email durante 6 meses. Respondo personalmente todas las consultas para asegurarme de que logres tus objetivos."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
            Preguntas Frecuentes
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-balance">
          Lo que todos{" "}
          <span className="italic text-amber-700">preguntan</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="text-foreground font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
