"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Works", href: "#projects" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          // and bottom is below the top of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0,
        x: "-50%"
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 md:bottom-10 left-1/2 z-50"
    >
      <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(item.href);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={cn(
              "relative px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-colors",
              activeSection === item.href.substring(1)
                ? "text-black"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {activeSection === item.href.substring(1) && (
              <motion.div
                layoutId="navbar-active"
                className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
