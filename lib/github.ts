export interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    topics: string[];
    updated_at: string;
}

export async function fetchPinnedRepos(username: string): Promise<GithubRepo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
            headers: process.env.GITHUB_TOKEN ? {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            } : {}
        });

        if (!response.ok) throw new Error('Failed to fetch repos');

        const repos: GithubRepo[] = await response.json();

        // In a real app, you might want to filter for specific repos or use a custom "pinned" logic
        // Since the official pinned API is GraphQL-only, we'll just take the top ones or filter by a topic
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
