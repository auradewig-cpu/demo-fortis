"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cta = sectionRef.current?.querySelector(".cta-banner");
      const form = sectionRef.current?.querySelector(".form-wrapper");
      if (!cta || !form) return;
      
      gsap.from(cta, {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
      
      gsap.from(form, {
        x: 80,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Pesan Terkirim",
        description: "Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontak" ref={sectionRef} className="bg-fortis-navy">
      <div className="cta-banner bg-fortis-gold py-20 px-6 lg:px-12 text-center text-fortis-navy">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 max-w-3xl mx-auto">
          Jadwalkan Konsultasi Pertama Anda — Gratis
        </h2>
        <Button 
          asChild 
          size="lg" 
          className="bg-fortis-navy text-fortis-white hover:bg-surface-lowest h-14 px-8 text-base rounded-full"
        >
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> Hubungi via WhatsApp
          </a>
        </Button>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="form-wrapper max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-fortis-white mb-2">Tinggalkan Pesan</h3>
            <p className="text-fortis-slate">Atau isi form di bawah ini jika Anda memiliki pertanyaan spesifik.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-fortis-white">Nama Lengkap</label>
                <Input id="name" required className="bg-surface-low border-fortis-slate/30 text-fortis-white focus-visible:ring-fortis-gold" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-fortis-white">Email</label>
                <Input id="email" type="email" required className="bg-surface-low border-fortis-slate/30 text-fortis-white focus-visible:ring-fortis-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-fortis-white">Pesan atau Deskripsi Kasus</label>
              <Textarea id="message" required className="min-h-[120px] bg-surface-low border-fortis-slate/30 text-fortis-white focus-visible:ring-fortis-gold" />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-fortis-gold text-fortis-navy hover:bg-fortis-gold/90 h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
