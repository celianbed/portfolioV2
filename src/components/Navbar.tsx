"use client";
import React, { useState, useEffect } from "react";
import { personalInfo } from "../data";
import ThemeToggle from "./ThemeToggle";
import TypingAnimation from "./TypingAnimation";

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "profil", label: "Profil" },
  { id: "competences", label: "Compétences" },
  { id: "bts", label: "Parcours" },
  { id: "projets", label: "Projets" },
  { id: "certifications", label: "Certifications" },
  { id: "veille", label: "Veille" },
];

export default function Navbar() {
  const [active, setActive] = useState("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id));
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between py-10 px-6 bg-[var(--color-surface)] border-r border-[var(--color-border)] z-50 transition-colors duration-300">
        <div>
          <button
            onClick={() => scrollTo("accueil")}
            className="text-lg font-bold text-[var(--color-foreground)] tracking-tight mb-1 block text-left"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-[var(--color-accent)]">.</span>
          </button>
          <div className="text-[0.65rem] text-[var(--color-muted)] uppercase tracking-widest font-mono h-4 overflow-hidden">
            <TypingAnimation />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${active === item.id
                ? "text-[var(--color-foreground)] bg-[var(--color-background)] font-medium"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)]"
                }`}
            >
              {active === item.id && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-2 mb-[1px]" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <ThemeToggle />
          <div className="flex gap-3 items-center">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <span className="text-[#333]">·</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[var(--color-muted)] hover:text-white transition-colors text-xs"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <nav className="lg:hidden fixed top-0 w-full bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] z-50 px-5 py-4 flex items-center justify-between transition-colors duration-300">
        <button onClick={() => scrollTo("accueil")} className="text-lg font-bold text-[var(--color-foreground)] tracking-tight">
          {personalInfo.name.split(" ")[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </button>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--color-foreground)] p-1"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-[var(--color-background)]/98 z-40 flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-2xl font-light transition-colors ${active === item.id ? "text-[var(--color-accent)]" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}