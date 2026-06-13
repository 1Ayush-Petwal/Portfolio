'use client';

import { Sun, Moon } from 'lucide-react';

/**
 * Theme toggle with a sun↔moon morph. The icon shown is driven purely by the
 * `dark:` variant (the `.dark` class on <html>), so there's no React state and
 * therefore no hydration mismatch — the click handler just flips the class and
 * persists the choice. The initial class is set pre-paint by the inline script
 * in app/layout.tsx, so there's no flash on load.
 */
export default function ThemeToggle() {
    const toggle = () => {
        const root = document.documentElement;
        const isDark = root.classList.toggle('dark');
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch {
            /* localStorage unavailable (private mode) — toggle still works for the session */
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            title="Toggle theme"
            className="relative grid place-items-center w-9 h-9 rounded-md border border-retro-border text-retro-muted hover:text-retro-accent hover:border-retro-box hover:-translate-y-0.5 transition-[color,border-color,transform] duration-200"
        >
            <Sun
                className="absolute w-[18px] h-[18px] rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-500 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0"
                strokeWidth={2}
            />
            <Moon
                className="absolute w-[18px] h-[18px] rotate-90 scale-0 opacity-0 transition-[transform,opacity] duration-500 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100"
                strokeWidth={2}
            />
        </button>
    );
}
