import Pattern from '../styles/Pattern'; //sfondo animato

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* LO SFONDO QUI */}
      <div className="absolute inset-0 z-0">
        <Pattern />
      </div>

      {/* IL CONTENUTO VA SOPRA */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Sara Spano
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Web Developer
        </p>
        {/* Aggiungi qui i tuoi bottoni e altro */}
      </div>

    </section>
  );
};

export default Hero;
