import React from "react";
import { PROJECTS } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Code } from "lucide-react";

export async function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = PROJECTS.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-[#050508] text-gray-200">
            <div className="fixed inset-0 z-0 bg-grid-white/[0.015] bg-[length:24px_24px] pointer-events-none"></div>

            {/* Navigation Bar / Back button */}
            <nav className="fixed top-0 w-full z-50 bg-[#050508]/80 backdrop-blur-md border-b border-[#1a1a24] py-4">
                <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="group flex items-center space-x-2 text-sky-500 hover:text-sky-400 font-mono text-xs uppercase tracking-widest transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Return to Systems</span>
                    </Link>
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white flex items-center justify-center font-mono font-bold text-lg">
                        NS
                    </div>
                </div>
            </nav>

            {/* Project content */}
            <article className="relative z-10 pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-12">
                <header className="mb-12 md:mb-16">
                    <div className="inline-flex flex-wrap gap-2 mb-6">
                        <span className="flex items-center space-x-2 border border-[#2a2a35] bg-[#0a0a10] px-3 py-1 font-mono text-xs text-gray-400 uppercase">
                            <Calendar className="w-3 h-3 text-sky-500" />
                            <span>{project.period}</span>
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold uppercase text-white tracking-tight mb-6 leading-none">
                        {project.title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </header>

                <div className="relative aspect-video w-full mb-16 border border-[#2a2a35] bg-[#050508] p-2">
                    <div className="relative w-full h-full border border-sky-900/40">
                        <Image
                            src={project.image || "/media/tank.png"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Corner Elements */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-400" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-400" />
                </div>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#1a1a24] pt-12">
                    <div className="md:col-span-1">
                        <h3 className="flex items-center text-sm font-mono text-sky-500 uppercase tracking-widest mb-4">
                            <Code className="w-4 h-4 mr-2" /> Tech Stack
                        </h3>
                        <ul className="space-y-4">
                            {project.tech.map((t) => (
                                <li key={t} className="flex items-center text-gray-300 font-mono text-sm before:content-['>'] before:text-sky-800 before:mr-3 before:font-bold">
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 prose prose-invert prose-p:text-gray-400 prose-headings:font-heading prose-headings:text-white max-w-none">
                        <h2 className="text-2xl font-bold uppercase mb-4">Mission Overview</h2>
                        <p>
                            The {project.title} system was engineered to exceed operational requirements within its deployment domain.
                            By leveraging {project.tech.join(", ")}, the architecture guarantees high reliability and fault tolerance.
                        </p>
                        <p>
                            (Detailed architectural specifications, system diagrams, and codebase repositories remain classified or are available upon explicit request.)
                        </p>
                    </div>
                </section>
            </article>

            {/* Mini Footer */}
            <footer className="border-t border-[#1a1a24] bg-[#050508] py-8 text-center mt-12">
                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
                    End of File // Niranj S.
                </p>
            </footer>
        </main>
    );
}
