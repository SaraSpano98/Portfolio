import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import SEO  from "../lib/seo";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);

        return () => {
            window.clearTimeout(timer);
        };
    }, [location.pathname]);

    return (
        <>
            <SEO title="Home" path="/" />

            {/* HERO */}
            <motion.div>
                <Hero />
            </motion.div>
        </>
    );
}
        
    



