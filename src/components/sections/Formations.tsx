"use client";

import { formations } from "@/src/data";
import FadeIn from "@/src/components/FadeIn";

export default function Formations() {
    return (
        <section id="parcours" className="py-28 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <FadeIn>
                    <span className="section-label">Formations & expériences</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-4">
                        Mon Parcours
                    </h2>
                    <p className="text-[var(--color-muted)] max-w-2xl mb-12 text-sm leading-relaxed">
                        {formations.intro}
                    </p>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)] hidden md:block" />

                    <div className="space-y-8">
                        {formations.items.map((item, i) => (
                            <FadeIn key={item.id} delay={i * 0.1}>
                                <div className="relative md:pl-10">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-2 hidden md:block">
                                        <div
                                            className={`w-[15px] h-[15px] rounded-full border-2 ${item.status === "current"
                                                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                                                    : "border-[var(--color-muted)] bg-[var(--color-surface)]"
                                                }`}
                                        />
                                    </div>

                                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 relative overflow-hidden group hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                                        {/* Background decoration */}
                                        <div className="absolute -top-4 -right-4 text-[5rem] font-black text-[var(--color-foreground)]/[0.02] leading-none select-none group-hover:text-[var(--color-accent)]/[0.05] transition-colors duration-500">
                                            {item.badge}
                                        </div>

                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    {item.status === "current" && (
                                                        <span className="inline-block px-2.5 py-0.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[0.6rem] font-bold uppercase tracking-wider rounded-md border border-[var(--color-accent)]/20">
                                                            En cours
                                                        </span>
                                                    )}
                                                    {item.status === "completed" && (
                                                        <span className="inline-block px-2.5 py-0.5 bg-[var(--color-muted)]/5 text-[var(--color-muted)] text-[0.6rem] font-bold uppercase tracking-wider rounded-md border border-[var(--color-border)]">
                                                            Terminé
                                                        </span>
                                                    )}
                                                    <span className="inline-block px-2.5 py-0.5 bg-[var(--color-surface-2)] text-[var(--color-muted)] text-[0.6rem] font-bold uppercase tracking-wider rounded-md border border-[var(--color-border)]">
                                                        {item.type === "experience" ? "Expérience" : "Formation"}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                                                    {item.title}
                                                </h3>
                                                {item.school && (
                                                    <p className="text-sm text-[var(--color-accent)] font-medium">
                                                        {item.school}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="text-right shrink-0">
                                                <p className="text-xs text-[var(--color-muted)] font-mono">
                                                    {item.period}
                                                </p>
                                                <p className="text-xs text-[var(--color-muted)]">
                                                    {item.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                                            {item.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-2">
                                            {item.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="text-sm text-[var(--color-muted)] flex items-start gap-2"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Link */}
                                        {"url" in item && item.url && (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-underline text-xs mt-5 inline-block"
                                            >
                                                En savoir plus sur la formation ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
