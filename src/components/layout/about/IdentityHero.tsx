import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


interface AboutHeroProps {
    revealVariant: Variants;
}

interface StorySlide {
    id: string;
    tag: string;
    title: string;
    text: string;
    quote?: string;
    themeColor: string;
    glowStyle: string;
    iconPath: string;
}

const storyData: StorySlide[] = [
    {
        id: "01",
        tag: "01 / Le Radici",
        title: "La scintilla: dove tutto è iniziato.",
        text: "Tutto è partito da un ricordo d'infanzia: la prima volta nell'azienda di mio zio. Non sapevo cosa fosse un PC o la tecnologia, ma mi fece giocare con un programma di disegno digitale: Paint. Quella scintilla è rimasta dentro di me per anni, crescendo in silenzio. Inoltre, ho sempre avuto una passione per l'arte e la creatività, ma non sapevo come incanalarla. La tecnologia è diventata il mio mezzo per esprimere quella creatività in modi che non avrei mai immaginato.",
        quote: "Non è mai troppo tardi per splendere. A volte, seguire un percorso diverso è l'inizio di qualcosa di straordinario.",
        themeColor: "from-[#ec4899] to-[#8b5cf6]",
        glowStyle: "shadow-[0_0_60px_rgba(236,72,153,0.12)] hover:shadow-[0_0_80px_rgba(236,72,153,0.2)]",
        iconPath: "/assets/icons/pen.json"
    },
    {
        id: "02",
        tag: "02 / Il Conflitto",
        title: "Il rispetto del proprio potenziale.",
        text: "Ho attraversato molti settori lavorativi, ma nessuno mi appagava: sentivo che un ambiente statico ristagna, mentre il lavoro deve essere una passione che ci evolve. L'unica cosa che mi faceva sentire viva era l'unione tra logica e creazione. E soprattutto siamo il nostro lavoro o siamo di più? Dobbiamo seguire la massa? No! Dobbiamo seguire il cosidetto percorso di studi lineare? No! I percorsi diversi, portano cose nuove, non gli stessi. ",
        quote: "Mi dicevano che dovevo scegliere una strada. Mi sono chiesta: perché devo dividermi per forza? Conta essere sè stessi, non essere un'etichetta.",
        themeColor: "from-[#8b5cf6] to-[#3b82f6]",
        glowStyle: "shadow-[0_0_60px_rgba(139,92,246,0.12)] hover:shadow-[0_0_80px_rgba(139,92,246,0.2)]",
        iconPath: "/assets/icons/road.json"
    },
    {
        id: "03",
        tag: "03 / La Visione",
        title: "Oltre la massa: fare un upgrade.",
        text: "Credo in un approccio dinamico. Oggi tutti parlano di Intelligenza Artificiale, Automazioni e Agenti AI, parlandone: certo, è il nuovo upgrade della società. Gli strumenti odierni sono straordinariamente potenti. Copiare e riprodurre le stesse cose è facile, ma chi si distingue realmente? La vera differenza la fanno: la personalità, il ragionamento e la capacità di creare qualcosa di unico. La vera vittoria è sapersi distinguere rimanendo fedeli a sè stessi.",
        quote: "Il futuro è di chi sa evolversi, non di chi si adatta passivamente, dando il proprio contributo, al dì là di attestati e diplomi.",
        themeColor: "from-[#06b6d4] to-[#10b981]",
        glowStyle: "shadow-[0_0_50px_rgba(6,182,212,0.12)] hover:shadow-[0_0_70px_rgba(6,182,212,0.2)]",
        iconPath: "/assets/icons/vision.json"
    },
    {
        id: "04",
        tag: "04 / L'Identità",
        title: "La mia promessa di unicità.",
        text: "Ho affrontato molti ostacoli tra chi fossi e cosa volessi dare. Ho così tante passioni che è difficile metterle insieme, ma voglio essere unica a modo mio, distinguendomi tra tutti quanti. Io metto al centro la mia testa, la mia filosofia, il mio codice e non solo! Voglio creare un ecosistema digitale che rifletta chi sono, con un design unico e un codice che sia una vera espressione di me stessa. Non voglio essere solo una copia, ma un'originale che lascia il segno.",
        quote: "La curiosità è la chiave per scoprire nuove strade. Non si deve mai smettere di esplorare, perché è lì che si nascondono le vere opportunità.",
        themeColor: "from-[#f59e0b] to-[#e11d48]",
        glowStyle: "shadow-[0_0_50px_rgba(245,158,11,0.12)] hover:shadow-[0_0_70px_rgba(245,158,11,0.2)]",
        iconPath: "/assets/icons/identity.json"
    }
];

