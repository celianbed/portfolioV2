"use client";

import { personalInfo } from "@/src/data";
import FadeIn from "@/src/components/FadeIn";

export default function Profil() {
    return (
        <section id="profil" className="py-28 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <FadeIn>
                    <span className="section-label">01 - À propos</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mt-3 mb-8">
                        Mon Profil
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    <FadeIn className="md:col-span-3">
                        <p className="text-[var(--color-muted)] leading-relaxed text-base mb-6">
                            {personalInfo.description}
                        </p>
                        <div className="flex gap-4 text-sm">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-underline inline-flex items-center gap-1.5"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-[#0A66C2]"
                                    aria-hidden="true"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="link-underline"
                            >
                                {personalInfo.email}
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15} className="md:col-span-2">
                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--color-border)] mx-auto mb-4">
                                <img
                                    src="/assets/img/moi.jpg"
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-center text-[var(--color-foreground)] font-bold text-sm">
                                {personalInfo.name}
                            </p>
                            <p className="text-center text-[var(--color-muted)] text-xs mt-1">
                                {personalInfo.location}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
