"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Workflow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding the goals, target audience, and setting the technical architecture before writing any code."
    },
    {
      number: "02",
      title: "Design & UI/UX",
      description: "Crafting a stunning visual language using modern design principles and prototyping the user experience."
    },
    {
      number: "03",
      title: "Development",
      description: "Writing clean, optimized, and scalable code using React, Next.js, and other modern web technologies."
    },
    {
      number: "04",
      title: "Launch & Iterate",
      description: "Deploying the site, monitoring performance, optimizing SEO, and iterating based on feedback."
    }
  ];

  return (
    <>
      <section id="workflow" className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#121212] z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              My Workflow
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              How I bring ideas to life, from concept to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-black text-white/5 mb-4 transition-colors duration-500 group-hover:text-white/20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector line for desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[85%] w-full h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-12 md:p-20 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)] relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-white/10" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Let's Collaborate.
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10 relative z-10">
              Have a project in mind or just want to say hi? I'm currently open for new opportunities and exciting projects.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              <h3 className="text-3xl font-bold text-white mb-2">Connect with me</h3>
              <p className="text-zinc-400 mb-8">I'm always open to discussing new projects, creative ideas, or opportunities.</p>

              <div className="space-y-4">
                <a href="mailto:barmanrahul1403@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-white transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Email</p>
                    <p className="text-base text-white group-hover:underline underline-offset-4 break-all">barmanrahul1403@gmail.com</p>
                  </div>
                </a>

                <a href="tel:8967107490" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-white transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Phone</p>
                    <p className="text-base text-white group-hover:underline underline-offset-4">+91 8967107490</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/Rahul-Barman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">LinkedIn</p>
                    <p className="text-base text-white group-hover:underline underline-offset-4 break-all">linkedin.com/in/Rahul-Barman</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
