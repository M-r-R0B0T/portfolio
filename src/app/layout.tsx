import type { Metadata } from "next";
import { Rajdhani, Sora } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niranj S - Robotics Engineer",
  description: "Portfolio of Niranj S, Robotics & Autonomous Systems Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sora.variable} ${rajdhani.variable} font-sans antialiased bg-[#050508] text-gray-200 min-h-screen`}
      >
        <div className="fixed inset-0 z-[-1] bg-grid-white/[0.015] bg-[length:24px_24px]"></div>
        {children}
      </body>
    </html>
  );
}
