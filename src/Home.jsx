import React from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import GameGallery from "@/components/portfolio/GameGallery";
import Testimonials from "@/components/portfolio/Testimonials";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="bg-[#0A1220] text-[#EAF0F8] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <GameGallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
