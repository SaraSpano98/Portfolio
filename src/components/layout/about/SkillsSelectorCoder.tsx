import { useState } from 'react';

interface SkillCategoryData {
    percentage: string;
    items: { name: string; icon: string }[];
}

interface ColumnSkills {
    [category: string]: SkillCategoryData;
}

const coderSkills: ColumnSkills = {
    "Front-end": {
        percentage: "95%",
        items: [
            { name: "React", icon: "⚛️" },
            { name: "TypeScript", icon: "📘" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Framer Motion", icon: "🍿" },
            { name: "JavaScript", icon: "💛" },
            { name: "Lordicon", icon: "🔮" },
            { name: "Blossom Carousel", icon: "🎠" },
            { name: "Lottie Web", icon: "🏃" }
        ]
    },
    "Back-end": {
        percentage: "75%",
        items: [
            { name: "Node.js", icon: "🟢" }
        ]
    },
    "Database": {
        percentage: "70%",
        items: [
            { name: "MongoDB", icon: "🍃" }
        ]
    },
    "Tools": {
        percentage: "85%",
        items: [
            { name: "Vite", icon: "⚡" }
        ]
    }
};

export default function SkillsSelectorCoder() {
    const [activeCoderTab, setActiveCoderTab] = useState<string>("Front-end");

    return (
        <div className="w-full flex flex-col gap-6 mt-2">
            
            {/* Navigazione Filtri Coder */}
            <div className="flex flex-col gap-2 w-full mt-5">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-600">Tech Stack & Frameworks</span>
                <div className="flex flex-wrap gap-2 mt-4">
                    {Object.keys(coderSkills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveCoderTab(tab)}
                            className={`text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                                activeCoderTab === tab
                                    ? 'bg-indigo-500/10 text-slate-900 border-indigo-300 shadow-sm'
                                    : 'bg-slate-400/20 text-slate-500 border-slate-300 shadow-sm'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* CONTENITORE */}
            <div className="w-full flex items-start justify-between gap-6 mt-4">
                
                {/* Lista Voci Coder */}
                <div className="flex-1 flex flex-col gap-3.5 justify-start ">
                    {coderSkills[activeCoderTab].items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 hover:text-slate-950 transition-colors">
                            <span className="text-xl shrink-0">{item.icon}</span>
                            <span className="text-base font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Rettangolo Blu */}
                <div className="flex shrink-0 items-start justify-end">
                    <div className="bg-[#4f46e5] text-white rounded-[2rem] px-8 py-8 w-[160px] sm:w-[180px] aspect-square flex flex-col items-center justify-center text-center shadow-lg shadow-indigo-500/20 transform transition-transform duration-500 hover:scale-105">
                        <span className="text-4xl font-black tracking-tight mb-1">
                            {coderSkills[activeCoderTab].percentage}
                        </span>
                        <span className="text-sm font-medium tracking-wide opacity-90 leading-tight">
                            competenza
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

