import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 relative flex flex-col z-10"> 
        {location.pathname === "/" && <Home />}
      </main>
      <Footer />
    </div>
  );
}

