'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-12 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="mb-8">
                    <h1 className="retro-heading text-4xl md:text-5xl">
                        Ayush Petwal
                    </h1>
                </div>
                <div className="space-y-6 flex flex-col items-center">
                    <p className="font-sans text-base md:text-lg text-retro-dark max-w-2xl leading-relaxed font-medium mx-auto">
                        I love building systems that do complicated stuffs and solve real world problems. I work across smart contracts, data pipelines, and frontends to ship apps. Apart from over-engineering problems, I also dabble in research and design stuff.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-retro-muted uppercase tracking-widest font-bold">
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
