import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import Writing from '@/components/Writing';
import { fetchArticles } from '@/lib/medium';
import { articlesToPosts } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Essays on engineering, systems design, and the intersection of AI and onchain.',
};

export const revalidate = 3600;

export default async function ArticlesPage() {
    const mediumUsername = process.env.MEDIUM_USERNAME || 'ayushpetwal';
    const substackUrl = process.env.SUBSTACK_URL;

    const articles = await fetchArticles(mediumUsername, substackUrl);
    const posts = articlesToPosts(articles);

    return (
        <div className="min-h-screen bg-retro-cream selection:bg-retro-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="max-w-5xl mx-auto px-5 md:px-8">
                <PageHeader
                    kicker="// Essays & notes"
                    title="Writing"
                    subtitle="Long-form notes on engineering, systems design, and the intersection of AI, infrastructure, and onchain."
                />

                <Section label="Posts" divider>
                    <Writing posts={posts} />
                </Section>

                <Footer />
            </main>
        </div>
    );
}
