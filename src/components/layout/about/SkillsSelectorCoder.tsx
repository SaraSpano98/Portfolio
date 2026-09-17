import { useState } from 'react';

import { coderSkills, SkillItem } from '../data/skillsCoderData';; 

export default function SkillsSelectorCoder() {
    const [activeCoderTab, setActiveCoderTab] = useState<string>("Front-end");
    const [selectedTech, setSelectedTech] = useState<SkillItem>(coderSkills["Front-end"].items[0]);

    return (
        <div className="w-full flex flex-col gap-6 mt-2">
            {/* Navigazione Filtri Coder */}
            <div className="flex flex-col gap-2 w-full mt-5">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-600">Tech Stack & Frameworks</span>
                <div className="flex flex-wrap gap-2 mt-4">
                    {Object.keys(coderSkills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveCoderTab(tab);
                                if (coderSkills[tab].items.length > 0) {
                                    setSelectedTech(coderSkills[tab].items[0]);
                                } else {
                                    setSelectedTech(null);
                                }
                            }}
                            className={`text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                                activeCoderTab === tab
                                    ? 'bg-indigo-500/10 text-indigo-600 border-indigo-300 shadow-sm'
                                    : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 shadow-sm'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* CONTENITORE PRINCIPALE */}
            <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-8 mt-4">
                {/* Lista Voci Coder */}
                <div className="flex-1 flex flex-col gap-3 justify-start">
                    {coderSkills[activeCoderTab].items.map((item: SkillItem, i: number) => {
                        const isSelected = selectedTech?.name === item.name;
                        return (
                            <button 
                                key={i} 
                                onClick={() => setSelectedTech(item)}
                                className={`flex items-center gap-4 text-left p-2.5 rounded-2xl transition-all duration-300 group/item cursor-pointer w-full ${
                                    isSelected 
                                        ? 'bg-indigo-50 border border-indigo-100 shadow-sm shadow-indigo-500/5' 
                                        : 'hover:bg-slate-50 border border-transparent'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),_0_4px_6px_-1px_rgba(0,0,0,0.06)] ${
                                    isSelected
                                        ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white border-indigo-400 scale-110 shadow-md shadow-indigo-500/20'
                                        : 'bg-gradient-to-br from-slate-50 to-slate-200/80 text-slate-700 border-slate-200/40 group-hover/item:scale-105'
                                }`}>
                                    <span className={`text-xl filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)] transform transition-transform group-hover/item:rotate-6 ${
                                        isSelected ? 'brightness-120' : ''
                                    }`}>
                                        {item.icon}
                                    </span>
                                </div>
                                <span className={`text-base tracking-tight transition-colors duration-300 ${
                                    isSelected ? 'text-indigo-600 font-bold' : 'text-slate-700 font-semibold group-hover/item:text-slate-950'
                                }`}>
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Box Indaco Dinamico */}
                <div className="flex shrink-0 items-start justify-end w-full md:w-[280px]">
                    <div className="bg-[#4338ca] text-white rounded-[2rem] p-6 w-full min-h-[220px] md:aspect-square flex flex-col items-center justify-center text-center shadow-xl shadow-indigo-500/20 transform transition-all duration-500 hover:scale-[1.02]">
                        {selectedTech ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <span className="text-xs font-black tracking-[0.2em] uppercase opacity-60 mb-2">
                                    {selectedTech.name}
                                </span>
                                <span className="text-2xl font-black tracking-tight mb-3 text-indigo-200">
                                    {selectedTech.level}
                                </span>
                                <p className="text-xs font-medium tracking-wide leading-relaxed opacity-90 px-2 max-w-[220px]">
                                    {selectedTech.description}
                                </p>
                            </div>
                        ) : (
                            <span className="text-sm opacity-60">Seleziona una skill</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
