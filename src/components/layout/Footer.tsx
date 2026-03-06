import React from "react";
import { PERSONAL_INFO } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-[#222] bg-[#050505] py-12 mt-24">
            <div className="w-full 2xl:max-w-none mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-mono font-bold text-lg mb-4">
                        NS
                    </div>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                        {PERSONAL_INFO.title}
                    </p>
                    <p className="text-gray-600 text-xs mt-2 font-mono">
                        &copy; {new Date().getFullYear()} Niranj S. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 border border-transparent hover:border-[#333] bg-[#111] hover:bg-[#1a1a1a]"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 border border-transparent hover:border-[#333] bg-[#111] hover:bg-[#1a1a1a]"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-gray-400 hover:text-white transition-colors p-2 border border-transparent hover:border-[#333] bg-[#111] hover:bg-[#1a1a1a]"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
