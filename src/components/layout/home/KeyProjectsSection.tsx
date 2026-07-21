import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, ExternalLink, ArrowRight } from 'lucide-react';
import ClickSpark from '../../ui/ClickSpark';


const PROJECTS_DATA = [
    {
        id: 1,
        counter: "01 / 05",
        title: "SoulMatrix Web App",
        description: "Applicazione web interattiva per il calcolo di mappe numerologiche. Gestisce algoritmi complessi per generare grafici personalizzati su talenti, karma e relazioni, con un'interfaccia utente immersiva e responsive.",
        tags: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "TS"],
        image: "/images/dashboard-analytics.png",
        demoUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        id: 2,
        counter: "02 / 05",
        title: "E-commerce Engine v.02",
        description: "Un sistema di vendita completo e scalabile ad altissime prestazioni. Include l'integrazione nativa con Stripe, carrello asincrono e pannello di gestione dinamica dei dati inventario.",
        tags: ["NEXT.JS", "STRIPE", "NODE.JS"],
        image: "/images/project2.png",
        demoUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        id: 3,
        counter: "03 / 05",
        title: "Sistemi Creativi & UI Kit",
        description: "Design system modulare e atomico sviluppato per uniformare l'esperienza utente su piattaforme enterprise, con focus millimetrico su accessibilità, micro-interazioni e teoria dei colori.",
        tags: ["UI/UX", "FIGMA", "TAILWIND"],
        image: "/images/project3.png",
        demoUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        id: 4,
        counter: "04 / 05",
        title: "Analytics Dashboard",
        description: "Pannello di controllo ad alte prestazioni con grafici vettoriali e sistemi di filtraggio dati in tempo reale. Ottimizzato per flussi di dati massivi e caricamenti istantanei.",
        tags: ["VITE", "RECHARTS", "TAILWIND"],
        image: "/images/project4.png",
        demoUrl: "https://example.com",
        codeUrl: "https://github.com"
    },
    {
        id: 5,
        counter: "05 / 05",
        title: "App",
        description: "App veloci, efficienti e durature.",
        tags: ["React", "TS", "React router", "Node Red"],
        image: "/images/project5.png",
        demoUrl: "https://example.com",
        codeUrl: "https://github.com"
    }
];

