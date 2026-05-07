import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Code as Github,
  User as Linkedin,
  Mail,
  MapPin,
  Heart,
  Code2,
  Palette,
  Zap,
  Star,
  ArrowUp
} from 'lucide-react'

const StyledWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150vmax;
    height: 150vmax;
    opacity: 0.15;
    filter: blur(80px);
    background: conic-gradient(from 0deg, #f472b6, #ffffff, #374151, #ffffff, #f472b6);
    animation: rotate 25s linear infinite;
    transform-origin: center;
  }
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Mail, href: 'mailto:saraspano@live.com' }
  ]

  return (
    <>

    {/* BOTTONE SCROLL TO TOP */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-pink-500 text-white rounded-full shadow-lg transition-all ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
        whileHover={{ scale: 1.1, backgroundColor: '#be185b' }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <footer ref={ref} className="relative bg-white text-slate-900 overflow-hidden border-t-2 border-slate-100 before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-pink-200 before:to-transparent">
        <StyledWrapper />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative z-10 container mx-auto px-6 md:px-12 py-16" 
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">

            {/* BIO SECTION */}
            <div className="space-y-8 flex flex-col items-start">
              <div>
                <h3 className="text-5xl font-black tracking-tighter text-slate-900 mb-4 leading-none">Sara Spano</h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[340px] font-medium">
                  Progetto <span className="text-slate-900 font-bold italic">interfacce che emozionano</span>.
                  Sviluppatrice Front-end specializzata in <span className="text-pink-500 font-bold">esperienze digitali</span>.
                </p>
              </div>

              <div className="space-y-4 text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-pink-500" />
                  <span>Milano, Italia</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-pink-500" />
                  <span className="lowercase font-semibold tracking-normal text-base text-slate-600">saraspano@live.com</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="p-5 bg-pink-500 text-white rounded-[1.2rem] shadow-lg shadow-pink-500/20 hover:bg-pink-700 hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                    <social.icon size={22} strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* LINK RAPIDI */}
            <div className="md:pl-10">
              <h5 className="text-[13px] font-black uppercase tracking-[0.3em] mb-10 text-pink-500">
                <Star size={14} className="inline mr-2 fill-pink-600" /> Link Rapidi
              </h5>
              <ul className="space-y-4">
                {['About', 'Skills', 'Projects', 'Experience', 'Contacts'].map((item) => (
                  <li key={item} className="group">
                    <Link to="/" className="relative text-lg font-bold flex items-center gap-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-pink-500">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full transition-all duration-300 group-hover:scale-150" />
                      <span className="relative">
                        {item}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVIZI */}
            <div className="md:pl-10">
              <h4 className="text-[13px] font-black uppercase tracking-[0.3em] mb-10 text-pink-500">
                <Zap size={14} className="inline mr-2 fill-pink-600" /> Servizi
              </h4>
              <ul className="space-y-8">
                {[{ t: 'Sviluppo Web', i: Code2 }, { t: 'UI/UX Design', i: Palette }].map((s, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg font-bold group transition-all duration-300 hover:translate-x-3">
                    <div className="p-3 bg-pink-500/10 text-pink-600 rounded-2xl group-hover:bg-pink-600 group-hover:text-white group-hover:rotate-6 group-hover:shadow-lg transition-all duration-300">
                      <s.i size={20} />
                    </div>
                    <span className="group-hover:text-pink-600 transition-colors">{s.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Parte Sinistra */}
            <p className="text-[13px] font-bold text-slate-800 flex items-center gap-2 tracking-wide">
              © 2026 SARA SPANO. <Heart size={14} className="text-pink-500 fill-pink-500" /> FATTO CON PASSIONE
            </p>

            {/* Parte Destra */}
            <div className="text-right md:pr-16">
              <p className="text-[13px] font-bold text-slate-800 uppercase tracking-[0.2em]">
                Tutti i diritti riservati
              </p>
            </div>
          </div>

        </motion.div>
      </footer>
    </>
  )
}
