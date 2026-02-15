import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';
// import { Footer } from '@/components/Footer';

const work: LogItem[] = [
    {
        date: 'MAY 2025 - PRESENT',
        title: 'BACKEND INTERN @ UPVALUE TECH PVT LTD',
        description: 'Building a Stock Prediction System using ML algorithms for trading. Implemented Redis caching in Unix environments, optimizing API response times by 60% through efficient memory management.',
        tags: ['ML', 'REDIS', 'FASTAPI', 'SERVER'],
        type: 'work'
    },
    {
        date: 'MAY 2024 - PRESENT',
        title: 'BLOCKCHAIN & AI INTERN @ US STARTUP',
        description: 'Working on Real World Assets (RWA) tokenization and integration of AI with blockchain infrastructure.',
        tags: ['BLOCKCHAIN', 'AI', 'RWA'],
        type: 'work'
    },
    {
        date: '2023 - PRESENT',
        title: 'HACKATHONS & COMPETITIONS',
        description: 'Participated in 15+ hackathons with 2 wins: ETH Global and LNM Hacks 7. Focus on Agentic AI and Blockchain systems.',
        tags: ['HACKATHONS', 'ETH GLOBAL', 'LNM HACKS'],
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
