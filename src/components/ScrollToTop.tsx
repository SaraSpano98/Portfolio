import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    {/* Forza la finestra a tornare in cima a ogni cambio di rotta*/}
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
