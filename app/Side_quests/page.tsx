import Navbar from '@/components/Navbar';

export default function SideQuestsPage() {
    return (
        <div className="min-h-screen bg-[#f8f3e3]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center">
                <section className="py-20 w-full flex flex-col items-center">
                    <div className="flex flex-col items-center mb-16 space-y-6 text-center">
                        <h2 className="retro-heading text-3xl md:text-4xl">
                            Side Quests
                        </h2>
                        <p className="font-sans text-base md:text-lg text-retro-dark max-w-2xl leading-relaxed font-medium">
                            Personal blogs, experiments, and things I write about outside of work.
                        </p>
                        <p className="font-mono text-xs uppercase tracking-widest text-retro-muted">
                            Coming soon.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
