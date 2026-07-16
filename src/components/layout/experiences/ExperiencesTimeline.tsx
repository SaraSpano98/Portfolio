import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Calendar, Briefcase, Cpu, ShieldCheck } from 'lucide-react';

interface ExperiencesTimelineProps {
    revealVariant?: Variants;
}

// Struttura i dati ricavati dal tuo screenshot
const experiencesData = [
    {
        id: 1,
        company: "Trep DigitalX",
        role: "Web Developer front-end",
        type: "Stage da remoto",
        location: "Bergamo, Italia",
        period: "10/2025 – 01/2026",
        description: "Presso l'agenzia Web Trep DigitalX, ho avuto l'opportunità di sviluppare diversi progetti reali e di rilievo, dove ho acquisito nuove competenze, riuscendo ad ottenere dei lavori fatti bene ed ottimizzati dal punto di vista SEO, curando il design UX/UI: sviluppo di due siti web dedicati ai servizi di energia elettrica per conto di due loro clienti: marketing, prodotti, servizi consulenza. Due progetti di rilievo, scalabile, design moderno (UX/UI) e responsivo, oltre al traduttore tramite plugin.",
        skills: ["Front-End Dev", "UX/UI Design", "SEO Optimization", "Scalable Architecture"]
    },
    {
        id: 2,
        company: "Silken Srl",
        role: "Sviluppatore front-end",
        type: "Stage da remoto",
        location: "Bergamo, Italia",
        period: "10/2025 – 01/2026",
        description: "Stage, a contatto con l'azienda Silken Srl, di cui abbiamo sviluppato lo spin-off del sito principale dell'azienda, dedicato ad un servizio di Intelligenza Artificiale, automazioni AI, sviluppo di agenti AI personalizzati, SEO AI, Consulenza e formazione AI. Un progetto di rilievo, scalabile, design moderno (UX/UI) e responsivo, migliorando il sito dal punto di vista SEO e marketing, anche attraverso una ricerca di mercato con l'obiettivo di dare visibilità.",
        skills: ["AI Agents", "AI Automation", "AI SEO", "Market Research", "React"]
    }
];

export default function ExperiencesTimeline({ revealVariant }: ExperiencesTimelineProps) {
    return (
        <section className="w-full bg-white pb-24 px-6 sm:px-12 md:px-16 lg:px-24 select-none relative z-10">
            <div className="w-full max-w-5xl mx-auto relative">
                
                {/* LINEA VERTICALE DI BACKGROUND DELLA TIMELINE */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0 hidden sm:block" />

                {/* CICLO DELLE ESPERIENZE */}
                <div className="flex flex-col gap-16 md:gap-24 relative z-10 w-full">
                    {experiencesData.map((exp, index) => {
                        // Alterna l'allineamento a sinistra e destra sui monitor grandi
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={exp.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={revealVariant}
                                className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                                    isEven ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* 1. BLOCCO SCHEDA CONTENUTO */}
                                <div className="w-full md:w-[45%]">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-slate-50/60 border border-slate-100 rounded-[2rem] p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-pink-500/20 flex flex-col gap-4 text-start relative group"
                                    >
                                        {/* Intestazione Azienda e Tipo */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-pink-500 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                                                <Briefcase className="w-3.5 h-3.5 text-pink-500" />
                                                {exp.company} — {exp.type}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight mt-1 group-hover:text-pink-500 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <span className="text-xs text-slate-400 font-light italic">
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Descrizione Testuale Completa */}
                                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Elenco dei Tag delle Competenze Acquisite */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span key={idx} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-white border border-slate-200 text-slate-400 rounded-md">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* 2. NODO CENTRALE ESTETICO (IL CERCHIETTO SULLA LINEA) */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-pink-500 shadow-md flex items-center justify-center z-20 hidden sm:flex">
                                    {isEven ? <ShieldCheck className="w-3 h-3 text-white" /> : <Cpu className="w-3 h-3 text-white" />}
                                </div>

                                {/* 3. DATA LATERALE OPPOSTA */}
                                <div className={`w-full md:w-[45%] flex items-center mt-3 md:mt-0 ${
                                    isEven ? 'justify-start md:pr-12' : 'justify-start md:justify-end md:pl-12'
                                }`}>
                                    <span className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-inner">
                                        <Calendar className="w-3.5 h-3.5 text-pink-500" />
                                        {exp.period}
                                    </span>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
