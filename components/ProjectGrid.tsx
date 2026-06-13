'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Server, Network, Lock, Image as ImageIcon, Boxes, Gamepad2, LucideIcon } from 'lucide-react';
import type { Project } from '@/lib/data';

const ICONS: Record<Project['iconKey'], LucideIcon> = {
    server: Server,
    network: Network,
    lock: Lock,
    image: ImageIcon,
    boxes: Boxes,
    game: Gamepad2,
};

const ProjectCard = ({ project, i, detailed }: { project: Project; i: number; detailed?: boolean }) => {
    const Icon = ICONS[project.iconKey];
    const [from, to] = project.gradient;

    const card = (
        <>
            {/* Cover */}
            <div
                className="relative h-32 md:h-36 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
            >
                <div className="absolute inset-0 cover-dots opacity-60" />
                <span className="absolute left-4 top-3.5 font-mono text-[10px] text-white/70 uppercase tracking-[0.2em]">
                    {project.date}
                </span>
                <ArrowUpRight className="absolute right-4 top-3.5 w-4 h-4 text-white/0 group-hover:text-white/90 transition-colors duration-200" />
                <Icon
                    className="absolute right-3 bottom-3 w-14 h-14 text-retro-accent/40 group-hover:text-retro-accent/60 transition-colors duration-300"
                    strokeWidth={1.5}
                />
            </div>

            {/* Body */}
            <div className="p-5">
                <h3 className="font-mono text-base font-black text-retro-dark uppercase tracking-tight">
                    {project.title}
                </h3>
                <p
                    className={`mt-2 font-sans text-sm text-retro-dark/70 leading-relaxed ${
                        detailed ? '' : 'line-clamp-2'
                    }`}
                >
                    {detailed ? project.description : project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-[10px] px-2 py-0.5 border border-retro-border text-retro-muted rounded-full uppercase font-bold tracking-tight"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    const className =
        'group block card-pop bg-retro-surface border border-retro-border/70 rounded-xl overflow-hidden h-full';

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 2) * 0.08 }}
        >
            {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
                    {card}
                </a>
            ) : (
                <div className={className}>{card}</div>
            )}
        </motion.div>
    );
};

const ProjectGrid = ({ projects, detailed }: { projects: Project[]; detailed?: boolean }) => {
    return (
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} i={i} detailed={detailed} />
            ))}
        </div>
    );
};

export default ProjectGrid;
