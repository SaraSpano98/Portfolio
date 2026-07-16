import { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { ArrowUpRight } from 'lucide-react';

import ClickSpark from '../../ui/ClickSpark'; 
import ProjectModal from './ProjectModal';

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

const featuredProjects: Project[] = [
    { 
        id: 1, 
        title: "SoulMatrix Web App", 
        description: "Applicazione web interattiva per il calcolo di mappe numerologiche. Gestisce algoritmi complessi per generare grafici personalizzati su talenti, karma e relazioni, con un'interfaccia utente immersiva e responsive.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        liveLink: "https://tuo-link-soulmatrix.com",
        objectives: "Sviluppare un motore di calcolo numerologico istantaneo basato sulla data di nascita, eliminando la necessità di elaborazioni manuali e offrendo un'esperienza grafica immersiva sia in modalità chiara che scura.",
        process: "Architettura dei componenti logici strutturata per mappare gli algoritmi degli archetipi karmici. Ottimizzazione delle performance di rendering e implementazione di animazioni matematiche fluide per i nodi grafici.",
        results: "Riduzione a zero dei tempi di attesa per la generazione della mappa, un'interfaccia responsive che mantiene la complessità visiva intatta su mobile e un codice modulare scalabile per future integrazioni.",
    },
    { id: 2, title: "Titolo Progetto 2", description: "Descrizione breve delle tecnologie e delle sfide.", tags: ["HTML", "CSS", "JS"], liveLink: "#" },
    { id: 3, title: "Titolo Progetto 3", description: "Descrizione breve delle tecnologie e delle sfide.", tags: ["React", "Node.js"], liveLink: "#" },
    { id: 4, title: "Titolo Progetto 4", description: "Descrizione breve delle tecnologie e delle sfide.", tags: ["Next.js", "Tailwind"], liveLink: "#" },
    { id: 5, title: "Titolo Progetto 5", description: "Descrizione breve delle tecnologie e delle sfide.", tags: ["TypeScript", "Vite"], liveLink: "#" },
    { id: 6, title: "Titolo Progetto 6", description: "Descrizione breve delle tecnologie e delle sfide.", tags: ["React Native"], liveLink: "#" },
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="relative w-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
            <div className="w-full max-w-8xl mx-auto flex flex-col items-start text-start">
                <div className="w-full mb-14 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Projects & Works
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none flex flex-row flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap">
                        <span>Progetti in</span>
                        <span className="text-pink-500">evidenza</span>
                    </h2>
                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>

                {/* 2. GRIGLIA REATTIVA A 2 RIGHE X 3 COLONNE */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8 xl:gap-10 w-full">
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="bg-slate-50/50 border border-pink-500/30 rounded-[2rem] p-6 flex flex-col justify-between min-h-[460px] transition-all hover:shadow-lg hover:shadow-pink-500/5 group"
                        >
                            <div className="w-full flex flex-col gap-5">
                                {/* Zona Immagine */}
                                <div className="w-full aspect-[4/3] bg-white border border-slate-100 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-inner">
                                    <span className="absolute text-slate-400 text-xs font-black tracking-[0.2em] uppercase pointer-events-none group-hover:text-pink-500 transition-colors">
                                        IMMAGINE
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight line-clamp-1 group-hover:text-pink-500 transition-colors">
                                        {project.title}
                                    </h4>
                                    
                                    {/* Piccola lista di tag tecnologici visibile sulla card */}
                                    <div className="flex flex-wrap gap-2 mb-1">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-white border border-slate-200 text-slate-500 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full mt-6">
                                <ClickSpark>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-pink-500 text-white hover:bg-pink-700 font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 whitespace-nowrap cursor-pointer outline-none border-none"
                                    >
                                        Dettagli progetto
                                        <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </button>
                                </ClickSpark>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* SEZIONE POP-UP: Avvolta da AnimatePresence per non bloccare l'effetto di chiusura exit */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
