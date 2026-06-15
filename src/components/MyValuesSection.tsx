import React from 'react';
import { Lightbulb, Handshake, Star, Heart } from 'lucide-react'; 

// 1. DEFINIZIONE DELL'INTERFACCIA (TypeScript)
interface ValueItem {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
    themeColor: string; 
    bgColor: string;   
    textColor: string;  
}


// 2. COSTANTE CON I DATI DEI 4 VALORI
const valuesData: ValueItem[] = [
    {
        id: "innovazione",
        title: "Innovazione",
        description: "Sperimento costantemente nuove tecnologie e approcci di design per anticipare i trend e offrire soluzioni digitali sempre all'avanguardia.",
        icon: Lightbulb,
        themeColor: "from-pink-500 via-purple-500 to-indigo-500",
        bgColor: "bg-purple-50/50",
        textColor: "text-violet-600"
    },
    {
        id: "collaborazione",
        title: "Collaborazione",
        description: "Credo nel potere della condivisione e del lavoro di squadra. Ascolto e comunico in modo trasparente per far crescere ogni progetto insieme.",
        icon: Handshake,
        themeColor: "from-blue-500 via-cyan-500 to-teal-400",
        bgColor: "bg-blue-50/50",
        textColor: "text-blue-600"
    },
    {
        id: "eccellenza",
        title: "Eccellenza",
        description: "Curo ogni singolo pixel e ogni riga di codice con precisione millimetrica, puntando a performance elevate e a una qualità senza compromessi.",
        icon: Star,
        themeColor: "from-green-500 via-lime-500 to-yellow-500",
        bgColor: "bg-emerald-50/50",
        textColor: "text-green-600"
    },
    {
        id: "passione",
        title: "Passione",
        description: "Il mio lavoro è anche la mia più grande dedizione. Metto energia, curiosità ed entusiasmo in tutto ciò che progetto e sviluppo.",
        icon: Heart,
        themeColor: "from-yellow-500 via-orange-500 to-red-600",
        bgColor: "bg-amber-50/50",
        textColor: "text-red-600"
    }
];


export default function MyValuesSection() {
    return (
        <section className="w-full bg-white text-slate-900 px-6 md:px-12 lg:px-24 pt-12 pb-32 select-none overflow-hidden relative">
            <div className="w-full max-w-7xl mx-auto">

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-none mb-20">
                    I miei <span className="text-pink-500">valori</span>
                </h2>

                {/* Griglia a 4 colonne responsive (1 colonna su mobile, 2 su tablet, 4 su desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-12 w-full">
                    {valuesData.map((value) => {
                        const IconComponent = value.icon;
                        return (
                            <div 
                                key={value.id} 
                                className="flex flex-col items-center lg:items-start text-center lg:text-left group/value"
                            >
                                <div className={`w-24 h-24 rounded-[1.8rem] bg-gradient-to-b ${value.themeColor} p-[1.5px] shadow-sm transition-transform duration-500 group-hover/value:scale-105 group-hover/value:rotate-2 mb-6 shrink-0`}>
                                    <div className={`w-full h-full ${value.bgColor} rounded-[1.7rem] backdrop-blur-sm flex items-center justify-center`}>
                                        <IconComponent className={`w-9 h-9 ${value.textColor} stroke-[1.5]`} />
                                    </div>
                                </div>

                                <h3 className="text-pink-500 font-black uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">
                                    {value.title}
                                </h3>

                                <p className="text-slate-500 text-sm sm:text-[15px] font-light leading-relaxed max-w-[280px] lg:max-w-none">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
