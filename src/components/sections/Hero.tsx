"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
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
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl"
        >
          Hak Kamu, <span className="text-fortis-gold">Kami yang Jaga.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-fortis-white/80 max-w-2xl mb-10"
        >
          Kemitraan strategis untuk solusi hukum dan bisnis yang presisi di Yogyakarta.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-fortis-gold text-fortis-navy hover:bg-fortis-gold/90 h-14 px-8 text-base">
            <a href="#kontak">Mulai Konsultasi</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-fortis-gold text-fortis-gold hover:bg-fortis-gold/10 h-14 px-8 text-base">
            <a href="#layanan">Lihat Layanan</a>
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center gap-8 md:gap-16 text-fortis-white/60 text-sm md:text-base font-medium border-t border-fortis-gold/30 pt-6 w-full max-w-2xl"
        >
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">domain</span> <span>Bisnis</span></div>
          <div className="w-px h-4 bg-fortis-gold/50 self-center"></div>
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">gavel</span> <span>Litigasi</span></div>
          <div className="w-px h-4 bg-fortis-gold/50 self-center"></div>
          <div className="flex items-center gap-2 text-fortis-gold"><span className="material-symbols-outlined">forum</span> <span>Konsultasi</span></div>
        </motion.div>
      </div>
    </section>
  );
}
