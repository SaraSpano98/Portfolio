import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lordicon/react';

interface ProcessSectionProps {
    loadedIcons: { [key: string]: object};
    refs: {
        searchRef: React.RefObject<Player | null>;
        computerRef: React.RefObject<Player | null>;
        rocketRef: React.RefObject<Player | null>;
    };
}

const ProcessSection = ({ loadedIcons, refs }: ProcessSectionProps) => {
    const { searchRef, computerRef, rocketRef } = refs;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchRef.current) searchRef.current.playFromBeginning();
            if (computerRef.current) computerRef.current.playFromBeginning();
            if (rocketRef.current) rocketRef.current.playFromBeginning();
        }, 100);

        return () => clearTimeout(timer);
    }, [loadedIcons, searchRef, computerRef, rocketRef]);

    return (
        <>
            {/* SECTION 2 - PROCESSO */}
            <div className="w-full -mt-6 mb-32 border-t border-slate-100 pt-16 relative">
                
                {/* Intestazione principale della sezione */}
                <div className="mb-20 pb-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter lowercase leading-none">
                        il mio <span className="text-pink-500">processo</span>
                    </h2>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">
                        // dall'idea al prodotto finale passo dopo passo
                    </p>
                </div>

                {/* Griglia principale */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-20 text-left relative">

                    {/* BLOCCO 1: DISCOVERY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="w-full max-w-[340px] flex flex-col items-start text-left relative group"
                    >
                        {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                        <span className="absolute -top-6 right-4 text-7xl font-black text-slate-100/40 select-none pointer-events-none transition-colors group-hover:text-pink-500/5">
                            01
                        </span>

                        <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                            {loadedIcons.search ? (
                                <Player
                                    ref={searchRef}
                                    icon={loadedIcons.search}
                                    size={44}
                                    colorize="#ec4899"
                                    loop={true}
                                    onComplete={() => searchRef.current?.playFromBeginning()}
                                />
                            ) : (
                                <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                            )}
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Discovery</h4>
                        <p className="text-slate-500 text-base leading-relaxed font-medium">
                            Analizziamo il brief, definiamo gli obiettivi e tracciamo la rotta del progetto.
                        </p>
                    </motion.div>

                    {/* BLOCCO 2: DESIGN & DEV */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-[340px] flex flex-col items-start text-left relative group"
                    >
                        {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                        <span className="absolute -top-6 right-4 text-7xl font-black text-slate-100/40 select-none pointer-events-none transition-colors group-hover:text-pink-500/5">
                            02
                        </span>

                        <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                            {loadedIcons.computer ? (
                                <Player
                                    ref={computerRef}
                                    icon={loadedIcons.computer}
                                    size={44}
                                    colorize="#ec4899"
                                    loop={true}
                                    onComplete={() => computerRef.current?.playFromBeginning()}
                                />
                            ) : (
                                <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                            )}
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Design & Dev</h4>
                        <p className="text-slate-500 text-base leading-relaxed font-medium">
                            Progetto l'interfaccia pixel-perfect e la trasformo in codice scalabile e pulito.
                        </p>
                    </motion.div>

                    {/* BLOCCO 3: DELIVERY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full max-w-[340px] flex flex-col items-start text-left relative group"
                    >
                        {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                        <span className="absolute -top-6 right-4 text-7xl font-black text-slate-100/40 select-none pointer-events-none transition-colors group-hover:text-pink-500/5">
                            03
                        </span>

                        <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                            {loadedIcons.rocket ? (
                                <Player
                                    ref={rocketRef}
                                    icon={loadedIcons.rocket}
                                    size={44}
                                    colorize="#ec4899"
                                    loop={true}
                                    onComplete={() => rocketRef.current?.playFromBeginning()}
                                />
                            ) : (
                                <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                            )}
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Delivery</h4>
                        <p className="text-slate-500 text-base leading-relaxed font-medium w-full">
                            Ottimizzazione, test rigorosi e lancio del prodotto finito nel mondo digitale.
                        </p>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default ProcessSection;