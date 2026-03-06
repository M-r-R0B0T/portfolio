"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SKILLS, EXPERIENCE } from "@/data/content";

export function Expertise() {
    return (
        <Section id="expertise" title="Technical Capabilities" subtitle="Skills & Experience">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Skills Matrix */}
                <div className="lg:col-span-5 space-y-12">
                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-widest border-l-2 border-sky-900 pl-4">
                        Skill Matrix
                    </h3>
                    <div className="space-y-8">
                        {SKILLS.map((skillGroup, idx) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <h4 className="text-sky-500/80 font-mono text-xs uppercase tracking-widest mb-3">
                  // {skillGroup.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-sm text-gray-300 border border-[#1a1a24] bg-[#0a0a10] px-3 py-1.5 hover:border-sky-500/50 hover:text-sky-400 transition-colors duration-300 cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="lg:col-span-7">
                    <h3 className="text-xl font-heading font-bold text-white mb-8 uppercase tracking-widest border-l-2 border-sky-900 pl-4">
                        Experience
                    </h3>
                    <div className="relative border-l border-[#1a1a24] pl-8 space-y-12">
                        {EXPERIENCE.map((exp, idx) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative"
                            >
                                {/* Timeline node */}
                                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#050508] border-2 border-sky-500/50 rounded-none z-10" />
                                <div className="absolute -left-[36px] top-2.5 w-2.5 h-2.5 bg-sky-400 z-20" />

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <h4 className="text-xl font-heading font-bold uppercase tracking-wide text-white">
                                        {exp.role}
                                    </h4>
                                    <span className="font-mono text-xs text-sky-400 tracking-widest uppercase bg-[#0a0a10] px-2 py-1 border border-sky-900/50">
                                        {exp.period}
                                    </span>
                                </div>

                                <h5 className="text-lg text-gray-300 font-heading font-semibold uppercase mb-4">
                                    {exp.company}
                                </h5>

                                <ul className="space-y-3">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed relative pl-4 border-l border-sky-900/30">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
