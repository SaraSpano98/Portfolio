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
            <section className="relative w-full bg-white pb-16 pt-0 mt-32 mb-32 select-none z-10">
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
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                            style={{
                                background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.15), transparent 50%)`
                            }}
                        />

                        
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

                        <div className="relative z-30">
                            <ClickSpark>
                                <Link
                                    to="/contacts"
                                    className="px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 text-white rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] hover:bg-pink-700 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 relative block"
                                >
                                    Avvia la collaborazione
                                </Link>
                            </ClickSpark>
                        </div >
                    </motion.div>
                </div>
            </section>
        </>
    );
}
