"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

const Stats = dynamic(() => import("@/components/sections/Stats").then((m) => ({ default: m.Stats })), {
  ssr: false,
});

const Team = dynamic(() => import("@/components/sections/Team").then((m) => ({ default: m.Team })), {
  ssr: false,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/sections/Footer").then((m) => ({ default: m.Footer })), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-full font-sans bg-fortis-navy text-fortis-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
