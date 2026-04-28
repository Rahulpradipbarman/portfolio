import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30">
      <Navbar />
      <div id="home" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Skills />
      <Projects />
      <Workflow />
      <Footer />
    </main>
  );
}