{/* COMPONENTE ISOLATO PER ICONE NELLE CARDS */ }
function CardIcon({ path, size = 30 }: { path: string; size?: number }) {
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!iconRef.current) return;
        const anim = lottie.loadAnimation({
            container: iconRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: path,
        });
        return () => anim.destroy();
    }, [path]);

    return <div ref={iconRef} className="flex items-center justify-center" style={{ width: size, height: size }} />;
}

export default function IdentityHero({ revealVariant }: AboutHeroProps): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);

    {/* GESTIONE ICONA MANO IN ALTO */ }
    useEffect(() => {
        if (!containerRef.current) return;
        const animation = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/icons/hand.json',
        });
        return () => animation.destroy();
    }, []);


    return (

        <>
            <section className="w-full bg-white text-slate-900 px-6 md:px-12 lg:px-24 pt-32 lg:pt-36 pb-28 select-none overflow-hidden relative">
                <div className="w-full max-w-3xl mx-auto mb-20 flex flex-col items-center text-center">
                    
                    <div className="overflow-hidden mb-4">
                                <motion.p
                                    initial="hidden" animate="visible" variants={revealVariant}
                                    className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] flex items-center gap-3 mb-3"
                                >
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                                    About Me
                                </motion.p>
                            </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[68px] font-black uppercase tracking-tighter text-slate-950 flex flex-wrap items-center justify-center gap-5 leading-none mb-6">
                        Ciao, <span className="text-pink-500">sono Sara!</span>

                        <div className="inline-block">
                            <span className="w-16 h-16 rounded-2xl border border-pink-500 shadow-sm flex items-center justify-center bg-pink-400/10" style={{ verticalAlign: 'middle' }}>
                                <div ref={containerRef} className="w-[44px] h-[44px]" />
                            </span>
                        </div>
                    </h1>

                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl mt-4">
                        Dietro ogni linea di codice c'è un'evoluzione. Questo è un piccolo viaggio interattivo attraverso <span className="text-slate-900 font-medium">le tappe, le sfide e la visione</span> che hanno plasmato il mio approccio alla programmazione. Il mio non è stato un percorso lineare, ma un intreccio di strade difficili che poi mi hanno portato a mete grandiosamente inaspettate.
                    </p>
                </div>

                {/* 2. GRIGLIA FLUIDA */}
                <div className="w-full max-w-full mx-auto mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-16 lg:gap-y-20 w-full">
                        {storyData.map((slide) => {
                            return (
                                <motion.div
                                    key={slide.id}
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                    className={`relative rounded-[2rem] bg-gradient-to-b ${slide.themeColor} ${slide.glowStyle} p-[1.5px] transition-all duration-500 ease-out group/card cursor-pointer w-full`}
                                >
                                    {/* Contenitore Interno */}
                                    <div className="w-full h-full bg-white/95 rounded-[1.9rem] backdrop-blur-xl flex flex-col items-start justify-between p-8 sm:p-10 border border-white relative overflow-hidden text-left shadow-sm">

                                        {/* Pattern Grid di Sfondo */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                                        {/* ID Gigante sullo sfondo */}
                                        <span className="absolute text-[11rem] font-black text-slate-900/[0.015] tracking-tighter select-none -bottom-12 -right-4 pointer-events-none z-0 leading-none">
                                            {slide.id}
                                        </span>

                                        {/* Contenuto Principale */}
                                        <div className="relative z-10 flex flex-col items-start justify-start h-full w-full gap-5">

                                            {/* Gruppo Icona Animata + Tag */}
                                            <div className="flex items-center gap-4 shrink-0 w-full relative z-20">
                                                <div className="w-12 h-12 aspect-square rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0 transition-transform duration-500 group-hover/card:scale-105">
                                                    <div className="w-7 h-7 flex items-center justify-center">
                                                        <CardIcon path={slide.iconPath} size={30} />
                                                    </div>
                                                </div>

                                                <span className="text-[12px] font-black uppercase tracking-[0.25em] text-[#ec4899] bg-[#ec4899]/10 px-4 py-1.5 rounded-full border border-[#ec4899]/20">
                                                    {slide.tag}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.15] tracking-tighter w-full">
                                                {slide.title}
                                            </h3>

                                            <p className="text-slate-500 text-base leading-relaxed font-medium">
                                                {slide.text}
                                            </p>
                                        </div>

                                        {slide.quote && (
                                            <div className="relative z-10 border-t border-slate-100 pt-5 w-full mt-6 shrink-0">
                                                <p className="text-slate-700 font-semibold italic text-sm sm:text-[15px] leading-relaxed">
                                                    "{slide.quote}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );

}