"use client";

import { personalInfo } from "@/src/data";

export default function Footer() {
    return (
        <footer className="py-16 px-6 lg:pl-64">
            <div className="max-w-5xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-[var(--color-foreground)] font-bold text-lg">
                            {personalInfo.name}
                            <span className="text-[var(--color-accent)]">.</span>
                        </p>
                        <p className="text-[var(--color-muted)] text-xs mt-1">
                            Fait main — {new Date().getFullYear()}
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm items-center">
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-muted)] hover:text-[#0A66C2] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href={personalInfo.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
