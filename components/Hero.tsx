'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8">
                    <h1 className="retro-heading text-4xl md:text-5xl">
                        Ayush Petwal
                    </h1>
                </div>
                <div className="space-y-6">
                    <p className="font-sans text-base md:text-lg text-retro-dark max-w-2xl leading-relaxed font-medium">
                        Frontend Architect & Software Engineer. I specialize in building highly interactive,
                        performance-optimized web applications with a focus on minimalist aesthetics and
                        robust engineering patterns.
                    </p>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-retro-muted uppercase tracking-widest font-bold">
                        <span>Based in India</span>
                        <span className="w-1 h-1 bg-retro-accent rounded-full" />
                        <span>Available for collaborations</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
