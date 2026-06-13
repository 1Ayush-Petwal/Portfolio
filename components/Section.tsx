import { ReactNode } from 'react';

interface SectionProps {
    /** Short uppercase label shown in the left margin. */
    label: string;
    /** Optional ordinal, e.g. "01". */
    index?: string;
    /** Optional total for the ordinal, e.g. "04". */
    total?: string;
    id?: string;
    /** Draw a dashed rule above the section. */
    divider?: boolean;
    children: ReactNode;
}

/**
 * The signature two-column layout: a sticky sticker label in the left margin
 * with the content on the right. Collapses to a single column on mobile.
 */
export default function Section({ label, index, total, id, divider = true, children }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-12 md:py-16 ${divider ? 'border-t border-dashed border-retro-border' : ''}`}
        >
            <div className="grid md:grid-cols-[140px_1fr] gap-x-10 gap-y-5">
                <div className="md:sticky md:top-28 self-start flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-2.5">
                    <span className="retro-label">{label}</span>
                    {index && (
                        <span className="font-mono text-[10px] text-retro-muted tracking-[0.25em] tabular-nums">
                            {index}
                            {total ? ` / ${total}` : ''}
                        </span>
                    )}
                </div>
                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}
