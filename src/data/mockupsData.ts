export interface MockupItem {
    id: number;
    tabLabel: string;       
    title: string;
    desktopVideo: string;   // Percorso del video desktop (es. "/videos/soulmatrix-dt.mp4")
    mobileVideo: string;    // Percorso del video mobile (es. "/videos/soulmatrix-mob.mp4")
    uxObjectives: string;   
    uiFlow: string;         
    colorPalette: string[];  
}

export const DESIGN_MOCKUPS: MockupItem[] = [
    {
        id: 1,
        tabLabel: "SoulMatrix App",
        title: "SoulMatrix UI/UX Kit",
        desktopVideo: "/videos/soulmatrix-desktop.mp4", 
        mobileVideo: "/videos/soulmatrix-mobile.mp4",
        uxObjectives: "Tradurre algoritmi esoterici complessi in grafici vettoriali immediati e leggibili, garantendo un'accessibilità millimetrica del testo sia in modalità chiara che scura.",
        uiFlow: "Inserimento rapido dei dati anagrafici, generazione istantanea della mappa geometrica e navigazione approfondita dei nodi tramite micro-interazioni intuitive.",
        colorPalette: ["#ec4899", "#fbcfe8", "#0f172a", "#f8fafc"]
    },
    {
        id: 2,
        tabLabel: "E-commerce Interface",
        title: "E-commerce App Interface",
        desktopVideo: "/videos/ecommerce-desktop.mp4",
        mobileVideo: "/videos/ecommerce-mobile.mp4",
        uxObjectives: "Ridurre il tasso di abbandono del carrello ottimizzando il checkout a pagina singola e integrando sistemi asincroni di anteprima ordine per i dispositivi mobili.",
        uiFlow: "L'utente seleziona il prodotto tramite griglie dinamiche, personalizza le specifiche con menu a comparsa dal basso e completa la transazione in meno di tre passaggi.",
        colorPalette: ["#4f46e5", "#818cf8", "#1e293b", "#ffffff"]
    },
    {
        id: 3,
        tabLabel: "SaaS Wireframe",
        title: "SaaS Dashboard Wireframe",
        desktopVideo: "/videos/dashboard-desktop.mp4",
        mobileVideo: "/videos/dashboard-mobile.mp4",
        uxObjectives: "Ingegnerizzare la visualizzazione di flussi di dati massivi riducendo il carico cognitivo dell'utente tramite una gerarchia visiva atomica e sezioni collassabili.",
        uiFlow: "Pannello di controllo enterprise focalizzato su grafici vettoriali in tempo reale, sistemi di filtraggio dati multi-livello e report scaricabili con un solo click.",
        colorPalette: ["#7c3aed", "#c084fc", "#090d16", "#f1f5f9"]
    }
];
