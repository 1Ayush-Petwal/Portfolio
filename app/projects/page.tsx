import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';
import { fetchPinnedRepos } from '@/lib/github';

export default async function ProjectsPage() {
    const githubUsername = process.env.GITHUB_USERNAME || 'ayushpetwal';
    const repos = await fetchPinnedRepos(githubUsername);

    const projectItems: LogItem[] = repos.map(repo => ({
        date: new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
        title: repo.name.replace(/-/g, ' '),
        description: repo.description || 'No description provided.',
        tags: [repo.language || 'Code', ...(repo.topics || []).slice(0, 2)].filter(Boolean),
        link: repo.html_url,
        type: 'project'
    }));

    const displayItems = projectItems.length > 0 ? projectItems : [
        {
            date: 'JAN 2024 - PRESENT',
            title: 'AGENTIC AI ENGINE',
            description: 'Developed a high-performance orchestration layer for autonomous AI agents, enabling complex multi-step task execution.',
            tags: ['NEXT.JS 15', 'TYPESCRIPT', 'OPENAI'],
            type: 'project' as const
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8f3e3]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
                <TechnicalLog
                    items={displayItems}
                    title="Projects"
                    description="A chronological log of open-source contributions, experimental systems, and technical architectures."
                />
            </main>
        </div>
    );
}
