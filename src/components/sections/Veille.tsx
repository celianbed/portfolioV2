"use client";

import { techWatch } from "@/src/data";
import FadeIn from "@/src/components/FadeIn";

export default function Veille() {
    return (
        <section id="veille" className="py-28 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <FadeIn>
                    <span className="section-label">05 - Veille</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-4">
                        Veille Technologique
                    </h2>
                    <p className="text-[var(--color-muted)] max-w-2xl mb-12 text-sm leading-relaxed">
                        {techWatch.intro}
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Thème principal */}
                    <FadeIn className="md:col-span-2">
                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 h-full">
                            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
                                {techWatch.title}
                            </h3>
                            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                                {techWatch.summary}
                            </p>
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] block mb-3">
                                    Outils
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {techWatch.tools.map((tool) => (
                                        <span key={tool} className="tag">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {techWatch.proofImages && techWatch.proofImages.length > 0 && (
                                <div className="mt-6">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] block mb-3">
                                        Preuves de veille
                                    </span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {techWatch.proofImages.map((img, i) => (
                                            <a key={i} href={img} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={img}
                                                    alt={`Preuve de veille ${i + 1}`}
                                                    className="rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors w-full h-20 object-cover"
                                                    loading="lazy"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeIn>

                    {/* Méthodes */}
                    <FadeIn delay={0.1}>
                        <div className="space-y-4 h-full flex flex-col">
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex-1">
                                <span className="text-[var(--color-accent)] font-mono text-xs font-bold uppercase tracking-wider">
                                    Pull
                                </span>
                                <p className="text-[var(--color-muted)] text-xs leading-relaxed mt-2">
                                    {techWatch.methods.pull}
                                </p>
                            </div>
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex-1">
                                <span className="text-[var(--color-muted)] font-mono text-xs font-bold uppercase tracking-wider">
                                    Push
                                </span>
                                <p className="text-[var(--color-muted)] text-xs leading-relaxed mt-2">
                                    {techWatch.methods.push}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Articles */}
                <FadeIn>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)] mb-4">
                        Articles de référence
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {techWatch.articles.map((article, idx) => (
                            <a
                                key={idx}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between gap-3 px-5 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)]/40 transition-colors group"
                            >
                                <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors">
                                    {article.title}
                                </span>
                                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </FadeIn>

                {/* Conclusion */}
                <FadeIn delay={0.15}>
                    <div className="mt-10 p-6 border-l-2 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.03]">
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">
                            {techWatch.conclusion}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
