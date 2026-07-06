import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface ContactsHeroProps {
    time: string;
    revealVariant: Variants;
}

const ContactsHero = ({ time, revealVariant }: ContactsHeroProps) => {
    return (
        <section className="w-full bg-white text-slate-900 pb-28 select-none overflow-hidden relative">

            {/* BAGLIORI COREOGRAFICI SFUMATI SULLO SFONDO */}
            <div className="absolute top-24 -left-40 w-[500px] h-[500px] bg-pink-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-44 -right-40 w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-20 relative z-10">
                <div className="w-full lg:max-w-2xl flex flex-col items-center text-center px-6 mb-16">
                    <div className="overflow-hidden mb-4">
                        <motion.p
                            initial="hidden" animate="visible" variants={revealVariant}
                            className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-3"
                        >
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                            Ready for a new project
                        </motion.p>
                    </div>

                    <div className="mb-8">
                        <motion.h1
                            initial="hidden" animate="visible" variants={revealVariant}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tighter leading-none"
                        >
                            Mettiamoci in <span className="text-pink-500">contatto</span>
                        </motion.h1>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed italic border-t-2 border-slate-100 pt-6 font-medium w-full">
                        "Credo che la comunicazione sia la base di ogni grande digital product. Trasformo le tue idee in user experiences umane e codice solido."
                    </p>
                </div>

                {/* GRIGLIA SIMMETRICA A 3 CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch px-6"
                >
                    {/* CARD 1: L'orario locale */}
                    <div className="flex flex-col items-center justify-center bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-center transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500 mb-2 whitespace-nowrap">Local Time / Italy</p>
                        <span className="text-4xl md:text-5xl font-light text-slate-900 tabular-nums leading-none mb-2">{time}</span>
                        <p className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">Risposta entro 24h</p>
                    </div>

                    {/* CARD 2: Disponibilità */}
                    <div className="flex flex-col items-center justify-center bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-center transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3 whitespace-nowrap">Availability</p>
                        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                            Disponibile
                        </div>
                        <p className="text-slate-500 text-xs font-medium max-w-[200px] leading-relaxed">
                            Aperta a progetti freelance, consulenze UI/UX e ruoli Full-Remote.
                        </p>
                    </div>

                    {/* CARD 3: Current Status */}
                    <div className="flex flex-col items-center justify-center bg-slate-50/60 border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-center transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3 block whitespace-nowrap">
                            Current Status
                        </span>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium max-w-[220px]">
                            Sviluppo micro-animazioni in <span className="text-slate-900 font-bold">Framer Motion</span> per un e-commerce di ultima generazione.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactsHero;
