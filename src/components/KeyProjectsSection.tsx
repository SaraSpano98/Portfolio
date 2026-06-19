import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

export default function KeyProjectsSection() {
    return (
    
        <section className="w-full bg-white pt-20 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 select-none">
            
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col gap-16">

                    {/* HEADER DELLA SEZIONE */}
                    <div className="flex flex-col items-start w-full text-start">
                        <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                            Engineering & Design
                        </p>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                            Progetti <span className="text-pink-500">chiave</span>
                        </h3>
                        <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                    </div>

                    {/* GRIGLIA MULTI-PROGETTO A DUE COLONNE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
                        {[1, 2, 3, 4].map((project) => (
                            <motion.div
                                key={project}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="group flex flex-col gap-5 w-full text-left items-start"
                            >
                                <div className="relative w-full h-[180px] sm:h-[210px] md:h-[240px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
                                    <div className="absolute inset-0 bg-[#e2e8f0]/50 group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <Link 
                                            to="/projects" 
                                            className="px-10 py-4 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-500 hover:text-white transition-all shadow-md"
                                        >
                                            Vedi Case Study
                                        </Link>
                                    </div>
                                </div>

                                {/* Blocco Informazioni sotto la card */}
                                <div className="flex flex-col gap-2 w-full px-1">
                                    {/* Riga Orizzontale: Titolo a sinistra e Tag a destra perfettamente in asse */}
                                    <div className="flex flex-row justify-between items-center w-full gap-4">
                                        {/* Titolo forzato in minuscolo come nell'immagine */}
                                        <h4 className="text-lg md:text-xl font-black text-slate-900 tracking-tighter lowercase">
                                            e-commerce engine v.0{project}
                                        </h4>

                                        {/* Tag compatti */}
                                        <div className="flex gap-1.5 flex-wrap shrink-0">
                                            <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-2.5 py-0.5 rounded-md bg-slate-50/30">
                                                NEXT.JS
                                            </span>
                                            <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 px-2.5 py-0.5 rounded-md bg-slate-50/30">
                                                UI/UX
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl text-left">
                                        Un sistema completo sviluppato con Next.js, integrazione Stripe e gestione dinamica dei dati. Design pulito, logica spietata.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
