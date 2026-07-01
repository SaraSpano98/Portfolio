import { motion } from "framer-motion";

export default function FullStackPhilosophy() {
    return (
        <section className="relative w-full bg-white pt-20 pb-6 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
            <div className="w-full flex flex-col items-start text-start">
                <div className="w-full mb-14 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Full-Stack Philosophy
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                        Sviluppo <span className="text-pink-500">integrale</span>
                    </h2>

                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>

                {/* GRIGLIA PRINCIPALE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-start">
                    
                    {/* Colonna Testo */}
                    <div className="w-full flex flex-col gap-10 items-start">
                        <h3 className="text-3xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.15] tracking-tighter w-full">
                            Non scrivo solo codice. Costruisco <span className="text-pink-500 italic font-medium">ecosistemi</span> digitali performanti.
                        </h3>

                        {/* GRIGLIA PER LE DUE COLONNINE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 pl-0 w-full">

                            {/* Scheda 1: VISIONE ARCHITETTURALE */}
                            <div className="flex flex-col gap-3">
                                <span className="text-pink-500 font-black text-[15px] tracking-widest">
                                    VISIONE ARCHITETTURALE
                                </span>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">
                                    La mia forza risiede nel comprendere l'intero flusso di un'applicazione. Dalla progettazione del database alla gestione delle API, ogni scelta tecnica è finalizzata alla scalabilità e alla sicurezza del<span> </span>prodotto.
                                </p>
                            </div>

                            {/* Scheda 2: ESPERIENZA UTENTE */}
                            <div className="flex flex-col gap-3">
                                <span className="text-pink-500 font-black text-[15px] tracking-widest">
                                    ESPERIENZA UTENTE
                                </span>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">
                                    Essere una sviluppatrice completa significa non sacrificare mai l'estetica per la funzione. Integro design d'avanguardia con logiche di backend complesse, garantendo performance che superano gli standard.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* COLONNA VIDEO ANIMATA CON PROFONDITÀ */}
                    <motion.div 
                        whileHover={{ 
                            y: -10, 
                            scale: 1.02 
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-full rounded-[2.5rem] overflow-hidden bg-white flex items-center justify-center lg:relative lg:-top-28 shadow-[0_30px_60px_-15px_rgba(236,72,153,0.12),0_20px_40px_-20px_rgba(124,58,237,0.12)] hover:shadow-[0_50px_70px_-20px_rgba(236,72,153,0.2),0_30px_50px_-15px_rgba(124,58,237,0.15)] transition-shadow duration-500 ease-out cursor-pointer"
                    >
                        <video
                            src="/assets/video/ConceptDesign.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
