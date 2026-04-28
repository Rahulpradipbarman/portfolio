export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white tracking-tight">Rahul Barman</h2>
          <p className="text-zinc-400 mt-2 text-sm max-w-sm">
            Building digital experiences with modern web technologies. Constantly learning and exploring the intersection of design and engineering.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-white font-medium mb-3">Get in touch</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:barmanrahul1403@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-sm hover:underline underline-offset-4">
              barmanrahul1403@gmail.com
            </a>
            <a href="tel:8967107490" className="text-zinc-400 hover:text-white transition-colors text-sm hover:underline underline-offset-4">
              +91 8967107490
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Rahulpradipbarman" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm hover:underline underline-offset-4">
              GitHub
            </a>
            <a href="https://linkedin.com/in/Rahul-Barman" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm hover:underline underline-offset-4">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs">
          &copy; {new Date().getFullYear()} Rahul Barman. All rights reserved.
        </p>
        <p className="text-zinc-500 text-xs">
          Designed and built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
