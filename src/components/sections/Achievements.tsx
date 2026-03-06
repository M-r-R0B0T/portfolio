"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ACHIEVEMENTS, CERTIFICATES } from "@/data/content";
import { Award, FileBadge, X } from "lucide-react";
import Image from "next/image";

export function Achievements() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <Section id="achievements" title="Milestones" subtitle="Awards & Certifications">

            {/* Achievements List */}
            <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`bg-[#050508] border border-[#1a1a24] p-8 hover:bg-[#0a0a10] hover:border-sky-500/50 transition-all duration-300 relative group overflow-hidden ${achievement.image ? 'md:col-span-2 lg:col-span-3 min-h-[300px]' : ''}`}
                        >
                            {achievement.image && (
                                <>
                                    <Image
                                        src={achievement.image}
                                        alt={achievement.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
                                </>
                            )}
                            <div className="relative z-10">
                                <Award className="w-8 h-8 text-sky-900 mb-6 group-hover:text-sky-400 transition-colors duration-300" />
                                <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide mb-2 group-hover:text-sky-100">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm mb-4">
                                    {achievement.organization}
                                </p>
                                <div className="absolute top-0 right-0 p-4 border-b border-l border-[#1a1a24] bg-[#0a0a10] group-hover:bg-[#050508] transition-colors">
                                    <span className="font-mono text-xs text-sky-500/70 tracking-widest uppercase">
                                        {achievement.date}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificates Grid */}
            <div>
                <h3 className="text-2xl font-mono text-white mb-10 uppercase tracking-widest border-l-2 border-[#555] pl-4">
                    Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {CERTIFICATES.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => cert.image && setSelectedCert(cert.image)}
                            className={`relative group border border-[#1a1a24] bg-[#050508] p-6 transition-colors duration-300 overflow-hidden aspect-[4/3] flex flex-col justify-end ${cert.image ? 'cursor-pointer hover:border-sky-500/50' : ''}`}
                        >
                            {cert.image && (
                                <>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent z-0" />
                                </>
                            )}

                            <div className="relative z-10">
                                <FileBadge className="w-6 h-6 text-sky-900 mb-4 group-hover:text-sky-400 transition-colors" />
                                <h4 className="text-white font-heading font-bold uppercase tracking-wide mb-1 text-sm group-hover:text-sky-100">
                                    {cert.title}
                                </h4>
                                <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">
                                    {cert.issuer}
                                </p>
                                <div className="text-[10px] font-mono text-sky-400 bg-[#0a0a10] inline-block px-2 py-1 border border-sky-900/50">
                                    {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-sky-400 transition-colors bg-[#1a1a24]/50 p-2 rounded-full"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCert(null);
                            }}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="relative w-full max-w-5xl aspect-video rounded-sm overflow-hidden border border-sky-900/50 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedCert}
                                alt="Certificate Reference"
                                fill
                                className="object-contain bg-[#050508]"
                                quality={100}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </Section >
    );
}
