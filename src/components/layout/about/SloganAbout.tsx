import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
                    className="w-full bg-gradient-to-br from-[#11131e] via-[#0c0d14] to-[#161929]  hover:bg-white hover:text-slate-900 rounded-[3rem] py-14 sm:py-16 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5 group"
                >
                    {/* BAGLIORI COREOGRAFICI FISSI ESATTI SULLO SFONDO */}
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

                        {/* TESTO SLOGAN */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white mb-8">
                            Pronti a plasmare la <br /> <span className="text-pink-500">prossima</span> idea insieme?
                        </h2>

                        {/* CONTENITORE PULSANTI AFFIANCATI */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mt-4">

                            {/* PULSANTE PRINCIPALE*/}
                            <Link
                                to="/experiences"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-pink-500 text-white font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] px-8 py-4 sm:px-12 sm:py-5 rounded-full shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 hover:bg-pink-600"
                            >
                                Vedi esperienze
                                <ArrowUpRight className="w-4 h-4 shrink-0 stroke-[2.5]" />
                            </Link>

                            {/* PULSANTE SECONDARIO */}
                            <Link
                                to="/contacts"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1e293b]/40 border border-white/10 text-white font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] px-8 py-4 sm:px-12 sm:py-5 rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900"
                            >
                                Prendiamo un caffè? ☕
                            </Link>
                        </div>
                    </div>

                    {/* PATTERN GEOMETRICO DI SFONDO*/}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </motion.div>
            </div>
        </section>
    );
}

