import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';
// import { Footer } from '@/components/Footer';

const work: LogItem[] = [
    {
        date: '2022 - PRESENT',
        title: 'SENIOR FRONTEND ENGINEER @ TECHCORP',
        description: 'Leading the design system team and spearheading the migration to micro-frontends architecture. Improved application load times by 40% through aggressive caching and code-splitting.',
        tags: ['LEADERSHIP', 'ARCHITECT', 'PERFORMANCE'],
        type: 'work'
    },
    {
        date: '2020 - 2022',
        title: 'FRONTEND DEVELOPER @ STARTUPX',
        description: 'Built the core user dashboard and real-time charting library. Scaled the platform to support 100k+ concurrent users.',
        tags: ['REACT', 'D3.JS', 'WEBSOCKETS'],
        type: 'work'
    },
    {
        date: '2019 - 2020',
        title: 'JUNIOR DEVELOPER @ WEBAGENCY',
        description: 'Developed responsive web applications for international clients, focusing on SEO and accessibility.',
        tags: ['HTML/CSS', 'JAVASCRIPT', 'UI/UX'],
        type: 'work'
    },
];

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-[#f8f3e3] selection:bg-retro-accent selection:text-white">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center">
                <div className="mb-12 flex flex-col items-center text-center">
                    <h1 className="retro-heading text-2xl md:text-3xl mb-6">
                        Experience
                    </h1>
                    <p className="font-sans text-base text-retro-dark/80 font-medium">
                        Professional trajectory and key contributions.
                    </p>
                </div>
                <TechnicalLog items={work} title="Professional History" />
                {/* <Footer /> */}
            </main>
        </div>
    );
}
