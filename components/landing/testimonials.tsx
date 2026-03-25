import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    role: "Emprendedora",
    location: "Buenos Aires, Argentina",
    content:
      "En una semana hice mis primeras velas y las vendí a mis compañeras del trabajo. No podía creer que fuera tan simple. El paso a paso es clarísimo.",
    initials: "MG",
  },
  {
    name: "Valentina P.",
    role: "Diseñadora",
    location: "Medellín, Colombia",
    content:
      "El capítulo de precios me abrió los ojos. Estaba regalando mi trabajo. Ahora cobro lo que vale y la gente igual compra. Ojalá lo hubiera leído antes.",
    initials: "VP",
  },
  {
    name: "Laura C.",
    role: "Artesana",
    location: "Ciudad de México, México",
    content:
      "Clarísimo y muy completo. Fui directo al capítulo de marketing y en dos semanas ya tenía mi primer pedido por Instagram. Vale cada centavo.",
    initials: "LC",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prueba Social
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Lo que dicen nuestras alumnas
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group relative bg-background p-8 rounded-2xl border border-border hover:border-accent/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-accent/40" />
              </div>

              {/* Content */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                {`"${testimonial.content}"`}
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <cite className="not-italic font-medium text-foreground block">
                    {testimonial.name}
                  </cite>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.location}
                  </span>
                </div>
              </footer>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-colors duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
