import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';

export default function IdentityHero(): React.ReactElement {
    const handRef = useRef<Player>(null);
    const [iconData, setIconData] = useState<object | null>(null);
    
    useEffect(() => {
        fetch('/assets/icons/hand.json')
            .then((response) => response.json())
            .then((data) => setIconData(data))
            .catch((error) => console.error("Errore nel caricamento dell'icona:", error));
    }, []);

    useEffect(() => {
        if (iconData && handRef.current) {
            handRef.current.play();
        }
    }, [iconData]);

    return (
        <>
            <section className="w-full mb-32 px-24 pt-44 select-none">
                {/* HEADLINE PRINCIPALE */}
                <h1 className="mb-20 text-5xl font-extrabold uppercase tracking-tight text-[#ec4899] md:text-6xl flex items-center gap-4">
                    Ciao, sono Sara! 
                    <span className="inline-block w-14 h-14 cursor-default" style={{ verticalAlign: 'middle' }}>
                        {iconData ? (
                            <Player
                                ref={handRef}
                                icon={iconData}
                                size={56}
                                onComplete={() => handRef.current?.playFromBeginning()}
                            />
                        ) : (
                            <span className="inline-block w-14 h-14" />
                        )}
                    </span>
                </h1>

                {/* GRIGLIA NARRATIVA BILANCIATA */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-start w-full">
                    
                    {/* COLONNA SINISTRA: LE RADICI E LA SCELTA */}
                    <div className="flex flex-col gap-10 text-gray-600 text-lg font-light leading-relaxed">
                        
                        {/* Blocco 1: Lo Storytelling emotivo */}
                        <div className="group">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]/60 block mb-2">01 / Le Radici</span>
                            <h3 className="text-black font-extrabold text-2xl mb-3 tracking-tight">
                                La scintilla: dove tutto è iniziato.
                            </h3>
                            <p className="text-gray-600">
                                Tutto è partito da un ricordo d'infanzia: la prima volta nell'azienda di mio zio. Non sapevo cosa fosse un PC o la tecnologia, ma mi fece giocare con un programma di disegno digitale: <span className="font-medium text-black border-b border-[#ec4899] pb-0.5">Paint</span>. Quella scintilla è rimasta dentro di me per anni, crescendo in silenzio.
                            </p>
                        </div>

                        {/* Blocco 2: Il Conflitto e la Risoluzione */}
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]/60 block mb-2">02 / Il Conflitto</span>
                            <h3 className="text-black font-extrabold text-2xl mb-3 tracking-tight">
                                Il rispetto del proprio potenziale.
                            </h3>
                            <p className="mb-4">
                                Ho attraversato molti settori lavorativi, ma nessuno mi appagava: sentivo che un ambiente statico ristagna, mentre il lavoro deve essere una passione che ci evolve. L'unica cosa che mi faceva sentire viva era l'unione tra <span className="font-semibold text-black">logica e creazione</span>. 
                            </p>
                            <p className="text-black font-medium border-l-2 border-[#ec4899] pl-4 my-4 bg-gray-50/50 py-2 italic text-xl leading-snug">
                                Mi dicevano che dovevo scegliere una strada. Mi sono chiesta: perché devo dividermi per forza? O posso semplicemente essere entrambe le cose?
                            </p>
                            <p>
                                La curiosità mi ha spinta verso lo sviluppo web. Ho scelto di abbattere quel muro, rifiutando di scendere a compromessi con la mediocrità.
                            </p>
                        </div>
                    </div>

                    {/* COLONNA DESTRA: LA FILOSOFIA E L'UPGRADE */}
                    <div className="flex flex-col gap-10 text-gray-600 text-lg font-light leading-relaxed lg:mt-0">
                        
                        {/* Blocco 3: Visione sul Futuro e AI */}
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]/60 block mb-2">03 / La Visione</span>
                            <h3 className="text-black font-extrabold text-2xl mb-3 tracking-tight">
                                Oltre la massa: fare un upgrade.
                            </h3>
                            <p className="mb-4">
                                Credo in un approccio dinamico. Oggi tutti parlano di <span className="font-medium text-black">Intelligenza Artificiale</span>, Automazioni e Agenti AI. Copiare e riprodurre le stesse cose è facile, ma chi si distingue realmente all'interno di molti campi?
                            </p>
                            <p>
                                Gli strumenti moderni sono straordinariamente potenti, ma la vera differenza la fanno la personalità, il ragionamento e la capacità di prendere ciò che esiste per renderlo ancora più utile: in termini specifici, facendo un vero <span className="font-semibold text-[#ec4899] uppercase tracking-wide text-sm bg-[#ec4899]/5 px-2 py-0.5 rounded">"Upgrade"</span>.
                            </p>
                        </div>

                        {/* Blocco 4: Il Valore unico (Chiusura forte) */}
                        <div className="border-t border-gray-100 pt-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]/60 block mb-2">04 / L'Identità</span>
                            <h3 className="text-black font-extrabold text-2xl mb-3 tracking-tight">
                                La mia promessa di unicità.
                            </h3>
                            <p>
                                Ho affrontato molti ostacoli tra chi fossi e cosa volessi dare. Ho così tante passioni che è difficile metterle insieme, ma voglio essere unica a modo mio, distinguendomi tra tutti quanti che restano nella media. 
                            </p>
                            <p className="mt-4 font-semibold text-black text-xl">
                                Molti portfolio parlano delle solite cose. Ma il valore della persona dov'è? Io metto al centro la mia testa, la mia filosofia e il mio codice.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
