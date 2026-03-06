"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/data/content";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X } from "lucide-react";

type Project = (typeof PROJECTS)[number];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Section id="projects" title="Deployed Systems" subtitle="Selected Projects">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                {PROJECTS.map((project, index) => {
                    const isLarge = index === 0;
                    const isWide = index === 1 || index === 5;

                    return (
                        <div
                            key={project.slug}
                            onClick={() => setSelectedProject(project)}
                            className={cn(
                                "group relative block w-full h-full overflow-hidden bg-[#050508] transition-all duration-500 cursor-pointer",
                                isLarge ? "md:row-span-2 lg:col-span-1" : "",
                                isWide ? "md:col-span-2 lg:col-span-2" : "",
                                !isLarge && !isWide ? "lg:col-span-1" : ""
                            )}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full h-full absolute inset-0"
                            >
                                <Image
                                    src={project.image || "/media/tank.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-opacity duration-700 ease-out"
                                />

                                {/* Top Right Hover Arrow Indicator */}
                                <div className="absolute top-6 right-6 opacity-0 translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 z-20">
                                    <div className="bg-sky-500 text-white p-2 text-sm font-bold shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold tracking-wide text-white mb-2 group-hover:text-sky-400 transition-colors drop-shadow-md capitalize">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mt-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] font-mono tracking-widest text-sky-100 border border-sky-900/50 px-2 py-1 uppercase bg-[#0a0a10]/80 backdrop-blur-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-pointer"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white hover:text-sky-400 transition-colors bg-[#1a1a24]/60 p-2 z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                            }}
                        >
                            <X className="w-7 h-7" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 30 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-[#0a0a10] border border-[#1a1a24] shadow-2xl overflow-hidden cursor-default max-h-[90vh] flex flex-col"
                        >
                            {/* Hero Image */}
                            <div className="relative w-full aspect-video shrink-0">
                                <Image
                                    src={selectedProject.image || "/media/tank.png"}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    quality={90}
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 overflow-y-auto">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[11px] font-mono text-sky-400 bg-sky-900/30 border border-sky-800/50 px-3 py-1 uppercase tracking-widest">
                                        {selectedProject.period}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 capitalize">
                                    {selectedProject.title}
                                </h2>

                                <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl text-base md:text-lg">
                                    {selectedProject.description}
                                </p>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-xs font-mono text-sky-500/80 uppercase tracking-[0.2em] mb-3">
                                        Technology Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-sm font-mono text-sky-100 border border-sky-900/50 px-3 py-1.5 uppercase bg-[#050508]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
