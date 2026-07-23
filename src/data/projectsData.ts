export interface Project {
    id: number;
    title: string;
    category: string;
    status: 'finito' |  'in-corso' | 'da-realizzare';
    description: string;
    tags: string[];  
    liveLink?: string; 
    objectives?: string;
    process?: string;
    results?: string;
}

export const FEATURED_PROJECTS: Project[] = [
    { 
        id: 1, 
        title: "SoulMatrix Web App", 
        category: "Front-end",
        status: "in-corso",
        description: "Applicazione web interattiva per il calcolo di mappe numerologiche. Gestisce algoritmi complessi per generare grafici personalizzati su talenti, karma e relazioni, con un'interfaccia utente immersiva e responsive.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
        liveLink: "https://tuo-link-soulmatrix.com",
        objectives: "Sviluppare un motore di calcolo numerologico istantaneo basato sulla data di nascita, eliminando la necessità di elaborazioni manuali e offrendo un'esperienza grafica immersiva sia in modalità chiara che scura.",
        process: "Architettura dei componenti logici strutturata per mappare gli algoritmi degli archetipi karmici. Ottimizzazione delle performance di rendering e implementazione di animazioni matematiche fluide per i nodi grafici.",
        results: "Riduzione a zero dei tempi di attesa per la generazione della mappa, un'interfaccia responsive che mantiene la complessità visiva intatta su mobile e un codice modulare scalabile per future integrazioni.",
    },
    { 
        id: 2, 
        title: "Titolo Progetto 2", 
        category: "Web Design",
        status: "da-realizzare",
        description: "Descrizione breve delle tecnologie e delle sfide.", 
        tags: ["HTML", "CSS", "JavaScript"], 
        liveLink: "#" 
    },
    { 
        id: 3, 
        title: "Titolo Progetto 3", 
        category: "Full-Stack",
        status: "da-realizzare",
        description: "Descrizione breve delle tecnologie e delle sfide.", 
        tags: ["React", "Node.js", "Express", "MongoDB"], 
        liveLink: "#" 
    },
    { 
        id: 4, 
        title: "Titolo Progetto 4", 
        category: "Front-end",
        status: "da-realizzare",
        description: "Descrizione breve delle tecnologie e delle sfide.", 
        tags: ["Next.js", "Tailwind CSS"], 
        liveLink: "#" 
    },
    { 
        id: 5, 
        title: "Titolo Progetto 5", 
        category: "Tools",
        status: "da-realizzare",
        description: "Descrizione breve delle tecnologie e delle sfide.", 
        tags: ["TypeScript", "Vite"], 
        liveLink: "#" 
    },
    { 
        id: 6, 
        title: "Titolo Progetto 6", 
        category: "Mobile",
        status: "da-realizzare",
        description: "Descrizione breve delle tecnologie e delle sfide.", 
        tags: ["React Native", "TypeScript"], 
        liveLink: "#" 
    },
];
