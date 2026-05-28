const PrerequisitiSection = () => {
    return (
        <>
            {/* SECTION 3 - PREREQUISITI */}
            <div className="w-full mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 bg-slate-900 rounded-[3rem] p-8 md:p-16 xl:p-20 text-white items-center overflow-hidden w-full relative">
                    
                    {/* Effetto luce soffusa interna per dare profondità premium alla card */}
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* COLONNA TESTO SINISTRA */}
                    <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6">
                            Prima di <span className="text-pink-500">iniziare</span>
                        </h3>
                        <p className="text-white leading-relaxed max-w-sm text-base">
                            Per garantire la massima qualità e rispettare i tempi, assicurati di avere chiari questi punti fondamentali prima del primo meeting.
                        </p>
                    </div>

                    {/* COLONNA LISTA PUNTI DESTRA */}
                    <div className="lg:col-span-7 w-full flex flex-col gap-8 relative z-10">
                        {[
                            { t: "Obiettivo Chiaro", d: "Cosa deve fare il tuo sito? Vendere, informare o emozionare?" },
                            { t: "Contenuti Pronti", d: "Testi, loghi e immagini sono la benzina del design." },
                            { t: "Budget e Timeline", d: "Aiuta a definire lo scope e la complexes tecnica fattibile." }
                        ].map((p, i) => (
                            <div key={i} className="flex items-start gap-5 border-l-2 border-white/5 hover:border-pink-500/50 pl-6 group transition-all duration-200">
                                <span className="text-pink-500 font-black tabular-nums text-sm md:text-base pt-0.5">
                                    0{i + 1}.
                                </span>
                                <div>
                                    <h5 className="font-black text-lg md:text-xl text-slate-100 group-hover:text-pink-500 transition-colors duration-200 uppercase tracking-tight">
                                        {p.t}
                                    </h5>
                                    <p className="text-slate-400 text-sm md:text-base mt-1.5 leading-relaxed font-medium max-w-md">
                                        {p.d}
                                    </p>
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