export default function KeyProjectsSection() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const currentProject = PROJECTS_DATA[activeIndex];

    return (
        <section className="relative w-full bg-white pt-4 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
            <div className="w-full flex flex-col items-start text-start">

                {/* INTESTAZIONE SEZIONE */}
                <div className="w-full mb-14 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        PROJECTS & WORKS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                        Progetti in <span className="text-pink-500">evidenza</span>
                    </h2>
                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />

                    <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl leading-relaxed mt-8 transition-all duration-300">
                        Idee creative trasformate in prodotti digitali reali. Esplora i casi studio che uniscono estetica moderna, architettura tecnica solida e micro-interazioni curate nel dettaglio.
                    </p>
                </div>

                {/* CONTENITORE VETRINA (SHOWCASE COMPLETO) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 w-full items-center bg-slate-50/60 rounded-[3rem] p-6 sm:p-10 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">

                    {/* SOTTO-GRIGLIA SINISTRA (COLONNA INFO PROGETTO) */}
                    <div className="lg:col-span-5 flex flex-col items-start w-full min-h-[380px] justify-between relative z-20 pr-0 lg:pr-6">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject.id}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 15 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="flex flex-col gap-4 w-full"
                            >
                                {/* CONTATORE (01 / 05) */}
                                <div className="flex items-center gap-4 w-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-500 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full w-fit shrink-0">
                                        {currentProject.counter}
                                    </span>
                                    <div className="h-[1px] bg-slate-200/80 flex-1 hidden sm:block" />
                                </div>

                                {/* TITOLO PROGETTO */}
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter capitalize mt-1">
                                    {currentProject.title}
                                </h3>

                                {/* DESCRIZIONE */}
                                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-[420px]">
                                    {currentProject.description}
                                </p>

                                {/* TAG TECNOLOGIE UTILIZZATE */}
                                <div className="flex flex-col gap-2 mt-2">
                                    <span className="text-[13px] font-black uppercase tracking-widest text-pink-700">
                                        TECNOLOGIE UTILIZZATE
                                    </span>
                                    <div className="flex gap-1.5 flex-wrap">
                                        {currentProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] sm:text-[11px] font-bold text-pink-500 border border-slate-300/80 px-2.5 mt-4 py-0.5 rounded-md bg-white shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* PULSANTIERA AZIONI - Forzata la larghezza auto per tenerli affiancati e compatti */}
                        <div className="flex flex-row flex-wrap gap-3 mt-8 w-full justify-start items-center">
                            <div className="w-fit">
                                <ClickSpark>
                                    <a
                                        href={currentProject.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-pink-500 hover:bg-pink-700 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Demo Live
                                    </a>
                                </ClickSpark>
                            </div>

                            <div className="w-fit">
                                <a
                                    href={currentProject.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-slate-200 hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-300 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap"
                                >
                                    <Code2 className="w-3.5 h-3.5" />
                                    Codice
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* SOTTO-GRIGLIA DESTRA (MAIN PREVIEW + MINIATURE) */}
                    <div className="lg:col-span-7 flex flex-col gap-6 w-full relative z-20">

                        {/* ANTEPRIMA GRANDE */}
                        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-lg flex items-center justify-center p-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentProject.id}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full relative flex items-center justify-center"
                                >
                                    <img
                                        src={currentProject.image}
                                        className="w-full h-full object-contain rounded-2xl z-10"
                                        alt=""
                                        onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-900 flex items-center justify-center text-slate-700 font-bold text-xs uppercase tracking-widest">
                                        {currentProject.title} Preview
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* SELETTORE MINIATURE CON FALLBACK ANTI-ERRORE VISIVO */}
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none w-full justify-start md:justify-between items-center snap-x">
                                {PROJECTS_DATA.map((proj, idx) => (
                                    <button
                                        key={proj.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`relative h-16 w-20 sm:h-20 sm:w-24 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer snap-center bg-slate-900 flex items-center justify-center text-center p-2 ${activeIndex === idx
                                            ? "border-pink-500 scale-105 shadow-md"
                                            : "border-slate-200 opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={proj.image}
                                            className="absolute inset-0 w-full h-full object-cover z-10"
                                            alt=""
                                            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                                        />
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-tight leading-tight line-clamp-2 relative z-0">
                                            {proj.title.split(' ')[0]}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* INDICE DI PROGRESSO VISIVO DELLO SLIDER (LA LINEA IN BASSO ALLO SCREEN) */}
                            <div className="w-full h-[3px] bg-slate-200/60 rounded-full relative overflow-hidden hidden sm:block">
                                <motion.div
                                    className="absolute top-0 bottom-0 left-0 bg-pink-700 rounded-full"
                                    initial={false}
                                    animate={{
                                        width: `${((activeIndex + 1) / PROJECTS_DATA.length) * 100}%`
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTONE VEDI TUTTI I PROGETTI (SUL FONDO CENTRATO) */}

                <div className="w-full flex flex-col items-center justify-center text-center mt-16 gap-4">
                    <ClickSpark>
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white text-xs font-black uppercase tracking-[0.15em] rounded-xl shadow-lg transition-colors flex items-center gap-3 cursor-pointer mx-auto"
                        >
                            Vedi Tutti i Progetti
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </ClickSpark>

                    <span className="text-slate-900 text-xs font-bold tracking-wider uppercase opacity-80">
                        Naviga tra i progetti cliccando sulle <span className="text-pink-500 font-black">anteprime</span> delle schede
                    </span>

                </div>
            </div>
        </section>
    );
}

