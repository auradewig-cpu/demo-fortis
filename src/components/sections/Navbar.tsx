"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Layanan", href: "#layanan" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Tim Hukum", href: "#tim" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-lowest/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#hero" className="font-serif text-2xl font-bold text-fortis-gold tracking-wider">
          FORTIS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-fortis-white hover:text-fortis-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-fortis-gold text-fortis-navy hover:bg-fortis-gold/90 rounded-full px-6">
            <a href="#kontak">Konsultasi Sekarang</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-fortis-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-lowest border-t border-fortis-slate/30 py-4 px-6 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-fortis-white hover:text-fortis-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-fortis-gold text-fortis-navy hover:bg-fortis-gold/90 rounded-full w-full">
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)}>Konsultasi Sekarang</a>
          </Button>
        </div>
      )}
      <div ref={progressRef} className="absolute bottom-0 left-0 h-0.5 bg-fortis-gold origin-left" style={{ width: "100%", transform: "scaleX(0)" }} />
    </header>
  );
}
