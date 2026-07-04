"use client";

import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "FORTIS memberikan kepastian di tengah ketidakpastian bisnis kami. Profesionalisme yang luar biasa.",
    author: "Klien Korporasi"
  },
  {
    quote: "Tim FORTIS membantu kami menavigasi proses perizinan yang rumit dengan sangat efisien.",
    author: "Klien Bisnis"
  },
  {
    quote: "Konsultasi awal yang diberikan sangat membantu kami memahami hak-hak hukum kami.",
    author: "Klien Individu"
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = sectionRef.current?.querySelector(".carousel-container");
      if (!container) return;
      gsap.from(container, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimoni" className="py-24 bg-surface-highest overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-9xl text-fortis-gold/10 font-serif z-0 select-none pointer-events-none">
          "
        </div>

        <div className="max-w-4xl mx-auto relative z-10 carousel-container">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testi, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-6 text-center">
                    <p className="text-2xl md:text-3xl font-serif text-fortis-white leading-relaxed mb-8">
                      "{testi.quote}"
                    </p>
                    <div className="text-fortis-gold font-medium tracking-wide uppercase text-sm">
                      — {testi.author}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-transparent border-fortis-slate/50 hover:bg-fortis-gold hover:text-fortis-navy hover:border-fortis-gold text-fortis-white" />
              <CarouselNext className="static translate-y-0 bg-transparent border-fortis-slate/50 hover:bg-fortis-gold hover:text-fortis-navy hover:border-fortis-gold text-fortis-white" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
