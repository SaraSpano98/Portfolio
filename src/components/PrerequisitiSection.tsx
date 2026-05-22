const PrerequisitiSection = () => {
    return (

        <>
            {/* SECTION 3 - PREREQUISITI */}
            <div className="w-full px-10 mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white items-center overflow-hidden w-full">

                    {/* COLONNA TESTO SINISTRA */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6 lowercase">
                            Prima di <span className="text-pink-500">iniziare</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed max-w-sm text-sm md:text-base">
                            Per garantire la massima qualità e rispettare i tempi, assicurati di avere chiari questi punti fondamentali prima del primo meeting.
                        </p>
                    </div>

                    {/* COLONNA LISTA PUNTI DESTRA */}
                    <div className="lg:col-span-7 w-full flex flex-col gap-6">
                        {[
                            { t: "Obiettivo Chiaro", d: "Cosa deve fare il tuo sito? Vendere, informare o emozionare?" },
                            { t: "Contenuti Pronti", d: "Testi, loghi e immagini sono la benzina del design." },
                            { t: "Budget e Timeline", d: "Aiuta a definire lo scope e la complessità tecnica fattibile." }
                        ].map((p, i) => (
                            <div key={i} className="flex items-start gap-5 border-l border-white/10 pl-6 group">
                                <span className="text-pink-500 font-bold tabular-nums">0{i + 1}.</span>
                                <div>
                                    <h5 className="font-bold text-lg group-hover:text-pink-500 transition-colors">{p.t}</h5>
                                    <p className="text-slate-400 text-sm mt-1">{p.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>

    );
};

export default PrerequisitiSection;
