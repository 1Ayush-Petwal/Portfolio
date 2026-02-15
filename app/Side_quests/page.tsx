import Navbar from '@/components/Navbar';
import { TechnicalLog, LogItem } from '@/components/TechnicalLog';

export default function SideQuestsPage() {
    const spotifyUrls = (process.env.SPOTIFY_PLAY_IDs || '').split(',').map(url => url.trim()).filter(Boolean);

    const playlistIds = spotifyUrls.map(url => {
        const match = url.match(/\/playlist\/([^?]+)/);
        return match ? match[1] : null;
    }).filter(Boolean) as string[];

    const photoQuests: LogItem[] = [
        {
            date: 'PHOTO LOG',
            title: 'STREET PHOTOGRAPHY',
            description: 'Capturing moments in the city. Monochrome explorations of light and shadow.',
            tags: ['LEICA', 'MONOCHROME', 'STREET'],
            type: 'side-quest' as const
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f3e3]">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center">
                <section className="py-20 w-full flex flex-col items-center">
                    <div className="flex flex-col items-center mb-16 space-y-6 text-center">
                        <div className="mb-2">
                            <h2 className="retro-heading text-3xl md:text-4xl">
                                Music
                            </h2>
                        </div>
                        <p className="font-sans text-base md:text-lg text-retro-dark max-w-2xl leading-relaxed font-medium">
                            Tunes that keep me shipping. I lean indie and hip-hop with quality productions, with detours into jazz, rock & film scores.
                        </p>

                        <div className="space-y-12 w-full flex flex-col items-center">
                            {playlistIds.map((id) => (
                                <div key={id} className="w-full max-w-2xl overflow-hidden rounded-xl border border-[#d6d1c0] shadow-sm">
                                    <iframe
                                        style={{ borderRadius: '12px' }}
                                        src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
                                        width="100%"
                                        height="380"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex justify-center w-full">
                            <p className="font-mono text-xs uppercase tracking-widest text-retro-muted">
                                Follow on <a href="https://open.spotify.com/user/31hhfur3xsrkveg4ts2ldupfvyje?si=3c588f288f844f04" target="_blank" rel="noopener noreferrer" className="text-retro-dark font-black underline decoration-retro-accent underline-offset-4">Spotify</a>.
                            </p>
                        </div>
                    </div>

                    <div className="py-12">
                        <div className="border-t border-dashed border-[#d6d1c0] w-full" />
                    </div>

                    <TechnicalLog
                        items={photoQuests}
                        title="Visuals"
                        description="Capturing life through a recursive lens. Focused on geometry, light, and transient moments."
                    />
                </section>
            </main>
        </div>
    );
}
