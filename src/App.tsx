import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Experiences from "./pages/Experiences";
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Resetta lo scroll in cima a ogni cambio pagina */}
      <ScrollToTop />

      <Header />

      <main className="flex-1 relative flex flex-col z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/esperienze" element={<Experiences />} />
          <Route path="/contatti" element={<Contacts />} />

          {/* FALLBACK 404: qualsiasi rotta non gestita mostra un messaggio invece di una pagina vuota */}
          <Route
            path="*"
            element={
              <div className="w-full flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 lg:px-24 py-32">
                <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[11px] mb-4">
                  Errore 404
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                  Pagina non trovata
                </h1>
                <p className="text-slate-500 max-w-md">
                  La pagina che stai cercando non esiste o è stata spostata.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
