import { motion } from 'framer-motion';

const ProcessSection = () => {
    return (
        <>
            {/* SECTION 2 - PROCESSO */}
            <div className="w-full px-10 -mt-6 mb-24 border-t border-slate-100 pt-14">

                
                <div className="w-full flex flex-col md:flex-row justify-between gap-10 xl:gap-16 text-left">

                    {/* BLOCCO 1: DISCOVERY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="w-full md:max-w-[300px] flex flex-col items-start text-left"
                    >
                        <span className="text-pink-500 font-black text-xs block mb-4">01 —</span>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Discovery</h4>
                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                            Analizziamo the brief, definiamo gli obiettivi e tracciamo la rotta del progetto.
                        </p>
                    </motion.div>

                    {/* BLOCCO 2: DESIGN & DEV */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:max-w-[300px] flex flex-col items-start text-left"
                    >
                        <span className="text-pink-500 font-black text-xs block mb-4">02 —</span>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Design & Dev</h4>
                        <p className="text-slate-600 text-base leading-relaxed font-medium">
                            Progetto l'interfaccia pixel-perfect e la trasformo in codice scalabile e pulito.
                        </p>
                    </motion.div>

                    {/* BLOCCO 3: DELIVERY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full md:max-w-[450px] flex flex-col items-start text-left"
                    >
                        <span className="text-pink-500 font-black text-xs block mb-4">03 —</span>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Delivery</h4>
                        <p className="text-slate-600 text-base leading-relaxed font-medium w-full">
                            Ottimizzazione, test rigorosi e lancio del proudutto finito nel mondo digitale.
                        </p>
                    </motion.div>

                </div>
            </div>
        </>

    );
};

export default ProcessSection;
