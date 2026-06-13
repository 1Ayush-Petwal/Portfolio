import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import { currently, SOCIALS } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Side Quests',
    description: 'What I am exploring, competitive programming, and writing outside of work.',
};

const LinkPill = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-mono text-[11px] px-3 py-1 border border-retro-border rounded-full text-retro-muted hover:text-retro-accent hover:border-retro-box transition-colors uppercase tracking-wide"
    >
        {children}
        <ArrowUpRight className="w-3 h-3" />
    </a>
);

export default function SideQuestsPage() {
    return (
        <div className="min-h-screen bg-retro-cream selection:bg-retro-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="max-w-5xl mx-auto px-5 md:px-8">
                <PageHeader
                    kicker="// Off the clock"
                    title="Side Quests"
                    subtitle="The stuff I do when I'm not on the main quest — what I'm learning, where I compete, and what I write about."
                />

                <Section label="Currently" index="01" total="03">
                    <ul className="space-y-3 max-w-2xl">
                        {currently.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3 font-sans text-base text-retro-dark/85 leading-relaxed"
                            >
                                <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-retro-accent" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section label="Arena" index="02" total="03">
                    <div className="max-w-2xl">
                        <p className="font-sans text-base text-retro-dark/85 leading-relaxed">
                            300+ DSA problems and counting. I keep the problem-solving muscle warm on
                            LeetCode (rating 1523) and Codeforces — competitive programming is where I
                            sharpen the fundamentals.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <LinkPill href={SOCIALS.leetcode}>LeetCode</LinkPill>
                            <LinkPill href={SOCIALS.codeforces}>Codeforces</LinkPill>
                        </div>
                    </div>
                </Section>

                <Section label="Writing" index="03" total="03">
                    <div className="max-w-2xl">
                        <p className="font-sans text-base text-retro-dark/85 leading-relaxed">
                            Notes on systems, ML infrastructure, and onchain engineering — the things
                            I learn the hard way and want to remember.
                        </p>
                        <a
                            href="/Articles"
                            className="inline-flex items-center gap-1 mt-4 font-mono text-[11px] text-retro-muted hover:text-retro-accent uppercase tracking-widest font-bold transition-colors group"
                        >
                            Read the writing
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </Section>

                <Footer />
            </main>
        </div>
    );
}
