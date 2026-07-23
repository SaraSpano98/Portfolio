import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import ClickSpark from '../../ui/ClickSpark';

export default function SloganAbout() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    return (
        <section className="relative w-full bg-white pb-16 pt-0 mt-32 mb-32 select-none z-10">
            <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -5, scale: 1.005 }}
                    onMouseMove={handleMouseMove}
                    className="w-full bg-gradient-to-br from-[#11131e] via-[#0c0d14] to-[#161929] rounded-[3rem] py-14 sm:py-16 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5 group"
                >
                    {/* BAGLIORI COREOGRAFICI FISSI SULLO SFONDO */}
                    <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* LINEA SOTTILE DI GRADIENTE SUL BORDO SUPERIORE */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

                    {/* BAGLIORE ROSA DINAMICO AL PASSAGGIO DEL MOUSE */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.12), transparent 45%)`
                        }}
                    />

                    {/* CONTENUTO PRINCIPALE */}
                    <div className="z-10 max-w-3xl mx-auto text-center w-full flex flex-col items-center justify-center">

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

                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-5 relative z-20">
                            Next Step
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white mb-8">
                            Pronti a plasmare la <br /> <span className="text-pink-500">prossima</span> idea insieme?
                        </h2>

                        {/* CONTENITORE PULSANTI AFFIANCATI CORRETTO */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mt-4">

                            {/* BOTTONE 1: VEDI ESPERIENZE */}
                            <div className="w-full sm:w-auto">
                                <ClickSpark>
                                    <Link
                                        to="/experience"
                                        className="group w-full inline-flex items-center justify-center gap-3 bg-pink-500 text-white font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] px-8 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 hover:bg-pink-600 whitespace-nowrap cursor-pointer"
                                    >
                                        Vedi esperienze

                                        <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 font-normal text-white ml-1">
                                            ↗
                                        </span>
                                    </Link>
                                </ClickSpark>
                            </div>

                            {/* BOTTONE 2: PRENDIAMO UN CAFFÈ? */}
                            <div className="w-full sm:w-auto">
                                <ClickSpark>
                                    <Link
                                        to="/contacts"
                                        className="group w-full inline-flex items-center justify-center gap-3 bg-[#1e293b]/40 border border-white/10 text-white font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] px-8 py-4 sm:px-12 sm:py-5 rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900 whitespace-nowrap cursor-pointer"
                                    >
                                        Prendiamo un caffè?

                                        <span className="inline-block transform scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce origin-center ml-1 -translate-y-[1px]">
                                            ☕
                                        </span>
                                    </Link>
                                </ClickSpark>
                            </div>
                        </div>
                    </div>

                    {/* PATTERN GEOMETRICO DE SFONDO*/}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </motion.div>
            </div>
        </section>
    );
}
