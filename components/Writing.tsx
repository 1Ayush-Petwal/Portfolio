import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/lib/data';

const ViewAll = ({ href }: { href: string }) => (
    <a
        href={href}
        className="inline-flex items-center gap-1 mt-6 font-mono text-[11px] text-retro-muted hover:text-retro-accent uppercase tracking-widest font-bold transition-colors group"
    >
        View all
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
);

/**
 * Inline writing list (heysuri/thariq style): title + meta row + short blurb.
 * Falls back to a tasteful prompt when there are no live posts.
 */
const Writing = ({ posts, viewAllHref }: { posts: Post[]; viewAllHref?: string }) => {
    if (!posts.length) {
        return (
            <div className="max-w-2xl">
                <p className="font-sans text-base text-retro-dark/80 leading-relaxed">
                    Notes on systems, ML infrastructure, and onchain engineering — currently in
                    drafts.
                </p>
                {viewAllHref && <ViewAll href={viewAllHref} />}
            </div>
        );
    }

    return (
        <div>
            <div className="divide-y divide-dashed divide-retro-border">
                {posts.map((post) => (
                    <a
                        key={post.link}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block py-5 first:pt-0"
                    >
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-sans text-base md:text-lg font-semibold text-retro-dark group-hover:text-retro-accent transition-colors link-underline">
                                {post.title}
                            </h3>
                            <span className="shrink-0 font-mono text-[11px] text-retro-muted uppercase tracking-widest whitespace-nowrap">
                                {post.date}
                            </span>
                        </div>
                        {(post.readTime || post.source) && (
                            <div className="mt-1 font-mono text-[11px] text-retro-muted uppercase tracking-widest">
                                {[post.readTime, post.source].filter(Boolean).join(' · ')}
                            </div>
                        )}
                        {post.description && (
                            <p className="mt-2 font-sans text-sm text-retro-dark/65 leading-relaxed line-clamp-2 max-w-2xl">
                                {post.description}
                            </p>
                        )}
                    </a>
                ))}
            </div>
            {viewAllHref && <ViewAll href={viewAllHref} />}
        </div>
    );
};

export default Writing;
