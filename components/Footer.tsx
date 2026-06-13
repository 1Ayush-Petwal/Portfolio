import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import { SOCIALS } from '@/lib/data';

const socials = [
    { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
    { icon: Github, href: SOCIALS.github, label: 'GitHub' },
    { icon: Twitter, href: SOCIALS.twitter, label: 'Twitter' },
    { icon: Terminal, href: SOCIALS.leetcode, label: 'LeetCode' },
];

const Footer = () => {
    return (
        <footer className="mt-8 py-12 border-t border-dashed border-retro-border">
            <div className="grid md:grid-cols-[140px_1fr] gap-x-10 gap-y-6">
                <span className="retro-label self-start">Say Hi</span>
                <div className="space-y-6">
                    <p className="font-sans text-base md:text-lg text-retro-dark/90 leading-relaxed max-w-md">
                        Open to collaborations and interesting problems. The fastest way to reach me
                        is{' '}
                        <a
                            href={SOCIALS.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline font-medium text-retro-dark"
                        >
                            Twitter
                        </a>{' '}
                        or{' '}
                        <a
                            href={SOCIALS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline font-medium text-retro-dark"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>

                    <div className="flex items-center gap-2">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center bg-retro-box text-white rounded-sm hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-retro-accent)] transition-all duration-200"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2.5 pt-2">
                        <span className="w-1.5 h-1.5 bg-retro-accent rounded-full" />
                        <span className="font-mono text-sm md:text-base font-bold text-retro-dark tracking-tight">
                            © 2026 Ayush Petwal
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
