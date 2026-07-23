import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

import ClickSpark from '../../ui/ClickSpark';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECTS } from '../../../data/projectsData';

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<typeof FEATURED_PROJECTS[number] | null>(null);
    const [activeFilter, setActiveFilter] = useState<'tutti' | 'finito' | 'in-corso' | 'da-realizzare'>('tutti');
    const carouselRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState(0);
    
    const filteredProjects = FEATURED_PROJECTS.filter(project => {
        if (activeFilter === 'tutti') return true;
        return project.status === activeFilter;
    });

    useEffect(() => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const scrollWidth = carouselRef.current.scrollWidth;
            setMaxScroll(containerWidth - scrollWidth);
        }
    }, [activeFilter]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const offset = direction === 'left' ? -400 : 400;
            carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full bg-white pt-16 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none overflow-hidden">
            <div className="w-full max-w-8xl mx-auto flex flex-col items-start text-start">

                {/* INTESTAZIONE SEZIONE CON CONTROLLI CAROSELLO */}
                <div className="w-full mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                    <div className="flex flex-col items-start">
                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                            Projects & Works
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none flex flex-row flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap">
                            <span>My</span>
                            <span className="text-pink-500">work</span>
                        </h2>
                        <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                    </div>

                    {/* Frecce di navigazione per Desktop */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            onClick={() => handleScroll('left')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-500 hover:border-pink-500 transition-all cursor-pointer bg-white shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-500 hover:border-pink-500 transition-all cursor-pointer bg-white shadow-sm"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* BOTTONI DI FILTRARE LO STATO PROGETTI */}
                <div className="flex flex-wrap gap-2.5 mb-12 mt-2 w-full border-b border-slate-100 pb-6">
                    {[
                        { id: 'tutti', label: 'Tutti i progetti' },
                        { id: 'finito', label: 'Finiti' },
                        { id: 'in-corso', label: 'In corso' },
                        { id: 'da-realizzare', label: 'Da realizzare' }
                    ].map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id as 'tutti' | 'finito' | 'in-corso' | 'da-realizzare')}
                            className={`text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${activeFilter === filter.id
                                    ? 'bg-pink-500/10 text-pink-600 border-pink-300 shadow-sm'
                                    : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* CONTENITORE ANIMATO DEL CAROSELLO */}
                <div className="w-full relative">
                    <AnimatePresence mode="wait">
                        {filteredProjects.length === 0 ? (
                            <motion.p
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="text-slate-400 text-sm font-medium italic py-12 pl-2"
                            >
                                Nessun progetto presente in questa categoria al momento.
                            </motion.p>
                        ) : (
                            <motion.div
                                key={activeFilter}
                                ref={carouselRef}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-6"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: maxScroll }}
                                    className="flex gap-8 shrink-0"
                                >
                                    {filteredProjects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="w-[310px] sm:w-[360px] md:w-[400px] shrink-0 snap-start bg-slate-50/50 border border-pink-500/20 rounded-[2.5rem] p-6 flex flex-col justify-between min-h-[480px] transition-all hover:shadow-xl hover:shadow-pink-500/5 hover:border-pink-500/40 group relative"
                                        >
                                            <div className="w-full flex flex-col gap-5">
                                                {/* Zona Immagine con Stato Integrato */}
                                                <div className="w-full aspect-[4/3] bg-white border border-slate-100 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-inner">

                                                    {/* Badge dello Stato Dinamico */}
                                                    <span className={`absolute top-3 left-3 text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border z-10 ${project.status === 'finito' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                                            project.status === 'in-corso' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                                                                'bg-indigo-50 text-indigo-600 border-indigo-200'
                                                        }`}>
                                                        {project.status.replace('-', ' ')}
                                                    </span>

                                                    <span className="absolute text-slate-400 text-xs font-black tracking-[0.2em] uppercase pointer-events-none group-hover:text-pink-500 transition-colors">
                                                        IMMAGINE
                                                    </span>
                                                </div>

                                                {/* Dettagli Testuali */}
                                                <div className="flex flex-col gap-3">
                                                    <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight line-clamp-1 group-hover:text-pink-500 transition-colors">
                                                        {project.title}
                                                    </h4>

                                                    <div className="flex flex-wrap gap-1.5 mb-1">
                                                        {project.tags.slice(0, 3).map((tag, index) => (
                                                            <span key={index} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-white border border-slate-200 text-slate-500 rounded-md">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {project.tags.length > 3 && (
                                                            <span className="text-[9px] font-black px-2 py-1 bg-pink-50 text-pink-500 rounded-md border border-pink-100">
                                                                +{project.tags.length - 3}
                                                            </span>
                                                        )}
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
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>

            {/* SEZIONE POP-UP COMPLETA */}
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

