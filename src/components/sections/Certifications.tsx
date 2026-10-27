"use client";

import { certifications } from "@/src/data";
import FadeIn from "@/src/components/FadeIn";

export default function Certifications() {
    return (
        <section id="certifications" className="py-28 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <FadeIn>
                    <span className="section-label">04 - Certifications</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-12">
                        Certifications
                    </h2>
                </FadeIn>

                <div className="space-y-0">
                    {certifications.map((cert, idx) => (
                        <FadeIn key={idx} delay={idx * 0.08}>
                            <div className="timeline-item pb-8">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                                    <span className="text-xs font-mono text-[var(--color-accent)] whitespace-nowrap shrink-0 w-32">
                                        {cert.date}
                                    </span>
                                    <div className="flex gap-4 items-start">
                                        {cert.image && (
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-12 h-12 object-contain rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] p-1.5 shrink-0"
                                                loading="lazy"
                                            />
                                        )}
                                        <div>
                                            <h3 className="text-[var(--color-foreground)] font-bold text-sm mb-1">
                                                {cert.name}
                                            </h3>
                                            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                                {cert.description}
                                            </p>
                                            {cert.attestationUrl && (
                                                <a
                                                    href={cert.attestationUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-[var(--color-accent)] hover:underline"
                                                >
                                                    {cert.attestationLabel || "Voir"} ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
