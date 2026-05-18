"use client";

import React, { useEffect, useState } from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { useTheme } from "next-themes";

const principles = [
  {
    quote:
      "A clever one-liner that confuses the next person — including future me — is a liability, not an asset. I write code that explains itself: clear naming, obvious structure, and comments only where the 'why' isn't obvious from the 'what'.",
    name: "Clarity over cleverness",
    designation: "Code is read more than it's written",
    src: "/philosophy/clarity.png",
  },
  {
    quote:
      "Being full-stack means I don't stop at the API boundary. Slow query? My problem. Janky animation? Also my problem. I follow issues wherever they live — frontend, backend, database — until they're actually resolved, not just handed off.",
    name: "Own the full picture",
    designation: "Every layer of the stack is your responsibility",
    src: "/philosophy/fullstack.png",
  },
  {
    quote:
      "A misaligned button, an off-by-one error, a race condition that only surfaces under load — small things compound into distrust. I sweat the details because users notice the sum of everything, even when they can't name the parts.",
    name: "Precision is non-negotiable",
    designation: "Details aren't polish — they're the product",
    src: "/philosophy/precision.png",
  },
  {
    quote:
      "I hold myself to high standards, but I've learned that a good solution in production teaches you more than a perfect solution on a whiteboard. I aim to get something real in front of people fast, then iterate with precision based on what I learn.",
    name: "Ship, then sharpen",
    designation: "Working software beats perfect software",
    src: "/philosophy/ship.png",
  },
];

export default function Philosophy() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const lightColors = {
    name: "#0a0a0a",
    designation: "#454545",
    testimony: "#171717",
    arrowBackground: "#141414",
    arrowForeground: "#f1f1f7",
    arrowHoverBackground: "#00A6FB",
  };

  const darkColors = {
    name: "#f7f7ff",
    designation: "#e1e1e1",
    testimony: "#f1f1f7",
    arrowBackground: "#0582CA",
    arrowForeground: "#141414",
    arrowHoverBackground: "#f7f7ff",
  };

  return (
    <section id="beliefs" className="py-20 px-6 flex flex-col items-center overflow-hidden">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Philosophy</p>
      <h2 className="text-3xl font-semibold mb-12">What I Believe In</h2>
      {mounted && (
        <CircularTestimonials
          testimonials={principles}
          autoplay={true}
          colors={isDark ? darkColors : lightColors}
          fontSizes={{
            name: "22px",
            designation: "14px",
            quote: "16px",
          }}
        />
      )}
    </section>
  );
}
