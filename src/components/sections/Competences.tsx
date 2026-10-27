"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/src/data";
import FadeIn from "@/src/components/FadeIn";
import TechIcon from "@/src/components/TechIcon";

export default function Competences() {
    return (
        <section id="competences" className="py-28 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <FadeIn>
                    <span className="section-label">02 - Savoir-faire</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-12">
                        Compétences
                    </h2>
                </FadeIn>

                <div className="grid sm:grid-cols-2 gap-6">
                    {skills.map((skill, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 card-lift">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-[var(--color-foreground)] font-bold text-sm">
                                        {skill.category}
                                    </h3>
                                    <span className="text-xs font-mono text-[var(--color-accent)]">
                                        {skill.level}%
                                    </span>
                                </div>

                                <div className="skill-bar mb-5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="skill-bar-fill"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {skill.techs.map((t) => (
                                        <span key={t} className="tag inline-flex items-center gap-1.5">
                                            <TechIcon name={t} size={14} />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.2}>
                    <div className="mt-8 text-center">
                        <a
                            href={personalInfo.tableauSyntheseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-sm"
                        >
                            Consulter le tableau de synthèse des réalisations professionnelles ↗
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
