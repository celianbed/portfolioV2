"use client";
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, stages } from "../data";
import TechIcon from "./TechIcon";

function buildItems() {
  return [
    ...projects.map((p) => ({ ...p, tag: p.category.toLowerCase().includes("bts") ? "bts" as const : "perso" as const, displayCategory: p.category })),
    ...stages.map((s) => ({ ...s, tag: "stage" as const, displayCategory: s.period, category: s.period })),
  ];
}

type ProjectItem = ReturnType<typeof buildItems>[number];

/* ── Screenshot Carousel ── */
function ScreenshotCarousel({ screenshots, title }: { screenshots: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const total = screenshots.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  return (
    <div className="relative group/carousel">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={screenshots[current]}
            alt={`${title} — capture ${current + 1}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full h-56 sm:h-64 object-contain p-2"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Capture précédente"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Capture suivante"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots + counter */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current
                ? "bg-[var(--color-accent)] w-4"
                : "bg-[var(--color-muted)]/40 hover:bg-[var(--color-muted)]"
                }`}
              aria-label={`Capture ${i + 1}`}
            />
          ))}
          <span className="text-[0.6rem] text-[var(--color-muted)] font-mono ml-2">
            {current + 1}/{total}
          </span>
        </div>
      )}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1 scrollbar-thin">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-14 h-10 rounded-md border overflow-hidden transition-all ${i === current
                ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30"
                : "border-[var(--color-border)] opacity-60 hover:opacity-100"
                }`}
            >
              <img
                src={src}
                alt={`Miniature ${i + 1}`}
                className="w-full h-full object-contain bg-[var(--color-background)] p-0.5"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projets() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<"all" | "bts" | "perso" | "stage">("all");

  const allItems = buildItems();

  const filtered =
    filter === "all" ? allItems : allItems.filter((p) => p.tag === filter);

  return (
    <section id="projets" className="py-28 px-6 lg:pl-64">
      <div className="max-w-5xl">
        <span className="section-label">03 — Réalisations</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-4">
          Projets & Stages
        </h2>
        <p className="text-[var(--color-muted)] max-w-xl mb-10 text-sm leading-relaxed">
          Projets réalisés pendant mes formations, stages en entreprise et projets personnels.
        </p>

        {/* Filtres */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {[
            { key: "all" as const, label: "Tout" },
            { key: "bts" as const, label: "Formation" },
            { key: "stage" as const, label: "Stages" },
            { key: "perso" as const, label: "Personnel" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider transition-all border ${filter === f.key
                ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                : "bg-transparent text-[var(--color-muted)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                className="card-lift bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] cursor-pointer overflow-hidden group"
              >
                <div className="h-40 overflow-hidden relative bg-[var(--color-surface)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[0.6rem] font-mono uppercase tracking-widest text-[var(--color-accent)]">
                      {project.displayCategory}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-foreground)] mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag inline-flex items-center gap-1.5">
                        <TechIcon name={t} size={14} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="bg-[var(--color-surface)] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl relative z-10 border border-[var(--color-border)]"
            >
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[0.6rem] font-mono uppercase tracking-widest text-[var(--color-accent)]">
                      {selected.displayCategory}
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--color-foreground)] mt-1">
                      {selected.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors p-1"
                    aria-label="Fermer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                    Contexte
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {selected.fullDesc.context}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                    Missions
                  </h4>
                  <ul className="space-y-2">
                    {selected.fullDesc.missions.map((m, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[var(--color-muted)]"
                      >
                        <span className="text-[var(--color-accent)] mt-0.5 shrink-0 font-mono text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Technologies — inline SVG logos */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-muted)]"
                      >
                        <TechIcon name={t} size={22} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots — Carousel */}
                {"screenshots" in selected && selected.screenshots && (selected.screenshots as string[]).length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                      Captures d&apos;écran
                    </h4>
                    <ScreenshotCarousel
                      screenshots={selected.screenshots as string[]}
                      title={selected.title}
                    />
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                    Environnement technique
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg p-4 font-mono">
                    {selected.fullDesc.env}
                  </p>
                </div>

                {/* Documents */}
                {"documents" in selected && selected.documents && (selected.documents as { label: string; url: string }[]).length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-3">
                      Documents
                    </h4>
                    <div className="space-y-2">
                      {(selected.documents as { label: string; url: string }[]).map((doc, i) => (
                        <a
                          key={i}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)]/40 transition-colors group"
                        >
                          <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors">
                            {doc.label}
                          </span>
                          <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                            ↗
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}