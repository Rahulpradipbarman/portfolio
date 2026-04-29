import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-[#121212] min-h-screen text-black dark:text-white font-sans selection:bg-black/30 dark:selection:bg-white/30 transition-colors duration-300">
      <Navbar />
      <div id="home" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Skills />
      <Projects />
      <Workflow />
      <Footer />
      <ThemeToggle />
    </main>
  );
}
