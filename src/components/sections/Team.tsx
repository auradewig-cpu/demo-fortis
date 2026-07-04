"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const team = [
  {
    id: "budi",
    name: "Budi Santoso, S.H., M.H.",
    title: "Senior Partner, Business Law",
    badge: "Certified Mediator",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcvYHx7Zg825XkGiOxz3CfCZgZT3DTClZdD9nHye7vHMXGd7cuatXoiQacEkzb63ruZkAUqZpHT8_qPq5uchVWUR0N3KlSBTISlbIZ8VVqcJPdb_gowCZee5c4y5tZ0wlMfb8T9ytAVJzfkRrUFAIZe8Sh0ARyDPqM77s7PD7ceuvpXlQaurVTSIVBaOhOO41Y5WUgzZBXe-jmeYJCgeB-cE1g379dD7jCHhAGREUmEZokWHJv-M1JC3bZSdHBLVhnFtTICLZlcjc",
    description: "Dengan pengalaman lebih dari 15 tahun di bidang hukum korporasi, Budi telah membantu berbagai perusahaan multinasional dalam restrukturisasi bisnis dan penyelesaian sengketa komersial yang kompleks.",
  },
  {
    id: "siti",
    name: "Siti Aminah, S.H., LL.M.",
    title: "Partner, Corporate & Licensing",
    badge: "International Law Expert",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVYnE5Ov1RWuzzaSwXLAnpEhVDbYP-x1o0eKRE-yDHeXFSLRqUDNMqiWM2nMLKec9PsSqWKgHpUuHBT7IrIR4jgZpQOJ3qTpMTJTfHyU_VOVQJY38o6YnvsIeGD9TfsLWIJrj5OYrs-E3SoiETxtrjdaO1AeEWmONRMztfQxqdNN7Qqbtb_8W9xghJ5ge4igkkzL_v2PDt5VnnhTgvJUH2-nYUkfdNmqIAQ2Wtc4cPfjJSqy_E9ubbTne0JMPlSuKYk_PgPkdwFYo",
    description: "Siti memiliki spesialisasi dalam hukum investasi asing dan perizinan. Beliau kerap menjadi penasihat utama untuk startup dan perusahaan teknologi yang melakukan ekspansi di Indonesia.",
  }
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (!cards) return;
      gsap.from(cards, {
        x: (i) => i % 2 === 0 ? -80 : 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="tim" className="py-24 bg-fortis-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fortis-white">Tim Hukum Kami</h2>
          <div className="h-1 w-20 bg-fortis-gold mx-auto mb-6"></div>
          <p className="text-fortis-slate text-lg">Advokat berpengalaman yang siap memberikan strategi hukum terbaik.</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <Card 
              key={member.id}
              className="overflow-hidden border-0 cursor-pointer group bg-surface-low relative aspect-[3/4]"
              onClick={() => setSelectedMember(member)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fortis-navy via-fortis-navy/40 to-transparent opacity-90" />
              <CardContent className="absolute bottom-0 w-full p-8">
                <span className="inline-block px-3 py-1 bg-fortis-gold/20 text-fortis-gold text-xs font-semibold rounded mb-4">
                  {member.badge}
                </span>
                <h3 className="text-2xl font-serif font-bold text-fortis-white mb-1">{member.name}</h3>
                <p className="text-fortis-slate font-medium">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="bg-surface-highest border-fortis-slate/30 text-fortis-white sm:max-w-[500px] overflow-hidden p-0">
          {selectedMember && (
            <>
              <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedMember.image})` }} />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-fortis-gold/20 text-fortis-gold text-xs font-semibold rounded mb-3">
                  {selectedMember.badge}
                </span>
                <DialogTitle className="text-2xl font-serif mb-1">{selectedMember.name}</DialogTitle>
                <div className="text-fortis-slate text-sm font-medium mb-4">{selectedMember.title}</div>
                <DialogDescription className="text-fortis-white/80 text-base leading-relaxed mb-6">
                  {selectedMember.description}
                </DialogDescription>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-fortis-navy hover:bg-fortis-gold hover:text-fortis-navy text-fortis-slate transition-colors"
                  aria-label={`Profil LinkedIn ${selectedMember?.name}`}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
