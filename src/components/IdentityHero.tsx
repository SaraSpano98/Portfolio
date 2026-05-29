import React from 'react';

export default function IdentityHero(): React.ReactElement {
    return (
        <>
            <section className="w-full mb-20 px-24 pt-40">
                <h1 className="mb-12 text-4xl font-extrabold uppercase tracking-tight text-[#ec4899] md:text-5xl">
                    Ciao, sono Sara! 👋
                </h1>

                {/* Griglia a due colonne responsive */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start w-full">

                    {/* Colonna Sinistar: La tua Storia */}
                    <div className="flex flex-col gap-5 text-gray-800 text-lg leading-relaxed">
                        <p>
                            Ho sempre vissuto a metà tra due mondi: la creatività visiva e la logica matematica.
                            Quando ho iniziato a creare per il web, tutti mi dicevano di scegliere una strada:
                            o fai la grafica, o fai la programmatrice.
                        </p>
                        <p>
                            Ma per me, un design eccezionale non è nulla se non è supportato da un codice leggero e performante.
                            Allo stesso modo, il codice più pulito del mondo fallisce se l'utente non trova un'interfaccia
                            intuitiva e memorabile.
                        </p>
                        <p className="font-semibold text-black">
                            Ecco perché ho scelto di abbattere quel muro e di essere entrambe le cose.
                        </p>
                    </div>

                    {/* Colonna Destra: Il Manifesto */}
                    <div className="flex flex-col gap-5 text-gray-800 text-lg leading-relaxed">
                        <blockquote className="border-l-4 border-[#ec4899] pl-4 my-2 text-2xl font-bold leading-snug text-black">
                            "Progetto con l'empatia del designer, sviluppo con la precisione del programmatore."
                        </blockquote>
                        <p>
                            Un'interfaccia non deve solo essere splendida su Figma; deve trasformarsi in un codice
                            pulito, veloce e accessibile a tutti.
                        </p>
                        <p>
                            Non mi interessa creare solo siti web. Il mio obiettivo è dare vita a ecosistemi digitali
                            completi, solidi e fatti per durare.
                        </p>
                    </div>
                    
                </div>
            </section>
        </>
    );
}
