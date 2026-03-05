"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/src/data";
import TypingAnimation from "@/src/components/TypingAnimation";
import CountUp from "@/src/components/CountUp";

const STATS = [
    { value: 10, suffix: "+", label: "Projets" },
    { value: 2, suffix: "", label: "Stages" },
    { value: 5, suffix: "", label: "Certifications" },
] as const;

export default function Hero() {
    return (
        <section
            id="accueil"
            className="min-h-screen flex flex-col justify-center px-6 lg:pl-64 relative overflow-hidden"
        >
            {/* Decorative grid / gradient */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-muted) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px] pointer-events-none" />

            <div className="max-w-6xl w-full pt-24 lg:pt-0 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
                    {/* Left column — text */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="section-label mb-6">Portfolio 2026</p>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-[var(--color-foreground)] mb-6">
                                {personalInfo.name.split(" ")[0]}
                                <br />
                                <span className="text-[var(--color-accent)]">
                                    {personalInfo.name.split(" ")[1]}
                                </span>
                            </h1>

                            <div className="text-lg md:text-xl text-[var(--color-muted)] max-w-lg mb-4 leading-relaxed">
                                <TypingAnimation className="text-[var(--color-accent)] font-semibold" />
                            </div>
                            <p className="text-sm md:text-base text-[var(--color-muted)] max-w-lg mb-10 leading-relaxed">
                                {personalInfo.tagline} — Passionné par le développement,
                                l&apos;entrepreneuriat et la conception de solutions innovantes.
                            </p>

                            {/* Quick stats — animated */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex gap-8 mb-10"
                            >
                                {STATS.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <p className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                                            <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                                        </p>
                                        <p className="text-[0.65rem] uppercase tracking-widest text-[var(--color-muted)] font-mono mt-1">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href="#projets"
                                    className="px-6 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors text-sm"
                                >
                                    Voir mes projets
                                </a>
                                <a
                                    href={personalInfo.cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all text-sm font-medium"
                                >
                                    Télécharger mon CV ↗
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-foreground)] rounded-lg hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all text-sm font-medium inline-flex items-center gap-2"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right column — interactive terminal card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:block w-[340px] shrink-0"
                    >
                        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-2xl">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-surface-2)] border-b border-[var(--color-border)]">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                                <span className="text-[0.6rem] text-[var(--color-muted)] font-mono ml-2">
                                    celian@portfolio ~
                                </span>
                            </div>
                            {/* Terminal body */}
                            <div className="p-5 font-mono text-xs leading-relaxed space-y-2">
                                <p>
                                    <span className="text-[var(--color-accent)]">$</span>{" "}
                                    <span className="text-[var(--color-muted)]">whoami</span>
                                </p>
                                <p className="text-[var(--color-foreground)]">Célian Bedminster</p>

                                <p className="mt-3">
                                    <span className="text-[var(--color-accent)]">$</span>{" "}
                                    <span className="text-[var(--color-muted)]">cat skills.json</span>
                                </p>
                                <div className="text-[var(--color-foreground)] pl-2 border-l-2 border-[var(--color-accent)]/30">
                                    <p>{`{`}</p>
                                    <p className="pl-3">
                                        <span className="text-[var(--color-accent)]">&quot;web&quot;</span>:{" "}
                                        <span className="text-[var(--color-muted)]">&quot;Next.js, Angular, PHP&quot;</span>,
                                    </p>
                                    <p className="pl-3">
                                        <span className="text-[var(--color-accent)]">&quot;back&quot;</span>:{" "}
                                        <span className="text-[var(--color-muted)]">&quot;Java, Spring, C#&quot;</span>,
                                    </p>
                                    <p className="pl-3">
                                        <span className="text-[var(--color-accent)]">&quot;mobile&quot;</span>:{" "}
                                        <span className="text-[var(--color-muted)]">&quot;Flutter, Kotlin, Android&quot;</span>,
                                    </p>
                                    <p className="pl-3">
                                        <span className="text-[var(--color-accent)]">&quot;db&quot;</span>:{" "}
                                        <span className="text-[var(--color-muted)]">&quot;Postgre SQL, MySQL, Oracle, SQL Server&quot;</span>
                                    </p>
                                    <p>{`}`}</p>
                                </div>

                                <p className="mt-3">
                                    <span className="text-[var(--color-accent)]">$</span>{" "}
                                    <span className="text-[var(--color-muted)]">echo $LOCATION</span>
                                </p>
                                <p className="text-[var(--color-foreground)]">📍 Paris & Montréal</p>

                                <p className="mt-3">
                                    <span className="text-[var(--color-accent)]">$</span>{" "}
                                    <span className="text-[var(--color-muted)]">echo $STATUS</span>
                                </p>
                                <p className="text-[var(--color-unenabled)]">✗ Indisponible actuellement</p>

                                <p className="mt-3 flex items-center">
                                    <span className="text-[var(--color-accent)]">$</span>{" "}
                                    <span className="inline-block w-[6px] h-[14px] bg-[var(--color-accent)] ml-1 animate-blink" />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator — clickable button */}
            <motion.button
                onClick={() => {
                    const el = document.getElementById("profil");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-[calc(14rem+50%)] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                aria-label="Défiler vers le bas"
            >
                <svg
                    width="20"
                    height="30"
                    viewBox="0 0 20 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <rect x="1" y="1" width="18" height="28" rx="9" />
                    <line x1="10" y1="6" x2="10" y2="12" />
                </svg>
            </motion.button>
        </section>
    );
}
