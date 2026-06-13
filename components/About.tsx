'use client';

import { motion } from 'framer-motion';

const linkClass = 'link-underline font-medium text-retro-dark';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-5 max-w-2xl"
        >
            <p className="font-sans text-base md:text-lg text-retro-dark/90 leading-relaxed">
                I&apos;m an engineer who likes problems that sit between the layers — distributed
                systems, ML infrastructure, and onchain protocols. Right now I&apos;m an AI
                Infrastructure Engineer at{' '}
                <span className="font-medium text-retro-dark">UpValue</span> and an AI &amp;
                Blockchain intern at{' '}
                <span className="font-medium text-retro-dark">Kritu Capital</span>, building ML
                systems and real-estate tokenization infra. On the side I contribute to{' '}
                <a href="https://github.com/kubeflow" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Kubeflow
                </a>
                , where I&apos;m wiring OpenTelemetry tracing into the SDK so ML platform teams can
                finally see what their jobs are doing.
            </p>
            <p className="font-sans text-base md:text-lg text-retro-dark/90 leading-relaxed">
                I&apos;ve spent the last few years shipping across all three layers — 13+ hackathons
                and 3 wins (including{' '}
                <a
                    href="https://ethglobal.com/showcase/suriverse-nj5ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                >
                    ETH Global
                </a>
                ), 300+ DSA problems, and a stubborn habit of over-engineering things until
                they&apos;re elegant. When I&apos;m not building, I&apos;m usually reading about
                systems design or chasing the next interesting problem. Currently studying Computer
                &amp; Communication Engineering at LNMIIT.
            </p>
        </motion.div>
    );
};

export default About;
