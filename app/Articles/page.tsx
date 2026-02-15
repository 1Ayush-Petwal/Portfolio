import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';
import { fetchArticles } from '@/lib/medium';

export default async function ArticlesPage() {
    // Replace with your actual username or use env vars
    const mediumUsername = process.env.MEDIUM_USERNAME || 'ayushpetwal';
    const substackUrl = process.env.SUBSTACK_URL;

    const fetchedArticles = await fetchArticles(mediumUsername, substackUrl);

    const articleItems: LogItem[] = fetchedArticles.map(article => ({
        date: new Date(article.pubDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
        title: article.title,
        description: article.contentSnippet.slice(0, 180) + '...',
        tags: [article.source, 'TECHNICAL'],
        link: article.link,
        type: 'article'
    }));

    // Fallback if fetch fails or is empty
    const displayItems = articleItems.length > 0 ? articleItems : [
        {
            date: 'OCT 24, 2024',
            title: 'THE FUTURE OF AGENTIC INTERFACES',
            description: 'Exploring how generative AI is shifting the paradigm from static UIs to dynamic, goal-oriented agentic experiences.',
            tags: ['AI', 'UX', 'SUBSTACK'],
            type: 'article' as const
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8f3e3]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
                <TechnicalLog
                    items={displayItems}
                    title="Articles"
                    description="Essays on engineering, systems design, and the intersection of AI and interfaces."
                />
            </main>
        </div>
    );
}
