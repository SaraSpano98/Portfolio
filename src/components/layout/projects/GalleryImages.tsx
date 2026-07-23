import { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Compass, Shuffle, Palette } from 'lucide-react'; 
import { DESIGN_MOCKUPS } from '../../../data/mockupsData'; 

export default function GalleryImages() {
    const { hash } = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const currentMockup = DESIGN_MOCKUPS[activeIndex];

    useEffect(() => {
        if (hash === '#design-showcase') {
            const element = document.getElementById('design-showcase');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [hash]);

    return (
        <section 
            id="design-showcase" 
            /* Ottimizzato pt e pb per dare continuità e distacco perfetto dal carosello sopra */
            className="relative w-full bg-slate-50/40 pt-24 pb-32 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none border-t border-slate-100"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
                
                {/* INTESTAZIONE SEZIONE */}
                <div className="w-full flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Visual & Creative
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none flex flex-row flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap">
                        <span>Design</span>
                        <span className="text-pink-500">showcase</span>
                    </h2>
                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>

                {/* NAVIGAZIONE CAROSELLO */}
                <div className="flex flex-wrap gap-2.5 border-b border-slate-200/60 pb-6 w-full mb-4">
                    {DESIGN_MOCKUPS.map((mockup, index) => (
                        <button
                            key={mockup.id}
                            onClick={() => setActiveIndex(index)}
                            className={`text-xs font-bold px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                                activeIndex === index
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                                    : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                            }`}
                        >
                            {mockup.tabLabel}
                        </button>
                    ))}
                </div>

                {/* CONTENITORE CASO STUDIO (Calibrati i padding interni p-8 sm:p-14 md:p-16) */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentMockup.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full bg-white rounded-[3rem] p-8 sm:p-14 md:p-16 border border-slate-200/60 shadow-sm relative overflow-hidden"
                    >
                        
                        {/* COLONNA SINISTRA: CANVAS CON VIDEO DESKTOP + MOBILE (Aggiunto padding extra e gap) */}
                        <div className="lg:col-span-7 bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 flex flex-col md:flex-row gap-10 items-center justify-center relative overflow-hidden w-full min-h-[480px]">
                            
                            {/* 1. INTERFACCIA VIDEO DESKTOP */}
                            <div className="flex flex-col gap-2.5 w-full md:w-[58%] shrink-0">
                                <div className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-wider pl-0.5">
                                    <Monitor className="w-3.5 h-3.5 text-pink-500" />
                                    Web Desktop Demo
                                </div>
                                <div className="w-full aspect-[16/10] bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden relative group/monitor">
                                    <video 
                                        key={currentMockup.desktopVideo}
                                        src={currentMockup.desktopVideo}
                                        autoPlay loop muted playsInline
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/5 group-hover/monitor:bg-transparent transition-colors pointer-events-none" />
                                </div>
                            </div>

                            {/* 2. INTERFACCIA VIDEO MOBILE */}
                            <div className="flex flex-col gap-2.5 w-[200px] md:w-[42%] shrink-0">
                                <div className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-wider pl-0.5">
                                    <Smartphone className="w-3.5 h-3.5 text-pink-500" />
                                    Mobile App Demo
                                </div>
                                <div className="w-full aspect-[9/18] bg-slate-950 rounded-[2.4rem] p-2.5 shadow-2xl border-2 border-slate-800 ring-1 ring-slate-900/5 overflow-hidden relative group/phone">
                                    <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden relative">
                                        <video 
                                            key={currentMockup.mobileVideo}
                                            src={currentMockup.mobileVideo}
                                            autoPlay loop muted playsInline
                                            className="w-full h-full object-cover object-top"
                                        />
                                        <div className="absolute inset-0 bg-slate-950/5 group-hover/phone:bg-transparent transition-colors pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLONNA DESTRA: PANNELLO SPECIFICHE UX/UI (Ottimizzato gap-10 e py-4) */}
                        <div className="lg:col-span-5 flex flex-col justify-between items-start text-left gap-10 py-4 w-full h-full">
                            
                            <div className="flex flex-col gap-2.5 w-full">
                                <span className="text-[10px] font-black uppercase tracking-widest text-pink-500">
                                    Analisi Visiva & UX
                                </span>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                                    {currentMockup.title}
                                </h3>
                                <div className="w-full h-[1px] bg-slate-100 mt-2" />
                            </div>

                            {/* Info UX/UI */}
                            <div className="flex flex-col gap-8 w-full flex-1">
                                
                                <div className="flex gap-4 items-start">
                                    <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shrink-0 mt-0.5">
                                        <Compass className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase">Obiettivi di Ricerca UX</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{currentMockup.uxObjectives}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shrink-0 mt-0.5">
                                        <Shuffle className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase">Architettura e Flussi UI</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{currentMockup.uiFlow}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shrink-0 mt-0.5">
                                        <Palette className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col gap-2.5 w-full">
                                        <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase">Brand Palette Cromatica</h4>
                                        <div className="flex gap-3 items-center mt-1">
                                            {currentMockup.colorPalette.map((color, idx) => (
                                                <div key={idx} className="flex flex-col items-center gap-1.5">

                                                    <div 
                                                        className="w-8 h-8 rounded-full border border-slate-200/80 shadow-inner transition-transform duration-300 hover:scale-110"
                                                        style={{ backgroundColor: color }}
                                                        title={color}
                                                    />
                                                    <span className="text-[9px] font-black uppercase tracking-tight text-slate-400 tabular-nums">{color}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

