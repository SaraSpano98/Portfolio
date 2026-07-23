import { LayoutGrid, Code2, Paintbrush, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import SkillsSelectorDesign from './SkillsSelectorDesign';
import SkillsSelectorCoder from './SkillsSelectorCoder';
import ClickSpark from '../../ui/ClickSpark'; 

export default function TechProfileSection() {
    return (
        <section className="relative w-full bg-white text-slate-900 pt-20 pb-6 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
            <div className="w-full flex flex-col items-start text-start">

                {/* Titolo Principale */}
                <div className="w-full mb-14 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Skillset & Tools
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                        Le mie <span className="text-pink-500">Competenze</span>
                    </h2>

                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>

                <div className="w-full flex flex-col items-start gap-16 lg:gap-24 relative z-20">

                    {/* 1. LINEA VERTICALE ANIMATA CENTRALE */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 overflow-hidden z-10">
                        <div className="w-full h-40 bg-gradient-to-b from-transparent via-pink-500 to-indigo-500 animate-[pulse_3s_infinite] absolute top-0 left-0 right-0 rounded-full"
                            style={{
                                animationName: 'scrollLine',
                                animationDuration: '4s',
                                animationTimingFunction: 'linear',
                                animationIterationCount: 'infinite'
                            }}
                        />
                    </div>

                    <style>{`
                    @keyframes scrollLine {
                        0% { transform: translateY(-100%); }
                        100% { transform: translateY(300%); }
                    }
                `}</style>

                    {/* 2. GRIGLIA APERTA A DUE COLONNE */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full relative z-20">

                        {/* COLONNA SINISTRA: PARTE DESIGNER */}
                        <div className="flex flex-col justify-between items-start lg:pr-12 py-4 group/designer min-h-[400px]">

                            <div className="flex flex-col items-start gap-6 w-full">
                                <div>
                                    <span className="text-[15px] font-black uppercase tracking-[0.4em] text-pink-500 block mb-2 mt-3">Creative Mind</span>

                                    <div className="flex items-center gap-3 mt-5">
                                        <div className="w-12 h-12 rounded-2xl bg-pink-50/80 border border-pink-100 flex items-center justify-center text-pink-500 shadow-sm transition-transform duration-500 group-hover/designer:scale-110 group-hover/designer:rotate-3">
                                            <Paintbrush className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-950 uppercase">
                                            Parte <span className="text-pink-500">Designer</span>
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mt-5">
                                    Curo l'estetica e l'esperienza utente fin dal primo schizzo. Trasformo concetti complessi in interfacce visive pulite, moderne e soprattutto funzionali, dove ogni singolo pixel ha un preciso motivo di esistere.
                                </p>

                                {/* STACK DESIGN */}
                                <div className="w-full mt-2 mb-2">
                                    <SkillsSelectorDesign />
                                </div>
                            </div>

                            <div className="w-full mt-10 max-w-xs">
                                <ClickSpark>
                                    <Link
                                        to="/gallery"
                                        className="inline-flex items-center justify-center gap-3 bg-pink-500 text-white hover:bg-pink-700 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 group-hover/designer:-translate-y-0.5 w-full"
                                    >
                                        Esplora la Galleria
                                        <LayoutGrid className="w-4 h-4 text-white transition-transform duration-300 group-hover/designer:rotate-12" />
                                    </Link>
                                </ClickSpark>
                            </div>

                        </div>

                        {/* COLONNA DESTRA: PARTE CODER */}
                        <div className="flex flex-col justify-between items-start lg:pl-12 py-4 group/coder min-h-[400px]">
                            <div className="flex flex-col items-start gap-6 w-full">
                                <div>
                                    <span className="text-[15px] font-black uppercase tracking-[0.4em] text-indigo-500 block mb-2 mt-3">Engineering</span>

                                    <div className="flex items-center gap-3 mt-5">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm transition-transform duration-500 group-hover/coder:scale-110 group-hover/coder:rotate-3">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-950 uppercase">
                                            Parte <span className="text-indigo-500">Coder</span>
                                        </h3>
                                    </div>

                                </div>

                                <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl mt-5">
                                    Scrivo codice pulito, scalabile e ottimizzato per le performance. Amo l'architettura dei componenti logici e l'accuratezza millimetrica nel tradurre il design grafico in codice moderno e reattivo.
                                </p>

                                {/* STACK CODER */}
                                <div className="w-full mt-4 mb-2 ">
                                    <SkillsSelectorCoder />
                                </div>
                            </div>

                            <div className="w-full mt-10 max-w-xs">
                                <ClickSpark>
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group-hover/coder:-translate-y-0.5 w-full"
                                    >
                                        Guarda i Progetti
                                        <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover/coder:translate-x-0.5 group-hover/coder:-translate-y-0.5" />
                                    </Link>
                                </ClickSpark>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
