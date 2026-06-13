import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Systems, tools, and experimental engines built by Ayush Petwal.',
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-retro-cream selection:bg-retro-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="max-w-5xl mx-auto px-5 md:px-8">
                <PageHeader
                    kicker="// Selected work"
                    title="Projects"
                    subtitle="A technical log of systems, tools, and experimental engines I've architected — spanning ML infrastructure, distributed systems, and onchain protocols."
                />

                <Section label="Builds" divider>
                    <ProjectGrid projects={projects} detailed />
                </Section>

                <Footer />
            </main>
        </div>
    );
}
