'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, Pencil, Globe } from 'lucide-react';

export interface LogItem {
    date: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    type?: 'work' | 'project' | 'article' | 'side-quest';
}

const TechnicalLogItem = ({ date, title, description, tags, type = 'project', link }: LogItem) => {
    const Icon = type === 'work' ? Briefcase : type === 'article' ? Pencil : type === 'side-quest' ? Globe : Code;

    const content = (
        <div className="bg-[#fcfaf2] border border-[#d6d1c0]/60 rounded-xl p-8 pt-12 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full">
                <h3 className="font-mono text-xl md:text-2xl font-black text-retro-dark tracking-tight uppercase">
                    {title}
                </h3>
                <div className="font-mono text-[10px] md:text-[11px] px-3 py-1 bg-[#f0ebdb] border border-[#d6d1c0] text-retro-muted rounded-md uppercase font-bold tracking-widest whitespace-nowrap">
                    {date}
                </div>
            </div>

            <p className="font-sans text-sm md:text-base text-retro-dark/80 leading-relaxed mb-8 font-medium max-w-2xl">
                {description}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 border border-[#d6d1c0] text-retro-muted rounded-full uppercase font-bold tracking-tighter"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative mb-8 group"
        >
            {/* Icon offset */}
            <div className="absolute -left-4 -top-4 z-10 w-10 h-10 bg-[#f8f3e3] border border-[#d6d1c0] rounded-lg flex items-center justify-center text-retro-muted shadow-sm group-hover:bg-retro-accent group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5" />
            </div>

            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                </a>
            ) : content}
        </motion.div>
    );
};

export const TechnicalLog = ({ items, title, description }: { items: LogItem[], title: string, description?: string }) => {
    return (
        <section className="py-20 w-full">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <div className="mb-2">
                    <h2 className="retro-heading text-3xl md:text-4xl text-center">
                        {title}
                    </h2>
                </div>
                {description && (
                    <p className="font-mono text-xs md:text-sm text-retro-muted uppercase tracking-[0.2em] text-center max-w-xl">
                        {description}
                    </p>
                )}
            </div>
            <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
                {items.map((item, index) => (
                    <TechnicalLogItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};
