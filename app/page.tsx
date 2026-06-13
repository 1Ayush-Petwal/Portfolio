import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Section from '@/components/Section';
import Experience from '@/components/Experience';
import ProjectGrid from '@/components/ProjectGrid';
import Writing from '@/components/Writing';
import Footer from '@/components/Footer';
import { projects, experience, articlesToPosts } from '@/lib/data';
import { fetchArticles } from '@/lib/medium';

export const revalidate = 3600;

const ViewAllLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="inline-flex items-center gap-1 mt-7 font-mono text-[11px] text-retro-muted hover:text-retro-accent uppercase tracking-widest font-bold transition-colors group"
    >
        {children}
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
);

export default async function Home() {
    const mediumUsername = process.env.MEDIUM_USERNAME || 'ayushpetwal';
    const substackUrl = process.env.SUBSTACK_URL;
    const articles = await fetchArticles(mediumUsername, substackUrl);
    const posts = articlesToPosts(articles).slice(0, 3);

    const featured = projects.filter((p) => p.featured);

    return (
        <div className="min-h-screen bg-retro-cream selection:bg-retro-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="max-w-5xl mx-auto px-5 md:px-8">
                <Hero />

                <Section label="About" index="01" total="04" id="about">
                    <About />
                </Section>

                <Section label="Work" index="02" total="04" id="work">
                    <Experience jobs={experience} />
                    <ViewAllLink href="/Work">Full experience</ViewAllLink>
                </Section>

                <Section label="Projects" index="03" total="04" id="projects">
                    <ProjectGrid projects={featured} />
                    <ViewAllLink href="/projects">All projects</ViewAllLink>
                </Section>

                <Section label="Writing" index="04" total="04" id="writing">
                    <Writing posts={posts} viewAllHref="/Articles" />
                </Section>

                <Footer />
            </main>
        </div>
    );
}
