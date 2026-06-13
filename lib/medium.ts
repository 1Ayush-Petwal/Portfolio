import Parser from 'rss-parser';

const parser = new Parser();

export interface Article {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    source: 'Medium' | 'Substack';
}

/**
 * Fetch and parse a single RSS feed.
 *
 * We fetch the XML with the native `fetch` (WHATWG URL) and hand the string to
 * rss-parser's `parseString`, deliberately avoiding its `parseURL` — that path
 * relies on Node's deprecated `url.parse()` (DEP0169). `next.revalidate` keeps
 * the feed cached in line with the route's hourly ISR.
 */
async function fetchFeed(feedUrl: string, source: Article['source']): Promise<Article[]> {
    const res = await fetch(feedUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)' },
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`${source} feed responded ${res.status}`);
    }

    const feed = await parser.parseString(await res.text());

    return feed.items.map((item) => ({
        title: item.title || 'Untitled',
        link: item.link || '#',
        pubDate: item.pubDate || '',
        contentSnippet: item.contentSnippet || '',
        source,
    }));
}

export async function fetchArticles(mediumUsername: string, substackUrl?: string): Promise<Article[]> {
    const feeds: Promise<Article[]>[] = [
        fetchFeed(`https://medium.com/feed/@${mediumUsername}`, 'Medium'),
    ];

    if (substackUrl) {
        feeds.push(fetchFeed(`${substackUrl}/feed`, 'Substack'));
    }

    // Settle each feed independently so one failing source doesn't drop the other.
    const results = await Promise.allSettled(feeds);

    const articles = results.flatMap((result) => {
        if (result.status === 'fulfilled') return result.value;
        console.error('Error fetching articles:', result.reason);
        return [];
    });

    // Newest first.
    return articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}
