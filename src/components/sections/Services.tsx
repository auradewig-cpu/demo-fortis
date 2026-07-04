"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ArrowRight, Building2, Users, FileCheck, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    id: "bisnis",
    title: "Hukum Bisnis",
    icon: Building2,
    short: "Pendampingan komprehensif untuk struktur perusahaan, M&A, dan kepatuhan regulasi.",
    description: "Layanan hukum bisnis kami dirancang untuk melindungi kepentingan komersial Anda di setiap fase pertumbuhan perusahaan.",
    bullets: ["Pendirian Perusahaan (PT, CV)", "Merger & Akuisisi", "Kepatuhan Regulasi", "Penyelesaian Sengketa Bisnis"],
  },
  {
    id: "keluarga",
    title: "Hukum Keluarga",
    icon: Users,
    short: "Solusi bijaksana untuk waris, pembagian harta, dan sengketa keluarga dengan privasi tinggi.",
    description: "Kami memahami sensitivitas dalam isu hukum keluarga. Tim kami memberikan pendampingan yang bijaksana dan berorientasi pada solusi damai.",
    bullets: ["Pembagian Harta Gono-gini", "Sengketa Waris", "Hak Asuh Anak", "Perjanjian Pranikah"],
  },
  {
    id: "perizinan",
    title: "Perizinan Usaha",
    icon: FileCheck,
    short: "Akselerasi legalitas bisnis Anda dengan proses perizinan yang efisien dan sesuai hukum.",
    description: "Navigasi birokrasi perizinan tidak harus rumit. Kami memastikan bisnis Anda memiliki semua legalitas yang dibutuhkan untuk beroperasi dengan aman.",
    bullets: ["NIB & Izin Operasional", "Perizinan Sektoral Terkait", "Pendaftaran Merek & HAKI", "Audit Legalitas Perusahaan"],
  },
  {
    id: "kontrak",
    title: "Kontrak & Perjanjian",
    icon: FileText,
    short: "Penyusunan dan review kontrak strategis untuk meminimalisir risiko sengketa di masa depan.",
    description: "Kontrak yang kuat adalah fondasi kemitraan yang aman. Kami merancang perjanjian yang melindungi Anda dari celah hukum.",
    bullets: ["Drafting Perjanjian Kerjasama", "Review Kontrak Vendor", "Perjanjian Kerja Karyawan", "Negosiasi Klausul Hukum"],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const cards = gridRef.current?.children;
        if (!cards) return;
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    });
    return () => { cancelAnimationFrame(raf); ctx?.revert(); };
  }, []);

  return (
    <section id="layanan" className="py-24 bg-fortis-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fortis-white">Layanan Hukum</h2>
          <div className="h-1 w-20 bg-fortis-gold mx-auto mb-6"></div>
          <p className="text-fortis-slate text-lg">Keahlian spesifik yang disesuaikan dengan kompleksitas tantangan hukum Anda.</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-surface-low border-fortis-slate/30 hover:border-fortis-gold transition-colors duration-300 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-fortis-gold/10 flex items-center justify-center mb-6 text-fortis-gold">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-fortis-white">{service.title}</h3>
                <p className="text-fortis-slate text-sm leading-relaxed mb-8">{service.short}</p>
                <div className="flex items-center text-fortis-gold text-sm font-semibold group-hover:underline mt-auto">
                  Pelajari <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="bg-surface-highest border-fortis-slate/30 text-fortis-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif mb-2">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-fortis-white/80 text-base leading-relaxed">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="font-semibold text-fortis-gold mb-4">Layanan Termasuk:</h4>
            <ul className="space-y-3">
              {selectedService?.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fortis-gold mt-2 shrink-0" />
                  <span className="text-fortis-slate">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
