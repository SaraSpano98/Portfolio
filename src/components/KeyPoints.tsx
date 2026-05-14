import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepItem {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
}

export default function KeyPoints() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepItem[] = [
    {
      step: "STEP_01",
      title: "King",
      subtitle: "Il contenuto al centro",
      desc: "Ogni interfaccia viene progettata partendo dalle reali necessità informative. Nessun elemento è decorativo: ogni blocco di testo, immagine o pulsante ha lo scopo di guidare l'utente verso l'azione richiesta, massimizzando la chiarezza visiva.",
    },
    {
      step: "STEP_02",
      title: "Tech Stack",
      subtitle: "Architettura all'avanguardia",
      desc: "Utilizzo esclusivamente tecnologie moderne e stabili come React, Vite, Next.js e Tailwind CSS. Questo garantisce che l'applicazione sia nativamente performante, ottimizzata lato SEO, sicura e pronta per scalare nel tempo senza riscritture.",
    },
    {
      step: "STEP_03",
      title: "Tempistiche",
      subtitle: "Metodo e pianificazione",
      desc: "Lavoro con roadmap trasparenti e scadenze definite. Suddivido il progetto in sprint settimanali per darti visibilità costante sullo stato di avanzamento, garantendo la consegna del codice pixel-perfect nei tempi pattuiti senza sorprese.",
    },
    {
      step: "STEP_04",
      title: "Supporto Post Launch",
      subtitle: "Monitoraggio continuo",
      desc: "Includo piani di manutenzione ordinaria, ottimizzazione delle performance e monitoraggio per correggere anomalie in tempo reale. Aggiorno le dipendenze e mantengo la struttura sempre allineata agli standard di sicurezza moderni.",
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto lg:ml-[8px]">
        
        {/* INTESTAZIONE SEZIONE CON FRECCE DI NAVIGAZIONE COMPATTE */}
        <div className="flex justify-between items-end mb-16 border-b border-slate-100 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter lowercase leading-none">
              punti <span className="text-pink-500">chiave</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">
              // selezona uno step per approfondire
            </p>
          </div>

          {/* PULSANTI FRECCE CORRETTI CON ICONE SVG CENTRATE */}
          <div className="flex gap-3 pointer-events-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 outline-none cursor-pointer"
            >
              <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 outline-none cursor-pointer"
            >
              <svg xmlns="w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
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
                className={`w-full text-left py-6 px-8 rounded-3xl transition-all duration-300 outline-none flex items-center justify-between group cursor-pointer ${
                  activeStep === index
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${
                    activeStep === index ? "text-pink-500" : "text-slate-400"
                  }`}>
                    {item.step}
                  </span>
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                    {item.title}
                  </span>
                </div>
                {/* FRECCIA CINETICA: Ruota verso l'alto all'hover sulla riga */}
                <span className={`text-xl font-light transform transition-transform duration-300 ease-out group-hover:-rotate-45 ${
                  activeStep === index ? "text-pink-500 font-bold" : "text-slate-400"
                }`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* COLONNA DESTRA: CARD DI DETTAGLIO CONTENUTA */}
          <div className="lg:col-span-7 h-full w-full">
            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-900/[0.02] relative overflow-hidden min-h-[400px] flex flex-col justify-between">
              
              {/* Effetto luce sfumata interna alla card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-6"
                >
                  <div>
                    <span className="text-pink-500 text-[11px] font-black uppercase tracking-[0.4em] block mb-3">
                      // {steps[activeStep].step}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2 leading-none">
                      {steps[activeStep].title}
                    </h3>
                    <h4 className="text-slate-400 text-sm md:text-base font-medium italic border-b border-slate-100 pb-6">
                      {steps[activeStep].subtitle}
                    </h4>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* BARRA DI AVANZAMENTO FLUIDA IN BASSO */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="w-1/3 bg-slate-100 h-[2px] rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-pink-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
                
                <div className="text-right text-[11px] font-black uppercase tracking-widest text-slate-300">
                  {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
