import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

        return () => {
            window.clearTimeout(timer);
        };
    }, [location.pathname]);

    return (
        <>
            <SEO title="Home" path="/" />

            {/* 1. HERO SECTION */}
            <motion.div className="relative z-10">
                <Hero />
            </motion.div>

            {/* 2. LINEA DI SEPARAZIONE ANIMATA */}
            <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden z-20 mt-[-1px]">
                <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
                />
            </div>

            {/* 3. SECTION ABOUT ME */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-full bg-white py-24 px-4 md:px-8 lg:px-10 cursor-none z-10"
                id="about"
            >
                <div className="max-w-7xl mx-auto lg:mx-0 px-0">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">

                        {/* COLONNA TITOLO */}
                        <div className="flex-shrink-0 lg:ml-[8px]">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter leading-none">
                                Chi <span className="text-pink-500">sono</span>
                            </h3>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "30px" }}
                                className="h-[3px] bg-pink-500 mt-2"
                            />
                        </div>

                        {/* COLONNA TESTO - Estesa per occupare lo spazio a destra */}
                        <div className="flex flex-col gap-14 md:mt-2 flex-grow">
                            {/* LA MIA STORIA */}
                            <div className="flex flex-col gap-5 w-full">
                                <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 font-medium leading-relaxed italic border-l-4 border-pink-500 pl-8 w-full max-w-none">
                                    "Dalla matita al codice: il mio percorso nasce nel <span className="text-slate-900 font-bold not-italic">Graphic Design</span> per evolversi nello sviluppo di interfacce digitali che emozionano."
                                </p>
                                <p className="text-slate-500 text-base md:text-lg leading-loose w-full max-w-4xl pl-9">
                                    Oggi unisco la sensibilità estetica alle logiche di programmazione per creare esperienze web moderne, scalabili e performanti.
                                </p>
                            </div>

                            {/* METODO & PASSIONI */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 w-full pl-9">
                                <div className="flex flex-col gap-4 border-t border-slate-50 pt-6">
                                    <h4 className="text-pink-500 font-black uppercase text-[10px] tracking-[0.4em]">Il mio Metodo</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        Analisi del problema, prototipazione rapida e scrittura di codice pulito. Credo fermamente che il buon design debba essere invisibile e al servizio dell'utente.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 border-t border-slate-50 pt-6">
                                    <h4 className="text-pink-500 font-black uppercase text-[10px] tracking-[0.4em]">Oltre il codice</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        Amo la tipografia, i sistemi di colori audaci e le micro-interazioni che rendono unico il web. Sperimento costantemente nuove tecnologie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 4. INFINITE TICKER SECTION */}
            <InfiniteTicker />

        </>
    );
}
