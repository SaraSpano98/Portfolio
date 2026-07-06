import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Folder, List, Settings } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    category: string;
    technologies: string[];
}

interface ProjectsHeroProps {
    projects?: Project[];
    revealVariant: Variants;
}

const ProjectsHero = ({ projects = [], revealVariant }: ProjectsHeroProps) => {
    const stats = useMemo(() => {
        const totalProjects = projects.length;
        const uniqueCategories = new Set(projects.map((p) => p.category)).size;
        const uniqueTechs = new Set(projects.flatMap((p) => p.technologies)).size;

        return [
            {
                id: 1,
                label: 'Progetti Totali:',
                value: totalProjects,
                icon: Folder,
            },
            {
                id: 2,
                label: 'Categorie:',
                value: uniqueCategories,
                icon: List,
            },
            {
                id: 3,
                label: 'Tecnologie:',
                value: uniqueTechs,
                icon: Settings,
            },
        ];
    }, [projects]);

    return (
        <section className="w-full bg-white text-slate-900 px-6 sm:px-12 md:px-16 lg:px-24 pt-40 lg:pt-48 pb-28 select-none overflow-hidden relative">
            <div className="w-full mb-20">
                <div className="flex flex-col lg:flex-row justify-between gap-12 w-full items-start">

                    {/* COLONNA SINISTRA */}
                    <div className="w-full lg:max-w-2xl flex flex-col items-start text-left">
                        <div className="overflow-hidden mb-4">
                            <motion.p
                                initial="hidden" animate="visible" variants={revealVariant}
                                className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] flex items-center gap-3"
                            >
                                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                                Explore my portfolio
                            </motion.p>
                        </div>

                        <div className="mb-8">
                            <motion.h1
                                initial="hidden" animate="visible" variants={revealVariant}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tighter leading-none"
                            >
                                I miei <span className="text-pink-500">progetti</span>
                            </motion.h1>
                        </div>

                        {/* Descrizione e Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="flex flex-col gap-8 w-full"
                        >
                            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed italic border-l-4 border-slate-100 pl-8 font-medium">
                                "Ogni project è un viaggio unico, frutto di creatività, dedizione e passione per l'innovazione. Dai un'occhiata alle soluzioni che ho ingegnerizzato."
                            </p>

                            <div className="p-10 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] w-full shadow-sm">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                                    Dietro il codice
                                </span>
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                    Dai progetti personali alle collaborazioni, esplora il mio portfolio per scoprire come trasformo idee in realtà. Scopri le sfide affrontate, le soluzioni innovative e i risultati ottenuti in ogni esperienza progettuale.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* COLONNA DESTRA */}
                    <div className="w-full lg:w-auto flex flex-col items-start lg:items-end text-left lg:text-right shrink-0 lg:mt-24">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row lg:flex-col gap-10 w-full lg:w-auto justify-between lg:items-end"
                        >
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.id} className="flex lg:flex-row-reverse items-center gap-5 text-left lg:text-right">
                                        {/* Icona Rosa */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-50 border border-pink-200 rounded-[22px] flex items-center justify-center text-pink-500 shadow-sm shadow-pink-100 transition-transform duration-300 hover:scale-105 shrink-0">
                                            <Icon className="w-8 h-8 stroke-[1.5]" />
                                        </div>

                                        {/* Etichette e Contatori Tabulari */}
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-1 whitespace-nowrap">
                                                {stat.label}
                                            </p>
                                            <span className="text-4xl md:text-5xl font-light text-slate-900 tabular-nums leading-none">
                                                {stat.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;

