"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <Section id="projects" title="Deployed Systems" subtitle="Selected Projects">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                {PROJECTS.map((project, index) => {
                    // First item takes up 2 rows and 1 column. 
                    // Second item takes up 1 row and 2 columns.
                    // 6th item takes up 2 columns to fill the final row nicely.
                    const isLarge = index === 0;
                    const isWide = index === 1 || index === 5;

                    return (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.slug}
                            className={cn(
                                "group relative block w-full h-full overflow-hidden bg-[#050508] transition-all duration-500",
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
                                {/* Background Image Setup */}
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

                                {/* Dark Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Content Overlay pinned to bottom */}
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
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
}
