"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

export function ArabesqueDivider({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>("path.draw");
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const ctx = gsap.context(() => {
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
        stagger: 0.12,
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`w-full flex justify-center my-3 md:my-6 ${className}`} aria-hidden>
      <svg
        ref={svgRef}
        viewBox="0 0 600 48"
        className="w-[min(520px,80%)] text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path className="draw" d="M 20 24 L 230 24" />
        <path
          className="draw"
          d="M 230 24 C 250 10, 270 10, 280 24 C 290 38, 310 38, 320 24"
        />
        <path className="draw" d="M 300 24 m -4 0 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0" fill="currentColor" />
        <path
          className="draw"
          d="M 320 24 C 330 10, 350 10, 360 24"
        />
        <path className="draw" d="M 370 24 L 580 24" />
        <path className="draw" d="M 270 14 L 270 6 M 330 14 L 330 6" />
        <path className="draw" d="M 270 34 L 270 42 M 330 34 L 330 42" />
      </svg>
    </div>
  );
}
