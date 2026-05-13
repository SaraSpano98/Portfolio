import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import SEO from "../lib/seo";
import InfiniteTicker from "../components/InfiniteTicker";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
        return () => window.clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <SEO title="Full-stack Developer & Designer" description="Sviluppo integrale di prodotti digitali: dalla visione creativa alla logica strutturale." path="/" />

            {/* 1. HERO SECTION */}
            <motion.div className="relative z-10">
                <Hero />
            </motion.div>

            {/* 2. LINEA DI SEPARAZIONE */}
            <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden z-20">
                <motion.div
                    initial={{ x: "-100%" }} whileInView={{ x: "100%" }} transition={{ duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
                />
            </div>

            {/* 3. SECTION PHILOSOPHY: IL POTERE DELLA COMPLETEZZA */}
            <motion.section
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="relative w-full bg-white py-24 px-4 md:px-8 lg:px-10 cursor-none z-10"
                id="about"
            >
                <div className="max-w-7xl mx-auto lg:mx-0 px-0">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* COLONNA SINISTRA */}
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

            {/* 4. CAPABILITIES TICKER */}
            <div className="py-12 bg-white">
                <InfiniteTicker />
            </div>

            {/* 5. SELECTED PROJECTS: END-TO-END SOLUTIONS */}
            <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-10 cursor-none">
                <div className="max-w-7xl mx-auto lg:mx-0 px-0">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* COLONNA TITOLO */}
                        <div className="flex-shrink-0 lg:ml-[8px] flex flex-col items-start lg:w-[220px]">
                            <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Engineering & Design</p>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                Progetti <span className="text-pink-500">chiave</span>
                            </h3>
                            <div className="h-[3px] w-8 bg-pink-500 mt-4 ml-0" />
                        </div>

                        {/* COLONNA CONTENUTO PROGETTI */}
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

            {/* 6. NEXT STEP SECTION (RIQUADRO BLU SCURO) */}
            <section className="w-full bg-white pb-24 px-4 md:px-8 lg:px-10 cursor-none">
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
