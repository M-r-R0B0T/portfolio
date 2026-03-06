"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/data/content";

export function Contact() {
    return (
        <Section id="contact" title="Communication" subtitle="Let's Connect">
            <div className="max-w-3xl border border-sky-900/40 bg-[#050508] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-white/[0.015] bg-[length:16px_16px] pointer-events-none" />

                {/* Scanning Line Animation */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-sky-500/30 group-hover:animate-scan z-0" />

                <div className="relative z-10 flex flex-col items-start gap-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase text-white mb-4">
                            Open to Opportunities
                        </h3>
                        <p className="text-gray-400 leading-relaxed max-w-xl">
                            I am actively exploring new engineering roles, collaborative research, and opportunities in autonomous systems and advanced technology. Feel free to reach out to initiate a conversation.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                        <Button size="lg" onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`, "_blank")}>
                            Email Me
                        </Button>
                        <Button variant="secondary" size="lg" onClick={() => window.open(PERSONAL_INFO.linkedin, "_blank")}>
                            LinkedIn
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.open(PERSONAL_INFO.github, "_blank")}>
                            GitHub
                        </Button>
                    </div>

                    <div className="w-full h-px bg-[#1a1a24] my-2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <div>
                            <p className="text-xs font-mono text-sky-500/80 uppercase tracking-widest mb-1">Direct Contact</p>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-mono hover:text-sky-400 transition-colors">
                                {PERSONAL_INFO.email}
                            </a>
                        </div>
                        <div>
                            <p className="text-xs font-mono text-sky-500/80 uppercase tracking-widest mb-1">Phone</p>
                            <p className="text-white font-mono">{PERSONAL_INFO.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
