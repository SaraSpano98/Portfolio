import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';

interface StorySlide {
    id: string;
    tag: string;
    title: string;
    text: string;
    quote?: string;
    themeColor: string; // Colore per l'effetto neon della card attiva
    glowStyle: string;  // Ombra neon personalizzata
}

const storyData: StorySlide[] = [
    {
        id: "01",
        tag: "01 / Le Radici",
        title: "La scintilla: dove tutto è iniziato.",
        text: "Tutto è partito da un ricordo d'infanzia: la prima volta nell'azienda di mio zio. Non sapevo cosa fosse un PC o la tecnologia, ma mi fece giocare con un programma di disegno digitale: Paint. Quella scintilla è rimasta dentro di me per anni, crescendo in silenzio.",
        themeColor: "from-[#ec4899] to-[#8b5cf6]",
        glowStyle: "shadow-[0_0_50px_rgba(236,72,153,0.3)]"
    },
    {
        id: "02",
        tag: "02 / Il Conflitto",
        title: "Il rispetto del proprio potenziale.",
        text: "Ho attraversato molti settori lavorativi, ma nessuno mi appagava: sentivo che un ambiente statico ristagna, mentre il lavoro deve essere una passione che ci evolve. L'unica cosa che mi faceva sentire viva era l'unione tra logica e creazione.",
        quote: "Mi dicevano che dovevo scegliere una strada. Mi sono chiesta: perché devo dividermi per forza?",
        themeColor: "from-[#8b5cf6] to-[#3b82f6]",
        glowStyle: "shadow-[0_0_50px_rgba(139,92,246,0.3)]"
    },
    {
        id: "03",
        tag: "03 / La Visione",
        title: "Oltre la massa: fare un upgrade.",
        text: "Credo in un approccio dinamico. Oggi tutti parlano di Intelligenza Artificiale, Automazioni e Agenti AI. Copiare e riprodurre le stesse cose è facile, ma chi si distingue realmente? La vera differenza la fanno la personalità e il ragionamento.",
        themeColor: "from-[#06b6d4] to-[#10b981]",
        glowStyle: "shadow-[0_0_50px_rgba(6,182,212,0.3)]"
    },
    {
        id: "04",
        tag: "04 / L'Identità",
        title: "La mia promessa di unicità.",
        text: "Ho affrontato molti ostacoli tra chi fossi e cosa volessi dare. Ho così tante passioni che è difficile metterle insieme, ma voglio essere unica a modo mio, distinguendomi tra tutti quanti. Io metto al centro la mia testa, la mia filosofia e il mio codice.",
        themeColor: "from-[#f59e0b] to-[#e11d48]",
        glowStyle: "shadow-[0_0_50px_rgba(245,158,11,0.3)]"
    }
];

export default function IdentityHero(): React.ReactElement {
    const handRef = useRef<Player>(null);
    const [iconData, setIconData] = useState<object | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        fetch('/assets/icons/hand.json')
            .then((response) => response.json())
            .then((data) => setIconData(data))
            .catch((error) => console.error("Errore icona:", error));
    }, []);

    useEffect(() => {
        if (iconData && handRef.current) {
            handRef.current.play();
        }
    }, [iconData]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % storyData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full min-h-screen bg-[#070708] text-white px-12 md:px-24 pt-36 pb-20 select-none overflow-hidden relative">
            
            {/* BACKGROUND GLOWS ASTRATTI DI SCONTRO */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

            {/* TITOLO PRINCIPALE */}
            <h1 className="mb-24 text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 md:text-7xl flex items-center gap-6 z-10 relative">
                Ciao, sono Sara! 
                <span className="inline-block w-16 h-16 bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-white/10" style={{ verticalAlign: 'middle' }}>
                    {iconData && <Player ref={handRef} icon={iconData} size={48} onComplete={() => handRef.current?.playFromBeginning()} />}
                </span>
            </h1>

            {/* GRIGLIA IMMERSIVA CYBERPUNK/MINIMAL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full max-w-7xl mx-auto z-10 relative">
                
                {/* COLONNA SINISTRA: TYPOGRAPHY MONUMENTALE (Cambia con fade elegante) */}
                <div className="lg:col-span-6 h-[400px] relative flex flex-col justify-center">
                    {storyData.map((slide, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform
                                    ${isActive 
                                        ? 'opacity-100 translate-x-0 pointer-events-auto scale-100 filter-none' 
                                        : 'opacity-0 -translate-x-12 pointer-events-none scale-95 blur-sm'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-sm font-bold uppercase tracking-widest text-[#ec4899] bg-[#ec4899]/10 px-3 py-1 rounded-full border border-[#ec4899]/20">
                                        {slide.tag}
                                    </span>
                                </div>
                                <h2 className="text-white font-black text-4xl mb-6 tracking-tight leading-none md:text-5xl">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                                    {slide.text}
                                </p>
                                {slide.quote && (
                                    <div className="border-l-4 border-[#ec4899] pl-6 my-6 bg-white/[0.02] backdrop-blur-sm py-4 pr-4 rounded-r-xl border-t border-b border-r border-white/5">
                                        <p className="text-gray-200 font-medium italic text-xl leading-relaxed">
                                            "{slide.quote}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* COLONNA DESTRA: L'OVALE PORTALE INTERATTIVO IN 3D */}
                <div className="lg:col-span-6 h-[500px] flex justify-center items-center [perspective:1500px]">
                    <div className="relative w-72 h-[450px] transition-all duration-1000 ease-out">
                        {storyData.map((slide, index) => {
                            const offset = index - activeIndex;
                            const isActive = index === activeIndex;

                            // Calcolo per l'effetto rotazione e profondità sbalorditivo
                            const rotateY = isActive ? 0 : offset * -45;
                            const rotateX = isActive ? 0 : 15;
                            const translateZ = isActive ? 100 : -250;
                            const opacity = isActive ? 'opacity-100' : 'opacity-10 blur-md pointer-events-none';

                            return (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 rounded-[12rem] bg-gradient-to-b ${slide.themeColor} ${slide.glowStyle} p-[2px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${opacity}`}
                                    style={{
                                        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                                                       {/* Superficie interna effetto vetro scuro futuristico (Glassmorphism) */}
                                    <div className="w-full h-full bg-[#0d0d11]/90 rounded-[12rem] backdrop-blur-xl flex flex-col items-center justify-center p-8 border border-white/10 relative overflow-hidden group">
                                        
                                        {/* Linee di background cybertech */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                                        
                                        {/* Numero gigante neon riflesso sullo sfondo dello specchio */}
                                        <span className="absolute text-[13rem] font-black text-white/[0.02] tracking-tighter select-none bottom-4 pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">
                                            {slide.id}
                                        </span>

                                        {/* Elemento centrale specchiato lucido */}
                                        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-inner backdrop-blur-md relative z-10 animate-pulse">
                                            {slide.id === "01" && "🎨"}
                                            {slide.id === "02" && "💻"}
                                            {slide.id === "03" && "🚀"}
                                            {slide.id === "04" && "⚡"}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* LINEA DI TIMING MINIMALISTA PREMIUM IN BASSO */}
                <div className="flex justify-center gap-4 mt-16 max-w-sm mx-auto w-full">
                    {storyData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="h-[3px] flex-1 bg-white/10 rounded-full overflow-hidden relative cursor-pointer group focus:outline-none"
                        >
                            <div 
                                className={`h-full bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] transition-all ${
                                    index === activeIndex ? 'w-full duration-[6000ms] ease-linear' : 'w-0 duration-0'
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}