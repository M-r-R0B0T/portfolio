import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Expertise } from "@/components/sections/Expertise";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-hidden selection:bg-white selection:text-black">
      <Navbar />

      {/* Decorative vertical lines */}
      <div className="fixed inset-y-0 left-[5%] md:left-[10%] w-[1px] bg-white/[0.03] z-[1] pointer-events-none hidden lg:block" />
      <div className="fixed inset-y-0 right-[5%] md:right-[10%] w-[1px] bg-white/[0.03] z-[1] pointer-events-none hidden lg:block" />

      <div className="flex-grow z-10 w-full">
        <Hero />
        <Projects />
        <Expertise />
        <Achievements />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
