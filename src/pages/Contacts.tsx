import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from "../lib/seo";
import { Player } from '@lordicon/react';
import KeyPoints from '../components/KeyPoints';
import { LordIcons, fetchIconData } from '../components/Lordicons';

const Contacts = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const revealVariant = {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } }
    };

    // Riferimenti per attivare l'animazione di ciascuna icona al passaggio del mouse
    const emailRef = useRef<Player>(null);
    const whatsappRef = useRef<Player>(null);
    const telephoneRef = useRef<Player>(null);
    const meetingRef = useRef<Player>(null);
    const globeRef = useRef<Player>(null);
    const linkedinRef = useRef<Player>(null);
    const githubRef = useRef<Player>(null);

    // Stato per memorizzare gli oggetti JSON reali letti asincronamente
    const [loadedIcons, setLoadedIcons] = useState<{ [key: string]: any }>({});

    // Carica tutti i file JSON memorizzati nella cartella public all'avvio del componente
    useEffect(() => {
        const loadAllIcons = async () => {
            const email = await fetchIconData(LordIcons.email);
            const whatsapp = await fetchIconData(LordIcons.whatsapp);
            const telephone = await fetchIconData(LordIcons.telephone);
            const meeting = await fetchIconData(LordIcons.meeting);
            const globe = await fetchIconData(LordIcons.globe);
            const linkedin = await fetchIconData(LordIcons.linkedin);
            const github = await fetchIconData(LordIcons.github);

            setLoadedIcons({ email, whatsapp, telephone, meeting, globe, linkedin, github });
        };
        loadAllIcons();
    }, []);

    return (
        <>
            <SEO title="Contatti" description="Parliamo del tuo prossimo progetto digitale." path="/contacts" />

            <main className="w-full min-h-screen bg-white pt-[140px] pb-32 cursor-none overflow-x-hidden">
                {/* Contenitore principale limitato geometricamente a max-w-6xl per allinearsi perfettamente all'header */}
                <div className="max-w-6xl mx-auto px-6 md:px-12">

                    {/* 1. HERO SECTION & CURRENT STATUS */}
                    <div className="flex flex-col lg:flex-row justify-between gap-16 mb-40">
                        <div className="lg:w-2/3">
                            <div className="overflow-hidden mb-6">
                                <motion.p
                                    initial="hidden" animate="visible" variants={revealVariant}
                                    className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                                    Ready for a new project
                                </motion.p>
                            </div>

                            <div className="overflow-hidden mb-10">
                                <motion.h1
                                    initial="hidden" animate="visible" variants={revealVariant}
                                    className="text-6xl md:text-[110px] font-black text-slate-900 tracking-tighter leading-[0.85] lowercase"
                                >
                                    Mettiamoci in <br /> <span className="text-pink-500">contatto</span>
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                                className="flex flex-col gap-8"
                            >
                                <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed italic border-l-4 border-slate-100 pl-8 font-medium">
                                    "Credo che la comunicazione sia la base di ogni grande prodotto digitale. Trasformo le tue idee in experiences utente fluide e codice solido."
                                </p>

                                {/* TOUCH UMANO: CURRENT STATUS */}
                                <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl max-w-xl">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">Current Status — Maggio 2024</span>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Attualmente sto approfondendo le micro-animazioni in <span className="text-slate-900 font-bold">Framer Motion</span> e lavorando su un progetto e-commerce ad alte prestazioni. Sperimento costantemente per portare valore ai miei clienti.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/3 flex flex-col justify-end items-end text-right">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Local Time / Italy</p>
                                <span className="text-5xl font-light text-slate-900 tabular-nums">{time}</span>
                                <p className="mt-4 text-slate-400 text-[10px] uppercase tracking-widest max-w-[200px]">Risposta garantita entro 24 ore lavorative</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* 2. IL MIO PROCESSO */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-slate-100 pt-20">
                        {[
                            { step: "01", title: "Discovery", desc: "Analizziamo the brief, definiaimo gli obiettivi e tracciamo la rotta del progetto." },
                            { step: "02", title: "Design & Dev", desc: "Progetto l'interfaccia pixel-perfect e la trasformo in codice scalabile e pulito." },
                            { step: "03", title: "Delivery", desc: "Ottimizzazione, test rigorosi e lancio del prodotto finito nel mondo digitale." }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                                <span className="text-pink-500 font-black text-xs block mb-4">{item.step} —</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3. PREREQUISITI: CHE COSA MI SERVE */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6 lowercase">Prima di <span className="text-pink-500">iniziare</span></h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                Per garantire la massima qualità e rispettare i tempi, assicurati di avere chiari questi punti fondamentali prima del primo meeting.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {[
                                { t: "Obiettivo Chiaro", d: "Cosa deve fare il tuo sito? Vendere, informare o emozionare?" },
                                { t: "Contenuti Pronti", d: "Testi, loghi e immagini sono la benzina del design." },
                                { t: "Budget e Timeline", d: "Aiuta a definire lo scope e la complessità tecnica fattibile." }
                            ].map((p, i) => (
                                <div key={i} className="flex items-start gap-5 border-l border-white/10 pl-6 group">
                                    <span className="text-pink-500 font-bold tabular-nums">0{i + 1}.</span>
                                    <div>
                                        <h5 className="font-bold text-lg group-hover:text-pink-500 transition-colors">{p.t}</h5>
                                        <p className="text-slate-400 text-sm">{p.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. KEY POINTS: CAROUSEL DINAMICO */}
                    <motion.div className="mb-40">
                        <KeyPoints />
                    </motion.div>

                    {/* 5. AREA CONTATTI E SOCIAL (Strutturata in griglia bilanciata 2x2 a sinistra) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 mb-40 border-t border-slate-100 pt-20">

                        {/* COLONNA SINISTRA: DIRECT INQUIRY */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-12 italic">Direct Inquiry</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">

                                    {/* EMAIL DIRETTA */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="group cursor-pointer flex flex-col justify-between"
                                        onMouseEnter={() => emailRef.current?.playFromBeginning()}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Email Diretta</span>
                                            <a href="mailto:saraspano@live.it" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.email && (
                                                    <Player ref={emailRef} icon={loadedIcons.email} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block truncate">
                                                    saraspano@live.it
                                                </span>
                                            </a>
                                            <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Il canale preferito per preventivi formali e brief di progetto dettagliati."</p>
                                        </div>
                                        <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                    </motion.div>

                                    {/* WHATSAPP BUSINESS */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="group cursor-pointer flex flex-col justify-between"
                                        onMouseEnter={() => whatsappRef.current?.playFromBeginning()}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">WhatsApp Business</span>
                                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.whatsapp && (
                                                    <Player ref={whatsappRef} icon={loadedIcons.whatsapp} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    Chat Rapida
                                                </span>
                                            </a>
                                            <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Per una comunicazione immediata, feedback veloci o semplici domande tecniche."</p>
                                        </div>
                                        <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                    </motion.div>

                                    {/* CONTATTO TELEFONICO */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="group cursor-pointer flex flex-col justify-between"
                                        onMouseEnter={() => telephoneRef.current?.playFromBeginning()}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Contatto Telefonico</span>
                                            <a href="tel:+393123456789" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.telephone && (
                                                    <Player ref={telephoneRef} icon={loadedIcons.telephone} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    +39 312 345 6789
                                                </span>
                                            </a>
                                            <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Disponibile per chiamate dirette e allineamenti rapidi sui progetti."</p>
                                        </div>
                                        <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                    </motion.div>

                                    {/* VIDEO CALL / MEETING */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="group cursor-pointer flex flex-col justify-between"
                                        onMouseEnter={() => meetingRef.current?.playFromBeginning()}
                                    >
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Video Call</span>
                                            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.meeting && (
                                                    <Player ref={meetingRef} icon={loadedIcons.meeting} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    Prenota una Call
                                                </span>
                                            </a>
                                            <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Pianifica una sessione conoscitiva su Meet o Zoom per il tuo brief."</p>
                                        </div>
                                        <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                        {/* COLONNA DESTRA: NETWORK SOCIAL */}
                        <div className="lg:col-span-4 bg-slate-50 p-10 xl:p-12 rounded-[2.5rem] self-start">
                            <div 
                                className="flex items-center gap-3 mb-10 cursor-pointer w-fit"
                                onMouseEnter={() => globeRef.current?.playFromBeginning()}
                            >
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Network</h3>
                                {loadedIcons.globe && (
                                    <Player ref={globeRef} icon={loadedIcons.globe} size={26} colors="primary:#5c0632,secondary:#e6399b" />
                                )}
                            </div>
                            
                            <div className="flex flex-col gap-8">
                                {/* LINKEDIN */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    onMouseEnter={() => linkedinRef.current?.playFromBeginning()}
                                    className="flex justify-between items-center group border-b border-slate-200 pb-6"
                                >
                                    <div className="flex items-center gap-4">
                                        {loadedIcons.linkedin && (
                                            <Player ref={linkedinRef} icon={loadedIcons.linkedin} size={36} colors="primary:#5c0632,secondary:#e6399b" />
                                        )}
                                        <span className="text-lg font-bold text-slate-900 group-hover:text-pink-500 transition-colors uppercase tracking-tighter">LinkedIn</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all text-sm">→</div>
                                </motion.a>

                                {/* GITHUB */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    onMouseEnter={() => githubRef.current?.playFromBeginning()}
                                    className="flex justify-between items-center group border-b border-slate-200 pb-6"
                                >
                                    <div className="flex items-center gap-4">
                                        {loadedIcons.github && (
                                            <Player ref={githubRef} icon={loadedIcons.github} size={36} colors="primary:#5c0632,secondary:#e6399b" />
                                        )}
                                        <span className="text-lg font-bold text-slate-900 group-hover:text-pink-500 transition-colors uppercase tracking-tighter">GitHub</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all text-sm">→</div>
                                </motion.a>
                            </div>
                        </div>

                    </div>

                    {/* 6. RIQUADRO SLOGAN FINALE CON EFFETTO TORCIA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                            const currentTarget = e.currentTarget;
                            const { left, top } = currentTarget.getBoundingClientRect();
                            currentTarget.style.setProperty("--x", `${e.clientX - left}px`);
                            currentTarget.style.setProperty("--y", `${e.clientY - top}px`);
                        }}
                        className="relative w-full bg-slate-900 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl group"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{ background: `radial-gradient(600px circle at var(--x) var(--y), rgba(236, 72, 153, 0.2), transparent 40%)` }} />

                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8 lowercase">
                                Non cerchi solo un dev. <br /> Cerchi <span className="text-pink-500 italic">visione</span> e <span className="text-pink-500">metodo</span>.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                                <motion.a whileHover={{ scale: 1.05 }} href="mailto:saraspano@live.it" className="px-14 py-6 bg-pink-500 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl">Iniziamo il progetto</motion.a>
                                <motion.a whileHover={{ scale: 1.05 }} href="#" className="px-14 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all">Prendiamo un caffè? ☕</motion.a>
                            </div>
                        </div>
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </motion.div>

                </div>
            </main>
        </>
    );
};

export default Contacts;

