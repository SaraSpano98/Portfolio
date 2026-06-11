import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';

interface StorySlide {
    id: string;
    tag: string;
    title: string;
    text: string;
    quote?: string;
    themeColor: string;
    glowStyle: string;
}

const storyData: StorySlide[] = [
    {
        id: "01",
        tag: "01 / Le Radici",
        title: "La scintilla: dove tutto è iniziato.",
        text: "Tutto è partito da un ricordo d'infanzia: la prima volta nell'azienda di mio zio. Non sapevo cosa fosse un PC o la tecnologia, ma mi fece giocare con un programma di disegno digitale: Paint. Quella scintilla è rimasta dentro di me per anni, crescendo in silenzio.",
        themeColor: "from-[#ec4899] to-[#8b5cf6]",
        glowStyle: "shadow-[0_0_60px_rgba(236,72,153,0.12)] hover:shadow-[0_0_80px_rgba(236,72,153,0.2)]"
    },
    {
        id: "02",
        tag: "02 / Il Conflitto",
        title: "Il rispetto del proprio potenziale.",
        text: "Ho attraversato molti settori lavorativi, ma nessuno mi appagava: sentivo che un ambiente statico ristagna, mentre il lavoro deve essere una passione che ci evolve. L'unica cosa che mi faceva sentire viva era l'unione tra logica e creazione.",
        quote: "Mi dicevano che dovevo scegliere una strada. Mi sono chiesta: perché devo dividermi per forza?",
        themeColor: "from-[#8b5cf6] to-[#3b82f6]",
        glowStyle: "shadow-[0_0_60px_rgba(139,92,246,0.12)] hover:shadow-[0_0_80px_rgba(139,92,246,0.2)]"
    },
    {
        id: "03",
        tag: "03 / La Visione",
        title: "Oltre la massa: fare un upgrade.",
        text: "Credo in un approccio dinamico. Oggi tutti parlano di Intelligenza Artificiale, Automazioni e Agenti AI. Copiare e riprodurre le sese cose è facile, ma chi si distingue realmente? La vera differenza la fanno la personalità e il ragionamento.",
        themeColor: "from-[#06b6d4] to-[#10b981]",
        glowStyle: "shadow-[0_0_50px_rgba(6,182,212,0.12)] hover:shadow-[0_0_70px_rgba(6,182,212,0.2)]"
    },
    {
        id: "04",
        tag: "04 / L'Identità",
        title: "La mia promessa di unicità.",
        text: "Ho affrontato molti ostacoli tra chi fossi e cosa volessi dare. Ho così tante passioni che è difficile metterle insieme, ma voglio essere unica a modo mio, distinguendomi tra tutti quanti. Io metto al centro la mia testa, la mia filosofia e il mio codice.",
        themeColor: "from-[#f59e0b] to-[#e11d48]",
        glowStyle: "shadow-[0_0_50px_rgba(245,158,11,0.12)] hover:shadow-[0_0_70px_rgba(245,158,11,0.2)]"
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
        <>
            {/* FIX CRITICO: pt-44 lg:pt-52 e items-center centralizzano tutto e creano il vuoto perfetto sotto l'header */}
            <section className="w-full bg-white text-slate-900 px-24 pt-44 lg:pt-52 pb-32 select-none overflow-hidden relative flex flex-col items-center justify-start">

                {/* 1. TITOLO PRINCIPALE - Centrato perfettamente a schermo tramite justify-center */}
                <div className="w-full max-w-5xl flex justify-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black uppercase tracking-tighter text-slate-950 flex items-center justify-center gap-5 leading-none text-center">
                        Ciao, sono Sara!
                        <span className="inline-block w-16 h-16 bg-slate-50 p-2 rounded-2xl border border-slate-200/60 shadow-sm" style={{ verticalAlign: 'middle' }}>
                            {iconData && <Player ref={handRef} icon={iconData} size={44} onComplete={() => handRef.current?.playFromBeginning()} />}
                        </span>
                    </h1>
                </div>

                {/* 2. CONTENITORE PORTALE CENTRALE CON PERSPECTIVE ELEVATA */}
                <div className="w-full flex flex-col items-center justify-center [perspective:1500px] relative min-h-[440px] max-w-5xl mx-auto">

                    {/* IL RETTANGOLO MONUMENTALE ORIZZONTALE */}
                    <div className="relative w-full max-w-[1000px] h-[420px] shrink-0 group/card">
                        {storyData.map((slide, index) => {
                            const offset = index - activeIndex;
                            const isActive = index === activeIndex;

                            const rotateY = isActive ? 0 : offset * -15;
                            const rotateX = isActive ? 0 : 4;
                            const translateZ = isActive ? 0 : -120;
                            const visibilityClass = isActive
                                ? 'opacity-100 scale-100 z-20 pointer-events-auto block'
                                : 'opacity-0 scale-98 pointer-events-none z-0 hidden';

                            return (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 rounded-[3rem] bg-gradient-to-b ${slide.themeColor} ${slide.glowStyle} p-[1.5px] transition-all duration-1000 ease-out transform ${visibilityClass} hover:-translate-y-1`}
                                    style={{
                                        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
                                        transformStyle: 'preserve-3d',
                                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <div className="w-full h-full bg-white/95 rounded-[2.9rem] backdrop-blur-xl flex flex-col items-center justify-between p-10 py-12 border border-white relative overflow-hidden text-center shadow-inner">

                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                                        <span className="absolute text-[18rem] font-black text-slate-900/[0.012] tracking-tighter select-none -bottom-20 right-10 pointer-events-none z-0">
                                            {slide.id}
                                        </span>

                                        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full gap-4">

                                            {/* Icona + Tag */}
                                            <div className="flex flex-col items-center gap-2.5 shrink-0">
                                                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-2xl shadow-sm transition-transform duration-500 group-hover/card:scale-105">
                                                    {slide.id === "01" && "🎨"}
                                                    {slide.id === "02" && "💻"}
                                                    {slide.id === "03" && "🚀"}
                                                    {slide.id === "04" && "⚡"}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ec4899] bg-[#ec4899]/10 px-4 py-1 rounded-full border border-[#ec4899]/20">
                                                    {slide.tag}
                                                </span>
                                            </div>

                                            <h2 className="text-slate-950 font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none shrink-0">
                                                {slide.title}
                                            </h2>

                                            <p className="text-slate-500 text-[16px] md:text-lg font-light leading-relaxed max-w-[800px] flex-grow pt-1 px-4">
                                                {slide.text}
                                            </p>

                                            {slide.quote && (
                                                <div className="border-t border-slate-100 pt-3.5 w-full max-w-[640px] shrink-0">
                                                    <p className="text-slate-700 font-semibold italic text-[15px] leading-relaxed">
                                                        "{slide.quote}"
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* 3. TIMELINE ORIZZONTALE - Centrata sotto la card monumentale */}
                    <div className="flex justify-center gap-4 mt-12 max-w-[460px] w-full z-20 relative px-2">
                        {storyData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="h-[3px] flex-1 bg-slate-200 rounded-full overflow-hidden relative cursor-pointer focus:outline-none"
                                aria-label={`Vai alla slide ${index + 1}`}
                            >
                                <div
                                    className={`h-full bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] ${index === activeIndex ? 'w-full transition-all duration-[6000ms] ease-linear' : 'w-0 duration-0'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}