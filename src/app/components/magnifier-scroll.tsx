"use client";
import React, { useEffect, useRef, useState } from "react";

interface BlurMaskProps {
   src: string;
   radius?: number;  // شعاع دایره
   blur?: number;    // شدت blur
}

export default function BlurMask({
                                    src,
                                    radius = 120,
                                    blur = 5,
                                 }: BlurMaskProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const [coords, setCoords] = useState({ x: 0, y: 0 });
   const [size, setSize] = useState({ width: 0, height: 0 });

   useEffect(() => {
      if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
         setSize({ width: rect.width, height: rect.height });
         setCoords({ x: rect.width / 2, y: rect.height / 2 });
      }
   }, []);

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         if (!containerRef.current) return;
         const rect = containerRef.current.getBoundingClientRect();

         let x = e.clientX - rect.left;
         let y = e.clientY - rect.top;

         if (x < radius) x = radius;
         if (x > rect.width - radius) x = rect.width - radius;
         if (y < radius) y = radius;
         if (y > rect.height - radius) y = rect.height - radius;

         setCoords({ x, y });
      };

      containerRef.current?.addEventListener("mousemove", handleMouseMove);

return () =>
         containerRef.current?.removeEventListener("mousemove", handleMouseMove);
   }, [radius]);

   useEffect(() => {
      const handleScroll = () => {
         if (!containerRef.current) return;
         const rect = containerRef.current.getBoundingClientRect();

         let y = (window.scrollY % rect.height);
         if (y < radius) y = radius;
         if (y > rect.height - radius) y = rect.height - radius;

         setCoords((prev) => ({ ...prev, y }));
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, [radius]);


   return (
      <div
         ref={containerRef}
         className="relative w-full h-[400px] overflow-hidden rounded-xl"
      >
         <img
            src={src}
            alt="blurred"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: `blur(${blur}px)` }}
         />

         <img
            src={src}
            alt="sharp"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-200"
            style={{
               WebkitMaskImage: `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, black 99%, transparent 100%)`,
               WebkitMaskRepeat: "no-repeat",
               WebkitMaskSize: "cover",
               maskImage: `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, black 99%, transparent 100%)`,
               maskRepeat: "no-repeat",
               maskSize: "cover",
            }}
         />
      </div>
   );
}
