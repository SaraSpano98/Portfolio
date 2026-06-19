import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface ContactsHeroProps {
    time: string;
    revealVariant: Variants;
}

const ContactsHero = ({ time, revealVariant }: ContactsHeroProps) => {
    return (

        <>
            <section className="w-full bg-white text-slate-900 px-6 sm:px-12 md:px-16 lg:px-24 pt-40 lg:pt-48 pb-20 select-none overflow-hidden relative">

                <div className="w-full mb-20">
                    <div className="flex flex-col lg:flex-row justify-between gap-12 w-full items-start">

                        {/* COLONNA SINISTRA (Allineata perfettamente sotto il logo) */}
                        <div className="w-full lg:max-w-2xl flex flex-col items-start text-left">
                            <div className="overflow-hidden mb-4">
                                <motion.p
                                    initial="hidden" animate="visible" variants={revealVariant}
                                    className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                                    Ready for a new project
                                </motion.p>
                            </div>

                            <div className="mb-8">
                                <motion.h1
                                    initial="hidden" animate="visible" variants={revealVariant}
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap"
                                >
                                    Mettiamoci in <span className="text-pink-500">contatto</span>
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                                className="flex flex-col gap-8 w-full"
                            >
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed italic border-l-4 border-slate-100 pl-8 font-medium">
                                    "Credo che la communication sia la base di ogni grande prodotto digitale. Trasformo le tue idee in experiences utente fluide e codice solido."
                                </p>

                                <div className="p-10 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] w-full shadow-sm">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">Current Status — Maggio 2024</span>
                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                        Attualmente sto approfondendo le micro-animazioni in <span className="text-slate-900 font-bold">Framer Motion</span> e lavorando su un project e-commerce ad alte prestazioni. Sperimento costantemente per portare valore ai miei clients.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* COLONNA DESTRA (Allineata perfettamente sotto il tasto "Tech Stack" della navbar) */}
                        <div className="w-full lg:w-auto flex flex-col items-start lg:items-end text-left lg:text-right shrink-0 lg:mt-24">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col items-start lg:items-end">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2 whitespace-nowrap">Local Time / Italy</p>
                                <span className="text-5xl md:text-6xl font-light text-slate-900 tabular-nums leading-none">{time}</span>
                                <p className="mt-4 text-slate-600 text-[10px] uppercase tracking-widest leading-relaxed font-semibold max-w-[180px]">Risposta garantita entro 24 ore lavorative</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
};

export default ContactsHero;

