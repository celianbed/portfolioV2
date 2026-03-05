"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/sections/Hero";
import Profil from "@/src/components/sections/Profil";
import Competences from "@/src/components/sections/Competences";
import Formations from "@/src/components/sections/Formations";
import Projets from "@/src/components/Projets";
import Certifications from "@/src/components/sections/Certifications";
import Veille from "@/src/components/sections/Veille";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] noise-bg">
      <Navbar />
      <Hero />
      <hr className="divider" />
      <Profil />
      <hr className="divider" />
      <Competences />
      <hr className="divider" />
      <Formations />
      <hr className="divider" />
      <Projets />
      <hr className="divider" />
      <Certifications />
      <hr className="divider" />
      <Veille />
      <hr className="divider" />
      <Footer />
    </div>
  );
}