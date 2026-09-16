import { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Compass, Shuffle, Palette } from 'lucide-react'; 
import { DESIGN_MOCKUPS } from '../../../data/mockupsData'; 
import PhoneMockup from '../../ui/PhoneMockup';
import MacbookMockUp from '../../ui/MacbookMockUp';

export default function GalleryImages() {
    const { hash } = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');
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
            className="relative w-full bg-slate-50/40 pt-24 pb-32 px-6 sm:px-12 md:px-16 lg:px-24 select-none border-t border-slate-100"
        >
            <div className="w-full max-w-8xl mx-auto flex flex-col gap-12">
                
                {/* INTESTAZIONE SEZIONE */}
                <div className="w-full flex flex-col items-start">
                    <span className="text-pink-700 font-black uppercase tracking-[0.4em] text-[12px] mb-3">
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
                            className={`text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                                activeIndex === index
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                                    : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                            {mockup.tabLabel}
                        </button>
                    ))}
                </div>

                {/* CONTENITORE CASO STUDIO */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentMockup.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full bg-white rounded-[3rem] p-8 sm:p-14 md:p-16 border border-slate-200/60 shadow-sm relative overflow-hidden"
                    >
                        
                        {/* COLONNA SINISTRA: CANVAS UNICO — un mockup alla volta, con toggle Desktop/Mobile */}
                        <div className="md:col-span-1 lg:col-span-7 bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden w-full min-h-[370px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col">

                            {/* ETICHETTA DINAMICA — cambia in base al device attivo */}
                            <div className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-wider pl-0.5 mb-6 shrink-0">
                                {activeDevice === 'desktop' ? (
                                    <>
                                        <Monitor className="w-3.5 h-3.5 text-pink-500" />
                                        Web Desktop Demo
                                    </>
                                ) : (
                                    <>
                                        <Smartphone className="w-3.5 h-3.5 text-pink-500" />
                                        Mobile App Demo
                                    </>
                                )}
                            </div>

                            {/* AREA MOCKUP */}
                            <div className="relative flex-1 w-full flex items-center justify-center">

                                <motion.div
                                    animate={{
                                        opacity: activeDevice === 'desktop' ? 1 : 0,
                                        scale: activeDevice === 'desktop' ? 1 : 0.96,
                                    }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className={`absolute inset-0 flex items-center justify-center ${
                                        activeDevice === 'desktop' ? 'pointer-events-auto' : 'pointer-events-none'
                                    }`}
                                >
                                    <MacbookMockUp className="w-full max-w-[640px]">
                                        <video
                                            key={currentMockup.desktopVideo}
                                            src={currentMockup.desktopVideo}
                                            autoPlay loop muted playsInline
                                            className="relative h-[23.4375em] w-full rounded-t-[0.625em] object-cover object-top"
                                        />
                                    </MacbookMockUp>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        opacity: activeDevice === 'mobile' ? 1 : 0,
                                        scale: activeDevice === 'mobile' ? 1 : 0.96,
                                    }}
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className={`absolute inset-0 flex items-center justify-center ${
                                        activeDevice === 'mobile' ? 'pointer-events-auto' : 'pointer-events-none'
                                    }`}
                                >
                                    <div className="h-[240px] sm:h-[280px] lg:h-[340px] w-fit mx-auto">
                                        <PhoneMockup>
                                            <video
                                                key={currentMockup.mobileVideo}
                                                src={currentMockup.mobileVideo}
                                                autoPlay loop muted playsInline
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </PhoneMockup>
                                    </div>
                                </motion.div>
                            </div>

                            {/* TOGGLE DEVICE */}
                            <div className="absolute bottom-6 right-6 z-30 flex gap-1.5 bg-white border border-slate-200 rounded-full p-1.5 shadow-md">
                                <button
                                    onClick={() => setActiveDevice('desktop')}
                                    aria-label="Mostra demo desktop"
                                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                                        activeDevice === 'desktop'
                                            ? 'bg-slate-900 text-white shadow-sm'
                                            : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    <Monitor className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setActiveDevice('mobile')}
                                    aria-label="Mostra demo mobile"
                                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                                        activeDevice === 'mobile'
                                            ? 'bg-slate-900 text-white shadow-sm'
                                            : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    <Smartphone className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* COLONNA DESTRA: PANNELLO SPECIFICHE UX/UI */}
                        <div className="md:col-span-1 lg:col-span-5 flex flex-col justify-between items-start text-left gap-10 py-4 w-full h-full">
                            
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
