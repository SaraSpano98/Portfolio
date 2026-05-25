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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                /* px-24 garantisce lo stesso identico allineamento laterale dell'header */
                className="relative w-full bg-white pt-24 pb-6 px-24 z-10"
                id="about"
            >
                {/* mx-auto e max-w-7xl impediscono al testo di allargarsi troppo sui monitor grandi */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* COLONNA SINISTRA: Uniformata ai progetti chiave */}
                        <div className="flex-shrink-0 flex flex-col items-start w-full lg:w-1/4">
                            {/* Label rosa sopra introdotta per coerenza */}
                            <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                                Full-Stack Philosophy
                            </p>
                            {/* Titolo ingrandito a text-4xl / md:text-5xl e impostato su font-black */}
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                Sviluppo <span className="text-pink-500">integrale</span>
                            </h3>
                            {/* Linea rosa con mt-4 per uniformare il distacco dal testo */}
                            <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                        </div>

                        {/* COLONNA DESTRA: Contenuti Principali */}
                        <div className="flex flex-col gap-12 flex-grow w-full lg:w-3/4">
                            {/* max-w-3xl tiene il titolone compatto e facile da leggere su una o due righe */}
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tighter max-w-3xl">
                                Non scrivo solo codice. <br />
                                Costruisco <span className="text-pink-500 italic">ecosistemi</span> digitali performanti.
                            </h2>

                            {/* Griglia a due colonne per le schede informative con la linea verticale di sbarramento */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-8 border-l-2 border-slate-200 max-w-4xl">

                                {/* Scheda 1 */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-pink-500 font-black uppercase text-[12px] tracking-widest">Visione Architetturale</span>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        La mia forza risiede nel comprendere l'intero flusso di un'applicazione. Dalla progettazione del database alla gestione delle API, ogni scelta tecnica è finalizzata alla scalabilità e alla sicurezza del prodotto.
                                    </p>
                                </div>

                                {/* Scheda 2 */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-pink-500 font-black uppercase text-[12px] tracking-widest">Esperienza Utente</span>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        Essere una sviluppatrice completa significa non sacrificare mai l'estetica per la funzione. Integro design d'avanguardia con logiche di backend complesse, garantendo performance che superano gli standard.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </motion.section>


            {/* 4. CAPABILITIES TICKER */}
            <div className="py-12 px-20 bg-white">
                <InfiniteTicker />
            </div>

            {/* 5. SELECTED PROJECTS: MODULAR GRID */}
            <section className="w-full bg-white pt-20 pb-24 px-24">
                {/* Contenitore principale centrato con larghezza massima */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col gap-16">

                        {/* HEADER DELLA SEZIONE (A tutta larghezza) */}
                        <div className="flex flex-col items-start w-full">
                            <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                                Engineering & Design
                            </p>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                Progetti <span className="text-pink-500">chiave</span>
                            </h3>
                            <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                        </div>

                        {/* GRIGLIA MULTI-PROGETTO COMPATTA */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
                            {[1, 2, 3, 4].map((project) => (
                                <motion.div
                                    key={project}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col gap-4 w-full"
                                >
                                    {/* 
                          CORREZIONE CHIAVE: Altezza ridotta a md:h-[240px].
                          I rettangoli diventano bassi, leggeri e non invadono lo schermo.
                        */}
                                    <div className="relative w-full h-[180px] sm:h-[210px] md:h-[240px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
                                        <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <Link to="/projects" className="px-10 py-4 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-500 hover:text-white transition-all">
                                                Vedi Case Study
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Informazioni sotto la singola card */}
                                    <div className="flex flex-col gap-2 px-2">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                                            <h4 className="text-xl font-black text-slate-900 tracking-tighter lowercase">
                                                E-commerce Engine v.0{project}
                                            </h4>

                                            {/* Tag compatti */}
                                            <div className="flex gap-1.5 flex-wrap">
                                                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-2.5 py-0.5 rounded-full">Next.js</span>
                                                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-2.5 py-0.5 rounded-full">UI/UX</span>
                                            </div>
                                        </div>

                                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl">
                                            Un sistema completo sviluppato con Next.js, integrazione Stripe e gestione dinamica dei dati. Design pulito, logica spietata.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* 6. NEXT STEP SECTION (RIQUADRO PREMIUM CON GLOW EFFECT) */}
            <section className="w-full bg-white pt-20 pb-24 px-24">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        /* 
                          EFFETTO WOW INTERATTIVO: al passaggio del mouse la scheda si solleva leggermente 
                          e l'intensità dell'ombra rosa/neon aumenta, creando profondità.
                        */
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full bg-gradient-to-br from-[#11131e] via-[#0c0d14] to-[#161929] rounded-[3rem] py-20 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5"
                    >
                        {/* ELEMENTI DI SFONDO COREOGRAFICI (BAGLIORI) */}
                        {/* Bagliore rosa neon in alto a sinistra */}
                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
                        {/* Bagliore viola/blu in basso a destra */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* LINEA SOTTILE DI GRADIENTE SUL BORDO SUPERIORE */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

                        {/* CONTENUTO */}
                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 relative z-10">
                            Next Step
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">
                            Ingegnerizzare la tua <span className="text-pink-500 relative inline-block">idea.</span>
                        </h2>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10 font-medium relative z-10">
                            Hai in mente un'applicazione complessa, un e-commerce o una piattaforma digitale sartoriale?
                            Uniamo logiche <span className="text-slate-200 font-semibold">full-stack</span> e design <span className="text-slate-200 font-semibold">d'avanguardia</span> per costruire una struttura scalabile, solida e pronta a crescere.
                        </p>

                        <Link
                            to="/contacts"
                            className="px-10 py-4 bg-pink-500 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 relative z-10"
                        >
                            Avvia la collaborazione
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
