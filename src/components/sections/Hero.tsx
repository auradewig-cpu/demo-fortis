"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const injectFont = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap";
      document.head.appendChild(link);
    };
    let timer: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;
    if (typeof requestIdleCallback === "function") {
      idleId = requestIdleCallback(injectFont);
    } else {
      timer = setTimeout(injectFont, 200);
    }
    return () => {
      if (idleId !== null) cancelIdleCallback(idleId);
      if (timer !== null) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.to(bgRef.current, {
          y: "30%",
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    });
    return () => { cancelAnimationFrame(raf); ctx?.revert(); };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-fortis-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-fortis-navy via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl animate-fade-up">
          Hak Kamu, <span className="text-fortis-gold">Kami yang Jaga.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-fortis-white/80 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Kemitraan strategis untuk solusi hukum dan bisnis yang presisi di Yogyakarta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-fortis-gold text-fortis-navy hover:bg-fortis-gold/90 h-14 px-8 text-base">
            <a href="#kontak">Mulai Konsultasi</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-fortis-gold text-fortis-gold hover:bg-fortis-gold/10 h-14 px-8 text-base">
            <a href="#layanan">Lihat Layanan</a>
          </Button>
        </div>

        <div className="mt-10 flex justify-center gap-8 md:gap-16 text-fortis-white/60 text-sm md:text-base font-medium border-t border-fortis-gold/30 pt-6 w-full max-w-2xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">domain</span> <span>Bisnis</span></div>
          <div className="w-px h-4 bg-fortis-gold/50 self-center"></div>
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">gavel</span> <span>Litigasi</span></div>
          <div className="w-px h-4 bg-fortis-gold/50 self-center"></div>
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">forum</span> <span>Konsultasi</span></div>
        </div>
      </div>
    </section>
  );
}
