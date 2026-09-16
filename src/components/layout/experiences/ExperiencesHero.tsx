import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import TextType from '../../ui/TextType';

interface ExperiencesHeroProps {
    revealVariant?: Variants;
}

export default function ExperiencesHero({ revealVariant }: ExperiencesHeroProps) {
    return (
        <div className="w-full bg-white pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-24 px-6 sm:px-12 md:px-16 lg:px-24 select-none z-10">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-start text-start justify-start">
                <div className="overflow-hidden mb-4">
                        <motion.p
                            initial="hidden" animate="visible" variants={revealVariant}
                            className="text-pink-700 font-black uppercase tracking-[0.4em] text-[12px] flex items-center justify-center gap-3"
                        >
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                            My Journey & Experiences
                        </motion.p>
                    </div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={revealVariant}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-slate-900 tracking-tighter leading-tight flex flex-row flex-nowrap items-center justify-start gap-x-4 sm:gap-x-5 whitespace-nowrap"
                >
                    <span>Il mio</span>
                    <span className="text-pink-500 inline-block">
                        <TextType
                            text="Percorso"
                            className="inline-flex items-center justify-center m-0 p-0"
                        />
                    </span>
                </motion.h1>
               
                <div className="h-[3px] w-8 bg-pink-500 mt-6" />

                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-8">
                    Le tappe, i progetti reali e le sfide ingegneristiche sul campo che hanno strutturato la mia visione di sviluppo front-end, design interattivo e automazione.
                </p>
            </div>
        </div>
    );
}

