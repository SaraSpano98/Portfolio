import { ArrowUpRight } from 'lucide-react';

export default function CtaExperiencesSection() {
    return (
        /* pt-4 si attacca armoniosamente sotto i valori; pb-32 chiude alla perfezione la pagina */
        <section className="w-full bg-white text-slate-900 px-6 md:px-12 lg:px-24 pt-4 pb-32 select-none overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto">
                
                {/* RETTANGOLO MONUMENTALE SCURO - Angoli arrotondati ampi */}
                <div className="w-full bg-[#0b111e] text-white rounded-[2.5rem] p-12 py-20 text-center relative overflow-hidden shadow-2xl shadow-slate-950/20 group/cta">
                    
                    {/* Sottile pattern grid geometrico di sfondo */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                    {/* Contenuto Principale */}
                    <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto gap-10">
                        
                        {/* FRASE D'IMPATTO - Minuscolo, extra-bold e corsivo fucsia per "visione e metodo" */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tighter leading-[1.1] text-white">
                            Pronti a plasmare la <span className="text-pink-500">prossima</span> idea insieme?
                        </h2>

                        {/* I DUE PULSANTI AFFIANCATI */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            
                            {/* Pulsante Principale - Fucsia (Iniziamo il progetto / Esperienze) */}
                            <a 
                                href="/experiences" 
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ec4899] text-white font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg shadow-pink-500/20 transition-all duration-300 hover:bg-[#db2777] hover:scale-[1.02]"
                            >
                                Scopri le mie esperienze
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </a>

                            {/* Pulsante Secondario - Scuro Trasparente (Prendiamo un caffè?) */}
                            <a 
                                href="/contacts" 
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e293b]/40 text-slate-300 font-bold text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full border border-slate-700/50 transition-all duration-300 hover:bg-[#1e293b]/80 hover:text-white"
                            >
                                Prendiamo un caffè? ☕
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
