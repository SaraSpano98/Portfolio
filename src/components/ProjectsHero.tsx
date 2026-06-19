import { useMemo } from 'react';
import { FolderIcon, ListIcon, CogIcon } from 'lucide-react';

// Definiamo l'interfaccia direttamente nel file se non la importi
interface Project {
    id: string;
    title: string;
    category: string;
    technologies: string[];
}

interface ProjectsHeroProps {
    projects?: Project[];
}

export default function ProjectsHero({ projects = [] }: ProjectsHeroProps) {
    // Calcolo dinamico dei dati per evitare ricalcoli inutili
    const stats = useMemo(() => {
        const totalProjects = projects.length;

        // Estrae le categorie uniche
        const uniqueCategories = new Set(projects.map((p) => p.category)).size;

        // Estrae le tecnologie uniche combinando tutti gli array
        const uniqueTechs = new Set(projects.flatMap((p) => p.technologies)).size;

        return [
            {
                id: 1,
                label: 'PROGETTI TOTALI:',
                value: totalProjects,
                icon: FolderIcon,
            },
            {
                id: 2,
                label: 'CATEGORIE:',
                value: uniqueCategories,
                icon: ListIcon,
            },
            {
                id: 3,
                label: 'TECNOLOGIE:',
                value: uniqueTechs,
                icon: CogIcon,
            },
        ];
    }, [projects]);

    return (
        <section className="w-full bg-white text-slate-900 md:px-12 lg:px-24 pt-4 pb-32 select-none overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto">
            
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tighter leading-[1.1] text-slate-900">
                    I miei <span className="text-pink-500">progetti</span>
                </h2>
                
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl">
                    Dai progetti personali alle collaborazioni, esplora il mio portfolio per scoprire come trasformo idee in realtà. Ogni progetto è un viaggio unico, frutto di creatività, dedizione e passione per l'innovazione. Scopri le sfide affrontate, le soluzioni innovative e i risultati ottenuti in ogni esperienza progettuale.
                </p>

                {/* Sezione Statistiche (Griglia Dinamica) */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.id} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                                {/* Contenitore Icona in stile Rosa */}
                                <div className="w-20 h-20 bg-pink-50 border-2 border-pink-400 rounded-2xl flex items-center justify-center text-pink-500 shadow-sm shadow-pink-100">
                                    <Icon className="w-10 h-10 stroke-[1.5]" />
                                </div>

                                {/* Testo e Valore */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-bold tracking-wider text-slate-800 uppercase">
                                        {stat.label}
                                    </span>
                                    <span className="text-3xl font-black text-pink-500">
                                        {stat.value}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
