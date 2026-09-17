export interface SkillItem {
    name: string;
    icon: string;
    level: string;
    description: string;
}

export interface SkillCategoryData {
    items: SkillItem[];
}

export interface ColumnSkills {
    [category: string]: SkillCategoryData;
}

export const coderSkills: ColumnSkills = {
    "Front-end": {
        items: [
            { name: "React", icon: "⚛️", level: "Avanzato", description: "Sviluppo di SPA comcomplexes, custom hooks e gestione dello stato ottimizzata." },
            { name: "TypeScript", icon: "📘", level: "Solido", description: "Codice tipato sul lungo periodo per garantire scalabilità e zero bug di runtime." },
            { name: "Tailwind CSS", icon: "🎨", level: "Esperto", description: "Interfacce pixel-perfect, responsive e architetture CSS snelle." },
            { name: "Framer Motion", icon: "🍿", level: "Autonomo", description: "Micro-interazioni fluide ed eleganti che migliorano l'UX." },
            { name: "JavaScript", icon: "💛", level: "Avanzato", description: "Padronanza di ES6+, manipolazione del DOM e logica asincrona." },
            { name: "Lordicon", icon: "🔮", level: "Autonomo", description: "Integrazione di icone animate interattive basate su eventi utente." },
            { name: "Blossom Carousel", icon: "🎠", level: "Autonomo", description: "Customizzazione e ottimizzazione di slider e layout fluidi." },
            { name: "Lottie Web", icon: "🏃", level: "Autonomo", description: "Animazioni vettoriali comcomplexes renderizzate in tempo reale." }
        ]
    },
    "Back-end": {
        items: [
            { name: "Node.js", icon: "🟢", level: "Autonomo", description: "Creazione di architetture API REST veloci e logiche di routing solide." }
        ]
    },
    "Database": {
        items: [
            { name: "MongoDB", icon: "🍃", level: "Competente", description: "Modellazione dati NoSQL flessibile e gestione delle query." }
        ]
    },
    "Tools": {
        items: [
            { name: "Vite", icon: "⚡", level: "Avanzato", description: "Configurazione e ottimizzazione dell'ambiente di build." }
        ]
    }
};
