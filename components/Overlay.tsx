"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
            Rahul Barman.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-zinc-300 drop-shadow-md">
            Full Stack Developer & Engineering Student.
          </p>
          <div className="mt-8 flex gap-6 text-sm md:text-base font-medium">
            <a href="https://github.com/Rahulpradipbarman" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors hover:underline underline-offset-4">GitHub</a>
            <a href="https://linkedin.com/in/Rahul-Barman" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors hover:underline underline-offset-4">LinkedIn</a>
            <a href="mailto:barmanrahul1403@gmail.com" className="text-zinc-400 hover:text-white transition-colors hover:underline underline-offset-4">Email</a>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-xl">
            I build digital <span className="text-zinc-400">experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-xl">
            Bridging design <br />
            <span className="text-zinc-400">and engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
