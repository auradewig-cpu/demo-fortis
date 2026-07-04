"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-lowest border-t border-fortis-slate/30 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5">
          <div className="font-serif text-3xl font-bold text-fortis-gold tracking-wider mb-4">
            FORTIS
          </div>
          <p className="text-fortis-slate max-w-sm mb-6">
            Kemitraan strategis untuk solusi hukum dan bisnis yang presisi di Yogyakarta.
          </p>
          <div className="text-sm text-fortis-slate/60">
            &copy; {new Date().getFullYear()} FORTIS Law & Consulting.<br/>Hak cipta dilindungi undang-undang.
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-fortis-white font-bold mb-6 uppercase tracking-wider text-sm">Layanan Fokus</h4>
          <ul className="space-y-3">
            <li><a href="#layanan" className="text-fortis-slate hover:text-fortis-gold transition-colors">Hukum Bisnis</a></li>
            <li><a href="#layanan" className="text-fortis-slate hover:text-fortis-gold transition-colors">Hukum Keluarga</a></li>
            <li><a href="#layanan" className="text-fortis-slate hover:text-fortis-gold transition-colors">Perizinan Usaha</a></li>
            <li><a href="#layanan" className="text-fortis-slate hover:text-fortis-gold transition-colors">Kontrak & Perjanjian</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-fortis-white font-bold mb-6 uppercase tracking-wider text-sm">Kontak</h4>
          <ul className="space-y-4 text-fortis-slate">
            <li className="flex items-start gap-3">
              <span className="text-fortis-gold mt-1 shrink-0">📍</span>
              <span>Jl. Sudirman No. 123, Yogyakarta,<br/>Daerah Istimewa Yogyakarta</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fortis-gold shrink-0">📞</span>
              <a href="tel:+6281234567890" className="hover:text-fortis-gold transition-colors">+62 812 3456 7890</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fortis-gold shrink-0">✉️</span>
              <a href="mailto:info@fortislaw.id" className="hover:text-fortis-gold transition-colors">info@fortislaw.id</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
