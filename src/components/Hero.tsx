import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO from "../lib/seo";
import Pattern from "../styles/Pattern";
import InfiniteTicker from "../components/InfiniteTicker";

export default function Home() {
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null); // 'designer', 'coder' o null
    const [windowSize, setWindowSize] = useState({ w: 1200, h: 800 });

    // Gestione dello scroll all'avvio della pagina
    useEffect(() => {
        const timer = window.setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
        return () => window.clearTimeout(timer);
    }, [location.pathname]);

    // Gestione del ridimensionamento dello schermo
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize({ w: window.innerWidth, h: window.innerHeight });
            const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Calcolo del colore di sfondo dinamico per la Hero
    const getBgColor = () => {
        if (hoveredLink === 'designer') return '#fff5f7'; 
        if (hoveredLink === 'coder') return '#0f172a';    
        return '#ffffff';                                  
    };

    return (
        <>
            <SEO title="Full-stack Developer & Designer" description="Sviluppo integrale di prodotti digitali: dalla visione creativa alla logica strutturale." path="/" />

            {/* ========================================================================= */}
            {/* 1. HERO SECTION INTEGRATA CON INTRO ANIMATION */}
            {/* ========================================================================= */}
            <motion.section
                animate={{ backgroundColor: getBgColor() }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-screen overflow-hidden select-none transition-colors duration-500 z-10"
            >
                {/* SFONDO PATTERN AMBIENTALE */}
                <div 
                    className="absolute inset-0 z-0 opacity-12 pointer-events-none"
                    style={{ opacity: hoveredLink === 'coder' ? 0.05 : 0.12 }}
                >
                    <Pattern />
                </div>

                {/* STRUTTURA TESTI LATERALI INTERATTIVI */}
                <div className="absolute inset-0 z-30 grid grid-cols-2 w-full h-full pointer-events-none">
                    
                    {/* LATO SINISTRO: DESIGNER */}
                    <div className="relative w-full h-full px-6 sm:px-12 max-w-6xl mx-auto flex items-center justify-start">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="pointer-events-auto flex flex-col items-start group"
                        >
                            <Link 
                                to="/designer" 
                                onMouseEnter={() => setHoveredLink('designer')}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative block outline-none cursor-pointer"
                            >
                                <motion.span
                                    animate={{ 
                                        color: hoveredLink === 'coder' ? '#475569' : (hoveredLink === 'designer' ? '#ec4899' : '#0f172a'),
                                        opacity: hoveredLink === 'designer' ? 1 : (hoveredLink === 'coder' ? 0.6 : [0.75, 0.95, 0.75]),
                                        textShadow: hoveredLink === 'designer' 
                                            ? '0 0 25px rgba(236,72,153,0.5)' 
                                            : '0 0 8px rgba(236,72,153,0.15)'
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block text-4xl sm:text-5xl md:text-7xl font-black lowercase leading-none"
                                >
                                    designer
                                </motion.span>
                                <div className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-pink-500 group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                            
                            <motion.h5 
                                animate={{ color: hoveredLink === 'coder' ? '#64748b' : '#475569' }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed border-l-4 border-pink-500 pl-4 sm:pl-5 italic transition-colors"
                            >
                                Product designer specializzata in UI design, sistemi creativi e colori.
                            </motion.h5>

                            <motion.span 
                                animate={{ color: hoveredLink === 'coder' ? '#64748b' : (hoveredLink === 'designer' ? '#ec4899' : '#94a3b8') }}
                                className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-300 pl-5"
                            >
                                esplora progetti
                                <motion.span 
                                    animate={hoveredLink === 'designer' ? { x: 5 } : { x: 0 }}
                                    transition={hoveredLink === 'designer' ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* LATO DESTRO: CODER */}
                    <div className="relative w-full h-full px-6 sm:px-12 max-w-6xl mx-auto flex items-center justify-end">
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="pointer-events-auto text-right flex flex-col items-end group"
                        >
                            <Link 
                                to="/coder" 
                                onMouseEnter={() => setHoveredLink('coder')}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative block outline-none cursor-pointer"
                            >
                                <motion.span
                                    animate={{ 
                                        color: hoveredLink === 'coder' ? '#38bdf8' : (hoveredLink === 'designer' ? '#475569' : '#0f172a'),
                                        opacity: hoveredLink === 'coder' ? 1 : (hoveredLink === 'designer' ? 0.5 : [0.75, 0.95, 0.75]),
                                        textShadow: hoveredLink === 'coder' 
                                            ? '0 0 30px rgba(56,189,248,0.6)' 
                                            : '0 0 8px rgba(14,165,233,0.15)'
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block text-4xl sm:text-5xl md:text-7xl font-black lowercase leading-none"
                                >
                                    &lt;coder&gt;
                                </motion.span>
                                <div className="absolute bottom-[-6px] right-0 w-0 h-[3px] bg-sky-400 group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                            
                            <motion.h5 
                                animate={{ color: hoveredLink === 'coder' ? '#94a3b8' : '#475569' }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed border-r-4 border-pink-500 pr-4 sm:pr-5 italic transition-colors"
                            >
                                Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
                            </motion.h5>

                            <motion.span 
                                animate={{ color: hoveredLink === 'coder' ? '#38bdf8' : (hoveredLink === 'designer' ? '#475569' : '#94a3b8') }}
                                className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-300 pr-5"
                            >
                                <motion.span 
                                    animate={hoveredLink === 'coder' ? { x: -5 } : { x: [0, -4, 0] }}
                                    transition={hoveredLink === 'coder' ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    ←
                                </motion.span>
                                vedi codice
                            </motion.span>
                        </motion.div>
                    </div>

                </div>

                {/* SEZIONE IMMAGINI CENTRALI REATTIVE CON EMERGENZA DAL BASSO ALL'AVVIO */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none pt-[5%]">
                    <motion.div 
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="relative h-[55%] sm:h-[70%] md:h-[75%] aspect-[4/5]"
                    >
                        <motion.img
                            src="/images/designer.png"
                            animate={{ 
                                opacity: hoveredLink === 'coder' ? 0.2 : 1,
                                filter: hoveredLink === 'designer' ? 'brightness(1.08) contrast(1.02)' : 'brightness(1) contrast(1)'
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ clipPath: "inset(0 50% 0 0)" }}
                            className="absolute top-0 left-1/2 w-full h-full object-contain -translate-x-1/2"
                            alt="Designer Half"
                        />
                        
                        <motion.img
                            src="/images/coder.png"
                            animate={{ 
                                opacity: hoveredLink === 'designer' ? 0.15 : 1,
                                filter: hoveredLink === 'coder' ? 'saturate(1.15) contrast(1.05)' : 'saturate(1) contrast(1)'
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ clipPath: "inset(0 0 0 50%)" }}
                            className="absolute top-0 left-1/2 w-full h-full object-contain -translate-x-1/2"
                            alt="Coder Half"
                        />

                        {/* Linea di divisione centrale dinamica */}
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-slate-100 -translate-x-1/2 pointer-events-none overflow-hidden">
                            <motion.div 
                                animate={{ 
                                    top: ["-100%", "100%"],
                                    opacity: hoveredLink ? 0 : [0.2, 0.6, 0.2]
                                }}
                                transition={{ 
                                    top: { repeat: Infinity, duration: 3, ease: "linear" },
                                    opacity: { repeat: Infinity, duration: 3, ease: "linear" }
                                }}
                                className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-pink-500 to-transparent"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* NOME SARA SPANO - CORREZIONE STRUTTURALE CON FLEXBOX CENTRATO */}
                <div className="absolute top-[12%] sm:top-[16%] left-0 right-0 w-full z-40 flex flex-col items-center justify-center pointer-events-none px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full text-center"
                    >
                        <motion.h1 
                            animate={{ color: hoveredLink === 'coder' ? '#ffffff' : '#0f172a' }}
                            transition={{ duration: 0.3 }}
                            className="text-xl sm:text-2xl md:text-4xl font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase block w-full text-center"
                        >
                            Sara Spano
                        </motion.h1>
                        <div className="h-[2px] w-8 sm:w-12 bg-pink-500 mx-auto mt-2 sm:mt-3" />
                    </motion.div>
                </div>

                {/* BOTTONE SCARICA CV CON APPARIZIONE MORBIDA DAL BASSO */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="absolute bottom-[8%] sm:bottom-[10%] left-1/2 -translate-x-1/2 z-50"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/cv-sara-spano.pdf"
                        download
                        className="relative px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 hover:bg-pink-700 text-white text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-[1rem] sm:rounded-[1.3rem] inline-block outline-none focus:ring-0 shadow-lg transition-colors duration-300"
                    >
                        <span className="relative z-30 flex items-center gap-3 sm:gap-4 pointer-events-none">
                            Scarica CV
                            <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.span>
                        </span>
                    </motion.a>
                </motion.div>
            </motion.section>

            {/* ========================================================================= */}
            {/* 2. LINEA DI SEPARAZIONE TRASPARENTE */}
            {/* ========================================================================= */}
            <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden z-20">
                <motion.div
                    initial={{ x: "-100%" }} whileInView={{ x: "100%" }} transition={{ duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
                />
            </div>

            {/* ========================================================================= */}
            {/* 3. SECTION PHILOSOPHY: IL POTERE DELLA COMPLETEZZA */}
            {/* ========================================================================= */}
            <motion.section
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="relative w-full bg-white py-24 px-4 md:px-8 lg:px-10 z-10"
                id="about"
            >
                <div className="max-w-7xl mx-auto lg:mx-0 px-0">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        <div className="flex-shrink-0 lg:ml-[8px] flex flex-col items-start">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter leading-none">
                                Sviluppo <span className="text-pink-500">integrale</span>
                            </h3>
                            <div className="h-[3px] w-8 bg-pink-500 mt-3 ml-0" />
                        </div>

                        <div className="flex flex-col gap-16 flex-grow">
                            <div className="flex flex-col gap-10 w-full">
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tighter max-w-4xl">
                                    Non scrivo solo codice. <br />
                                    Costruisco <span className="text-pink-500 italic">ecosistemi</span> digitali performanti.
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-9 max-w-5xl border-l-2 border-slate-200">
                                    <div className="flex flex-col gap-4">
                                        <span className="text-pink-500 font-black uppercase text-[13px] tracking-widest">Visione Architetturale</span>
                                        <p className="text-slate-500 text-base leading-relaxed">
                                            La mia forza risiede nel comprendere l'intero flusso di un'applicazione. Dalla progettazione del database alla gestione delle API, ogni scelta tecnica è finalizzata alla scalabilità e alla sicurezza del prodotto.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-pink-500 font-black uppercase text-[13px] tracking-widest">Esperienza Utente</span>
                                        <p className="text-slate-500 text-base leading-relaxed">
                                            Essere una sviluppatrice completa significa non sacrificare mai l'estetica per la funzione. Integro design d'avanguardia con logiche di backend complesse, garantendo performance che superano gli standard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ========================================================================= */}
            {/* 4. CAPABILITIES TICKER */}
            {/* ========================================================================= */}
            <div className="py-12 bg-white">
                <InfiniteTicker />
            </div>

            {/* ========================================================================= */}
            {/* 5. SELECTED PROJECTS: END-TO-END SOLUTIONS */}
            {/* ========================================================================= */}
            <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-10">
                <div className="max-w-7xl mx-auto lg:mx-0 px-0">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        <div className="flex-shrink-0 lg:ml-[8px] flex flex-col items-start lg:w-[220px]">
                            <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Engineering & Design</p>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                Progetti <span className="text-pink-500">chiave</span>
                            </h3>
                            <div className="h-[3px] w-8 bg-pink-500 mt-4 ml-0" />
                        </div>

                        <div className="flex flex-col gap-24 flex-grow max-w-5xl">
                            <div className="grid grid-cols-1 gap-20">
                                {[1, 2].map((project) => (
                                    <motion.div
                                        key={project}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col gap-6"
                                    >
                                        <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-100">
                                            <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                <Link to="/projects" className="px-12 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-500 hover:text-white transition-all">Vedi Case Study</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-2">
                                            <div className="max-w-xl">
                                                <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter lowercase mb-1">E-commerce Engine v.0{project}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">
                                                    Un sistema completo sviluppato con Next.js, integrazione Stripe e gestione dinamica dei dati. Design pulito, logica spietata.
                                                </p>
                                            </div>
                                            
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-3 py-1 rounded-full">Architettura</span>
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-3 py-1 rounded-full">Backend</span>
                                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-3 py-1 rounded-full">UI/UX</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 6. NEXT STEP SECTION (RIQUADRO BLU SCURO) */}
            {/* ========================================================================= */}
            <section className="w-full bg-white pb-24 px-4 md:px-8 lg:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-[#11131e] rounded-[3rem] py-20 px-6 md:px-12 flex flex-col items-center text-center shadow-xl relative overflow-hidden"
                    >
                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Next Step</span>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
                            ingegnerizzare la tua <span className="text-pink-500">idea.</span>
                        </h2>
                        
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
                            Hai in mente un'applicazione complessa, un e-commerce o una piattaforma digitale sartoriale? Uniamo logiche full-stack e design d'avanguardia per costruire una struttura scalabile, solida e pronta a crescere.
                        </p>
                        
                        <Link 
                            to="/contacts" 
                            className="px-10 py-4 bg-pink-500 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/20"
                        >
                            Avvia la collaborazione
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
