import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ClickSpark from '../../ui/ClickSpark';

export default function SloganHome() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    return (
        <>
            <section className="relative w-full bg-white pb-16 pt-0 mt-6 mb-16 select-none z-10">
                <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -5, scale: 1.005 }}
                        onMouseMove={handleMouseMove}
                        className="w-full bg-[#0c0d14] rounded-[3rem] py-20 sm:py-24 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5 group"
                    >
                        {/* EFFETTO GLOW RADIALE SUL MOUSE */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                            style={{
                                background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.15), transparent 50%)`
                            }}
                        />

                        {/* LINEA LASER SUPERIORE SOTTILE */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent z-20" />

                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-5 relative z-20">
                            Next Step
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.15] mb-6 relative z-20">
                            Ingegnerizzare la tua <span className="text-pink-500 relative inline-block">idea.</span>
                        </h2>

                        <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-12 font-medium relative z-20">
                            Hai in mente un'applicazione complessa, un e-commerce o una piattaforma digitale sartoriale?
                            Uniamo logiche <span className="text-slate-200 font-semibold">full-stack</span> e design <span className="text-slate-200 font-semibold">d'avanguardia</span> per costruire una struttura scalabile, solida e pronta a crescere.
                        </p>

                                                {/* GRUPPO PULSANTI D'AZIONE CON EFFETTO HOVER CAFFÈ SUL BOTTONE DESTRO */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 relative z-30 w-full sm:w-auto">
                            
                            {/* BOTTONE SINISTRO: SCOPRI CHI SONO (SCURO MINIMALE CON BORDO) */}
                            <div className="w-full sm:w-auto">
                                <Link
                                    to="/about"
                                    className="px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 text-white hover:bg-pink-700 rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 relative flex items-center justify-center gap-2 group cursor-pointer"
                                >
                                    Scopri chi sono
                                    <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 font-normal text-white">
                                        ↗
                                    </span>
                                </Link>
                            </div>

                            {/* BOTTONE DESTRO: AVVIA LA COLLABORAZIONE */}
                            <div className="w-full sm:w-auto">
                                <ClickSpark>
                                    <Link
                                        to="/contacts"
                                        className="px-8 py-4 sm:px-12 sm:py-5 bg-[#11131e] text-white hover:bg-white hover:text-slate-900 border border-white/[0.08] hover:border-transparent rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 relative flex items-center justify-center gap-2 group cursor-pointer text-center"
                                    >
                                        Avvia la collaborazione
                                
                                        <span className="inline-block transform scale-0 w-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:w-auto transition-all duration-300 group-hover:animate-bounce">
                                            ☕
                                        </span>
                                    </Link>
                                </ClickSpark>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
