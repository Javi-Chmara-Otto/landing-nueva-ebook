"use client";

import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 57,
  });

  useEffect(() => {
    const STORAGE_KEY = "velas_countdown_end";
    const DURATION_MINUTES = 15;

    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
      const end = new Date();
      end.setMinutes(end.getMinutes() + DURATION_MINUTES);
      endTime = end.toISOString();
      localStorage.setItem(STORAGE_KEY, endTime);
    }

    const tick = () => {
      const now = new Date();
      const end = new Date(endTime!);
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        const newEnd = new Date();
        newEnd.setMinutes(newEnd.getMinutes() + DURATION_MINUTES);
        endTime = newEnd.toISOString();
        localStorage.setItem(STORAGE_KEY, endTime);
        setTimeLeft({ minutes: 14, seconds: 59 });
        return;
      }

      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ minutes, seconds });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <a
      href="https://pay.hotmart.com/U104748042Q?checkoutMode=10"
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: '#2A1810', color: 'white', display: 'block', textDecoration: 'none' }}
      className="fixed top-0 left-0 right-0 z-[100] w-full py-3 md:py-4 border-b border-amber-900/30 shadow-2xl transition-all hover:opacity-90"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">

        <div className="flex items-center gap-3">
          <span style={{ color: '#fbbf24' }} className="text-xl md:text-2xl animate-pulse">🎁</span>
          <p className="text-base md:text-xl font-semibold tracking-tight m-0">
            ¡Oferta de lanzamiento! <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Más del 50% OFF</span> por tiempo limitado:
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Contador con fondo oscuro para que resalte */}
          <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'rgba(251,191,36,0.3)' }} className="border px-4 py-1 rounded-md text-amber-400 font-mono text-2xl md:text-3xl font-bold shadow-inner">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>

          <p style={{ color: 'rgba(251,191,36,0.8)' }} className="text-sm md:text-base animate-pulse font-medium m-0">
            → Compra ahora antes de que expire
          </p>
        </div>

      </div>
    </a>
  );
}
