import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import ClickSpark from '../../ui/ClickSpark';

export default function SloganHome() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    return (
        <>
            <section className="relative w-full bg-white py-16 lg:py-24 select-none z-10">
                <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-full bg-[#07080d] rounded-[3rem] py-14 sm:py-16 lg:py-20 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden border border-white/[0.03] group transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
                    >
                        {/* 1. BAGLIORE REATTIVO PREMIUM (Raggio di luce liquida iper-realistico) */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                            style={{
                                background: `
                                    radial-gradient(450px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.12), transparent 65%),
                                    radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(124, 58, 237, 0.1), transparent 50%)
                                `
                            }}
                        />

                        {/* 2. BORDO NEON INTERNO ULTRA-SOTTILE (Si illumina in base a dove si trova il mouse) */}
                        <div
                            className="absolute inset-0 rounded-[3rem] pointer-events-none z-20 border border-transparent transition-all duration-500"
                            style={{
                                backgroundImage: isHovered
                                    ? `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.4), transparent 80%)`
                                    : 'none',
                                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                padding: '1px'
                            }}
                        />

                        {/* 3. EFFETTO AMBIENTALE DI PROFONDITÀ (Griglia a micro-punti futuristica sfumata) */}
                        <div
                            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none z-0"
                            style={{
                                backgroundImage: 'radial-gradient(rgba(236, 72, 153, 0.6) 1.2px, transparent 1.2px)',
                                backgroundSize: '32px 32px'
                            }}
                        />

                        {/* 4. LINEA LASER SUPERIORE DINAMICA */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent z-20 opacity-70 group-hover:via-pink-500/80 transition-all duration-500" />

                        {/* ICONA STELLINA PREMIUM IN ORO AMBRATO ANIMATA IN FRAMER MOTION */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.15, 1],
                                filter: [
                                    "drop-shadow(0 0 2px rgba(245,158,11,0.2))",
                                    "drop-shadow(0 0 8px rgba(245,158,11,0.6))",
                                    "drop-shadow(0 0 2px rgba(245,158,11,0.2))"
                                ]
                            }}
                            transition={{
                                rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                                scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                                filter: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                            }}
                            className="text-amber-400 mb-3 flex items-center justify-center z-20"
                        >
                            <Sparkles className="w-5 h-5 fill-amber-400/20" />
                        </motion.div>

                        {/* ETICHETTA SOPRA-TITOLO */}
                        <span className="text-pink-500 font-black uppercase tracking-[0.45em] text-[10px] sm:text-[11px] mb-6 relative z-20 opacity-90">
                            Next Step
                        </span>

                        {/* TITOLO MONUMENTALE */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.12] mb-6 relative z-20 max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            Pronti a plasmare la prossima<span className="text-pink-500 relative inline-block drop-shadow-[0_0_30px_rgba(236,72,153,0.15)]">esperienza?</span>
                        </h2>

                        {/* PARAGRAFO INTRODUTTIVO (SUB-HEADLINE) */}
                        <p className="text-sm sm:text-base text-white max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
                            Esplora le sfide tecniche che ho superato sul campo nella sezione <span className="text-white font-bold transition-color group-hover:text-pink-400">esperienze</span>, oppure saltiamo i convenevoli e avvia un canale di <span className="text-white font-bold transition-colors group-hover:text-violet-200">contatto diretto</span> per il tuo business.
                        </p>

                        {/* GRUPPO PULSANTI D'AZIONE IMMOBILI E PERFETTI */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-30 w-full sm:w-auto">
                            <div className="w-full sm:w-auto">
                                <div className="relative group/button1">
                                    <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover/button1:opacity-100 shadow-[0_0_30px_rgba(236,72,153,0.6),0_0_15px_rgba(236,72,153,0.4)] pointer-events-none" />

                                    <Link
                                        to="/esperienze"
                                        className="px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 text-white hover:bg-pink-600 rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 relative flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        Vedi esperienze
                                        <span className="inline-block transform transition-transform duration-300 group-hover/button1:translate-x-1 group-hover/button1:-translate-y-1 font-normal text-white ml-1">
                                            ↗
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* BOTTONE DESTRO: AVVIA LA COLLABORAZIONE */}
                            <div className="w-full sm:w-auto">
                                <div className="relative group/button2">
                                    <div className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover/button2:opacity-100 shadow-[0_0_30px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)] pointer-events-none" />

                                    <ClickSpark>
                                        <Link
                                            to="/contatti"
                                            className="px-8 py-4 sm:px-12 sm:py-5 bg-white text-slate-900 hover:bg-slate-200 rounded-full font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 relative flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            Prendiamo un caffè?
                                            <span className="inline-block transform scale-0 opacity-0 group-hover/button2:opacity-100 group-hover/button2:scale-110 transition-all duration-300 group-hover/button2:animate-bounce origin-center ml-1 -translate-y-[1px]">
                                                ☕
                                            </span>
                                        </Link>
                                    </ClickSpark>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
