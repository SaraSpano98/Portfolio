import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SloganContacts = () => {
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
            <section className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 select-none">

                <div className="w-full max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        onMouseMove={handleMouseMove}
                        className="relative w-full bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl group border border-white/5"
                    >
                        {/* BAGLIORE ROSA*/}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(236, 72, 153, 0.15), transparent 40%)`
                            }}
                        />

                        {/* GRIGLIA */}
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-8 lowercase">
                                Non cerchi solo un dev. <br /> Cerchi <span className="text-pink-500 italic font-medium">visione</span> e <span className="text-pink-500">metodo</span>.
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="mailto:saraspano@live.it"
                                    className="px-14 py-6 bg-pink-500 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-pink-500/10 hover:shadow-pink-500/30 transition-shadow duration-300"
                                >
                                    Iniziamo il progetto
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#0f172a" }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#"
                                    className="px-14 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300"
                                >
                                    Prendiamo un caffè? ☕
                                </motion.a>
                            </div>
                        </div>

                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default SloganContacts;
