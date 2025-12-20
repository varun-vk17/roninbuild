export function OurWork() {
    const works = [
        { id: 1, image: '/s1.png', alt: 'Veeyal Website Design 1' },
        { id: 2, image: '/s2.png', alt: 'Veeyal Website Design 2' },
        { id: 3, image: '/s3.png', alt: 'Veeyal Website Design 3' },
        { id: 4, image: '/s4.png', alt: 'Veeyal Website Design 4' },
        { id: 5, image: '/s5.png', alt: 'Veeyal Website Design 5' },
    ];

    return (
        <div className="bg-black min-h-screen w-full">
            {/* Hero Section */}
            <section className="bg-black w-full py-20 sm:py-32 px-6 sm:px-8 lg:px-12 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6B5FFF]/25 to-transparent blur-3xl" />
                </div>

                <div className="max-w-[1400px] mx-auto relative">
                    {/* Heading */}
                    <div className="text-center mb-16 sm:mb-20">
                        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight">
                            Website design for Veeyal
                        </h1>
                    </div>

                    {/* Work Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {works.map((work) => (
                            <div
                                key={work.id}
                                className="bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-lg rounded-[36px] p-6 sm:p-8 border border-white/10 hover:border-[#6B5FFF]/40 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
                            >
                                {/* Bottom glow effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
                                <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#6B5FFF]/20 via-[#6B5FFF]/5 to-transparent blur-xl group-hover:from-[#6B5FFF]/30 transition-colors duration-300" aria-hidden="true" />

                                {/* Image */}
                                <div className="relative z-10 rounded-[24px] overflow-hidden bg-black/20">
                                    <img
                                        src={work.image}
                                        alt={work.alt}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
