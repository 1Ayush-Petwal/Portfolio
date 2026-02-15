import Parser from 'rss-parser';

const parser = new Parser();

export interface Article {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    source: 'Medium' | 'Substack';
}

export async function fetchArticles(mediumUsername: string, substackUrl?: string): Promise<Article[]> {
    const articles: Article[] = [];

    try {
        // Fetch Medium
        const mediumFeed = await parser.parseURL(`https://medium.com/feed/@${mediumUsername}`);
        mediumFeed.items.forEach(item => {
            articles.push({
                title: item.title || 'Untitled',
                link: item.link || '#',
                pubDate: item.pubDate || '',
                contentSnippet: item.contentSnippet || '',
                source: 'Medium'
            });
        });

        // Fetch Substack if url provided
        if (substackUrl) {
            const substackFeed = await parser.parseURL(`${substackUrl}/feed`);
            substackFeed.items.forEach(item => {
                articles.push({
                    title: item.title || 'Untitled',
                    link: item.link || '#',
                    pubDate: item.pubDate || '',
                    contentSnippet: item.contentSnippet || '',
                    source: 'Substack'
                });
            });
        }

    } catch (error) {
        console.error('Error fetching articles:', error);
    }

    // Sort by date descending
    return articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}
