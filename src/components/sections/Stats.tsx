"use client";

import React, { useEffect, useRef } from "react";
import { ShieldAlert, Scale, Handshake } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const casesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const yearsObj = { val: 0 };
      gsap.to(yearsObj, {
        val: 10,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (yearsRef.current) yearsRef.current.textContent = Math.floor(yearsObj.val) + "+";
        },
      });

      const casesObj = { val: 0 };
      gsap.to(casesObj, {
        val: 100,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (casesRef.current) casesRef.current.textContent = Math.floor(casesObj.val) + "+";
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="tentang" className="py-20 bg-surface-highest" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-fortis-slate/20">
          <div className="flex flex-col items-center text-center p-6">
            <ShieldAlert size={40} className="text-fortis-gold mb-6 opacity-80" />
            <span ref={yearsRef} className="text-5xl font-serif font-bold text-fortis-gold">0+</span>
            <p className="mt-4 text-fortis-slate font-medium tracking-wide uppercase text-sm">Tahun Pengalaman</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Scale size={40} className="text-fortis-gold mb-6 opacity-80" />
            <span ref={casesRef} className="text-5xl font-serif font-bold text-fortis-gold">0+</span>
            <p className="mt-4 text-fortis-slate font-medium tracking-wide uppercase text-sm">Kasus Ditangani</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Handshake size={40} className="text-fortis-gold mb-6 opacity-80" />
            <span className="text-5xl font-serif font-bold text-fortis-gold">Gratis</span>
            <p className="mt-4 text-fortis-slate font-medium tracking-wide uppercase text-sm">Konsultasi Awal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
