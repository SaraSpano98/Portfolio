import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Resetta lo scroll in cima a ogni cambio pagina */}
      <ScrollToTop />

      <Header />
      
      <main className="flex-1 relative flex flex-col z-10"> 
        {location.pathname === "/" && <Home />}
        {location.pathname === "/about" && <About />}
        {location.pathname === "/projects" && <Projects />}
        {location.pathname === "/experience" && <Experience />}
        {location.pathname === "/contacts" && <Contacts />}
       
      </main>
      <Footer />
    </div>
  );
}

