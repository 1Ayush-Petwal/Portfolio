'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'projects', href: '/projects' },
    { name: 'work', href: '/Work' },
    { name: 'articles', href: '/Articles' },
    { name: 'side quests', href: '/Side_quests' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/ayushpetwal/' },
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/1Ayush-Petwal' },
    { icon: <Twitter className="w-4 h-4" />, href: 'https://x.com/Ayush_P_145' },
    { icon: <Terminal className="w-4 h-4" />, href: 'https://leetcode.com/u/ayush_petwal01/' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f3e3]/80 backdrop-blur-md border-b border-[#d6d1c0]">
      <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between relative">
        {/* Left Side: Desktop Social Links / Mobile Hamburger */}
        <div className="flex items-center gap-1.5 z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center bg-retro-box text-white rounded-sm hover:bg-retro-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <div className="hidden md:flex items-center gap-1.5">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="w-8 h-8 flex items-center justify-center bg-retro-box text-white rounded-sm hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#e59e43] transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center z-20">
          <Link
            href="/"
            className="flex items-center group gap-0.5"
            onClick={() => setIsOpen(false)}
          >
            <div className="text-retro-dark font-mono text-xl font-black tracking-tighter">
              A
            </div>
            <div className="bg-retro-box text-white font-mono text-xl font-black px-2 py-0.5 rounded-sm group-hover:bg-retro-accent transition-colors">
              P
            </div>
            <div className="text-retro-dark font-mono text-xl font-black tracking-tighter">
              J
            </div>
          </Link>
        </div>

        {/* Right Side: Desktop Nav Links */}
        <div className="flex items-center gap-4 md:gap-8 z-20">
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[10px] text-retro-muted hover:text-retro-dark transition-colors uppercase tracking-widest font-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons on mobile (compact) */}
          <div className="flex md:hidden items-center gap-1">
            <a
              href="https://github.com/1Ayush-Petwal"
              className="w-7 h-7 flex items-center justify-center bg-retro-box text-white rounded-sm"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f8f3e3] border-b border-[#d6d1c0] overflow-hidden"
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
              <div className="pt-4 mt-4 border-t border-[#d6d1c0] flex gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
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
