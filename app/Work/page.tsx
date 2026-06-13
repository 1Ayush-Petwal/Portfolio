import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import Experience from '@/components/Experience';
import { experience, education, hackathons } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Work',
    description: 'Professional experience, hackathons, and education — Ayush Petwal.',
};

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-retro-cream selection:bg-retro-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="max-w-5xl mx-auto px-5 md:px-8">
                <PageHeader
                    kicker="// Experience"
                    title="Work"
                    subtitle="Chapters of hands-on building — from open-source contributions to ML infrastructure and onchain systems."
                />

                <Section label="Roles" index="01" total="03">
                    <Experience jobs={experience} />
                </Section>

                <Section label="Hackathons" index="02" total="03">
                    <div className="max-w-2xl">
                        <h3 className="font-mono text-base md:text-lg font-black text-retro-dark tracking-tight">
                            {hackathons.headline}
                        </h3>
                        <p className="mt-2 font-sans text-sm md:text-[15px] text-retro-dark/85 leading-relaxed">
                            {hackathons.blurb}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {hackathons.links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-mono text-[11px] px-3 py-1 border border-retro-border rounded-full text-retro-muted hover:text-retro-accent hover:border-retro-box transition-colors uppercase tracking-wide"
                                >
                                    {l.label}
                                    <ArrowUpRight className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section label="Education" index="03" total="03">
                    <div className="max-w-2xl">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-mono text-base md:text-lg font-black text-retro-dark tracking-tight">
                                {education.degree}
                            </h3>
                            <span className="font-mono text-[11px] text-retro-muted uppercase tracking-widest whitespace-nowrap">
                                {education.period}
                            </span>
                        </div>
                        <div className="mt-1.5 font-mono text-sm text-retro-muted">
                            {education.school} · {education.location}
                        </div>
                        <p className="mt-3 font-sans text-sm text-retro-dark/80">{education.detail}</p>
                    </div>
                </Section>

                <Footer />
            </main>
        </div>
    );
}
