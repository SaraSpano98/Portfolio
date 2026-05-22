import React from 'react';
import { motion } from 'framer-motion';

const SloganContacts = () => {
    return (
        <>  
            {/* SEZIONE 6: SLOGAN CONTATTI */}
            <div className="w-full px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                        const currentTarget = e.currentTarget;
                        const { left, top } = currentTarget.getBoundingClientRect();
                        currentTarget.style.setProperty("--x", `${e.clientX - left}px`);
                        currentTarget.style.setProperty("--y", `${e.clientY - top}px`);
                    }}
                    className="relative w-full bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl group"
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(600px circle at var(--x) var(--y), rgba(236, 72, 153, 0.2), transparent 40%)` }} />

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 lowercase">
                            Non cerchi solo un dev. <br /> Cerchi <span className="text-pink-500 italic">visione</span> e <span className="text-pink-500">metodo</span>.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                            <motion.a whileHover={{ scale: 1.05 }} href="mailto:saraspano@live.it" className="px-14 py-6 bg-pink-500 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl">Iniziamo il progetto</motion.a>
                            <motion.a whileHover={{ scale: 1.05 }} href="#" className="px-14 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all">Prendiamo un caffè? ☕</motion.a>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </motion.div>
            </div>
        </>

    );
};

export default SloganContacts;
