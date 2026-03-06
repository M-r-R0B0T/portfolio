import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "relative bg-[#050508] border border-[#1a1a24] overflow-hidden defense-card transition-colors duration-300",
                hoverEffect && "hover:border-[#2a2a35] hover:bg-[#0a0a10]",
                className
            )}
            {...props}
        >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sky-500/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-sky-500/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-sky-500/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sky-500/30" />

            {/* Accent Line Bottom */}
            {hoverEffect && <div className="accent-line" />}

            <div className="relative z-10">{children}</div>
        </div>
    );
}
