import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    title?: string;
    subtitle?: string;
    containerClass?: string;
}

export function Section({ id, title, subtitle, className, containerClass, children, ...props }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-20 relative", className)} {...props}>
            <div className={cn("w-full 2xl:max-w-none mx-auto px-6 md:px-12 lg:px-20", containerClass)}>
                {(title || subtitle) && (
                    <div className="mb-10 md:mb-14">
                        {subtitle && (
                            <p className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-3">
                // {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white uppercase">
                                {title}
                            </h2>
                        )}
                        <div className="h-px w-full bg-gradient-to-r from-sky-900 to-transparent mt-6" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
