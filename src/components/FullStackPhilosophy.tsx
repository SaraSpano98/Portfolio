export default function FullStackPhilosophy() {
    return (
        <section className="relative w-full bg-white pt-24 pb-6 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
        
            <div className="w-full flex flex-col items-start text-start">
                <div className="w-full mb-16 md:mb-20 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Full-Stack Philosophy
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                        Sviluppo <span className="text-pink-500">integrale</span>
                    </h2>

                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>


                <div className="flex flex-col lg:flex-row justify-between gap-16 w-full items-start">
                    <div className="flex flex-col gap-14 w-full lg:max-w-4xl items-start">
                        
                        <h3 className="text-3xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.15] tracking-tighter w-full">
                            Non scrivo solo codice. Costruisco <span className="text-pink-500 italic font-medium">ecosistemi</span> digitali performanti.
                        </h3>

                        {/* GRIGLIA PER LE DUE COLONNINE*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pl-8 border-l-2 border-slate-100 w-full">
                            
                            {/* Scheda 1: VISIONE ARCHITETTURALE */}
                            <div className="flex flex-col gap-3">
                                <span className="text-pink-500 font-black text-[18px] md:text-[17px] lg:text-[16px]  tracking-widest">
                                    VISIONE ARCHITETTURALE
                                </span>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">
                                    La mia forza risiede nel comprendere l'intero flusso di un'applicazione. Dalla progettazione del database alla gestione delle API, ogni scelta tecnica è finalizzata alla scalabilità e alla sicurezza del prodotto.
                                </p>
                            </div>

                            {/* Scheda 2: ESPERIENZA UTENTE */}
                            <div className="flex flex-col gap-3">
                                <span className="text-pink-500 font-black text-[18px] md:text-[17px] lg:text-[16px] tracking-widest">
                                    ESPERIENZA UTENTE
                                </span>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">
                                    Essere una sviluppatrice completa significa non sacrificare mai l'estetica per la funzione. Integro design d'avanguardia con logiche di backend complesse, garantendo performance che superano gli standard.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* PREPARAZIONE PER IMMAGINE FUTURA  */}
                    {/* 
                    <div className="w-full lg:max-w-md shrink-0 rounded-[2.5rem] overflow-hidden bg-slate-100 h-[350px]">
                        <img src="/percorso-tua-immagine.jpg" alt="Philosophy Graphics" className="w-full h-full object-cover" />
                    </div> 
                    */}

                </div>

            </div>
        </section>
    );
}
