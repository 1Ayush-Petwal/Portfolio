interface PageHeaderProps {
    kicker?: string;
    title: string;
    subtitle?: string;
}

export default function PageHeader({ kicker, title, subtitle }: PageHeaderProps) {
    return (
        <header className="pt-28 md:pt-32 pb-6">
            {kicker && (
                <span className="font-mono text-[11px] text-retro-muted uppercase tracking-[0.25em]">
                    {kicker}
                </span>
            )}
            <h1 className="retro-heading text-3xl md:text-4xl mt-3">{title}</h1>
            {subtitle && (
                <p className="mt-5 font-sans text-base md:text-lg text-retro-dark/80 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </header>
    );
}
