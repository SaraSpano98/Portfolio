import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NextStepCta() {
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
            <section className="relative w-full bg-white pt-12 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -5, scale: 1.005 }}
                        onMouseMove={handleMouseMove} 
                        className="w-full bg-gradient-to-br from-[#11131e] via-[#0c0d14] to-[#161929] rounded-[3rem] py-14 sm:py-16 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5 group"
                    >
                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* BAGLIORE ROSA DINAMICO AL PASSAGGIO DEL MOUSE */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                            style={{
                                background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.12), transparent 45%)`
                            }}
                        />

                        {/* LINEA SOTTILE DI GRADIENTE SUL BORDO SUPERIORE */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3 relative z-10">
                            Next Step
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-4 relative z-10">
                            Ingegnerizzare la tua <span className="text-pink-500 relative inline-block">idea.</span>
                        </h2>

                        <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-8 font-medium relative z-10">
                            Hai in mente un'applicazione complessa, un e-commerce o una piattaforma digitale sartoriale?
                            Uniamo logiche <span className="text-slate-200 font-semibold">full-stack</span> e design <span className="text-slate-200 font-semibold">d'avanguardia</span> per costruire una struttura scalabile, solida e pronta a crescere.
                        </p>

                        <Link
                            to="/contacts"
                            className="px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 text-white rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 relative z-10 inline-block"
                        >
                            Avvia la collaborazione
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
