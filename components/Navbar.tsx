import Link from 'next/link';
import { Github, Linkedin, Twitter, Menu, Terminal } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'projects', href: '/projects' },
    { name: 'work', href: '/Work' },
    { name: 'articles', href: '/Articles' },
    { name: 'side quests', href: '/Side_quests' },
  ];

  const socialLinks = [
    { icon: <Menu className="w-4 h-4" />, href: '#' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#' },
    { icon: <Github className="w-4 h-4" />, href: '#' },
    { icon: <Twitter className="w-4 h-4" />, href: '#' },
    { icon: <Terminal className="w-4 h-4" />, href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f3e3]/80 backdrop-blur-md border-b border-[#d6d1c0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
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

        <div className="flex gap-4 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-[9px] md:text-[10px] text-retro-muted hover:text-retro-dark transition-colors uppercase tracking-widest font-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
