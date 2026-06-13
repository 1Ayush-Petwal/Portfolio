'use client';

import { motion } from 'framer-motion';
import Avatar from './Avatar';

const Hero = () => {
    return (
        <section className="pt-28 md:pt-36 pb-10 md:pb-12">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-7"
            >
                {/* Swap in a photo later: <Avatar src="/avatar.jpg" /> */}
                <Avatar />
                <div className="space-y-3">
                    <h1 className="retro-heading text-3xl md:text-5xl">Ayush Petwal</h1>
                    <p className="font-mono text-[11px] md:text-xs text-retro-muted uppercase tracking-[0.2em] leading-relaxed">
                        ML Infra · Distributed Systems · Onchain
                        <span className="mx-2 text-retro-accent">/</span>
                        Jaipur, India
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
