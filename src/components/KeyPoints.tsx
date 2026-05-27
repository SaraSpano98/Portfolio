import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from '@lordicon/react';

interface StepItem {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  iconKey: string;
  ref: React.RefObject<Player | null>;
}

interface KeyPointsProps {
  loadedIcons: { [key: string]: object };
  refs: {
    starRef: React.RefObject<Player | null>;
    toolRef: React.RefObject<Player | null>;
    clockRef: React.RefObject<Player | null>;
    consultationRef: React.RefObject<Player | null>;
  };
}

export default function KeyPoints({ loadedIcons, refs }: KeyPointsProps) {
  const { starRef, toolRef, clockRef, consultationRef } = refs;
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepItem[] = useMemo(
    () => [
      {
        step: "STEP_01",
        title: "King",
        subtitle: "Il contenuto al centro",
        desc: "Ogni interfaccia viene progettata partendo dalle reali necessità informative. Nessun elemento è decorativo: ogni blocco di testo, immagine o pulsante ha lo scopo di guidare l'utente verso l'azione richiesta, massimizzando la chiarezza visiva.",
        iconKey: "star",
        ref: starRef,
      },
      {
        step: "STEP_02",
        title: "Tech Stack",
        subtitle: "Architettura all'avanguardia",
        desc: "Utilizzo esclusivamente tecnologie moderne e stabili come React, Vite, Next.js e Tailwind CSS. Questo garantisce che l'applicazione sia nativamente performante, ottimizzata lato SEO, sicura e pronta per scalare nel tempo senza riscritture.",
        iconKey: "tool",
        ref: toolRef,
      },
      {
        step: "STEP_03",
        title: "Tempistiche",
        subtitle: "Metodo e pianificazione",
        desc: "Lavoro con roadmap trasparenti e scadenze definite. Suddivido il progetto in sprint settimanali per darti visibilità costante sullo stato di avanzamento, garantendo la consegna del codice pixel-perfect nei tempi pattuiti senza sorprese.",
        iconKey: "clock",
        ref: clockRef,
      },
      {
        step: "STEP_04",
        title: "Supporto Post Launch",
        subtitle: "Monitoraggio continuo",
        desc: "Includo piani di manutenzione ordinaria, ottimizzazione delle performance e monitoraggio per correggere anomalie in tempo reale. Aggiorno le dipendenze e mantengo la struttura sempre allineata agli standard di sicurezza moderni.",
        iconKey: "consultation",
        ref: consultationRef,
      },
    ],
    [starRef, toolRef, clockRef, consultationRef]
  );

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };


  useEffect(() => {
    const currentRef = steps[activeStep]?.ref;

    const timer = setTimeout(() => {
      if (currentRef && currentRef.current) {
        currentRef.current.playFromBeginning();
      }
    }, 60);
    return () => clearTimeout(timer);
  }, [activeStep, steps, loadedIcons]);

  const currentIconKey = steps[activeStep]?.iconKey;
  const currentRef = steps[activeStep]?.ref;

  return (
    <section className="w-full bg-white pt-10 pb-24">
      <div className="w-full mx-auto">

        {/* INTESTAZIONE SEZIONE CON FRECCE DI NAVIGAZIONE COMPATTE */}
        <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter lowercase leading-none">
              punti <span className="text-pink-500">chiave</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">
              // seleziona uno step per approfondire
            </p>
          </div>

          {/* PULSANTI FRECCE */}
          <div className="flex gap-3 pointer-events-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 outline-none cursor-pointer"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 outline-none cursor-pointer"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* STRUTTURA DEL LAYOUT INTERATTIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* COLONNA SINISTRA: SELEZIONE TITOLI */}
          <div className="lg:col-span-5 flex flex-col gap-3 w-full">
            {steps.map((item, index) => (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-6 px-8 rounded-3xl transition-all duration-300 outline-none flex items-center justify-between group cursor-pointer ${activeStep === index
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${activeStep === index ? "text-pink-500" : "text-slate-400"
                    }`}>
                    {item.step}
                  </span>
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                    {item.title}
                  </span>
                </div>

                <span className={`text-xl font-light transform transition-transform duration-300 ease-out group-hover:-rotate-45 ${activeStep === index ? "text-pink-500 font-bold" : "text-slate-400"
                  }`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* COLONNA DESTRA: CARD DI DETTAGLIO CONTENUTA COMPLETA */}
          <div className="lg:col-span-7 h-full w-full">
            {/* Sfondo tridimensionale sfumato e bordi morbidi */}
            <div className="bg-gradient-to-br from-slate-50/60 via-white to-pink-50/40 border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-900/[0.01] relative overflow-hidden min-h-[400px] flex flex-col justify-between">

              {/* Effetti luce soffusa interna potenziati */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/[0.07] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-slate-500/[0.03] rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-pink-500 text-[11px] font-black uppercase tracking-[0.4em] block mb-3">
                        {steps[activeStep].step}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2 leading-none">
                        {steps[activeStep].title}
                      </h3>
                      {/* Sottotitolo colorato coerente con il brand */}
                      <h4 className="text-pink-600/80 text-sm md:text-base font-semibold italic">
                        {steps[activeStep].subtitle}
                      </h4>
                    </div>

                    {/* Icona animata in loop automatico costante e forzato */}
                    <div className="w-16 h-16 text-pink-500 flex items-center justify-center bg-pink-50/60 border border-pink-100/40 rounded-2xl p-2 shrink-0 shadow-inner">
                      {loadedIcons[currentIconKey] ? (
                        <Player
                          ref={currentRef}
                          icon={loadedIcons[currentIconKey]}
                          size={44}
                          colorize="#ec4899"
                          onComplete={() => currentRef?.current?.playFromBeginning()}

                        />
                      ) : (
                        <div className="w-5 h-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                  </div>

                  {/* Separatore colorato e testo descrittivo ad alto contrasto */}
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium border-t border-pink-100/50 pt-6">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

