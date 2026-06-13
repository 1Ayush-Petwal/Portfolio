import Image from 'next/image';

/**
 * Circular avatar in the retro identity. Renders a polished "AP" monogram by
 * default; pass `src` (e.g. "/avatar.jpg" once added to /public) to swap in a
 * real photo with no other changes.
 */
export default function Avatar({ src }: { src?: string }) {
    return (
        <div className="relative shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-retro-box overflow-hidden ring-1 ring-retro-border shadow-[4px_4px_0px_var(--color-retro-accent)] flex items-center justify-center">
                {src ? (
                    <Image
                        src={src}
                        alt="Ayush Petwal"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority
                    />
                ) : (
                    <span className="font-mono font-black text-white text-2xl md:text-3xl tracking-tighter select-none">
                        AP
                    </span>
                )}
            </div>
            {/* Active / available indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-retro-accent rounded-full border-2 border-retro-cream flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </span>
        </div>
    );
}
