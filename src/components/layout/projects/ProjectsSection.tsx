import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ClickSpark from '../../ui/ClickSpark'; 

const featuredProjects = [
    { id: 1, title: "Titolo Progetto 1", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/1" },
    { id: 2, title: "Titolo Progetto 2", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/2" },
    { id: 3, title: "Titolo Progetto 3", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/3" },
    { id: 4, title: "Titolo Progetto 4", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/4" },
    { id: 5, title: "Titolo Progetto 5", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/5" },
    { id: 6, title: "Titolo Progetto 6", description: "Descrizione breve delle tecnologie e delle sfide.", link: "/projects/6" },
];

export default function ProjectsSection() {
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
                            className="bg-slate-50/50 border border-pink-500/30 rounded-[2rem] p-6 flex flex-col justify-between min-h-[420px] transition-all hover:shadow-lg hover:shadow-pink-500/5 group"
                        >
                            <div className="w-full flex flex-col gap-5">
                                {/* Zona Immagine */}
                                <div className="w-full aspect-[4/3] bg-white border border-slate-100 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-inner">
                                    <span className="absolute text-slate-400 text-xs font-black tracking-[0.2em] uppercase pointer-events-none group-hover:text-pink-500 transition-colors">
                                        IMMAGINE
                                    </span>
                                </div>

                                {/* Contenuto Testuale (Titolo e Descrizione) */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight line-clamp-1 group-hover:text-pink-500 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Pulsante Dettagli a Fondo Card Avvolto da ClickSpark */}
                            <div className="w-fit mt-6">
                                <ClickSpark>
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider text-slate-950 hover:text-pink-500 transition-all py-2 pr-4 whitespace-nowrap"
                                    >
                                        Dettagli →
                                    </Link>
                                </ClickSpark>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
