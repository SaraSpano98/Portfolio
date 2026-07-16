import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lordicon/react';

import ClickSpark from '../../ui/ClickSpark';

interface DirectInquirySectionProps {
    loadedIcons: { [key: string]: object };
    refs: {
        emailRef: React.RefObject<Player | null>;
        whatsappRef: React.RefObject<Player | null>;
        telephoneRef: React.RefObject<Player | null>;
        meetingRef: React.RefObject<Player | null>;
        globeRef: React.RefObject<Player | null>;
        linkedinRef: React.RefObject<Player | null>;
        githubRef: React.RefObject<Player | null>;
    };
}

const DirectInquirySection = ({ loadedIcons, refs }: DirectInquirySectionProps) => {
    const { emailRef, whatsappRef, telephoneRef, meetingRef, globeRef, linkedinRef, githubRef } = refs;

    return (
        <>
            {/* SEZIONE  5: CONTATTI DIRETTI E NETWORK SOCIAL */}
            <div className="w-full px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 mb-40 border-t border-slate-100 pt-20 w-full">
                    <div className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-12 italic">Direct Inquiry</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">

                                {/* EMAIL DIRETTA */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group cursor-pointer flex flex-col justify-between"
                                    onMouseEnter={() => emailRef.current?.playFromBeginning()}
                                >
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Email Diretta</span>
                                        <ClickSpark>
                                            <a
                                                href="mailto:saraspano@live.it"
                                                className="flex items-center gap-3 mb-3 cursor-pointer w-full"
                                            >
                                                {loadedIcons.email && (
                                                    <Player ref={emailRef} icon={loadedIcons.email} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block truncate">
                                                    saraspano@live.it
                                                </span>
                                            </a>
                                        </ClickSpark>

                                        <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Il canale preferito per preventivi formali e brief di progetto dettagliati."</p>
                                    </div>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                </motion.div>

                                {/* WHATSAPP BUSINESS */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group cursor-pointer flex flex-col justify-between"
                                    onMouseEnter={() => whatsappRef.current?.playFromBeginning()}
                                >
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">WhatsApp Business</span>
                                        <ClickSpark>
                                            <a
                                                href="https://wa.me"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 mb-3 cursor-pointer w-full"
                                            >
                                                {loadedIcons.whatsapp && (
                                                    <Player ref={whatsappRef} icon={loadedIcons.whatsapp} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    Chat Rapida
                                                </span>
                                            </a>
                                        </ClickSpark>

                                        <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Per una comunicazione immediata, feedback veloci o semplici domande tecniche."</p>
                                    </div>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                </motion.div>

                                {/* CONTATTO TELEFONICO */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group cursor-pointer flex flex-col justify-between"
                                    onMouseEnter={() => telephoneRef.current?.playFromBeginning()}
                                >
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Contatto Telefonico</span>
                                        <ClickSpark>
                                            <a href="tel:+393123456789" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.telephone && (
                                                    <Player ref={telephoneRef} icon={loadedIcons.telephone} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    +39 312 345 6789
                                                </span>
                                            </a>
                                        </ClickSpark>

                                        <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Disponibile per chiamate dirette e allineamenti rapidi sui progetti."</p>
                                    </div>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                </motion.div>

                                {/* VIDEO CALL / MEETING */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group cursor-pointer flex flex-col justify-between"
                                    onMouseEnter={() => meetingRef.current?.playFromBeginning()}
                                >
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-3 block">Video Call</span>
                                        <ClickSpark>
                                            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-3">
                                                {loadedIcons.meeting && (
                                                    <Player ref={meetingRef} icon={loadedIcons.meeting} size={40} colors="primary:#5c0632,secondary:#e6399b" />
                                                )}
                                                <span className="text-xl md:text-2xl xl:text-3xl font-black text-slate-900 tracking-tighter hover:text-pink-500 transition-all block">
                                                    Prenota una Call
                                                </span>
                                            </a>
                                        </ClickSpark>

                                        <p className="text-slate-400 text-sm leading-relaxed italic max-w-sm">"Pianifica una sessione conoscitiva su Meet o Zoom per il tuo brief."</p>
                                    </div>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-pink-500 transition-all duration-700 mt-6" />
                                </motion.div>

                            </div>
                        </div>
                    </div>

                    {/* COLONNA DESTRA: NETWORK SOCIAL */}
                    <div className="lg:col-span-4 bg-slate-50 p-10 xl:p-12 rounded-[2.5rem] self-start">
                        <div
                            className="flex items-center gap-3 mb-10 cursor-pointer w-fit"
                            onMouseEnter={() => globeRef.current?.playFromBeginning()}
                        >
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Network</h3>
                            {loadedIcons.globe && (
                                <Player ref={globeRef} icon={loadedIcons.globe} size={26} colors="primary:#5c0632,secondary:#e6399b" />
                            )}
                        </div>

                        <div className="flex flex-col gap-8">
                            {/* LINKEDIN */}
                            <ClickSpark>
                                <motion.a
                                    href="https://www.linkedin.com/in/sara-spano-0a2315273/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    onMouseEnter={() => linkedinRef.current?.playFromBeginning()}
                                    className="flex justify-between items-center group border-b border-slate-200 pb-6 w-full cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        {loadedIcons.linkedin && (
                                            <Player ref={linkedinRef} icon={loadedIcons.linkedin} size={36} colors="primary:#5c0632,secondary:#e6399b" />
                                        )}
                                        <span className="text-lg font-bold text-slate-900 group-hover:text-pink-500 transition-colors uppercase tracking-tighter">LinkedIn</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all text-sm shrink-0">→</div>
                                </motion.a>
                            </ClickSpark>

                            {/* GITHUB */}
                            <ClickSpark>
                                <motion.a
                                    href="https://github.com/SaraSpano98"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    onMouseEnter={() => githubRef.current?.playFromBeginning()}
                                    className="flex justify-between items-center group border-b border-slate-200 pb-6 w-full cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        {loadedIcons.github && (
                                            <Player ref={githubRef} icon={loadedIcons.github} size={36} colors="primary:#5c0632,secondary:#e6399b" />
                                        )}
                                        <span className="text-lg font-bold text-slate-900 group-hover:text-pink-500 transition-colors uppercase tracking-tighter">GitHub</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all text-sm shrink-0">→</div>
                                </motion.a>
                            </ClickSpark>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default DirectInquirySection;