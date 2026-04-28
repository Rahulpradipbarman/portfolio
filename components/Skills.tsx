"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "education",
    label: "Education",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Bachelor of Engineering (B.E.) in Computer Science</h3>
        <p className="text-xl text-zinc-300">Atria Institute of Technology, Bangalore</p>
        <div className="flex justify-between text-zinc-400 mt-4 border-t border-white/10 pt-4">
          <span>2023 – 2027</span>
          <span className="font-semibold text-white">CGPA: 8.0</span>
        </div>
      </div>
    ),
  },
  {
    id: "frontend",
    label: "Frontend",
    content: (
      <div className="flex flex-wrap gap-3">
        {["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"].map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-200 backdrop-blur-sm text-sm md:text-base hover:bg-white/10 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "tools",
    label: "Frameworks & Tools",
    content: (
      <div className="flex flex-wrap gap-3">
        {["Next.js", "Git", "GitHub", "VS Code"].map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-200 backdrop-blur-sm text-sm md:text-base hover:bg-white/10 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "concepts",
    label: "Concepts",
    content: (
      <div className="flex flex-wrap gap-3">
        {["Responsive Design", "Component-Based Architecture", "REST APIs", "UI Development", "Performance Optimization"].map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-200 backdrop-blur-sm text-sm md:text-base hover:bg-white/10 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "soft-skills",
    label: "Soft Skills",
    content: (
      <div className="flex flex-wrap gap-3">
        {["Problem Solving", "Team Collaboration", "Communication", "Quick Learner"].map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-200 backdrop-blur-sm text-sm md:text-base hover:bg-white/10 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    ),
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#121212] z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 text-center">
          Background & Expertise
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors",
                activeTab === tab.id ? "text-black" : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              tab.id === activeTab && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                    {tab.content}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
