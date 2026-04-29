"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 80;

export default function ScrollyCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderFrame = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive Canvas dimensions
    // Set internal resolution based on window but scaled for device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Check if the canvas size matches the element size
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Object-fit: cover logic
    const imgRatio = image.width / image.height;
    const canvasRatio = canvas.width / canvas.height;

    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      xOffset = 0;
      yOffset = (canvas.height - renderHeight) / 2;
    } else {
      // Canvas is taller than image
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
      yOffset = 0;
      xOffset = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the image, scaling down coordinates based on DPR since we scaled context
    ctx.drawImage(
      image,
      xOffset / dpr,
      yOffset / dpr,
      renderWidth / dpr,
      renderHeight / dpr
    );
  };

  useEffect(() => {
    // Preload all images
    const preloadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      // Format number to be three digits (000, 001, ..., 079)
      const formattedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence3/heroImage/Flow_202604290945_${formattedIndex}.jpg`;
      
      img.onload = () => {
        // If it's the first image, render it immediately
        if (i === 0) {
          renderFrame(img);
        }
      };
      preloadedImages.push(img);
    }
    
    imagesRef.current = preloadedImages;
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest);
    if (imagesRef.current[index]) {
      renderFrame(imagesRef.current[index]);
    }
  });

  // Handle window resize to re-render the current frame
  useEffect(() => {
    const handleResize = () => {
      const index = Math.round(frameIndex.get());
      if (imagesRef.current[index]) {
        renderFrame(imagesRef.current[index]);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div className={cn("relative w-full h-[500vh]", className)}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Fallback background color if canvas is not ready */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#121212]/80" />
      </div>
    </div>
  );
}
