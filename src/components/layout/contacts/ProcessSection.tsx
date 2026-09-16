import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lordicon/react';

interface ProcessSectionProps {
    loadedIcons: { [key: string]: object };
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
            <div className="w-full -mt-6 mb-32 border-t border-slate-250 border-sm pt-16 px-6 sm:px-12 md:px-16 lg:px-24 relative">
                <div className="w-full max-w-8xl mx-auto">

                    {/* Intestazione principale della sezione */}
                    <div className="mb-20 pb-4">
                        <span className="text-pink-700 font-black uppercase tracking-[0.4em] text-[11px] mb-3 block">
                            Dall'idea al prodotto finale passo dopo passo
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                            Il mio <span className="text-pink-500">processo</span>
                        </h2>
                        <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                    </div>

                    {/* Griglia principale */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-20 text-left relative">

                        {/* BLOCCO 1: DISCOVERY */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="w-full max-w-[360px] flex flex-col items-start text-left relative group bg-slate-900 rounded-lg p-6 shadow-lg shadow-black"
                        >
                            {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                            <span className="absolute -top-0 right-3 text-4xl font-black text-pink-100/60 select-none pointer-events-none">
                                01
                            </span>

                            <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                                {loadedIcons.search ? (
                                    <Player
                                        ref={searchRef}
                                        icon={loadedIcons.search}
                                        size={44}
                                        colorize="#be185d"
                                        loop={true}
                                        onComplete={() => searchRef.current?.playFromBeginning()}
                                    />
                                ) : (
                                    <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                                )}
                            </div>
                            <h4 className="text-xl font-black text-pink-400 mb-3 uppercase tracking-tighter">Discovery</h4>
                            <p className="text-white text-base leading-relaxed font-medium">
                                Analizziamo il brief, definiamo gli obiettivi e tracciamo la rotta del progetto.
                            </p>
                        </motion.div>

                        {/* BLOCCO 2: DESIGN & DEV */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-[360px] flex flex-col items-start text-left relative group bg-slate-900 rounded-lg p-6 shadow-lg shadow-black"
                        >
                            {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                            <span className="absolute -top-0 right-3 text-4xl font-black text-pink-100/60 select-none pointer-events-none">
                                02
                            </span>

                            <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                                {loadedIcons.computer ? (
                                    <Player
                                        ref={computerRef}
                                        icon={loadedIcons.computer}
                                        size={44}
                                        colorize="#be185d"
                                        loop={true}
                                        onComplete={() => computerRef.current?.playFromBeginning()}
                                    />
                                ) : (
                                    <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                                )}
                            </div>
                            <h4 className="text-xl font-black text-pink-400 mb-3 uppercase tracking-tighter">Design & Dev</h4>
                            <p className="text-white text-base leading-relaxed font-medium">
                                Progetto l'interfaccia pixel-perfect e la trasformo in codice scalabile e pulito.
                            </p>
                        </motion.div>

                        {/* BLOCCO 3: DELIVERY */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="w-full max-w-[360px] flex flex-col items-start text-left relative group bg-slate-900 rounded-lg p-6 shadow-lg shadow-black"
                        >
                            {/* Dettaglio di stile: Numero gigante sullo sfondo */}
                            <span className="absolute -top-0 right-3 text-4xl font-black text-pink-100/60 select-none pointer-events-none">
                                03
                            </span>

                            <div className="w-12 h-12 mb-5 text-pink-500 flex items-center justify-start">
                                {loadedIcons.rocket ? (
                                    <Player
                                        ref={rocketRef}
                                        icon={loadedIcons.rocket}
                                        size={44}
                                        colorize="#be185d"
                                        loop={true}
                                        onComplete={() => rocketRef.current?.playFromBeginning()}
                                    />
                                ) : (
                                    <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                                )}
                            </div>
                            <h4 className="text-xl font-black text-pink-400 mb-3 uppercase tracking-tighter">Delivery</h4>
                            <p className="text-white text-base leading-relaxed font-medium w-full">
                                Ottimizzazione, test rigorosi e lancio del prodotto finito nel mondo digitale.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessSection;
