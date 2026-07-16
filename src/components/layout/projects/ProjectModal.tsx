import { motion } from 'framer-motion';
import { X, ExternalLink, Code, Target, Cpu, Award } from 'lucide-react';

import ClickSpark from '../../ui/ClickSpark';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    liveLink?: string;
    objectives?: string; 
    process?: string;    
    results?: string;    
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            
            {/* SFONDO SCURO SFOCATO */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-md cursor-pointer"
            />

            {/* SCHEDA DEL POP-UP AGGIORNATA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-white border border-slate-100 w-full max-w-4xl rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl overflow-y-auto max-h-[85vh] z-10 flex flex-col justify-between gap-8"
            >
                
                {/* PULSANTE DI CHIUSURA (X) */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-500 hover:border-pink-200 bg-white transition-all cursor-pointer outline-none shadow-sm z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* CONTENUTO INFORMATIVO CORRETTO */}
                <div className="flex flex-col gap-8 w-full text-start">
                    
                    {/* Intestazione e Titolo */}
                    <div>
                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
                            Project Case Study
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                            {project.title}
                        </h3>
                        
                        {/* Renderizzazione dinamica dei Tag delle Tecnologie */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="h-[3px] w-8 bg-pink-500 mt-5" />
                    </div>

                    {/* Riquadro Anteprima Immagine */}
                    <div className="w-full aspect-[16/8] bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center relative shadow-inner">
                        <span className="text-slate-400 text-xs font-black tracking-[0.2em] uppercase">
                            Anteprima Progetto
                        </span>
                    </div>

                    {/* GRIGLIA CONTENUTI ED EVOLUZIONE (CASE STUDY) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mt-2">
                        
                        {/* Descrizione Principale */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Code className="w-4 h-4 text-pink-500" /> Informazioni e Panoramica
                            </h5>
                            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Blocco 1: Obiettivi */}
                        {project.objectives && (
                            <div className="flex flex-col gap-2 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl">
                                <h5 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <Target className="w-4 h-4 text-pink-500" /> Obiettivi del Progetto
                                </h5>
                                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                                    {project.objectives}
                                </p>
                            </div>
                        )}

                        {/* Blocco 2: Processo di Sviluppo */}
                        {project.process && (
                            <div className="flex flex-col gap-2 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl">
                                <h5 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-pink-500" /> Processo e Logica
                                </h5>
                                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                                    {project.process}
                                </p>
                            </div>
                        )}

                        {/* Blocco 3: Risultati Ottenuti */}
                        {project.results && (
                            <div className="flex flex-col gap-2 p-5 bg-pink-50/20 border border-pink-100/50 rounded-2xl md:col-span-2">
                                <h5 className="text-xs font-black text-pink-600 uppercase tracking-widest flex items-center gap-2">
                                    <Award className="w-4 h-4 text-pink-500" /> Risultati Finali
                                </h5>
                                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                                    {project.results}
                                </p>
                            </div>
                        )}

                    </div>
                </div>

                {/* BOTTONI DI AZIONE IN FONDO */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end items-center w-full mt-6 pt-6 border-t border-slate-100">
                    <button
                        onClick={onClose}
                        className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-colors cursor-pointer outline-none"
                    >
                        Chiudi
                    </button>

                    <div className="w-full sm:w-auto">
                        <ClickSpark>
                            <a
                                href={project.liveLink || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-pink-500 text-white hover:bg-pink-700 font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 whitespace-nowrap cursor-pointer"
                            >
                                Visita l'App
                                <ExternalLink className="w-4 h-4 text-white" />
                            </a>
                        </ClickSpark>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
