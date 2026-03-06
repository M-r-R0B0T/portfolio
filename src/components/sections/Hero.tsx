"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/data/content";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-black pointer-events-none z-0"></div>

            {/* Engineering Dot Matrix Pattern */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #0ea5e9 2px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="w-full 2xl:max-w-none mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    <div className="inline-flex items-center space-x-3 bg-sky-900/40 border border-sky-800 px-3 py-1.5 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        <span className="font-mono text-xs text-sky-400 tracking-widest uppercase font-semibold">
                            Available for Opportunities
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter uppercase text-white leading-[1.1] min-h-[1em]">
                        <Typewriter
                            options={{
                                strings: [PERSONAL_INFO.name, 'ROBOTICS ENGINEER', 'AI ENGINEER'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </h1>

                    <div className="mt-6 flex flex-col space-y-2">
                        <h2 className="text-xl md:text-2xl font-mono text-gray-300 tracking-wide uppercase border-l-2 border-white pl-4">
                            {PERSONAL_INFO.title}
                        </h2>
                        <p className="max-w-md text-gray-400 mt-4 leading-relaxed pl-4 border-l-2 border-transparent">
                            {PERSONAL_INFO.summary}
                        </p>
                    </div>

                    <div className="mt-10 flex items-center space-x-4">
                        <Button size="lg" onClick={() => (window.location.href = "#projects")}>
                            View Projects <ArrowDownRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => (window.location.href = "#contact")}>
                            Contact Me
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative aspect-[4/3] md:aspect-square max-w-[550px] mx-auto w-full group mt-12 md:mt-0"
                >
                    <div className="absolute inset-0 border border-sky-900/50 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10 w-full h-full border border-sky-500/20 bg-[#050508] overflow-hidden group-hover:border-sky-500/50 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#050508]/40 via-transparent to-transparent z-10" />
                        <Image
                            src="/media/me.jpeg"
                            alt={PERSONAL_INFO.name}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white z-20"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white z-20"></div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
