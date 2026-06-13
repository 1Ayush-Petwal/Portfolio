'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIALS } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'work', href: '/Work' },
    { name: 'projects', href: '/projects' },
    { name: 'writing', href: '/Articles' },
    { name: 'side quests', href: '/Side_quests' },
];

const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: SOCIALS.linkedin, label: 'LinkedIn' },
    { icon: <Github className="w-4 h-4" />, href: SOCIALS.github, label: 'GitHub' },
    { icon: <Twitter className="w-4 h-4" />, href: SOCIALS.twitter, label: 'Twitter' },
    { icon: <Terminal className="w-4 h-4" />, href: SOCIALS.leetcode, label: 'LeetCode' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-retro-cream/80 backdrop-blur-md border-b border-retro-border">
            <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
                {/* Left: home / name */}
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 font-mono font-black text-retro-dark tracking-tight"
                >
                    <span className="w-2 h-2 bg-retro-accent rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-sm">Home</span>
                </Link>

                {/* Right: desktop nav links + theme toggle */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-mono text-[11px] text-retro-muted hover:text-retro-dark transition-colors uppercase tracking-widest font-bold"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <span className="w-px h-5 bg-retro-border" />
                    <ThemeToggle />
                </div>

                {/* Mobile: theme toggle + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-9 h-9 flex items-center justify-center bg-retro-box text-white rounded-md hover:bg-retro-accent transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-retro-cream border-b border-retro-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-mono text-sm text-retro-dark hover:text-retro-accent transition-colors uppercase tracking-[0.2em] font-black"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-dashed border-retro-border flex gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className="w-10 h-10 flex items-center justify-center bg-retro-box text-white rounded-sm hover:bg-retro-accent transition-colors"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
