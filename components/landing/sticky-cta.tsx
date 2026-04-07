"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 5000px
      setIsVisible(window.scrollY > 5000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border py-4 px-4 animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-medium text-foreground">
            Ebook Digital: El arte de las velas artesanales
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="line-through mr-2">$29.99 USD</span>
            <span className="text-foreground font-medium">$11.99 USD</span>
            {" · "}Acceso inmediato
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="!bg-[#D97706] hover:!bg-[#B45309] !text-white font-bold py-8 px-10 rounded-full text-xl transition-all shadow-xl flex items-center justify-center"
        >
          <a href="https://pay.hotmart.com/U104748042Q?checkoutMode=10" className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 !text-white" />
            Comprar Ahora - $11.99
          </a>
        </Button>
      </div>
    </div>
  );
}
