import { LayoutGrid, Code2, Paintbrush, ArrowUpRight } from 'lucide-react';

import SkillsSelectorDesign from './SkillsSelectorDesign';
import SkillsSelectorCoder from './SkillsSelectorCoder';


export default function TechProfileSection() {
    return (
        <section className="w-full bg-white text-slate-900 px-6 md:px-12 lg:px-24 pt-4 pb-24 select-none overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto relative">

                {/* Titolo Principale */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tighter text-slate-950 flex flex-wrap items-start justify-start gap-5 leading-none mb-16">
                    Le mie <span className="text-pink-500">competenze</span>
                </h1>

                {/* 1. LA LINEA VERTICALE ANIMATA CENTRALE */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 overflow-hidden z-10">
                    {/* L'impulso luminoso che scorre verso il basso */}
                    <div className="w-full h-40 bg-gradient-to-b from-transparent via-pink-500 to-indigo-500 animate-[pulse_3s_infinite] absolute top-0 left-0 right-0 rounded-full"
                        style={{
                            animationName: 'scrollLine',
                            animationDuration: '4s',
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite'
                        }}
                    />
                </div>

                {/* Stile CSS nativo iniettato per l'animazione della linea senza librerie esterne */}
                <style>{`
                    @keyframes scrollLine {
                        0% { transform: translateY(-100%); }
                        100% { transform: translateY(300%); }
                    }
                `}</style>

                {/* 2. GRIGLIA APERTA A DUE COLONNE (SENZA BOX BIANCHI) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full relative z-20">

                    {/* COLONNA SINISTRA: PARTE DESIGNER */}
                    <div className="flex flex-col justify-between items-start lg:pr-12 py-4 group/designer min-h-[400px]">

                        <div className="flex flex-col items-start gap-6 w-full">
                            
                            {/* Icona Fluttuante Minimal */}
                            <div className="w-12 h-12 rounded-2xl bg-pink-50/80 border border-pink-100 flex items-center justify-center text-pink-500 shadow-sm transition-transform duration-500 group-hover/designer:scale-110 group-hover/designer:rotate-3">
                                <Paintbrush className="w-5 h-5" />
                            </div>

                            {/* Titoli grandi e d'impatto */}
                            <div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-pink-500 block mb-2">Creative Mind</span>
                                <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-950 uppercase">
                                    Parte <span className="text-pink-500">Designer</span>
                                </h3>
                            </div>

                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl">
                                Curo l'estetica e l'esperienza utente fin dal primo schizzo. Trasformo concetti complessi in interfacce visive pulite, moderne e soprattutto funzionali, dove ogni singolo pixel ha un preciso motivo di esistere.
                            </p>

                            {/* Stack Design Elegante (Pillole minimali che si accendono all'hover della colonna) */}
                            <div className="w-full mt-2 mb-2">
                                 <SkillsSelectorDesign />
                            </div>
                        </div>

                        {/* Pulsante Esplora */}
                        <div className="w-full mt-10">
                            <a
                                href="/gallery"
                                className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/20 group-hover/designer:-translate-y-0.5"
                            >
                                Esplora la Galleria
                                <LayoutGrid className="w-4 h-4 text-pink-400 transition-transform duration-300 group-hover/designer:rotate-12" />
                            </a>
                        </div>

                    </div>

                    {/* COLONNA DESTRA: PARTE CODER */}
                    <div className="flex flex-col justify-between items-start lg:pl-12 py-4 group/coder min-h-[400px]">

                        <div className="flex flex-col items-start gap-6 w-full">
                            {/* Icona Fluttuante Minimal */}
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm transition-transform duration-500 group-hover/coder:scale-110 group-hover/coder:rotate-3">
                                <Code2 className="w-5 h-5" />
                            </div>

                            {/* Titoli grandi e d'impatto */}
                            <div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500 block mb-2">Engineering</span>
                                <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-950 uppercase">
                                    Parte <span className="text-indigo-600">Coder</span>
                                </h3>
                            </div>

                            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl">
                                Scrivo codice pulito, scalabile e ottimizzato per le performance. Amo l'architettura dei componenti logici e l'accuratezza millimetrica nel tradurre il design grafico in codice moderno e reattivo.
                            </p>

                            {/* Stack Coder Elegante (Pillole minimali che si accendono all'hover della colonna) */}
                            <div className="w-full mt-4 mb-2 ">
                               <SkillsSelectorCoder />
                            </div>
                        </div>

                        {/* Pulsante Progetti */}
                        <div className="w-full mt-10">
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-md transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 group-hover/coder:-translate-y-0.5"
                            >
                                Guarda i Progetti
                                <ArrowUpRight className="w-4 h-4 text-indigo-400 transition-transform duration-300 group-hover/coder:translate-x-0.5 group-hover/coder:-translate-y-0.5" />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
