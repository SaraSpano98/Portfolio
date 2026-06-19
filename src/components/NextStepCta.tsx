import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NextStepCta() {
    return (
        <>
            <section className="w-full bg-white pt-20 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 select-none">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -5, scale: 1.005 }}
                        className="w-full bg-gradient-to-br from-[#11131e] via-[#0c0d14] to-[#161929] rounded-[3rem] py-20 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-white/5"
                    >
                        {/* ELEMENTI DI SFONDO COREOGRAFICI (BAGLIORI) */}
                        {/* Bagliore rosa neon in alto a sinistra */}
                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
                        {/* Bagliore viola/blu in basso a destra */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* LINEA SOTTILE DI GRADIENTE SUL BORDO SUPERIORE */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 relative z-10">
                            Next Step
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">
                            Ingegnerizzare la tua <span className="text-pink-500 relative inline-block">idea.</span>
                        </h2>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10 font-medium relative z-10">
                            Hai in mente un'applicazione complessa, un e-commerce o una piattaforma digitale sartoriale?
                            Uniamo logiche <span className="text-slate-200 font-semibold">full-stack</span> e design <span className="text-slate-200 font-semibold">d'avanguardia</span> per costruire una struttura scalabile, solida e pronta a crescere.
                        </p>

                        <Link
                            to="/contacts"
                            className="px-10 py-4 bg-pink-500 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 relative z-10"
                        >
                            Avvia la collaborazione
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>

    );
}
