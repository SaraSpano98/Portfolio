import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface ExperiencesHeroProps {
    revealVariant?: Variants;
}

export default function ExperiencesHero({ revealVariant }: ExperiencesHeroProps) {
    return (
        <div className="w-full bg-white pt-24 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 select-none">
            <div className="w-full max-w-8xl mx-auto flex flex-col items-start text-start">
                
                {/* Badge Superiore */}
                <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3 block">
                    My Journey
                </span>

                {/* Titolo Principale con parola in evidenza statico (per coerenza con gli H2/H1 di sezione) */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={revealVariant}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tighter leading-none flex flex-row flex-nowrap items-center justify-start gap-x-3 whitespace-nowrap uppercase"
                >
                    <span>Il mio</span>
                    <span className="text-pink-500">Percorso</span>
                </motion.h1>

                {/* Linea Rosa Decorativa */}
                <div className="h-[3px] w-8 bg-pink-500 mt-4" />

                {/* Sottotitolo descrittivo breve */}
                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-6">
                    Le tappe, i progetti reali e le sfide ingegneristiche sul campo che hanno strutturato la mia visione di sviluppo front-end, design interattivo e automazione.
                </p>
            </div>
        </div>
    );
}
