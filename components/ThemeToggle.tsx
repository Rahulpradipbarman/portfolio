"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 md:p-4 rounded-full bg-white/10 dark:bg-black/40 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center text-black dark:text-white"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 md:w-6 md:h-6">
        <Sun
          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            isDark ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"
          }`}
        />
      </div>
    </motion.button>
  );
}
