export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-100 dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/5 py-12 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight transition-colors duration-300">Rahul Barman</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm max-w-sm transition-colors duration-300">
            Building digital experiences with modern web technologies. Constantly learning and exploring the intersection of design and engineering.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-black dark:text-white font-medium mb-3 transition-colors duration-300">Get in touch</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:barmanrahul1403@gmail.com" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4">
              barmanrahul1403@gmail.com
            </a>
            <a href="tel:8967107490" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4">
              +91 8967107490
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Rahulpradipbarman" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4">
              GitHub
            </a>
            <a href="https://linkedin.com/in/Rahul-Barman" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
        <p className="text-zinc-500 dark:text-zinc-500 text-xs transition-colors duration-300">
          &copy; {new Date().getFullYear()} Rahul Barman. All rights reserved.
        </p>
        <p className="text-zinc-500 dark:text-zinc-500 text-xs transition-colors duration-300">
          Designed and built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
