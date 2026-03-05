"use client";
import { useState, useEffect } from "react";

const WORDS = ["Développeur", "Entrepreneur", "Concepteur", "Créateur"];
const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

export default function TypingAnimation({ className = "" }: { className?: string }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];

        if (!isDeleting && displayed === currentWord) {
            const timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
            return () => clearTimeout(timer);
        }

        if (isDeleting && displayed === "") {
            const timer = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % WORDS.length);
            }, PAUSE_AFTER_DELETING);
            return () => clearTimeout(timer);
        }

        const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayed(currentWord.slice(0, displayed.length + 1));
            } else {
                setDisplayed(currentWord.slice(0, displayed.length - 1));
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayed, isDeleting, wordIndex]);

    return (
        <span className={className}>
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-0.5 animate-blink align-middle" />
        </span>
    );
}
