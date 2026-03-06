"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "01. PROJECTS", href: "#projects" },
        { name: "02. EXPERTISE", href: "#expertise" },
        { name: "03. ACHIEVEMENTS", href: "#achievements" },
        { name: "04. CONTACT", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-[#222] py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="w-full 2xl:max-w-none mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white flex items-center justify-center font-mono font-bold text-lg">
                        NS
                    </div>
                    <span className="font-mono text-sm tracking-widest hidden md:block uppercase ml-3">
                        Niranj S / Sys_Eng
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white font-mono text-xs tracking-widest transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
