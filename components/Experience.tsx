'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Job } from '@/lib/data';

const JobEntry = ({ job, i }: { job: Job; i: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
            className="group py-7 first:pt-0 border-t border-dashed border-retro-border first:border-t-0"
        >
            {/* Header: role + dates */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-base md:text-lg font-black text-retro-dark tracking-tight">
                    {job.role}
                </h3>
                <span className="flex items-center gap-2 font-mono text-[11px] text-retro-muted uppercase tracking-widest whitespace-nowrap">
                    {job.current && (
                        <span className="w-1.5 h-1.5 bg-retro-accent rounded-full animate-pulse" />
                    )}
                    {job.start} — {job.end}
                </span>
            </div>

            {/* Company + location */}
            <div className="mt-1.5 font-mono text-sm text-retro-muted">
                {job.companyUrl ? (
                    <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 link-underline hover:text-retro-accent transition-colors"
                    >
                        {job.company}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                ) : (
                    <span>{job.company}</span>
                )}
                {job.location && <span className="text-retro-muted/70"> · {job.location}</span>}
            </div>

            {/* Summary */}
            <p className="mt-4 font-sans text-sm md:text-[15px] text-retro-dark/85 leading-relaxed max-w-2xl">
                {job.summary}
            </p>

            {/* Highlights */}
            <ul className="mt-3 space-y-2">
                {job.highlights.map((h, idx) => (
                    <li
                        key={idx}
                        className="flex gap-3 font-sans text-sm text-retro-dark/70 leading-relaxed max-w-2xl"
                    >
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-retro-accent/70" />
                        <span>{h}</span>
                    </li>
                ))}
            </ul>

            {/* Tech keys */}
            <div className="mt-4 flex flex-wrap gap-1.5">
                {job.keys.map((k) => (
                    <span
                        key={k}
                        className="font-mono text-[10px] px-2 py-0.5 border border-retro-border text-retro-muted rounded-full uppercase font-bold tracking-tight"
                    >
                        {k}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Experience = ({ jobs }: { jobs: Job[] }) => {
    return (
        <div className="flex flex-col">
            {jobs.map((job, i) => (
                <JobEntry key={`${job.company}-${job.role}`} job={job} i={i} />
            ))}
        </div>
    );
};

export default Experience;
