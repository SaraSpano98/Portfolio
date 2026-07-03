import React from 'react';
import { Lightbulb, Handshake, Star, Heart } from 'lucide-react';

{/* 1. DEFINIZIONE DELL'INTERFACCIA (TypeScript) */ }
interface ValueItem {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    themeColor: string;
    bgColor: string;
    textColor: string;
}


{/* 2. COSTANTE CON I DATI DEI 4 VALORI */ }
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
        <section className="relative w-full bg-white text-slate-900 mt-24 pt-12 pb-6 px-6 sm:px-12 md:px-16 lg:px-24 z-10 select-none">
            <div className="w-full flex flex-col items-start text-start">
                <div className="w-full mb-14 flex flex-col items-start">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-3">
                        Core Values
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 leading-none">
                        I miei <span className="text-pink-500">valori</span>
                    </h2>

                    <div className="h-[3px] w-8 bg-pink-500 mt-4" />
                </div>


                {/* GRIGLIA A 4 COLONNE */}
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

                                <p className="text-slate-500 text-base leading-relaxed font-medium">
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
