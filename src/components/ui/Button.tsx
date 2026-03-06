import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({ className, variant = "primary", size = "md", children, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-heading font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
                {
                    "bg-white text-black hover:bg-sky-500 hover:text-white": variant === "primary",
                    "bg-[#050508] text-white border border-[#2a2a35] hover:border-sky-500 hover:text-sky-400": variant === "secondary",
                    "bg-transparent border border-[#2a2a35] text-gray-300 hover:text-sky-400 hover:border-sky-500": variant === "outline",
                    "bg-transparent text-gray-400 hover:text-sky-400": variant === "ghost",
                    "h-8 px-3 text-xs": size === "sm",
                    "h-10 px-6 text-sm": size === "md",
                    "h-12 px-8 text-base": size === "lg",
                },
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {variant !== "ghost" && (
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            )}
        </button>
    );
}
